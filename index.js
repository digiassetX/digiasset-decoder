require('digiassetx-digibyte-stream-types');

const BitIO=require('bit-io');
const issuance=require('./lib/issuance');
const transfer=require('./lib/transfer');

const lookup=require('digiasset-lookup');







/**
 * Looks for Assets encoded in data
 * @param {TxData|{s3:{accessKeyId:string,secretAccessKey:string}|function,ipfs:?string}} tx
 * @return {Promise<boolean|DigiAssetIssuance|DigiAssetTransference>}
 */
module.exports=async(tx)=>{
    //see if setting up lookup
    if ((tx.s3!==undefined)||(tx.ipfs!==undefined)) {
        if (tx.s3!==undefined) lookup.initS3(tx.s3);
        if (tx.ipfs!==undefined) lookup.initIPFS(tx.ipfs);
        return true;
    }


    //remove any asset data from output in case reprocessing a tx
    for (/** @type {Vout} */let vx of tx.vout) {
        if (vx.assets!==undefined) delete vx.assets;
    }

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
        // noinspection JSCheckFunctionSignatures
        return issuance({
            tx,opcode,version,assetCommandData
        });





    } else if (opcode < 48) {



        /*_____                  __          _____
         |_   _| _ __ _ _ _  ___/ _|___ _ _ / / _ )_  _ _ _ _ _
           | || '_/ _` | ' \(_-<  _/ -_) '_/ /| _ \ || | '_| ' \
           |_||_| \__,_|_||_/__/_| \___|_|/_/ |___/\_,_|_| |_||_|
         */
        // noinspection JSCheckFunctionSignatures
        return transfer({
            tx,opcode,version,assetCommandData
        });




    } else {
        return false;
        //throw new Error("Unknown op code: "+tx.txid);
    }

}