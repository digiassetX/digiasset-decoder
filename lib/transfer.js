// noinspection JSUnfilteredForInLoop

const lookup=require('digiasset-lookup');
const helpers=require('./helpers');
const AssetInput=require('digiasset-input');

/**
 *
 * @param {{
 *     tx:                  TxData,
 *     opcode:              int,
 *     version:             int,
 *     assetCommandData:    BitIO
 * }}inputs
 * @return {Promise<DigiAssetTransference|boolean>}
 */
module.exports=async(inputs)=> {
    let {tx, opcode, version, assetCommandData} = inputs;

    try {
        const mode = (opcode >= 0x20) ? 2 : 1;    //1=Transfer    2=Burn
        const opCodePart = opcode % 16;
        if (opCodePart !== 5) throw new Error("Opcode " + opcode + " found in " + tx.txid);

        //check if any assets on input
        let foundAssets=false;
        for (let vx of tx.vin) {
            if (vx.assets!==undefined) {
                foundAssets=true;
                break;
            }
        }
        if (foundAssets===false) return false;//not actually an asset transfer

        //create a list of asset changes.  start by subtracting off all inputs
        /** @type {Object<Object<bigint>>} */
        let type = (mode === 2) ? 'Burn' : 'Transfer';
        let changes = helpers.initializeChanges(tx); //assetId: address: change

        //compute where assets should be sent to
        let erroredOut = false;
        let inputs = new AssetInput(tx);
        while (assetCommandData.remaining !== 0) {
            //read the instruction
            let skip = assetCommandData.getInt(1);
            let range = assetCommandData.getInt(1);
            let percent = assetCommandData.getInt(1);
            let output = range ? assetCommandData.getInt(13) : assetCommandData.getInt(5);
            let amount = percent ? BigInt(inputs.getCount(assetCommandData.getInt(8))) : assetCommandData.getFixedPrecision();
            let totalAmount = range ? (BigInt(output + 1) * amount) : amount;

            //there was a error in legacy code that a 0 amount causes the input to get wasted and go to change
            if ((version < 3) && (tx.vin[0].assets === undefined)) {
                break;
            }

            //apply the assets to the outputs
            let assetId,decimals,cid;
            try {
                decimals = inputs.getDecimals();
                cid=inputs.getCID();
                assetId = inputs.getAssetId(totalAmount); //removes count from input
            } catch (e) {
                //error so move all outputs to last output

                //clear all output assets
                for (let vout of tx.vout) delete vout.assets;

                //reinitialize changes
                changes = helpers.initializeChanges(tx);

                //put all input assets in last tx
                let lastOut = tx.vout.length - 1;
                for (/** @type {Vin} */let vx of tx.vin) {
                    if (vx.assets !== undefined) {
                        for (let {assetId, amount, decimals} of vx.assets) {
                            helpers.addToVout(tx, changes, lastOut, assetId, BigInt(amount), decimals,cid);
                        }
                    }
                }

                //stop processing
                erroredOut = true;
                break;
            }
            if ((assetId !== "") && (totalAmount !== 0n)) {
                if ((mode === 2) && (!range) && (output === 31)) {
                    //burn asset
                    changes[assetId][""] = changes[assetId][""] || 0n;            //make sure address is initialised
                    changes[assetId][""] += amount;                                //mark that asset has received
                } else {
                    let startI = range ? 0 : output;
                    for (let vout = startI; vout <= output; vout++) {
                        helpers.addToVout(tx, changes, vout, assetId, amount, decimals,cid);
                    }
                }
            }

            //skip if called for
            if (skip) inputs.skip();
        }

        //see if any change
        if (!erroredOut) {
            //handle change
            let change = inputs.getChange();
            if (change.length > 0) {
                //find last output that has any funds
                let lastOutput = tx.vout.length - 1;

                //deposit change to output
                for (let {assetId, amount, decimals, cid} of change) {
                    helpers.addToVout(tx, changes, lastOutput, assetId, amount, decimals, cid);
                }
            }
        }

        //verify rules where followed
        for (let assetId in changes) {
            let assetRules = await lookup.getRules(assetId);

            //mark V3 assets/transfers if there are rules or not
            let areRule=(assetRules!==undefined);
            if ((version>=3)||(areRule)) {
                for (let vout of tx.vout) {
                    if (vout.assets !== undefined) {
                        for (let assetOut of vout.assets) {
                            if (assetOut.assetId === assetId) assetOut.rules = areRule;
                        }
                    }
                }
            }

            //don't bother processing the rest if there are no rules
            if (!areRule) continue;

            //check if any assets actually moved(rules don't apply to consolidation transactions)
            let consolidation=true;
            for (let address in changes[assetId]) {
                if (changes[assetId][address]>0n) consolidation=false;
            }
            if (consolidation) continue;

            //interpret rules if any to make sure they where followed
            let rulePassed=false;
            let ruleError;
            for (let rule of assetRules) {
                try {
                    await helpers.verifyRule(rule,tx,changes,assetId);//test the transaction against rule
                    rulePassed=true;                                //if no errors where thrown then it passed
                    break;                                          //only needs to pass 1 set so ignore rest
                } catch (e) {
                    ruleError=e;                                    //record the error that failed
                }
            }
            if (!rulePassed) throw ruleError;                       //if it didn't pass then throw the last error we got


        }



        //switch bigints from amount back to string in tx
        for (let vout of tx.vout) {
            if (vout.assets !== undefined) {
                for (let asset of vout.assets) asset.amount = asset.amount.toString();
            }
        }

        return {
            type,
            changes,
            version
        };


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