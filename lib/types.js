/**
 * first key is assetId, second is address
 * @typedef {Object<Object<BigInt>>} Changes
 */


/**
 * @typedef {{
 *      type:               ?"Issuance"|"Accidental Burn",
 *      assetId:            ?string,
 *      issuer:             ?string,
 *      locked:             ?boolean,
 *      aggregation:        ?int,
 *      divisibility:       ?int,
 *      supply:             ?BigInt,
 *      metadataHash:       ?string,
 *      changes:            Changes,
 *      rules:              ?AssetRules,
 *      newRules:           boolean,
 *      version:            int,
 *      kyc:                ?KycState
 * }} DigiAssetIssuance
 */

/**
 * @typedef {{
 *      type:               "Burn"|"Transfer"|"Accidental Burn",
 *      changes:            Changes,
 *      version:            int
 * }} DigiAssetTransference
 */