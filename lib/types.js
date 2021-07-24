/**
 * first key is assetId, second is address
 * @typedef {Object<Object<BigInt>>} Changes
 */


/**
 * @typedef {{
 *      type:               "issuance"|"accidental burn"?,
 *      assetId:            string?,
 *      issuer:             string?,
 *      locked:             boolean?,
 *      aggregation:        int?,
 *      divisibility:       int?,
 *      supply:             BigInt?,
 *      metadataHash:       string?,
 *      changes:            Changes,
 *      rules:              AssetRules?,
 *      newRules:           boolean,
 *      version:            int,
 *      kyc:                KycState?
 * }} DigiAssetIssuance
 */

/**
 * @typedef {{
 *      type:               "burn"|"transfer"|"accidental burn",
 *      changes:            Changes,
 *      version:            int
 * }} DigiAssetTransference
 */