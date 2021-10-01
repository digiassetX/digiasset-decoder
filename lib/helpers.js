// noinspection JSUnfilteredForInLoop

const lookup=require('digiasset-lookup');

/**
 * Check if object is empty
 * @param {{}}  object
 * @return {boolean}
 */
module.exports.objectEmpty=(object)=>{
    return (Object.keys(object).length===0);
}

/**
 * Finds if a specific address signed the transaction
 * @param {TxData}  tx
 * @param {string}  signer
 * @return {boolean}
 */
module.exports.didSign=didSign=(tx,signer)=>{
    for (let {scriptPubKey} of tx.vin) {
        if (scriptPubKey.addresses===undefined) continue;
        let address = scriptPubKey.addresses[0];
        if (address===signer) return true;
    }
    return false;
}

/**
 * Finds if a funds sent to a specific address
 * @param {TxData}  tx
 * @param {string}  address
 * @param {BigInt}  amount
 * @return {boolean}
 */
module.exports.didSend=didSend=(tx,address,amount)=>{
    for (let {value,scriptPubKey} of tx.vout) {
        if (scriptPubKey.addresses===undefined) continue;
        let toAddress = scriptPubKey.addresses[0];
        if (toAddress!==address) continue;
        if (BigInt(value)>=amount) return true;
    }
    return false;
}


/**
 * Adds an asset to vout
 * @param {TxData}  tx
 * @param {Changes} changes
 * @param {int}     vout
 * @param {string}  assetId
 * @param {BigInt}  amount
 * @param {int}     decimals
 * @param {string}  cid
 */
module.exports.addToVout=(tx,changes,   vout,assetId,amount,decimals,cid)=>{
    //check if sent to an output with no addresses
    if (tx.vout[vout].scriptPubKey.addresses===undefined) {
        //assets where burnt
        changes[assetId][""] = changes[assetId][""] || 0n;            //make sure address is initialised
        changes[assetId][""] += amount;                                //mark that asset has received
        return;
    }

    //make sure assets are assigned to output
    if (tx.vout[vout].assets === undefined) tx.vout[vout].assets = [];

    //add to change list
    let address = tx.vout[vout].scriptPubKey.addresses.join('_');        //get output address
    changes[assetId][address] = changes[assetId][address] || 0n;            //make sure address is initialised
    changes[assetId][address] += amount;                                //mark that asset has received

    //add to existing asset if any
    let found = false;
    if (assetId[1]==="a") {
        for (/** @type {AssetCount} */let asset of tx.vout[vout].assets) {
            if (asset.assetId === assetId) {
                asset.amount += amount;
                found = true;
                break;
            }
        }
    }

    //create asset if none
    if (!found) {
        let assetOutData={assetId,amount,decimals};
        if (assetId[1]!=="a") assetOutData.cid=cid;

        tx.vout[vout].assets.push(assetOutData);
    }
}

/**
 * Computes the initial state of changes variable
 * @param {TxData}  tx
 * @return {Changes}
 */
module.exports.initializeChanges=(tx)=>{
    let changes={};
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
    return changes;
}


/**
 *
 * @param {AssetRules} assetRules
 * @param {TxData} tx
 * @param {Changes} changes
 * @param {string}  assetId
 */
module.exports.verifyRule=async(assetRules,tx,changes,assetId)=>{
    if (assetRules.signers!==undefined) {
        let weight=0;
        for (let signerAddress in assetRules.signers.list) {
            if (didSign(tx,signerAddress)) {
                weight+=assetRules.signers.list[signerAddress];
            }  //was signed so add signers weight to current total
        }
        if (weight<assetRules.signers.required) throw "Required signer not present";  //User just burned there asset
    }
    if (assetRules.royalties!==undefined) {
        //get the exchange rate
        let exchangeRate=100000000n;
        if (assetRules.currency!==undefined) {
            exchangeRate=BigInt(Math.floor(await lookup.getExchangeRate(assetRules.currency,tx.height)));
        }

        //get the number of new recipients(assume 1 is change if more then 1 output)
        let count=-1;
        for (let {assets} of tx.vout) {
            if (assets===undefined) continue;
            for (let {assetId:id} of assets) {
                if (assetId===id) {
                    count++;
                    break;
                }
            }
        }
        if (count<1) count=1;

        //check that royalty was paid
        for (let address in assetRules.royalties) {
            let minAccepted=(BigInt(count)*assetRules.royalties[address]*exchangeRate/100000000n)-1n;//in case of rounding error minimum accepted is 1 sat lower
            if (!didSend(tx,address,minAccepted)) throw "Required royalty not present.";  //User just burned there asset
        }
    }
    if (assetRules.kyc!==undefined) {
        let isBan=((assetRules.kyc===true)||(assetRules.kyc.ban!==undefined));
        let list=(assetRules.kyc===true)?[]:assetRules.kyc.ban||assetRules.kyc.allow;
        for (let address in changes[assetId]) {
            /** @type {KycState} */let kyc=await lookup.getKYC(address);
            if (kyc===undefined) throw "Sent to non kyc address";  //User just burned there asset
            if ((kyc.revoked!==undefined)&&(tx.height>=kyc.revoked))  throw "Sent to non kyc address";  //User just burned there asset
            if (isBan) {
                //if country is on list then illegal
                if (list.indexOf(kyc.country)!==-1) throw "Sent to not allowed country";  //User just burned there asset
            } else {
                //if country not on list then illegal
                if (list.indexOf(kyc.country)===-1) throw "Sent to not allowed country";  //User just burned there asset
            }
        }
    }
    if (assetRules.vote!==undefined) {
        //see if asset has expired
        if ((tx.height>assetRules.vote.cutoff)&&(assetRules.vote.cutoff!==0)) throw "Sent after expiry.  Asset no longer exists";

        //see if allowed to send to address
        if (!assetRules.vote.movable) { //if movable then always a yes so check if not movable
            //make a list of allowed addresses
            let allowed={};
            for (let {address} of assetRules.vote.options) allowed[address]=true;

            for (let address in changes[assetId]) {
                if (changes[assetId][address]>0n) {
                    //assets where sent to address make sure it is on list of votes
                    if (allowed[address]===undefined) throw "Sent to non vote address";  //User just burned there asset
                }
            }
        }
    }
    if (assetRules.expires!==undefined) {
        //see if asset has expired
        if (tx.height>assetRules.expires) throw "Sent after expiry.  Asset no longer exists";
    }
    if (assetRules.deflate!==undefined) {
        //count how many assets have been burned
        let burns=0n;
        for (let address in changes[assetId]) burns-=changes[assetId][address];
        if (burns<assetRules.deflate) throw "Not enough assets burned for deflate rule";
    }
}