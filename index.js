const AssetInput=require('digiasset-input');
const BitIO=require('bit-io');
const crypto=require('crypto');
const base58check=require('base58check');

/**
 * @type {{
 *     assetId:     string,
 *     amount:      string|bigint
 * }}
 */
let AssetCount;

/**
 * @type {{
 *     asm:         string,
 *     hex:         string,
 *     reqSigs:     int,
 *     type:        string,
 *     addresses:   array<string>
 * }}
 */
let ScriptPubKey;

/**
 * @type {{
 *     sequence:    int,
 *     value:       string|bigint,
 *
 *     coinbase:    string?,
 *
 *     txid:        string,
 *     vout:        int,
 *     source:      int,
 *     scriptSig:   {asm:string,hex:string},
 *     scriptPubKey:ScriptPubKey?,
 *     assets:      array<AssetCount>?
 * }}
 */
let Vin;

/**
 * @type {{
 *     value:       string|bigint,
 *     vout:        int,
 *     spent:       int?,
 *     scriptPubKey:ScriptPubKey,
 *     assets:      array<AssetCount>?
 * }}
 */
let Vout;

/**
 * key=txid
 * @type {{
 *     txid:       string,
 *     vin:        array<Vin>,
 *     vout:       array<Vout>,
 *     blockhash:  string,
 *     height:     int,
 *     time:       int
 * }}
 */
let TxData;




const addToVout=(tx,changes,   vout,assetId,amount,decimals)=>{
    //make sure assets are assigned to output
    if (tx.vout[vout].assets === undefined) tx.vout[vout].assets = [];

    //add to change list
    let address = tx.vout[vout].scriptPubKey.addresses.join('_');        //get output address
    changes[assetId][address] = changes[assetId][address] || 0n;            //make sure address is initialised
    changes[assetId][address] += amount;                                //mark that asset has received

    //add to existing asset if any
    let found = false;
    for (/** @type {AssetCount} */let asset of tx.vout[vout].assets) {
        if (asset.assetId === assetId) {
            asset.amount += amount;
            found = true;
            break;
        }
    }

    //create asset if none
    if (!found) {
        tx.vout[vout].assets.push({
            assetId:    assetId,
            amount:     amount,
            decimals:   decimals
        });
    }
}




/**
 * Looks for Assets encoded in data
 * @param {TxData} tx
 */
module.exports=(tx)=>{
    //Some times coinbase transactions look like assets but aren't so make sure not a coinbase transaction
    for (/** @type {Vin} */let vx of tx.vin) {
        if (vx.coinbase !== undefined) return false;
    }

    //find the encoded data
    /** @type {BitIO} */let assetCommandData;
    for (/** @type {Vout} */let vx of tx.vout) {
        if (vx.scriptPubKey.addresses===undefined) {
            let bits=BitIO.fromBuffer(Buffer.from(vx.scriptPubKey.hex,'hex'));
            if (bits.getBitcoin()!=='OP_RETURN') return false;
            assetCommandData=BitIO.fromBuffer(bits.getBitcoin());
            break;
        }
    }

    //make sure it is an asset
    if (assetCommandData.getHex(4)!=='4441') return false;

    //get version number
    // noinspection JSUnusedLocalSymbols
    const version = assetCommandData.getInt(8);

    //get opcode
    const opcode = assetCommandData.getInt(8);
    if (opcode === 0) throw new Error("Invalid Op Code: "+tx.txid);
    if (opcode < 16) {







        /*___
         |_ _|_______  _ __ _ _ _  __ ___
          | |(_-<_-< || / _` | ' \/ _/ -_)
         |___/__/__/\_,_\__,_|_||_\__\___|
         */

        if (opcode!==1) throw new Error("Check how to handle opcode: "+tx.txid);

        //for now assuming opcode 1
        const torrent=assetCommandData.getBuffer(20);
        const metadata=assetCommandData.getBuffer(32);
        let amountCreated=BigInt(assetCommandData.getFixedPrecision());

        //get issuance flags
        const transferStart=assetCommandData.pointer;
        assetCommandData.pointer=assetCommandData.length-8; //set to 8th last bit
        const issuanceFlags=assetCommandData.getInt(8);
        const divisibility=issuanceFlags>>>5;
        const locked=((issuanceFlags&0x10)>0);
        const aggregation=(issuanceFlags&0x0c)>>>2;
        assetCommandData.pointer=transferStart;         //put pointer back

        //fix amount if version 1
        if (version===1) {
            amountCreated/=BigInt(Math.pow(10,divisibility));
        }
        let amountLeft=amountCreated;

        //calculate assetId
        const header=(['2e37','2e6b','2e4e',false,'20ce','2102','20e4',false])[(issuanceFlags&0x1c)>>>2];   //gets the assetId header based on lock status and aggregation
        const hashData=locked?tx.vin[0].txid+":"+tx.vin[0].vout:Buffer.from(tx.vin[0].scriptPubKey.hex,'hex');     //if locked use txid and vout of first input, if unlocked use pubkey of first input
        const hash256 = crypto.createHash('sha256').update(hashData).digest();                      //do sha256
        const hash160 = crypto.createHash('ripemd160').update(hash256).digest('hex');       //do ripemd160
        const assetId=base58check.encode(hash160+'000'+divisibility,header,'hex');              //convert to base58, add header and security check

        //read transfer instructions
        let changes={};
        changes[assetId]={};
        while (assetCommandData.remaining>8) {
            //read the instruction
            // noinspection JSUnusedLocalSymbols
            let skip = assetCommandData.getInt(1);    //not used for issuance
            let range = assetCommandData.getInt(1);
            let percent = assetCommandData.getInt(1);
            let output = range ? assetCommandData.getInt(13) : assetCommandData.getInt(5);
            let amount = percent ? amountCreated*BigInt(assetCommandData.getInt(8))/100n : BigInt(assetCommandData.getFixedPrecision());
            amountLeft-=range ? (BigInt(output+1)*amount) : amount;
            if (amountLeft<0n) throw new Error("Not enough assets created");

            //assign assets to outputs
            let startI=range?0:output;                                                                  //if only 1 output range starts at output otherwise 0
            for (let vout=startI;vout<=output;vout++) {                                                 //go through each output in range
                addToVout(tx,changes,   vout,assetId,amount,divisibility);
            }
        }

        //handle change
        if (amountLeft>0n) {
            const vout=tx.vout.length-1;                                                        //get index of last vout
            addToVout(tx,changes,   vout,assetId,amountLeft,divisibility);
        }

        //switch bigints from amount back to string in tx and add asset id and decimals
        for (let vout of tx.vout) {
            if (vout.assets!==undefined) {
                for (let asset of vout.assets) {
                    asset.amount=asset.amount.toString();
                }
            }
        }

        //asset data
        return {
            type:       'issuance',
            assetId:    assetId,
            issuer:     tx.vin[0].scriptPubKey.addresses[0],
            locked:     locked,
            aggregation:aggregation,
            divisibility:divisibility,
            supply:     amountCreated,
            torrent:    torrent.toString('hex'),
            metadataHash:metadata.toString('hex'),
            changes:    changes
        }











    } else if (opcode < 48) {







        /*_____                  __          _____
         |_   _| _ __ _ _ _  ___/ _|___ _ _ / / _ )_  _ _ _ _ _
           | || '_/ _` | ' \(_-<  _/ -_) '_/ /| _ \ || | '_| ' \
           |_||_| \__,_|_||_/__/_| \___|_|/_/ |___/\_,_|_| |_||_|
         */

        const mode=(opcode>=0x20)?2:1;    //1=Transfer    2=Burn
        const opCodePart=opcode%16;
        if (opCodePart!==5) throw new Error("Opcode "+opcode+" found in "+tx.txid);

        //create a list of asset changes.  start by subtracting off all inputs
        /** @type {Object<Object<bigint>>} */
        let type=(mode===2)?'burn':'transfer';
        let changes={}; //assetId: address: change
        for (/** @type {Vin} */let vx of tx.vin) {
            if (vx.assets!==undefined) {
                for (/** @type {AssetCount} */let asset of vx.assets) {
                    //make sure each new asset Id included in vars
                    if (changes[asset.assetId]===undefined) {
                        changes[asset.assetId]={};
                    }

                    //update changes
                    let address=vx.scriptPubKey.addresses.join('_');        //get input address
                    changes[asset.assetId][address]=changes[asset.assetId][address]||0n;//make sure address is initialised
                    changes[asset.assetId][address]-=BigInt(asset.amount);      //mark asset as spent since all must be

                }
            }
        }

        //compute where assets should be sent to
        let inputs=new AssetInput(tx);
        while (assetCommandData.remaining!==0) {
            //read the instruction
            let skip = assetCommandData.getInt(1);
            let range = assetCommandData.getInt(1);
            let percent = assetCommandData.getInt(1);
            let output = range ? assetCommandData.getInt(13) : assetCommandData.getInt(5);
            let amount = BigInt(percent ? inputs.getCount(assetCommandData.getInt(8)) : assetCommandData.getFixedPrecision());
            let totalAmount=range ? (BigInt(output+1)*amount) : amount;

            //there was a error in legacy code that a 0 amount causes the input to get wasted and go to change
            if ((amount===0n)&&(version<3)) {
                break;
            }

            //apply the assets to the outputs
            let decimals=inputs.getDecimals();
            let assetId=inputs.getAssetId(totalAmount); //removes count from input
            if (assetId!=="") {
                if ((mode === 2) && (!range) && (output === 31)) {
                    //burn asset
                    changes[assetId][""] = changes[assetId][""] || 0n;            //make sure address is initialised
                    changes[assetId][""] += amount;                                //mark that asset has received
                } else {
                    let startI = range ? 0 : output;
                    for (let vout = startI; vout <= output; vout++) {
                        addToVout(tx, changes, vout, assetId, amount, decimals);
                    }
                }
            }

            //skip if called for
            if (skip) inputs.skip();
        }

        //see if any change
        let change=inputs.getChange();
        if (change.length>0) {
            let lastOutput=tx.vout.length-1;
            for (let {assetId,amount,decimals} of change) {
                addToVout(tx,changes,   lastOutput,assetId,amount,decimals);
            }
        }

        //switch bigints from amount back to string in tx
        for (let vout of tx.vout) {
            if (vout.assets!==undefined) {
                for (let asset of vout.assets) asset.amount=asset.amount.toString();
            }
        }

        return {
            type:   type,
            changes: changes
        };







    } else {

        throw new Error("Unknown op code: "+tx.txid);
    }

}