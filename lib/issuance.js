const lookup=require('digiasset-lookup');
const crypto=require('crypto');
const base58check=require('base58check');
const helpers=require('./helpers');
const IPFS=require('ipfs-simple');
const constants=require('./constants');
const v3constants=require('digiasset_v3_constants');

/**
 *
 * @param {{
 *     tx:                  TxData,
 *     opcode:              int,
 *     version:             int,
 *     assetCommandData:    BitIO
 * }}inputs
 * @return {Promise<DigiAssetIssuance|boolean>}
 */
module.exports=async(inputs)=>{
    let {tx,opcode,version,assetCommandData}=inputs;

    try {
        //if version<3 & opcode 1 or 2 read the sha1 data and throw it out since useless
        if ((version<3)&&(opcode < 3)) assetCommandData.getBuffer(20);    //get the sha1 data if present.  removed in v3 as it is useless

        //get meta data hash if it exists
        let metadata;
        if ((opcode === 1)||(opcode === 3)||(opcode === 4)) metadata=assetCommandData.getBuffer(32);
        if (opcode === 2) metadata = Buffer.from(tx.vout[0].scriptPubKey.asm.split(" ")[2].substr(2),'hex');    //get metadata from multisig

        //get cid where vote data would be
        const cid = (metadata!==undefined)?IPFS.hashToCid(metadata.toString('hex')):undefined;

        //get amount of data to create
        let amountCreated = assetCommandData.getFixedPrecision();
        if (amountCreated>18014398509481983) throw "out of range";

        //get rules if any
        /** @type {AssetRules} */let rules={};
        if ((opcode===3)||(opcode===4)) {
            rules.rewritable=(opcode===3);                      //see if rules are rewritable
            let ruleCode,output;
            do {
                ruleCode=assetCommandData.getInt(4);     //get rule opcode
                switch (ruleCode) {




                    //end
                    case 15:
                        break;




                    //signers
                    case 0:
                        //initialize signer object
                        rules.signers={
                            required:   parseInt(assetCommandData.getFixedPrecision().toString()),
                            list:       {}
                        };

                        let notDone=true;
                        while (notDone) {
                            //see if command is range or specific
                            let isRange = (assetCommandData.getBits(1) === "1");

                            if (isRange) {


                                //range
                                //insert a 0 after the current bit
                                assetCommandData.insertBits("0");
                                assetCommandData.pointer-=1;                            //move back 1 bit since this 0 is part of output number
                                let start=assetCommandData.getFixedPrecision();
                                let length=assetCommandData.getFixedPrecision();
                                for (let outputNum=start;outputNum<start+length;outputNum++) {
                                    let address=tx.vout[outputNum].scriptPubKey.addresses[0];
                                    let value=parseInt(tx.vout[outputNum].value);
                                    rules.signers.list[address]=value-600;
                                }
                                notDone=false;


                            } else {


                                //per output
                                assetCommandData.pointer-=1;                            //move back 1 bit since this 0 is part of output number
                                let temp=assetCommandData.getFixedPrecision();
                                if (temp===0n) {
                                    notDone=false;
                                } else {
                                    let outputNum=temp-1n;
                                    let weight=parseInt(assetCommandData.getFixedPrecision().toString());
                                    let address=tx.vout[outputNum].scriptPubKey.addresses[0];
                                    rules.signers.list[address]=weight;
                                }


                            }
                        }
                        break;





                    //royalties
                    case 9:
                        if (assetCommandData.getBits(1)==="1") {

                            //standard currency
                            rules.currency=v3constants.exchangeRate[assetCommandData.getInt(7)];

                        } else {

                            //non standard
                            assetCommandData.movePointer(-1);
                            output=assetCommandData.getFixedPrecision();
                            rules.currency={
                                address: tx.vout[output].scriptPubKey.addresses[0],
                                index:  parseInt(tx.vout[output].value)-600,
                                name:   "?"
                            }

                        }

                    // noinspection FallThroughInSwitchStatementJS
                    case 1:
                        rules.royalties={};
                        let start=assetCommandData.getFixedPrecision();
                        let length=assetCommandData.getFixedPrecision();
                        for (let outputNum=start;outputNum<start+length;outputNum++) {
                            let address=tx.vout[outputNum].scriptPubKey.addresses[0];
                            rules.royalties[address]=BigInt(tx.vout[outputNum].value);
                        }
                        break;





                    //kyc
                    case 2:
                    case 3:
                        let countryList=[];
                        let value;
                        // noinspection JSUnusedAssignment
                        while (value!=="...") {
                            value=assetCommandData.get3B40(3);
                            if (value!=="...") countryList.push(value.toUpperCase());
                        }
                        if ((ruleCode===3)&&(countryList.length===0)) {
                            rules.kyc=true;
                        } else {
                            rules.kyc={};
                            rules.kyc[(ruleCode===2)?"allow":"ban"]=countryList;
                        }
                        break;




                    //vote/expires
                    case 4:
                        if (rules.rewritable===true) throw "Invalid Rule Detected: Votes can not be part of rewritable rule asset";
                        let movable=(assetCommandData.getBits(1)==="1");
                        let voteLength=assetCommandData.getInt(7);
                        let cutoff=assetCommandData.getFixedPrecision();
                        let voteStart=parseInt(assetCommandData.getFixedPrecision().toString())-1;
                        if ((voteLength===0)&&(cutoff!==0n)) {

                            //expires
                            rules.expires=cutoff;

                        } else {
                            //vote
                            rules.vote={
                                options: [],
                                movable,
                                cutoff: (cutoff===0n)?undefined:cutoff
                            };

                            //get address list
                            if (voteStart===-1) {
                                //default list(recommended as counts are tracked and garbage auto collected)
                                for (let i=0;i<voteLength;i++) rules.vote.options.push({
                                    address:    constants.voteAddresses[i],
                                    label:      "get from ipfs://" + cid
                                }); //default in case ipfs lookup fails
                            } else {
                                //from outputs
                                for (let outputNum = voteStart; outputNum < voteStart + voteLength; outputNum++) {
                                    let address = tx.vout[outputNum].scriptPubKey.addresses[0];
                                    rules.vote.options.push({
                                        address,
                                        label:      "get from ipfs://" + cid
                                    }); //default in case ipfs lookup fails
                                }
                            }

                            //see if we can lookup the vote descriptions
                            let voteOptions = await lookup.getVotes(cid);
                            for (let index in voteOptions) {
                                // noinspection JSUnfilteredForInLoop
                                let {address,label}=voteOptions[index];

                                // noinspection JSUnfilteredForInLoop
                                if (rules.vote.options[index].address===address) {                  //double check ipfs vote address matches chain data
                                    // noinspection JSUnfilteredForInLoop
                                    rules.vote.options[index].label = label;                        //overwrite default with description on ipfs
                                }
                            }
                        }
                        break;




                    //deflate
                    case 5:
                        rules.deflate=assetCommandData.getFixedPrecision();

                }

            } while (ruleCode!==15);

            //if not byte aligned move to start of next byte
            let pointer=assetCommandData.pointer;
            let extraBits=pointer%8;
            if (extraBits!==0) assetCommandData.pointer=pointer+8-extraBits;
        }


        //get issuance flags
        const transferStart = assetCommandData.pointer;
        if (assetCommandData.length-8<transferStart) return false;  //data missing
        assetCommandData.pointer = assetCommandData.length - 8; //set to 8th last bit
        const issuanceFlags = assetCommandData.getInt(8);
        const divisibility = issuanceFlags >>> 5;
        const locked = ((issuanceFlags & 0x10) > 0);
        /** @type {int}*/const aggregation = (issuanceFlags & 0x0c) >>> 2;
        assetCommandData.pointer = transferStart;         //put pointer back

        //special cases for locked assets
        if ((locked)&&(amountCreated===0n)) throw "No assets possible to create";
        if ((locked)&&(rules!==undefined)) {
            rules.rewritable=false; //can't rewrite rules if locked
        }

        //fix amount if version 1
        if (version === 1) {
            amountCreated /= BigInt(Math.pow(10, divisibility));
        }
        let amountLeft = amountCreated;

        //calculate assetId
        const header = (['2e37', '2e6b', '2e4e', false, '20ce', '2102', '20e4', false])[(issuanceFlags & 0x1c) >>> 2];   //gets the assetId header based on lock status and aggregation
        const hashData = locked ? tx.vin[0].txid + ":" + tx.vin[0].vout : Buffer.from(tx.vin[0].scriptPubKey.hex, 'hex');     //if locked use txid and vout of first input, if unlocked use pubkey of first input
        const hash256 = crypto.createHash('sha256').update(hashData).digest();                      //do sha256
        const hash160 = crypto.createHash('ripemd160').update(hash256).digest('hex');       //do ripemd160
        /**@type {string}*/const assetId = base58check.encode(hash160 + '000' + divisibility, header, 'hex');              //convert to base58, add header and security check

        //read transfer instructions
        let changes = helpers.initializeChanges(tx);
        changes[assetId] = {};
        try {
            while (assetCommandData.remaining > 8) {
                //read the instruction
                // noinspection JSUnusedLocalSymbols
                let skip = assetCommandData.getInt(1);    //not used for issuance
                let range = assetCommandData.getInt(1);
                let percent = assetCommandData.getInt(1);
                let output = range ? assetCommandData.getInt(13) : assetCommandData.getInt(5);
                let amount = percent ? amountCreated * BigInt(assetCommandData.getInt(8)) / 100n : assetCommandData.getFixedPrecision();
                amountLeft -= range ? (BigInt(output + 1) * amount) : amount;
                if (amountLeft < 0n) throw new Error("Not enough assets created");

                //assign assets to outputs
                let startI = range ? 0 : output;                                                                  //if only 1 output range starts at output otherwise 0
                for (let vout = startI; vout <= output; vout++) {                                                 //go through each output in range
                    helpers.addToVout(tx, changes, vout, assetId, amount, divisibility,cid);
                }
            }

            //handle change
            if (amountLeft > 0n) {
                const vout = tx.vout.length - 1;                                                        //get index of last vout
                helpers.addToVout(tx, changes, vout, assetId, amountLeft, divisibility,cid);
            }
        } catch (_) {
            //error so move all outputs to last output

            //reset changes
            changes[assetId] = {};

            //clear all output assets
            for (let vout of tx.vout) delete vout.assets;

            //add all assets to last output
            let lastOut=tx.vout.length-1;
            helpers.addToVout(tx, changes, lastOut, assetId, amountCreated, divisibility,cid);
        }

        //if v3 and unlocked check for conflicting assets
        let newRules=(!helpers.objectEmpty(rules)); //if there are rules then this is true for now.  will be set false if no rules are not allowed
        if ((!locked)&&(version>=3)) {

            //get past data
            /** @type {AssetRules}*/let pastRules;
            try {
                pastRules=(await lookup.getRules(assetId)).pop();
            } catch (e) {
                pastRules=undefined; //not a reissuance
            }

            //check if any past rules
            if (pastRules!==undefined) {
                /*
                    past rules exists possible options:
                        pastData.rules.rewritable===true & rules!={}
                            rules=rules

                        pastData.rules.rewritable===true & rules={}
                            rules=pastData.rules

                        pastData.rules.rewritable===false
                            rules=pastData.rules
                 */
                if ((pastRules.rewritable===true)&&(!helpers.objectEmpty(rules))) {
                    //rules to be chanced to new rules(no code needed)

                } else {
                    //rules to stay same as they use to be
                    newRules=false;
                    rules=pastRules
                }
            }
        }

        //switch bigints from amount back to string in tx and add asset id and decimals
        const areRules=(!helpers.objectEmpty(rules));
        for (let vout of tx.vout) {
            if (vout.assets !== undefined) {
                for (let asset of vout.assets) {
                    asset.amount = asset.amount.toString();
                    if (version>=3) asset.rules = areRules;
                }
            }
        }

        //lookup KYC state
        let issuer=tx.vin[0].scriptPubKey.addresses[0];
        let kyc=await lookup.getKYC(issuer);
        if ((kyc!==undefined)&&(kyc.revoked!==undefined)&&(tx.height>kyc.revoked)) kyc=undefined;   //if revoked then don't set kyc

        //asset data
        return {
            type: 'Issuance',
            assetId,
            issuer,
            locked,
            aggregation,
            divisibility,
            supply: amountCreated,
            metadataHash: (metadata===undefined)?undefined:metadata.toString('hex'),
            changes,
            rules:  areRules?rules:undefined,
            newRules,
            version,
            kyc
        }
    } catch (_) {

        //failed remove any assets from vout
        for (let vout of tx.vout) {
            delete vout.assets;
        }

        //see if there where any input assets
        let changes = helpers.initializeChanges(tx);
        return (Object.keys(changes).length===0)?false:{type: 'Accidental Burn',changes};
    }
}