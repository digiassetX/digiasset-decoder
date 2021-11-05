/* ****************************************************************
 * test/config.js is left out for security reasons.  It should be in the form
 * where REDACTED is replaced by you AWS keys
module.exports={
  s3: {
      accessKeyId: 'REDACTED',
      secretAccessKey: 'REDACTED'
  }
}
**************************************************************** */
const assetDecoder = require('../index');
let config= {
    s3: {
        accessKeyId: 'REDACTED',
        secretAccessKey: 'REDACTED'
    }
}
try {
    config=require('./config');
    assetDecoder(config);
} catch (e) {
    //config missing
}

const expect    = require("chai").expect;



    /*
████████╗██████╗  █████╗ ███╗   ██╗███████╗███████╗███████╗██████╗
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝██╔════╝██╔══██╗
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗█████╗  █████╗  ██████╔╝
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██╔══╝  ██╔══╝  ██╔══██╗
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║     ███████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝
     */
describe("Transfer",function() {
    this.timeout(20000);
    it('first transfer', async () => {
        let txData = {
            "txid": "5168afe2c85f24c3985c3aeafe8dc4c836c57e89f0c63242c85e9376b1d49ac6",
            "hash": "5168afe2c85f24c3985c3aeafe8dc4c836c57e89f0c63242c85e9376b1d49ac6",
            "version": 1,
            "size": 425,
            "vsize": 425,
            "weight": 1700,
            "locktime": 0,
            "vin": [{
                "txid": "7ad5a1fefa2c65473a8d6d6e1a0d242f7045c0cc90564222a91ae6d8124c2e7f",
                "vout": 2,
                "scriptSig": {
                    "asm": "304502210088de3816ea59166ea162f55002ce137c05ac32bd8bb01527251ad1a56e942ff1022042025c4aeae5a5282f78a927b5fc63ea1f94c65a2701ebb0bcc80376fec4e8f8[ALL] 0361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67c",
                    "hex": "48304502210088de3816ea59166ea162f55002ce137c05ac32bd8bb01527251ad1a56e942ff1022042025c4aeae5a5282f78a927b5fc63ea1f94c65a2701ebb0bcc80376fec4e8f801210361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67c"
                },
                "sequence": 4294967295,
                "value": "600",
                "source": 8432316,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 fcfb5344c88cf4687cfde418ad86c17f931c0177 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914fcfb5344c88cf4687cfde418ad86c17f931c017788ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU"]
                },
                "assets": [{"assetId": "Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC", "amount": "100", "decimals": 2}]
            }, {
                "txid": "7ad5a1fefa2c65473a8d6d6e1a0d242f7045c0cc90564222a91ae6d8124c2e7f",
                "vout": 1,
                "scriptSig": {
                    "asm": "3045022100f919d947c7bdee9fb3dc10d4a327089d3eaf50d04940d3b2e5b2c9d861e33d910220277af6cb57fc98c5e869c1f8e5e6311a2c3674cfbcab05d46fefd8ec9cc130ca[ALL] 031a2617af533d6e58442b274a69d39194c64431a5caca5d45433f020744e40848",
                    "hex": "483045022100f919d947c7bdee9fb3dc10d4a327089d3eaf50d04940d3b2e5b2c9d861e33d910220277af6cb57fc98c5e869c1f8e5e6311a2c3674cfbcab05d46fefd8ec9cc130ca0121031a2617af533d6e58442b274a69d39194c64431a5caca5d45433f020744e40848"
                },
                "sequence": 4294967295,
                "value": "299994400",
                "source": 8432316,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 2d6d5ceebfdf0829d4ed12a0e26c04b73b123528 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 b0d5d15901856da5e6713e18d9215625d32c6514 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914b0d5d15901856da5e6713e18d9215625d32c651488ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DMG7cLdhFZNraPpUZyschxBB8ogPqFMWMt"]
                },
                "vout": 0
            }, {
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 444101150001", "hex": "6a06444101150001", "type": "nulldata"},
                "vout": 1
            }, {
                "value": "200994344",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 a7731941a96f891504956370af1a21d775c234c0 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914a7731941a96f891504956370af1a21d775c234c088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DLQVGVKYtJ8nWHrPGVL6KSC1VcT3rxPQke"]
                },
                "vout": 2
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 2d6d5ceebfdf0829d4ed12a0e26c04b73b123528 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC"]
                },
                "vout": 3
            }],
            "hex": "01000000027f2e4c12d8e61aa922425690ccc045702f240d1a6e6d8d3a47652cfafea1d57a020000006b48304502210088de3816ea59166ea162f55002ce137c05ac32bd8bb01527251ad1a56e942ff1022042025c4aeae5a5282f78a927b5fc63ea1f94c65a2701ebb0bcc80376fec4e8f801210361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67cffffffff7f2e4c12d8e61aa922425690ccc045702f240d1a6e6d8d3a47652cfafea1d57a010000006b483045022100f919d947c7bdee9fb3dc10d4a327089d3eaf50d04940d3b2e5b2c9d861e33d910220277af6cb57fc98c5e869c1f8e5e6311a2c3674cfbcab05d46fefd8ec9cc130ca0121031a2617af533d6e58442b274a69d39194c64431a5caca5d45433f020744e40848ffffffff0458020000000000001976a914b0d5d15901856da5e6713e18d9215625d32c651488ac0000000000000000086a0644410115000128eefa0b000000001976a914a7731941a96f891504956370af1a21d775c234c088ac58020000000000001976a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac00000000",
            "blockhash": "00000000000000024f0e5f8831e13d9c4dc3b3462510db453844c22dca075bac",
            "height": 8432959,
            "time": 1553608681
        };

        //process asset tx
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);

        //test that tx data was modified correctly
        expect(txData.vout[0].assets[0].assetId).to.equal( 'Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC');
        expect(txData.vout[0].assets[0].amount).to.equal( "1");
        expect(txData.vout[0].assets[0].decimals).to.equal( 2);
        expect(txData.vout[1].assets).to.equal( undefined);
        expect(txData.vout[2].assets).to.equal( undefined);
        expect(txData.vout[3].assets[0].assetId).to.equal( 'Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC');
        expect(txData.vout[3].assets[0].amount).to.equal( "99");
        expect(txData.vout[3].assets[0].decimals).to.equal( 2);
        expect(txData.vout.length).to.equal( 4);

        //test that results are correct
        expect(results.type).to.equal( 'transfer');
        expect(results.changes['Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC']['DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU']).to.equal( -100n);
        expect(results.changes['Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC']['DMG7cLdhFZNraPpUZyschxBB8ogPqFMWMt']).to.equal( 1n);
        expect(results.changes['Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC']['D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC']).to.equal( 99n);

    });
    it('transfer 9895c4294821d7b06de34658776bbc47afb0a2464e9da04730ca142fe9e06ce8', async () => {
        let txData = {
            "txid": "9895c4294821d7b06de34658776bbc47afb0a2464e9da04730ca142fe9e06ce8",
            "hash": "9895c4294821d7b06de34658776bbc47afb0a2464e9da04730ca142fe9e06ce8",
            "version": 1,
            "size": 425,
            "vsize": 425,
            "weight": 1700,
            "locktime": 0,
            "vin": [{
                "txid": "4704efe34bafaf3afc918b22f94a466790a72bd3a423b52fbb1cbffddcc152bf",
                "vout": 2,
                "scriptSig": {
                    "asm": "304402207fed2d405a3df5673a594dee6fb73101d5ee6ca6de8d2b8f7841a17d7de01794022021f3b0b526da92133188bb8b7b64daf1f65d7a04ea74edb728be50e95dcdb356[ALL] 02a0b30a0f14c924eea97f3fe60ea65afa425b055124fd687315d778efaef58511",
                    "hex": "47304402207fed2d405a3df5673a594dee6fb73101d5ee6ca6de8d2b8f7841a17d7de01794022021f3b0b526da92133188bb8b7b64daf1f65d7a04ea74edb728be50e95dcdb356012102a0b30a0f14c924eea97f3fe60ea65afa425b055124fd687315d778efaef58511"
                },
                "sequence": 4294967295,
                "value": "600",
                "source": 8432972,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 becb2093b823d3d3731f0707d41db841b649c416 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914becb2093b823d3d3731f0707d41db841b649c41688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB"]
                },
                "assets": [{"assetId": "Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW", "amount": "100000000", "decimals": 2}]
            }, {
                "txid": "4704efe34bafaf3afc918b22f94a466790a72bd3a423b52fbb1cbffddcc152bf",
                "vout": 1,
                "scriptSig": {
                    "asm": "3045022100f1630bba1b4c3c5f6d88a8ccd95b69dd693a639efa62ccaaab727dd4932925480220355bdbe917a7023d638ccd5c9bee6de60b0035e0a994b02894a5d08cd4299748[ALL] 03d6ca1e6820a8087c02e7b7f7990d9076860b9a07d88c3ae27db17ba6e81b901e",
                    "hex": "483045022100f1630bba1b4c3c5f6d88a8ccd95b69dd693a639efa62ccaaab727dd4932925480220355bdbe917a7023d638ccd5c9bee6de60b0035e0a994b02894a5d08cd4299748012103d6ca1e6820a8087c02e7b7f7990d9076860b9a07d88c3ae27db17ba6e81b901e"
                },
                "sequence": 4294967295,
                "value": "400994344",
                "source": 8432972,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 2032d1be63bef18fdb954edf68106d69f2cee846 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9142032d1be63bef18fdb954edf68106d69f2cee84688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D85M3PGHBZKdk8RxkH86MsZGjFA4hJ6qPk"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 7643deadf56e645ae24c6f460c17827442ef01f4 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9147643deadf56e645ae24c6f460c17827442ef01f488ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFvRaaEET5e5kiJ2PRFUyM2KwWHyfxsEvb"]
                },
                "vout": 0
            }, {
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 44410115002016", "hex": "6a0744410115002016", "type": "nulldata"},
                "vout": 1
            }, {
                "value": "400988744",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 edf8191a31cad677ba12d134003e4605539834b1 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914edf8191a31cad677ba12d134003e4605539834b188ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DSqMtsqmGSor6bp7mzzemN5uXYAjCSRkEi"]
                },
                "vout": 2
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 2032d1be63bef18fdb954edf68106d69f2cee846 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9142032d1be63bef18fdb954edf68106d69f2cee84688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D85M3PGHBZKdk8RxkH86MsZGjFA4hJ6qPk"]
                },
                "vout": 3
            }],
            "hex": "0100000002bf52c1dcfdbf1cbb2fb523a4d32ba79067464af9228b91fc3aafaf4be3ef0447020000006a47304402207fed2d405a3df5673a594dee6fb73101d5ee6ca6de8d2b8f7841a17d7de01794022021f3b0b526da92133188bb8b7b64daf1f65d7a04ea74edb728be50e95dcdb356012102a0b30a0f14c924eea97f3fe60ea65afa425b055124fd687315d778efaef58511ffffffffbf52c1dcfdbf1cbb2fb523a4d32ba79067464af9228b91fc3aafaf4be3ef0447010000006b483045022100f1630bba1b4c3c5f6d88a8ccd95b69dd693a639efa62ccaaab727dd4932925480220355bdbe917a7023d638ccd5c9bee6de60b0035e0a994b02894a5d08cd4299748012103d6ca1e6820a8087c02e7b7f7990d9076860b9a07d88c3ae27db17ba6e81b901effffffff0458020000000000001976a9147643deadf56e645ae24c6f460c17827442ef01f488ac0000000000000000096a0744410115002016489ae617000000001976a914edf8191a31cad677ba12d134003e4605539834b188ac58020000000000001976a9142032d1be63bef18fdb954edf68106d69f2cee84688ac00000000",
            "blockhash": "db54a7e341a6858d88889e3223ffb3714f88d7a16af8d9722fde1f5c6e863c3f",
            "height": 8432975,
            "time": 1553609003
        };

        //process asset tx
        let results = await assetDecoder(txData);

        //test that tx data was modified correctly
        expect(txData.vout[0].assets[0].assetId).to.equal( 'Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW');
        expect(txData.vout[0].assets[0].amount).to.equal( "1000000");
        expect(txData.vout[0].assets[0].decimals).to.equal( 2);
        expect(txData.vout[1].assets).to.equal( undefined);
        expect(txData.vout[2].assets).to.equal( undefined);
        expect(txData.vout[3].assets[0].assetId).to.equal( 'Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW');
        expect(txData.vout[3].assets[0].amount).to.equal( "99000000");
        expect(txData.vout[3].assets[0].decimals).to.equal( 2);
        expect(txData.vout.length).to.equal( 4);

        //test that results are correct
        expect(results['type']).to.equal( 'transfer');
        expect(results['changes']['Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW']['DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB']).to.equal( -100000000n);
        expect(results['changes']['Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW']['DFvRaaEET5e5kiJ2PRFUyM2KwWHyfxsEvb']).to.equal( 1000000n);
        expect(results['changes']['Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW']['D85M3PGHBZKdk8RxkH86MsZGjFA4hJ6qPk']).to.equal( 99000000n);
    });
});



    /*
    ██╗███████╗███████╗██╗   ██╗ █████╗ ███╗   ██╗ ██████╗███████╗
    ██║██╔════╝██╔════╝██║   ██║██╔══██╗████╗  ██║██╔════╝██╔════╝
    ██║███████╗███████╗██║   ██║███████║██╔██╗ ██║██║     █████╗
    ██║╚════██║╚════██║██║   ██║██╔══██║██║╚██╗██║██║     ██╔══╝
    ██║███████║███████║╚██████╔╝██║  ██║██║ ╚████║╚██████╗███████╗
    ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
     */
describe('Issuance',function() {
    this.timeout(20000);
    it('first asset issuance', async () => {
        let txData = {
            "txid": "7ad5a1fefa2c65473a8d6d6e1a0d242f7045c0cc90564222a91ae6d8124c2e7f",
            "hash": "7ad5a1fefa2c65473a8d6d6e1a0d242f7045c0cc90564222a91ae6d8124c2e7f",
            "version": 1,
            "size": 295,
            "vsize": 295,
            "weight": 1180,
            "locktime": 0,
            "vin": [{
                "txid": "dd49f460b638b34c820d9627db7e7d57860a95ccce2f7dc5a9c32ecf01906b01",
                "vout": 1,
                "scriptSig": {
                    "asm": "304402200b78670e1af4311c30577f907580e90aa0bedd15a72c46d3da06360dfd138eb202201062fd5cfec6ea6b24219d1c4f075cad87303ac756b6595af8e97c42e29f54d4[ALL] 0361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67c",
                    "hex": "47304402200b78670e1af4311c30577f907580e90aa0bedd15a72c46d3da06360dfd138eb202201062fd5cfec6ea6b24219d1c4f075cad87303ac756b6595af8e97c42e29f54d401210361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67c"
                },
                "sequence": 4294967295,
                "value": "300000000",
                "source": 8431534,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 fcfb5344c88cf4687cfde418ad86c17f931c0177 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914fcfb5344c88cf4687cfde418ad86c17f931c017788ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU"]
                }
            }],
            "vout": [{
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 44410101fcd4de62198f3ca3f6603a00db0f640ba0770796aacb99ce6af3ba7555af6f3064db727c998fdb779469f49da82a2017a6c1fea6201440",
                    "hex": "6a3b44410101fcd4de62198f3ca3f6603a00db0f640ba0770796aacb99ce6af3ba7555af6f3064db727c998fdb779469f49da82a2017a6c1fea6201440",
                    "type": "nulldata"
                },
                "vout": 0
            }, {
                "value": "299994400",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 2d6d5ceebfdf0829d4ed12a0e26c04b73b123528 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC"]
                },
                "vout": 1
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 fcfb5344c88cf4687cfde418ad86c17f931c0177 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914fcfb5344c88cf4687cfde418ad86c17f931c017788ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU"]
                },
                "vout": 2
            }],
            "hex": "0100000001016b9001cf2ec3a9c57d2fcecc950a86577d7edb27960d824cb338b660f449dd010000006a47304402200b78670e1af4311c30577f907580e90aa0bedd15a72c46d3da06360dfd138eb202201062fd5cfec6ea6b24219d1c4f075cad87303ac756b6595af8e97c42e29f54d401210361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67cffffffff0300000000000000003d6a3b44410101fcd4de62198f3ca3f6603a00db0f640ba0770796aacb99ce6af3ba7555af6f3064db727c998fdb779469f49da82a2017a6c1fea6201440208de111000000001976a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac58020000000000001976a914fcfb5344c88cf4687cfde418ad86c17f931c017788ac00000000",
            "blockhash": "ce8c783ce1ebe3b7ab3628a82b42dc92d76b8a1820daa97df269970edd1323f8",
            "height": 8432316,
            "time": 1553598843
        };

        //process asset tx
        /** @type {DigiAssetIssuance} */let results = await assetDecoder(txData);

        //test that tx data was modified correctly
        expect(txData.vout[0].assets).to.equal( undefined);
        expect(txData.vout[1].assets).to.equal( undefined);
        expect(txData.vout[2].assets[0].assetId).to.equal( 'Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC');
        expect(txData.vout[2].assets[0].amount).to.equal( "100");
        expect(txData.vout[2].assets[0].decimals).to.equal( 2);
        expect(txData.vout.length).to.equal( 3);

        //test that results are correct
        expect(results['type']).to.equal( 'issuance');
        expect(results['assetId']).to.equal( 'Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC');
        expect(results['issuer']).to.equal( 'DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU');
        expect(results['locked']).to.equal( false);
        expect(results['aggregation']).to.equal( 0);
        expect(results['divisibility']).to.equal( 2);
        expect(results['supply']).to.equal( 100n);
        expect(results['metadataHash']).to.equal( 'aacb99ce6af3ba7555af6f3064db727c998fdb779469f49da82a2017a6c1fea6');
        expect(results['changes']['Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC']['DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU']).to.equal( 100n);
    });
    it('issuance 4704efe34bafaf3afc918b22f94a466790a72bd3a423b52fbb1cbffddcc152bf', async () => {
        let txData = {
            "txid": "4704efe34bafaf3afc918b22f94a466790a72bd3a423b52fbb1cbffddcc152bf",
            "hash": "4704efe34bafaf3afc918b22f94a466790a72bd3a423b52fbb1cbffddcc152bf",
            "version": 1,
            "size": 295,
            "vsize": 295,
            "weight": 1180,
            "locktime": 0,
            "vin": [
                {
                    "txid": "15a99409c6cc46174224df8f85be880a48ce0389dae43e9cd0490f3a69e80401",
                    "vout": 1,
                    "scriptSig": {
                        "asm": "304402207694919b7ddc779ec619a68df8bba16aa38c144ce4637b008b0be5243d22ee4002206e2d8b6e8794fd8769197ac216d0fad76d18391bbfa6c7650b345b24b19677d6[ALL] 02a0b30a0f14c924eea97f3fe60ea65afa425b055124fd687315d778efaef58511",
                        "hex": "47304402207694919b7ddc779ec619a68df8bba16aa38c144ce4637b008b0be5243d22ee4002206e2d8b6e8794fd8769197ac216d0fad76d18391bbfa6c7650b345b24b19677d6012102a0b30a0f14c924eea97f3fe60ea65afa425b055124fd687315d778efaef58511"
                    },
                    "sequence": 4294967295,
                    "value": "499994400",
                    "source": 8432958,
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 becb2093b823d3d3731f0707d41db841b649c416 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a914becb2093b823d3d3731f0707d41db841b649c41688ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB"
                        ]
                    }
                }
            ],
            "vout": [
                {
                    "value": "0",
                    "scriptPubKey": {
                        "asm": "OP_RETURN 444101018b070252024ceb8c9a4447b3d87b1702b238fcaf01055b20ca31594c895c4660fee6cf130e0fa42e34a5fe64945a3e51c803b5be201a40",
                        "hex": "6a3b444101018b070252024ceb8c9a4447b3d87b1702b238fcaf01055b20ca31594c895c4660fee6cf130e0fa42e34a5fe64945a3e51c803b5be201a40",
                        "type": "nulldata"
                    },
                    "vout": 0
                },
                {
                    "value": "400994344",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 2032d1be63bef18fdb954edf68106d69f2cee846 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a9142032d1be63bef18fdb954edf68106d69f2cee84688ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "D85M3PGHBZKdk8RxkH86MsZGjFA4hJ6qPk"
                        ]
                    },
                    "vout": 1
                },
                {
                    "value": "600",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 becb2093b823d3d3731f0707d41db841b649c416 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a914becb2093b823d3d3731f0707d41db841b649c41688ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB"
                        ]
                    },
                    "vout": 2
                }
            ],
            "hex": "01000000010104e8693a0f49d09c3ee4da8903ce480a88be858fdf24421746ccc60994a915010000006a47304402207694919b7ddc779ec619a68df8bba16aa38c144ce4637b008b0be5243d22ee4002206e2d8b6e8794fd8769197ac216d0fad76d18391bbfa6c7650b345b24b19677d6012102a0b30a0f14c924eea97f3fe60ea65afa425b055124fd687315d778efaef58511ffffffff0300000000000000003d6a3b444101018b070252024ceb8c9a4447b3d87b1702b238fcaf01055b20ca31594c895c4660fee6cf130e0fa42e34a5fe64945a3e51c803b5be201a4028b0e617000000001976a9142032d1be63bef18fdb954edf68106d69f2cee84688ac58020000000000001976a914becb2093b823d3d3731f0707d41db841b649c41688ac00000000",
            "blockhash": "69438f02f6a980b61d7eb7812c1cd5359da540fbfefc7bee31769f334b9decbd",
            "height": 8432972,
            "time": 1553608970
        };

        //process asset tx
        /** @type {DigiAssetIssuance} */let results = await assetDecoder(txData);

        //test that tx data was modified correctly
        expect(txData.vout[0].assets).to.equal( undefined);
        expect(txData.vout[1].assets).to.equal( undefined);
        expect(txData.vout[2].assets[0].assetId).to.equal( 'Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW');
        expect(txData.vout[2].assets[0].amount).to.equal( "100000000");
        expect(txData.vout[2].assets[0].decimals).to.equal( 2);
        expect(txData.vout.length).to.equal( 3);

        //test that results are correct
        expect(results['type']).to.equal( 'issuance');
        expect(results['assetId']).to.equal( 'Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW');
        expect(results['issuer']).to.equal( 'DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB');
        expect(results['locked']).to.equal( false);
        expect(results['aggregation']).to.equal( 0);
        expect(results['divisibility']).to.equal( 2);
        expect(results['supply']).to.equal( 100000000n);
        expect(results['metadataHash']).to.equal( '01055b20ca31594c895c4660fee6cf130e0fa42e34a5fe64945a3e51c803b5be');
        expect(results['changes']['Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW']['DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB']).to.equal( 100000000n);
    });
    it('transfer match error in version 2 code', async () => {
        let txData = {
            "txid": "563e391eceeb6c215d7eef940e7ed4f157d9e2ebaf84c427d560bc8fac208fcf",
            "hash": "563e391eceeb6c215d7eef940e7ed4f157d9e2ebaf84c427d560bc8fac208fcf",
            "version": 1,
            "size": 426,
            "vsize": 426,
            "weight": 1704,
            "locktime": 0,
            "vin": [{
                "txid": "0b3a84f814473a3a973c0843f2a4023af59e3da17b870a57427d77b90b5ff227",
                "vout": 1,
                "scriptSig": {
                    "asm": "3044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e[ALL] 02c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763",
                    "hex": "473044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763"
                },
                "sequence": 4294967295,
                "value": "10000000",
                "source": 8741473,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]
                }
            }, {
                "txid": "388d6623399c6fb71b1f60fbbfd3ab772778753a9dd7ee2a74a58375eb03d97f",
                "vout": 0,
                "scriptSig": {
                    "asm": "3045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44[ALL] 02c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763",
                    "hex": "483045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763"
                },
                "sequence": 4294967295,
                "value": "600",
                "source": 8741475,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]
                },
                "assets": [{"assetId": "La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn", "amount": "1", "decimals": 0}]
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f382101097b7c4cc70d1c4e65d722cf3ca2282ac OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f382101097b7c4cc70d1c4e65d722cf3ca2282ac88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DTLeYnshgD2Hx3eaKcYWnfHBCfxVWQwf7i"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 9d01269d19b835972133d670e59a95747fad5eda OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9149d01269d19b835972133d670e59a95747fad5eda88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DKTG1LWdHgXCWkBEq8HdmNh4Q6G7s5jza2"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 4441021500000101",
                    "hex": "6a084441021500000101",
                    "type": "nulldata"
                },
                "vout": 2
            }, {
                "value": "9998900",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]
                },
                "vout": 3
            }],
            "hex": "010000000227f25f0bb9777d42570a877ba13d9ef53a02a4f243083c973a3a4714f8843a0b010000006a473044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763ffffffff7fd903eb7583a5742aeed79d3a75782777abd3bffb601f1bb76f9c3923668d38000000006b483045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763ffffffff0458020000000000001976a914f382101097b7c4cc70d1c4e65d722cf3ca2282ac88ac58020000000000001976a9149d01269d19b835972133d670e59a95747fad5eda88ac00000000000000000a6a08444102150000010134929800000000001976a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac00000000"
        };


        //asset should be moved to output 1 but error in how legacy systems worked the output should go to 3
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(results.changes['La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn']['DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj']).to.equal( 0n);
    });
    it('transfer match error fix version 3', async () => {
        if (config.s3.accessKeyId === "REDACTED") {
            expect("must configure s3 for this test").to.equal( "s3 not configured");
            return;
        }
        let txData = {
            "txid": "563e391eceeb6c215d7eef940e7ed4f157d9e2ebaf84c427d560bc8fac208fcf",
            "hash": "563e391eceeb6c215d7eef940e7ed4f157d9e2ebaf84c427d560bc8fac208fcf",
            "version": 1,
            "size": 426,
            "vsize": 426,
            "weight": 1704,
            "locktime": 0,
            "vin": [{
                "txid": "0b3a84f814473a3a973c0843f2a4023af59e3da17b870a57427d77b90b5ff227",
                "vout": 1,
                "scriptSig": {
                    "asm": "3044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e[ALL] 02c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763",
                    "hex": "473044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763"
                },
                "sequence": 4294967295,
                "value": "10000000",
                "source": 8741473,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]
                }
            }, {
                "txid": "388d6623399c6fb71b1f60fbbfd3ab772778753a9dd7ee2a74a58375eb03d97f",
                "vout": 0,
                "scriptSig": {
                    "asm": "3045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44[ALL] 02c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763",
                    "hex": "483045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763"
                },
                "sequence": 4294967295,
                "value": "600",
                "source": 8741475,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]
                },
                "assets": [{"assetId": "La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn", "amount": "1", "decimals": 0}]
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f382101097b7c4cc70d1c4e65d722cf3ca2282ac OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f382101097b7c4cc70d1c4e65d722cf3ca2282ac88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DTLeYnshgD2Hx3eaKcYWnfHBCfxVWQwf7i"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 9d01269d19b835972133d670e59a95747fad5eda OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9149d01269d19b835972133d670e59a95747fad5eda88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DKTG1LWdHgXCWkBEq8HdmNh4Q6G7s5jza2"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 4441031500000101",
                    "hex": "6a084441031500000101",
                    "type": "nulldata"
                },
                "vout": 2
            }, {
                "value": "9998900",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]
                },
                "vout": 3
            }],
            "hex": "010000000227f25f0bb9777d42570a877ba13d9ef53a02a4f243083c973a3a4714f8843a0b010000006a473044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763ffffffff7fd903eb7583a5742aeed79d3a75782777abd3bffb601f1bb76f9c3923668d38000000006b483045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763ffffffff0458020000000000001976a914f382101097b7c4cc70d1c4e65d722cf3ca2282ac88ac58020000000000001976a9149d01269d19b835972133d670e59a95747fad5eda88ac00000000000000000a6a08444102150000010134929800000000001976a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac00000000"
        };
        //asset should be moved to output 1 but error in how legacy systems worked the output should go to 3
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(results.changes['La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn']['DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj']).to.equal( -1n);
        expect(results.changes['La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn']['DKTG1LWdHgXCWkBEq8HdmNh4Q6G7s5jza2']).to.equal( 1n);
    });
    it('multiple asset combined', async () => {
        let txData = {
            "txid": "241c81d6dc727fec9c95925fcbc48fefe89b8efb4758bba473ce582a6ddc0bc9",
            "hash": "241c81d6dc727fec9c95925fcbc48fefe89b8efb4758bba473ce582a6ddc0bc9",
            "version": 1,
            "size": 1607,
            "vsize": 1607,
            "weight": 6428,
            "locktime": 0,
            "vin": [{
                "txid": "efc77ccac046258ecee475cd5eaa5f5843c27d1a0db0539262b1d8067be23199",
                "vout": 0,
                "scriptSig": {
                    "asm": "30440220534e2dba96f08392da288dc5766cee990225a74acae847a0e319522d28b3108f02205251bf559eec04a006466298e45b578d21b8310b4e4bebc930a0393029fa7b4e[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "4730440220534e2dba96f08392da288dc5766cee990225a74acae847a0e319522d28b3108f02205251bf559eec04a006466298e45b578d21b8310b4e4bebc930a0393029fa7b4e012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8742722,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                }
            }, {
                "txid": "6203f121155a733e5bd5ea3a2eddc94fe80496ca6c1e3428cd38e8e88269a6ca",
                "vout": 0,
                "scriptSig": {
                    "asm": "3044022024389e93b097692117be0cb816b489f2f739beeec1f60145131bc0d39af1e7ea02204d7051771eec80c0d3c02e1878488b3cf8ab4ba7c8f855148a091dad072aee12[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "473044022024389e93b097692117be0cb816b489f2f739beeec1f60145131bc0d39af1e7ea02204d7051771eec80c0d3c02e1878488b3cf8ab4ba7c8f855148a091dad072aee12012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8748533,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                }
            }, {
                "txid": "7815dfc90856a185cacf4db259c75c4ab445e03ff79b116097951c27f1e3add2",
                "vout": 0,
                "scriptSig": {
                    "asm": "304402207c159c2e51386c57c315edb83fd2ab271df3b7688c0e6b211105cc2cb75780d802201ae5040a96960c676ddca594d5bf982a1020e60d2033d0289295da3ec1a595da[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "47304402207c159c2e51386c57c315edb83fd2ab271df3b7688c0e6b211105cc2cb75780d802201ae5040a96960c676ddca594d5bf982a1020e60d2033d0289295da3ec1a595da012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8748777,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                }
            }, {
                "txid": "2a25f6c4c12d3ac7510c44e73f7d2710cf898b2e67528a86619b02e9ec0000fd",
                "vout": 0,
                "scriptSig": {
                    "asm": "3045022100857ec197a0fd0374eea12eb26c421275141b28d80abdf1b7e3f19d674dd276890220346c3120125ff6da5a4b5f0fc70e970fe08a68fe7628212c3393067227d3486b[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "483045022100857ec197a0fd0374eea12eb26c421275141b28d80abdf1b7e3f19d674dd276890220346c3120125ff6da5a4b5f0fc70e970fe08a68fe7628212c3393067227d3486b012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8748867,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                },
                "assets": [{"assetId": "La43wCn4pNnWJP51TGrnctcVP9DSZtbHLDb2p2", "amount": "1", "decimals": 0}]
            }, {
                "txid": "d1444fc5de2497e0ce52485184fb11cb54ebe801ed5fb7c05536a062dbfa8dab",
                "vout": 0,
                "scriptSig": {
                    "asm": "3045022100f0860543d25c18ab3a166ed149a5379fb8f2a53bfaed648db17b5c11109be10a02200b3b71382af14b89e6a671d32fd5af0e737aaf78f15cb40529cab83e4e95fc85[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "483045022100f0860543d25c18ab3a166ed149a5379fb8f2a53bfaed648db17b5c11109be10a02200b3b71382af14b89e6a671d32fd5af0e737aaf78f15cb40529cab83e4e95fc85012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8748887,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                }
            }, {
                "txid": "c4af8e109924512512d4eaa31523973954bf71f705bc393a364545f2139989ec",
                "vout": 0,
                "scriptSig": {
                    "asm": "3044022037e65a0f0ee8b5bb06c6a8172c18c956c31b301cfc67d5975bb4fc783639503f02202e4b21f0bc0f354151ba9abe4839a57d32c18e28a0623bb56b876fb53493dc59[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "473044022037e65a0f0ee8b5bb06c6a8172c18c956c31b301cfc67d5975bb4fc783639503f02202e4b21f0bc0f354151ba9abe4839a57d32c18e28a0623bb56b876fb53493dc59012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8748948,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                },
                "assets": [{"assetId": "La43wCn4pNnWJP51TGrnctcVP9DSZtbHLDb2p2", "amount": "1", "decimals": 0}]
            }, {
                "txid": "9508784df0422e24245577c0b62b749ec43da63c34ea475476814b65a4f477e1",
                "vout": 0,
                "scriptSig": {
                    "asm": "3045022100b532b87f26a1f06fdb236b047f21aa21d6efe757ed33c2642da948a45d37a4e10220566540dd821e3a4d0c850f292c5dd3b3290edc9e9024e30699002abc1d8b962c[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "483045022100b532b87f26a1f06fdb236b047f21aa21d6efe757ed33c2642da948a45d37a4e10220566540dd821e3a4d0c850f292c5dd3b3290edc9e9024e30699002abc1d8b962c012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8749011,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                },
                "assets": [{"assetId": "La43wCn4pNnWJP51TGrnctcVP9DSZtbHLDb2p2", "amount": "1", "decimals": 0}]
            }, {
                "txid": "c7bbba8f613326a72257c386404b98da93ab06321d592604b881437b27aa657a",
                "vout": 0,
                "scriptSig": {
                    "asm": "3045022100f1ce0e8ff188a1b8adfb1da2682d6deb0e9a9550cb8b75271238d1079a05c4ce0220337845d6a4f566451ac4e0c8d8793a13ce8fa011193ed1348f6cbfbd32945087[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "483045022100f1ce0e8ff188a1b8adfb1da2682d6deb0e9a9550cb8b75271238d1079a05c4ce0220337845d6a4f566451ac4e0c8d8793a13ce8fa011193ed1348f6cbfbd32945087012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8749083,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                },
                "assets": [{"assetId": "La43wCn4pNnWJP51TGrnctcVP9DSZtbHLDb2p2", "amount": "1", "decimals": 0}]
            }, {
                "txid": "412874dd7bae77fc812001451a2f6fe5cfbc6b135090494a6be50b476c2e30f5",
                "vout": 0,
                "scriptSig": {
                    "asm": "30450221009531a156a73feaae17a457c29bb19dda3f626d22a0c12b3a9a33e20f21cc325a02203c421e9deea0b704e397b6def80414fec85cb7052e69e27ad208ff92f18ccb31[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "4830450221009531a156a73feaae17a457c29bb19dda3f626d22a0c12b3a9a33e20f21cc325a02203c421e9deea0b704e397b6def80414fec85cb7052e69e27ad208ff92f18ccb31012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8749098,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                },
                "assets": [{"assetId": "La43wCn4pNnWJP51TGrnctcVP9DSZtbHLDb2p2", "amount": "1", "decimals": 0}]
            }, {
                "txid": "65ff53b0d272f7a9700e79745177e29ef28ef685c316db1ef00ae09b7bc5fbc9",
                "vout": 0,
                "scriptSig": {
                    "asm": "3045022100d9eacdd31b3a9d20050f118eb5c148bc6cf5ddc26ebfb149e0ab9332c733bdce02201b0e532786fa7921ffd83eac736ab109f907ee72bb798b8174fe3abe5d9b8819[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "483045022100d9eacdd31b3a9d20050f118eb5c148bc6cf5ddc26ebfb149e0ab9332c733bdce02201b0e532786fa7921ffd83eac736ab109f907ee72bb798b8174fe3abe5d9b8819012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8756615,
                "value": "100000000",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 1b486d60b42702ff652ff1987414835b3d74d628 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9141b486d60b42702ff652ff1987414835b3d74d62888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D7dMYmitJyzcR5wvLM8SbJnHaYWN2zWAyJ"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 4441021500010104",
                    "hex": "6a084441021500010104",
                    "type": "nulldata"
                },
                "vout": 2
            }, {
                "value": "99999200",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                },
                "vout": 3
            }],
            "hex": "010000000a9931e27b06d8b1629253b00d1a7dc243585faa5ecd75e4ce8e2546c0ca7cc7ef000000006a4730440220534e2dba96f08392da288dc5766cee990225a74acae847a0e319522d28b3108f02205251bf559eec04a006466298e45b578d21b8310b4e4bebc930a0393029fa7b4e012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffffcaa66982e8e838cd28341e6cca9604e84fc9dd2e3aead55b3e735a1521f10362000000006a473044022024389e93b097692117be0cb816b489f2f739beeec1f60145131bc0d39af1e7ea02204d7051771eec80c0d3c02e1878488b3cf8ab4ba7c8f855148a091dad072aee12012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffffd2ade3f1271c959760119bf73fe045b44a5cc759b24dcfca85a15608c9df1578000000006a47304402207c159c2e51386c57c315edb83fd2ab271df3b7688c0e6b211105cc2cb75780d802201ae5040a96960c676ddca594d5bf982a1020e60d2033d0289295da3ec1a595da012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2cefffffffffd0000ece9029b61868a52672e8b89cf10277d3fe7440c51c73a2dc1c4f6252a000000006b483045022100857ec197a0fd0374eea12eb26c421275141b28d80abdf1b7e3f19d674dd276890220346c3120125ff6da5a4b5f0fc70e970fe08a68fe7628212c3393067227d3486b012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffffab8dfadb62a03655c0b75fed01e8eb54cb11fb84514852cee09724dec54f44d1000000006b483045022100f0860543d25c18ab3a166ed149a5379fb8f2a53bfaed648db17b5c11109be10a02200b3b71382af14b89e6a671d32fd5af0e737aaf78f15cb40529cab83e4e95fc85012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffffec899913f24545363a39bc05f771bf5439972315a3ead41225512499108eafc4000000006a473044022037e65a0f0ee8b5bb06c6a8172c18c956c31b301cfc67d5975bb4fc783639503f02202e4b21f0bc0f354151ba9abe4839a57d32c18e28a0623bb56b876fb53493dc59012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffffe177f4a4654b81765447ea343ca63dc49e742bb6c0775524242e42f04d780895000000006b483045022100b532b87f26a1f06fdb236b047f21aa21d6efe757ed33c2642da948a45d37a4e10220566540dd821e3a4d0c850f292c5dd3b3290edc9e9024e30699002abc1d8b962c012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffff7a65aa277b4381b80426591d3206ab93da984b4086c35722a72633618fbabbc7000000006b483045022100f1ce0e8ff188a1b8adfb1da2682d6deb0e9a9550cb8b75271238d1079a05c4ce0220337845d6a4f566451ac4e0c8d8793a13ce8fa011193ed1348f6cbfbd32945087012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2cefffffffff5302e6c470be56b4a499050136bbccfe56f2f1a45012081fc77ae7bdd742841000000006b4830450221009531a156a73feaae17a457c29bb19dda3f626d22a0c12b3a9a33e20f21cc325a02203c421e9deea0b704e397b6def80414fec85cb7052e69e27ad208ff92f18ccb31012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffffc9fbc57b9be00af01edb16c385f68ef29ee2775174790e70a9f772d2b053ff65000000006b483045022100d9eacdd31b3a9d20050f118eb5c148bc6cf5ddc26ebfb149e0ab9332c733bdce02201b0e532786fa7921ffd83eac736ab109f907ee72bb798b8174fe3abe5d9b8819012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffff0458020000000000001976a9141b486d60b42702ff652ff1987414835b3d74d62888ac58020000000000001976a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac00000000000000000a6a084441021500010104e0ddf505000000001976a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac00000000"
        };
        await assetDecoder(txData);
        expect(txData.vout[3].assets[0].amount).to.equal( "5");
    });
    it('try to send more assets then has', async () => {
        /*
            try to send 1 asset to output 0
            try to send 6 asset to output 1
            only 5 assets in input
            send all to change
        */
        let txData = {
            "txid": "7704ca18d19d2eb9f6a5b0010240c6bedb47dfbc9c996bffb661d73c4c11be21",
            "hash": "7704ca18d19d2eb9f6a5b0010240c6bedb47dfbc9c996bffb661d73c4c11be21",
            "version": 1,
            "size": 278,
            "vsize": 278,
            "weight": 1112,
            "locktime": 0,
            "vin": [{
                "txid": "241c81d6dc727fec9c95925fcbc48fefe89b8efb4758bba473ce582a6ddc0bc9",
                "vout": 3,
                "scriptSig": {
                    "asm": "304402203235f1a16fbc732b8f281e74caa01b2b10f0467f5ded1a2a6a0d9eba1a2d98f8022049dce9a79aecae908202743d537c6b7320f66b53fa4cda7f77908494184ee7b9[ALL] 03bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce",
                    "hex": "47304402203235f1a16fbc732b8f281e74caa01b2b10f0467f5ded1a2a6a0d9eba1a2d98f8022049dce9a79aecae908202743d537c6b7320f66b53fa4cda7f77908494184ee7b9012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ce"
                },
                "sequence": 4294967295,
                "source": 8758875,
                "value": "99999200",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 724deab61f52828ca87e49ec995d4fca3fae0e1a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914724deab61f52828ca87e49ec995d4fca3fae0e1a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v"]
                },
                "assets": [{"assetId": "La43wCn4pNnWJP51TGrnctcVP9DSZtbHLDb2p2", "amount": "5", "decimals": 0}]
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 1b486d60b42702ff652ff1987414835b3d74d628 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9141b486d60b42702ff652ff1987414835b3d74d62888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D7dMYmitJyzcR5wvLM8SbJnHaYWN2zWAyJ"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 4470f703c37d334a3a21ba5314b3800ea5b27e52 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9144470f703c37d334a3a21ba5314b3800ea5b27e5288ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DBNypEyp8onELKdSftX7EcDgA8NCHEchYC"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 4441021500010106",
                    "hex": "6a084441021500010106",
                    "type": "nulldata"
                },
                "vout": 2
            }, {
                "value": "99993000",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 4470f703c37d334a3a21ba5314b3800ea5b27e52 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9144470f703c37d334a3a21ba5314b3800ea5b27e5288ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DBNypEyp8onELKdSftX7EcDgA8NCHEchYC"]
                },
                "vout": 3
            }],
            "hex": "0100000001c90bdc6d2a58ce73a4bb5847fb8e9be8ef8fc4cb5f92959cec7f72dcd6811c24030000006a47304402203235f1a16fbc732b8f281e74caa01b2b10f0467f5ded1a2a6a0d9eba1a2d98f8022049dce9a79aecae908202743d537c6b7320f66b53fa4cda7f77908494184ee7b9012103bdf5393aab99792a26c446ebbb7d3546c6682874835f1515b66fdb2a337fb2ceffffffff0458020000000000001976a9141b486d60b42702ff652ff1987414835b3d74d62888ac58020000000000001976a9144470f703c37d334a3a21ba5314b3800ea5b27e5288ac00000000000000000a6a084441021500010106a8c5f505000000001976a9144470f703c37d334a3a21ba5314b3800ea5b27e5288ac00000000"
        };
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(txData.vout[3].assets[0].amount).to.equal( "5");
        expect(results.changes['La43wCn4pNnWJP51TGrnctcVP9DSZtbHLDb2p2']['DFZUutEaGGGC3BafUQVH8nZ2nHW1phCa7v']).to.equal( -5n);
        expect(results.changes['La43wCn4pNnWJP51TGrnctcVP9DSZtbHLDb2p2']['DBNypEyp8onELKdSftX7EcDgA8NCHEchYC']).to.equal( 5n);
    });
    it('first op code 6', async () => {
        let txData = {
            "txid": "6dbd98cd9fddebb549fa8a419bc70ae9ec2814065f0bc6b5f047116b3444acc7",
            "hash": "6dbd98cd9fddebb549fa8a419bc70ae9ec2814065f0bc6b5f047116b3444acc7",
            "version": 1,
            "size": 209,
            "vsize": 209,
            "weight": 836,
            "locktime": 0,
            "vin": [{
                "txid": "e4941631db44727eacd85f7ccae9b03bf987aba97c8962abcdaf7a9833588280",
                "vout": 1,
                "scriptSig": {
                    "asm": "3045022100d611e1a57a299e8bdd09224bea7a5f4c03501ae01ec76e3188c3d75f1dce48f0022059e9e14d96f15080fa7980d77df7233a9522850ca9792defa0469a9df7b07d61[ALL] 02b294257f114aa8c2423b76e29b75b354ebd0fc280ea8538262672396b4799257",
                    "hex": "483045022100d611e1a57a299e8bdd09224bea7a5f4c03501ae01ec76e3188c3d75f1dce48f0022059e9e14d96f15080fa7980d77df7233a9522850ca9792defa0469a9df7b07d61012102b294257f114aa8c2423b76e29b75b354ebd0fc280ea8538262672396b4799257"
                },
                "sequence": 4294967295,
                "source": 8769951,
                "value": "100000",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 272bc73c03186d93d397358b8d262109910f8a50 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914272bc73c03186d93d397358b8d262109910f8a5088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8iDLWLX74JFTprXACGQws4MV9QDsfes2J"]
                }
            }],
            "vout": [{
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 444102060110", "hex": "6a06444102060110", "type": "nulldata"},
                "vout": 0
            }, {
                "value": "1546",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 272bc73c03186d93d397358b8d262109910f8a50 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914272bc73c03186d93d397358b8d262109910f8a5088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8iDLWLX74JFTprXACGQws4MV9QDsfes2J"]
                },
                "vout": 1
            }],
            "hex": "010000000180825833987aafcdab62897ca9ab87f93bb0e9ca7c5fd8ac7e7244db311694e4010000006b483045022100d611e1a57a299e8bdd09224bea7a5f4c03501ae01ec76e3188c3d75f1dce48f0022059e9e14d96f15080fa7980d77df7233a9522850ca9792defa0469a9df7b07d61012102b294257f114aa8c2423b76e29b75b354ebd0fc280ea8538262672396b4799257ffffffff020000000000000000086a064441020601100a060000000000001976a914272bc73c03186d93d397358b8d262109910f8a5088ac00000000"
        };
        /** @type {DigiAssetIssuance} */let results = await assetDecoder(txData);
        expect(txData.vout[1].assets[0].amount).to.equal( "1");
        expect(txData.vout[1].assets[0].assetId).to.equal( "La3fq5SvLvxHssNL9FJESiemGwMVsou89tuD3m");
    });
    it('invalid formed issuance', async () => {
        let txData = {
            "txid": "c13f49f51e3da13952d03181db0d060be422b9b40503eeccccb0785c9f6da21c",
            "hash": "c13f49f51e3da13952d03181db0d060be422b9b40503eeccccb0785c9f6da21c",
            "version": 1,
            "size": 208,
            "vsize": 208,
            "weight": 832,
            "locktime": 0,
            "vin": [{
                "txid": "43f0b999ce8bfa5f86a98de7ffd37cd7c86910e8ef1baafbdcf3a4144551a108",
                "vout": 1,
                "scriptSig": {
                    "asm": "3044022075239f8ce5d431938011e7ceebb83d22fa9dd2802166b800170b4997d678d7d7022065df34587c454e30dd061b2c3bfe231510c448a8f3258cec107e32dc4403152d[ALL] 02b6dfaf33c519b1ccb7a07671393d88964e3465156bf81a3f5f280578f0cd5ed8",
                    "hex": "473044022075239f8ce5d431938011e7ceebb83d22fa9dd2802166b800170b4997d678d7d7022065df34587c454e30dd061b2c3bfe231510c448a8f3258cec107e32dc4403152d012102b6dfaf33c519b1ccb7a07671393d88964e3465156bf81a3f5f280578f0cd5ed8"
                },
                "sequence": 4294967295,
                "source": 8880421,
                "value": "100000",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 dcc2d8a651487d3226d40231848eb51fe542d10f OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914dcc2d8a651487d3226d40231848eb51fe542d10f88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DRGNccq3quL9FqJuHcB1JEQVKRpvaqGenp"]
                }
            }],
            "vout": [{
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 444102010110", "hex": "6a06444102010110", "type": "nulldata"},
                "vout": 0
            }, {
                "value": "97754",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 dcc2d8a651487d3226d40231848eb51fe542d10f OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914dcc2d8a651487d3226d40231848eb51fe542d10f88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DRGNccq3quL9FqJuHcB1JEQVKRpvaqGenp"]
                },
                "vout": 1
            }],
            "hex": "010000000108a1514514a4f3dcfbaa1befe81069c8d77cd3ffe78da9865ffa8bce99b9f043010000006a473044022075239f8ce5d431938011e7ceebb83d22fa9dd2802166b800170b4997d678d7d7022065df34587c454e30dd061b2c3bfe231510c448a8f3258cec107e32dc4403152d012102b6dfaf33c519b1ccb7a07671393d88964e3465156bf81a3f5f280578f0cd5ed8ffffffff020000000000000000086a06444102010110da7d0100000000001976a914dcc2d8a651487d3226d40231848eb51fe542d10f88ac00000000"
        };
        /** @type {boolean} */let results = await assetDecoder(txData);
        expect(results).to.equal( false);
        expect(txData.vout[0].assets).to.equal( undefined);
        expect(txData.vout[1].assets).to.equal( undefined);
    });
    it('bigint needed in transfer', async () => {
        let txData = {
            "txid": "b9bc822e8750bf792e782782878b4be535fe7bad76b2daecaa6b686bdcd61f5b",
            "hash": "b9bc822e8750bf792e782782878b4be535fe7bad76b2daecaa6b686bdcd61f5b",
            "version": 1,
            "size": 429,
            "vsize": 429,
            "weight": 1716,
            "locktime": 0,
            "vin": [{
                "txid": "5e543ba7637ebed7cc1503aaed80b1af8bf9526dba196d3e490f030098657738",
                "vout": 1,
                "scriptSig": {
                    "asm": "30440220268621e51d3b59ce783e6686f81540156c11d2949966f8ad53142e3ec979ad8e02201799bb4bd529c16cc37610489f63297d41c47c8c787c46224bd916cc065e2684[ALL] 032d9f0db5c4839682871806d2d609959eee8a4664bf0a8b539837844c471a1f3f",
                    "hex": "4730440220268621e51d3b59ce783e6686f81540156c11d2949966f8ad53142e3ec979ad8e02201799bb4bd529c16cc37610489f63297d41c47c8c787c46224bd916cc065e26840121032d9f0db5c4839682871806d2d609959eee8a4664bf0a8b539837844c471a1f3f"
                },
                "sequence": 4294967295,
                "source": 8997956,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 307b29c9125ea25aa844014bb97edf933ce5dff6 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914307b29c9125ea25aa844014bb97edf933ce5dff688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D9ZSWznfx3QrT1bNW1hQ8mEivtzg23aVEv"]
                },
                "assets": [{"assetId": "Ua24D48RecAFgPd94kWf29Sm5spC53PF3ZsdxV", "amount": "99994890", "decimals": 0}]
            }, {
                "txid": "ba3c73278a28d09802e6132019698798cf43b99eb15a1d2db1669a3cdef0d0a9",
                "vout": 3,
                "scriptSig": {
                    "asm": "304402200cdcbeffca6f12e774463b519b9f77c7b0c759d8809a13363d60496b6976102902200688ede250939f21dee9cd61508c6bbbcea4e1758fb7dcfe34dc033aa698f1ee[ALL] 033c0e1ae419b470d771c625532e145e9ccc34f6bc2a5b5e6280e0c431388e2b0e",
                    "hex": "47304402200cdcbeffca6f12e774463b519b9f77c7b0c759d8809a13363d60496b6976102902200688ede250939f21dee9cd61508c6bbbcea4e1758fb7dcfe34dc033aa698f1ee0121033c0e1ae419b470d771c625532e145e9ccc34f6bc2a5b5e6280e0c431388e2b0e"
                },
                "sequence": 4294967295,
                "source": 8997957,
                "value": "99745160",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 91252c1545722a5bd1584c91a6691ff6b3bec991 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91491252c1545722a5bd1584c91a6691ff6b3bec99188ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DJNZ3qsyVwMd7X7vQvJ5kGZWfTw9z4HGJp"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 531ebbae2da6f812cb1f6c1cce5115159f3b6bf7 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914531ebbae2da6f812cb1f6c1cce5115159f3b6bf788ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DCibSZAiZLvcvYNKgskhsPnqUcS6UGBQp7"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 307b29c9125ea25aa844014bb97edf933ce5dff6 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914307b29c9125ea25aa844014bb97edf933ce5dff688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D9ZSWznfx3QrT1bNW1hQ8mEivtzg23aVEv"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 44410215000c01802fae67f0",
                    "hex": "6a0c44410215000c01802fae67f0",
                    "type": "nulldata"
                },
                "vout": 2
            }, {
                "value": "99707360",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 8dafda1336af585fe49547c2390c56a221d5fb8a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9148dafda1336af585fe49547c2390c56a221d5fb8a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DJ4GUhzqQ1oEcfXtd1d6jeYH3SYXr5TrZy"]
                },
                "vout": 3
            }],
            "hex": "01000000023877659800030f493e6d19ba6d52f98bafb180edaa0315ccd7be7e63a73b545e010000006a4730440220268621e51d3b59ce783e6686f81540156c11d2949966f8ad53142e3ec979ad8e02201799bb4bd529c16cc37610489f63297d41c47c8c787c46224bd916cc065e26840121032d9f0db5c4839682871806d2d609959eee8a4664bf0a8b539837844c471a1f3fffffffffa9d0f0de3c9a66b12d1d5ab19eb943cf988769192013e60298d0288a27733cba030000006a47304402200cdcbeffca6f12e774463b519b9f77c7b0c759d8809a13363d60496b6976102902200688ede250939f21dee9cd61508c6bbbcea4e1758fb7dcfe34dc033aa698f1ee0121033c0e1ae419b470d771c625532e145e9ccc34f6bc2a5b5e6280e0c431388e2b0effffffff0458020000000000001976a914531ebbae2da6f812cb1f6c1cce5115159f3b6bf788ac58020000000000001976a914307b29c9125ea25aa844014bb97edf933ce5dff688ac00000000000000000e6a0c44410215000c01802fae67f0e069f105000000001976a9148dafda1336af585fe49547c2390c56a221d5fb8a88ac00000000"
        };
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(txData.vout[0].assets[0].amount).to.equal( "12");
        expect(txData.vout[1].assets[0].amount).to.equal( "99994878");
    });
    it('hybrid transfer', async () => {
        // transfers 1 to output 0
        // transfers 139 to output 1 with skip
        // transfers 67 to output 1
        //because they are hybrid the 2 outputs to 1 are separately tracked and not combined.
        // original code interprets skip at the end of an instruction set as doing nothing so we will match
        let txData = {
            "txid": "df062cc2502a69c8d1463ceea777e03b51b1a37f918a4c424f4902902f1bb7d8",
            "hash": "df062cc2502a69c8d1463ceea777e03b51b1a37f918a4c424f4902902f1bb7d8",
            "version": 1,
            "size": 577,
            "vsize": 577,
            "weight": 2308,
            "locktime": 0,
            "vin": [{
                "txid": "5096612749dade5394ecaafaf9510150491560d8ac7bb6e82956140228d369c4",
                "vout": 1,
                "scriptSig": {
                    "asm": "3045022100d6b464b8e725da9d212c72e3b9ccf18f0e69e93472fa0174ffdcc88954ae41e0022067bc59fa28c91f5b9ffcc6e301e40041af2dd9bbeda2cb733b699a18c40224bf[ALL] 036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5",
                    "hex": "483045022100d6b464b8e725da9d212c72e3b9ccf18f0e69e93472fa0174ffdcc88954ae41e0022067bc59fa28c91f5b9ffcc6e301e40041af2dd9bbeda2cb733b699a18c40224bf0121036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5"
                },
                "sequence": 4294967295,
                "source": 9183532,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 26d93ea759940dbb5ab7c5ae90ef0dd27d23db38 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8gWTydeQfcE4k3gPptnn7VLtf4pcX1SyG"]
                },
                "assets": [{"assetId": "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8", "amount": "140", "decimals": 0}]
            }, {
                "txid": "f3fb909bce0296ba61e5c7883f3326da223644c5512ca4543033b8620d0eb1d6",
                "vout": 1,
                "scriptSig": {
                    "asm": "304402200b190ca84ae7b1652b003dcc6d70a399a1f78309feef213a5db23d9ab032ded602200b0ffeee89e477785e69a3078a4950b367922f5f40a63d84b74abb511e73783a[ALL] 036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5",
                    "hex": "47304402200b190ca84ae7b1652b003dcc6d70a399a1f78309feef213a5db23d9ab032ded602200b0ffeee89e477785e69a3078a4950b367922f5f40a63d84b74abb511e73783a0121036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5"
                },
                "sequence": 4294967295,
                "source": 9183543,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 26d93ea759940dbb5ab7c5ae90ef0dd27d23db38 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8gWTydeQfcE4k3gPptnn7VLtf4pcX1SyG"]
                },
                "assets": [{"assetId": "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8", "amount": "67", "decimals": 0}]
            }, {
                "txid": "6cf2298623f9bfe99c5b9efbc4c8d00df3bb891409335a05bef08d9efa3206dd",
                "vout": 0,
                "scriptSig": {
                    "asm": "3044022002307dfdd41cce6c446229b63fe9d3a563fd4e27032dc3e5d34046618522f7d3022047a5a6d97e4149664e28146c863f1ea4b8be984c0d9270fcac27f85f46144914[ALL] 0388eac7933a3e98b6c1911924068a645e2ee3484e2e9472075123d8c59c8f54a3",
                    "hex": "473044022002307dfdd41cce6c446229b63fe9d3a563fd4e27032dc3e5d34046618522f7d3022047a5a6d97e4149664e28146c863f1ea4b8be984c0d9270fcac27f85f4614491401210388eac7933a3e98b6c1911924068a645e2ee3484e2e9472075123d8c59c8f54a3"
                },
                "sequence": 4294967295,
                "source": 9183599,
                "value": "700000000",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 75e67c19b75da9c118368d7913f1fc138e1883aa OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91475e67c19b75da9c118368d7913f1fc138e1883aa88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DFtVi4ischJbrtfAUKE3ZFq2v3TosX5SwB"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 1b70224202de2f5c09f512c0ea09607b9674612a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9141b70224202de2f5c09f512c0ea09607b9674612a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D7eB7dd8RYANg8FMcML5VRbtdNGuaHMaYb"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 26d93ea759940dbb5ab7c5ae90ef0dd27d23db38 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8gWTydeQfcE4k3gPptnn7VLtf4pcX1SyG"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 4441021500018128b0012430",
                    "hex": "6a0c4441021500018128b0012430",
                    "type": "nulldata"
                },
                "vout": 2
            }, {
                "value": "699998800",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 26d93ea759940dbb5ab7c5ae90ef0dd27d23db38 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8gWTydeQfcE4k3gPptnn7VLtf4pcX1SyG"]
                },
                "vout": 3
            }],
            "hex": "0100000003c469d32802145629e8b67bacd8601549500151f9faaaec9453deda4927619650010000006b483045022100d6b464b8e725da9d212c72e3b9ccf18f0e69e93472fa0174ffdcc88954ae41e0022067bc59fa28c91f5b9ffcc6e301e40041af2dd9bbeda2cb733b699a18c40224bf0121036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5ffffffffd6b10e0d62b8333054a42c51c5443622da26333f88c7e561ba9602ce9b90fbf3010000006a47304402200b190ca84ae7b1652b003dcc6d70a399a1f78309feef213a5db23d9ab032ded602200b0ffeee89e477785e69a3078a4950b367922f5f40a63d84b74abb511e73783a0121036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5ffffffffdd0632fa9e8df0be055a33091489bbf30dd0c8c4fb9e5b9ce9bff9238629f26c000000006a473044022002307dfdd41cce6c446229b63fe9d3a563fd4e27032dc3e5d34046618522f7d3022047a5a6d97e4149664e28146c863f1ea4b8be984c0d9270fcac27f85f4614491401210388eac7933a3e98b6c1911924068a645e2ee3484e2e9472075123d8c59c8f54a3ffffffff0458020000000000001976a9141b70224202de2f5c09f512c0ea09607b9674612a88ac58020000000000001976a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac00000000000000000e6a0c4441021500018128b00124305022b929000000001976a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac00000000"
        };
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(txData.vout[0].assets[0].assetId).to.equal( "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8");
        expect(txData.vout[0].assets[0].amount).to.equal( "1");
        expect(txData.vout[1].assets[0].amount).to.equal( "139");
        expect(txData.vout[1].assets[1].amount).to.equal( "67");
    });
    it('hybrid with change', async () => {
        let txData = {
            "txid": "479f4877dac27878ed918cdd9967e74c65e7bdda6f5cb01df363423950ae6e5b",
            "hash": "479f4877dac27878ed918cdd9967e74c65e7bdda6f5cb01df363423950ae6e5b",
            "version": 1,
            "size": 427,
            "vsize": 427,
            "weight": 1708,
            "locktime": 0,
            "vin": [{
                "txid": "0834cdc1e3b76df5f36a9933a6ed697efb51a886888eb612bf12f363fcc49924",
                "vout": 1,
                "scriptSig": {
                    "asm": "304402203b2e1d2238c862d9c85eb7db7aa2f9c59e6b5f0692bad74c716735546a97a98e022064c841e0a381a01de9ed8899f583131fb6c23e5ca7e8b69ffb5fc347c3c81d35[ALL] 036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5",
                    "hex": "47304402203b2e1d2238c862d9c85eb7db7aa2f9c59e6b5f0692bad74c716735546a97a98e022064c841e0a381a01de9ed8899f583131fb6c23e5ca7e8b69ffb5fc347c3c81d350121036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5"
                },
                "sequence": 4294967295,
                "source": 9186700,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 26d93ea759940dbb5ab7c5ae90ef0dd27d23db38 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8gWTydeQfcE4k3gPptnn7VLtf4pcX1SyG"]
                },
                "assets": [{
                    "assetId": "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8",
                    "amount": "97",
                    "decimals": 0
                }, {"assetId": "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8", "amount": "67", "decimals": 0}]
            }, {
                "txid": "49415a800d78b1bc729de8adbbd873bf80349c07206430a85fefa76282ce356d",
                "vout": 3,
                "scriptSig": {
                    "asm": "3045022100b066c26a5d3db2533d9ed368ded5b5de7c6884c5e52516671738dde4dbc6eefe0220448a1f8568742c773766daf22a3e40f50bd738948f7d478ed62fed1a7a856f93[ALL] 036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5",
                    "hex": "483045022100b066c26a5d3db2533d9ed368ded5b5de7c6884c5e52516671738dde4dbc6eefe0220448a1f8568742c773766daf22a3e40f50bd738948f7d478ed62fed1a7a856f930121036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5"
                },
                "sequence": 4294967295,
                "source": 9186546,
                "value": "841973800",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 26d93ea759940dbb5ab7c5ae90ef0dd27d23db38 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8gWTydeQfcE4k3gPptnn7VLtf4pcX1SyG"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 af3bc48de646c31890271ce47d222c61f17ae1c4 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914af3bc48de646c31890271ce47d222c61f17ae1c488ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DM7ePZskyPzRhQMzyDpfbiuGDEMkymfPjt"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 26d93ea759940dbb5ab7c5ae90ef0dd27d23db38 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8gWTydeQfcE4k3gPptnn7VLtf4pcX1SyG"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 444102150001012420",
                    "hex": "6a09444102150001012420",
                    "type": "nulldata"
                },
                "vout": 2
            }, {
                "value": "841972000",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 26d93ea759940dbb5ab7c5ae90ef0dd27d23db38 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8gWTydeQfcE4k3gPptnn7VLtf4pcX1SyG"]
                },
                "vout": 3
            }],
            "hex": "01000000022499c4fc63f312bf12b68e8886a851fb7e69eda633996af3f56db7e3c1cd3408010000006a47304402203b2e1d2238c862d9c85eb7db7aa2f9c59e6b5f0692bad74c716735546a97a98e022064c841e0a381a01de9ed8899f583131fb6c23e5ca7e8b69ffb5fc347c3c81d350121036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5ffffffff6d35ce8262a7ef5fa8306420079c3480bf73d8bbade89d72bcb1780d805a4149030000006b483045022100b066c26a5d3db2533d9ed368ded5b5de7c6884c5e52516671738dde4dbc6eefe0220448a1f8568742c773766daf22a3e40f50bd738948f7d478ed62fed1a7a856f930121036b6d1bdf31629de2b9b1e5736405a5e8fc79f0cb8ea99e113f2a0d7e127c91a5ffffffff0458020000000000001976a914af3bc48de646c31890271ce47d222c61f17ae1c488ac58020000000000001976a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac00000000000000000b6a0944410215000101242020792f32000000001976a91426d93ea759940dbb5ab7c5ae90ef0dd27d23db3888ac00000000"
        };
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(txData.vout[0].assets[0].assetId).to.equal( "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8");
        expect(txData.vout[0].assets[0].amount).to.equal( "1");
        expect(txData.vout[1].assets[0].amount).to.equal( "66");
        expect(txData.vout[3].assets[0].amount).to.equal( "30");
        expect(txData.vout[3].assets[1].amount).to.equal( "67");
    });
    it('hybrid with error', async () => {
        //hybrid commands should never rap over inputs they do in this one so all should go to change
        let txData = {
            "txid": "588ada3deb7d3a59784211027bfd279a15b0aff5432c91f5499f4c4b71faa358",
            "hash": "588ada3deb7d3a59784211027bfd279a15b0aff5432c91f5499f4c4b71faa358",
            "version": 1,
            "size": 432,
            "vsize": 432,
            "weight": 1728,
            "locktime": 0,
            "vin": [{
                "txid": "ce15be8b739548a935dea12968973b9ded5f02078b933f440e95c10c3d8a9ad2",
                "vout": 3,
                "scriptSig": {
                    "asm": "3045022100b136140d7017077af24dd37ad5664c87e936d412f0e1cba5f4a58d574cc8b4c002204ec723c9bf885a3f4f0616438331d5626c4f191dd483bf9ee633f08e159dbc9e[ALL] 03bf7cf47f1e54b19e18108eed4e32672e12b9a6c4ad2dbd5a3b962333d678db92",
                    "hex": "483045022100b136140d7017077af24dd37ad5664c87e936d412f0e1cba5f4a58d574cc8b4c002204ec723c9bf885a3f4f0616438331d5626c4f191dd483bf9ee633f08e159dbc9e012103bf7cf47f1e54b19e18108eed4e32672e12b9a6c4ad2dbd5a3b962333d678db92"
                },
                "sequence": 4294967295,
                "source": 9243826,
                "value": "79942000",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 9403a53a01ccfa4d49ea81ec6416592f189755ab OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9149403a53a01ccfa4d49ea81ec6416592f189755ab88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DJdiuwKNKcMHeUU8PcfHe7CeovhuBXpCm6"]
                },
                "assets": [{
                    "assetId": "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8",
                    "amount": "116",
                    "decimals": 0
                }, {"assetId": "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8", "amount": "10", "decimals": 0}]
            }, {
                "txid": "ce15be8b739548a935dea12968973b9ded5f02078b933f440e95c10c3d8a9ad2",
                "vout": 1,
                "scriptSig": {
                    "asm": "3045022100c24b8c93e8eb28789978a868c1ba091a9d98f7e8aacae0f38fe7e336d8aca6210220084b5ffd26da0f566ccdd16287a40b6471b14cdf199bff5e39007b89ba921476[ALL] 03bf7cf47f1e54b19e18108eed4e32672e12b9a6c4ad2dbd5a3b962333d678db92",
                    "hex": "483045022100c24b8c93e8eb28789978a868c1ba091a9d98f7e8aacae0f38fe7e336d8aca6210220084b5ffd26da0f566ccdd16287a40b6471b14cdf199bff5e39007b89ba921476012103bf7cf47f1e54b19e18108eed4e32672e12b9a6c4ad2dbd5a3b962333d678db92"
                },
                "sequence": 4294967295,
                "source": 9243826,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 9403a53a01ccfa4d49ea81ec6416592f189755ab OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9149403a53a01ccfa4d49ea81ec6416592f189755ab88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DJdiuwKNKcMHeUU8PcfHe7CeovhuBXpCm6"]
                },
                "assets": [{
                    "assetId": "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8",
                    "amount": "5",
                    "decimals": 0
                }, {"assetId": "Lh7svRw3cTjGkQF9mmnSbFqgaRosuA3kQnTUs8", "amount": "14", "decimals": 0}]
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 2eec5b50936690747c3a5e5b22629ebc81b0d95a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9142eec5b50936690747c3a5e5b22629ebc81b0d95a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D9RCmS81hKDbenCwciBRptv2GxAUKaBKiy"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 9403a53a01ccfa4d49ea81ec6416592f189755ab OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9149403a53a01ccfa4d49ea81ec6416592f189755ab88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DJdiuwKNKcMHeUU8PcfHe7CeovhuBXpCm6"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 44410215000501058127400109",
                    "hex": "6a0d44410215000501058127400109",
                    "type": "nulldata"
                },
                "vout": 2
            }, {
                "value": "79940200",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 d8888ff98a48868df212cd550e82ec40e81feb7a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914d8888ff98a48868df212cd550e82ec40e81feb7a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DQt26DUE6SkNGLvSzDpxhcncJ4NTYHKPuq"]
                },
                "vout": 3
            }],
            "hex": "0100000002d29a8a3d0cc1950e443f938b07025fed9d3b976829a1de35a94895738bbe15ce030000006b483045022100b136140d7017077af24dd37ad5664c87e936d412f0e1cba5f4a58d574cc8b4c002204ec723c9bf885a3f4f0616438331d5626c4f191dd483bf9ee633f08e159dbc9e012103bf7cf47f1e54b19e18108eed4e32672e12b9a6c4ad2dbd5a3b962333d678db92ffffffffd29a8a3d0cc1950e443f938b07025fed9d3b976829a1de35a94895738bbe15ce010000006b483045022100c24b8c93e8eb28789978a868c1ba091a9d98f7e8aacae0f38fe7e336d8aca6210220084b5ffd26da0f566ccdd16287a40b6471b14cdf199bff5e39007b89ba921476012103bf7cf47f1e54b19e18108eed4e32672e12b9a6c4ad2dbd5a3b962333d678db92ffffffff0458020000000000001976a9142eec5b50936690747c3a5e5b22629ebc81b0d95a88ac58020000000000001976a9149403a53a01ccfa4d49ea81ec6416592f189755ab88ac00000000000000000f6a0d4441021500050105812740010968cac304000000001976a914d8888ff98a48868df212cd550e82ec40e81feb7a88ac00000000"
        };
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(txData.vout[0].assets).to.equal( undefined);
        expect(txData.vout[1].assets).to.equal( undefined);
        expect(txData.vout[2].assets).to.equal( undefined);
        expect(txData.vout[3].assets[0].amount).to.equal( "116");
        expect(txData.vout[3].assets[1].amount).to.equal( "10");
        expect(txData.vout[3].assets[2].amount).to.equal( "5");
        expect(txData.vout[3].assets[3].amount).to.equal( "14");
    });
    it('Invalid op code', async () => {
        let txData = {
            "txid": "2e260e6ffa94c76b2db4639cd78978ded445ada0e84b89c2ca9ea97b15fb996f",
            "hash": "2e260e6ffa94c76b2db4639cd78978ded445ada0e84b89c2ca9ea97b15fb996f",
            "version": 1,
            "size": 269,
            "vsize": 269,
            "weight": 1076,
            "locktime": 0,
            "vin": [{
                "txid": "8b3c0f35a1e3784617e8ad069cc813c81d354753f26af4f8ff3b6e26feaaedfc",
                "vout": 1,
                "scriptSig": {
                    "asm": "304402206d42bd4dc5027b3eb00bcb5a3be655162805ca9bf55bde32a2cb1951fc8fb07202206948f5e112f9eecefdbf104110fa79c10c995e4c0961e77e47967f8ffcebf4bd[ALL] 02b653e2ac99413ccfd1de54f240cbea04cecdba7d567b456958eda54f4cced2d3",
                    "hex": "47304402206d42bd4dc5027b3eb00bcb5a3be655162805ca9bf55bde32a2cb1951fc8fb07202206948f5e112f9eecefdbf104110fa79c10c995e4c0961e77e47967f8ffcebf4bd012102b653e2ac99413ccfd1de54f240cbea04cecdba7d567b456958eda54f4cced2d3"
                },
                "sequence": 4294967295,
                "source": 9266585,
                "value": "8343",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 a44641b01272243d9d979b6da72193661ab406ce OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914a44641b01272243d9d979b6da72193661ab406ce88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DL7hXEReYqYa9Gtvny44AkTKKxuEivUYDf"]
                }
            }],
            "vout": [{
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 44410261353363623339666637306666636362386561393061363738653666643131366461323232316563636533316365343264373063643031383335613964646462",
                    "hex": "6a4344410261353363623339666637306666636362386561393061363738653666643131366461323232316563636533316365343264373063643031383335613964646462",
                    "type": "nulldata"
                },
                "vout": 0
            }, {
                "value": "7843",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 a44641b01272243d9d979b6da72193661ab406ce OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914a44641b01272243d9d979b6da72193661ab406ce88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DL7hXEReYqYa9Gtvny44AkTKKxuEivUYDf"]
                },
                "vout": 1
            }],
            "hex": "0100000001fcedaafe266e3bfff8f46af25347351dc813c89c06ade8174678e3a1350f3c8b010000006a47304402206d42bd4dc5027b3eb00bcb5a3be655162805ca9bf55bde32a2cb1951fc8fb07202206948f5e112f9eecefdbf104110fa79c10c995e4c0961e77e47967f8ffcebf4bd012102b653e2ac99413ccfd1de54f240cbea04cecdba7d567b456958eda54f4cced2d3ffffffff020000000000000000456a4344410261353363623339666637306666636362386561393061363738653666643131366461323232316563636533316365343264373063643031383335613964646462a31e0000000000001976a914a44641b01272243d9d979b6da72193661ab406ce88ac00000000"
        };
        let results = await assetDecoder(txData);
        expect(results).to.equal( false);
    });
    it('Opcode 5 with error in output', async () => {
        //asset created but command says to send to output 5 when there are only 2 outputs.
        //Create and send to output to change output
        let txData = {
            "txid": "1d81ec58b0ba2a7de304770c6c01a18d7669fd75ca7ae0fb0f98904b64aadd4e",
            "hash": "1d81ec58b0ba2a7de304770c6c01a18d7669fd75ca7ae0fb0f98904b64aadd4e",
            "version": 1,
            "size": 209,
            "vsize": 209,
            "weight": 836,
            "locktime": 0,
            "vin": [{
                "txid": "ce96ebd4a04207a8568562e6dceb6a0714964d1fd08bf8a796e5194fba5fef3a",
                "vout": 0,
                "scriptSig": {
                    "asm": "304402204a788b958eea5c21a084cb766cf68f07d7d4d1cee27930ce2746982b298fadb102206b21b96d6469215175067724915727161b94b72ae07c92ca9e7e187582430bc3[ALL] 028a930298dfa6a771d9938e632df0dd5c2f4b5b91104e03ee761c24000c778eda",
                    "hex": "47304402204a788b958eea5c21a084cb766cf68f07d7d4d1cee27930ce2746982b298fadb102206b21b96d6469215175067724915727161b94b72ae07c92ca9e7e187582430bc30121028a930298dfa6a771d9938e632df0dd5c2f4b5b91104e03ee761c24000c778eda"
                },
                "sequence": 4294967295,
                "source": 9271093,
                "value": "8343",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 53ae74621146342acdadb29457796cde3faef694 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91453ae74621146342acdadb29457796cde3faef69488ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DCmZcVx7mS8XnMbWCNKhDQS5QT56UU7fPz"]
                }
            }],
            "vout": [{
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 44410205050505", "hex": "6a0744410205050505", "type": "nulldata"},
                "vout": 0
            }, {
                "value": "7843",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 53ae74621146342acdadb29457796cde3faef694 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91453ae74621146342acdadb29457796cde3faef69488ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DCmZcVx7mS8XnMbWCNKhDQS5QT56UU7fPz"]
                },
                "vout": 1
            }],
            "hex": "01000000013aef5fba4f19e596a7f88bd01f4d9614076aebdce6628556a80742a0d4eb96ce000000006a47304402204a788b958eea5c21a084cb766cf68f07d7d4d1cee27930ce2746982b298fadb102206b21b96d6469215175067724915727161b94b72ae07c92ca9e7e187582430bc30121028a930298dfa6a771d9938e632df0dd5c2f4b5b91104e03ee761c24000c778edaffffffff020000000000000000096a0744410205050505a31e0000000000001976a91453ae74621146342acdadb29457796cde3faef69488ac00000000"
        };
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(txData.vout[0].assets).to.equal( undefined);
        expect(txData.vout[1].assets[0].amount).to.equal( "5");
    });
    it('issuance with missing data in encoding', async () => {
        let txData = {
            "txid": "b494d0d6e3d23317e6a2b3c0947dda4b3d24b0ed417290205b9000fba7f5e454",
            "hash": "b494d0d6e3d23317e6a2b3c0947dda4b3d24b0ed417290205b9000fba7f5e454",
            "version": 1,
            "size": 207,
            "vsize": 207,
            "weight": 828,
            "locktime": 0,
            "vin": [{
                "txid": "b393ea35ac7e9fc7fcda258c6e1b16dc2aeede6b31cf58af46450ded6a3f3d81",
                "vout": 1,
                "scriptSig": {
                    "asm": "30440220376a0d491864d8719d5a373b744a0ca889f7bf8e177b20a5d57e0b3a5b981ac60220421a4173cc0dab9fba41a833caec1c12e1d2b2880c79a5f5ea72dfdb25dd0868[ALL] 03aba1e92e22128ab85b0bf7f81703f27643f0f1478c3317d1f5193f060eadd619",
                    "hex": "4730440220376a0d491864d8719d5a373b744a0ca889f7bf8e177b20a5d57e0b3a5b981ac60220421a4173cc0dab9fba41a833caec1c12e1d2b2880c79a5f5ea72dfdb25dd0868012103aba1e92e22128ab85b0bf7f81703f27643f0f1478c3317d1f5193f060eadd619"
                },
                "sequence": 4294967295,
                "source": 9271379,
                "value": "8343",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 1b167009fec5abd20821feafdb827e47aa577593 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9141b167009fec5abd20821feafdb827e47aa57759388ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D7cKfS5qTJQSuscz5oMjSN7eBWjoz1122j"]
                }
            }],
            "vout": [{
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 4441020505", "hex": "6a054441020505", "type": "nulldata"},
                "vout": 0
            }, {
                "value": "7843",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 1b167009fec5abd20821feafdb827e47aa577593 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9141b167009fec5abd20821feafdb827e47aa57759388ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D7cKfS5qTJQSuscz5oMjSN7eBWjoz1122j"]
                },
                "vout": 1
            }],
            "hex": "0100000001813d3f6aed0d4546af58cf316bdeee2adc161b6e8c25dafcc79f7eac35ea93b3010000006a4730440220376a0d491864d8719d5a373b744a0ca889f7bf8e177b20a5d57e0b3a5b981ac60220421a4173cc0dab9fba41a833caec1c12e1d2b2880c79a5f5ea72dfdb25dd0868012103aba1e92e22128ab85b0bf7f81703f27643f0f1478c3317d1f5193f060eadd619ffffffff020000000000000000076a054441020505a31e0000000000001976a9141b167009fec5abd20821feafdb827e47aa57759388ac00000000"
        };
        let results = await assetDecoder(txData);
        expect(txData.vout[0].assets).to.equal( undefined);
        expect(txData.vout[1].assets).to.equal( undefined);
    });
    it('invalid asset creation with an asset as source', async () => {
        let txData = {
            "txid": "2f54fbb450358f10dde9f81906cb2e3e47d493778ba26e942b5b938a2522b12b",
            "hash": "2f54fbb450358f10dde9f81906cb2e3e47d493778ba26e942b5b938a2522b12b",
            "version": 1,
            "size": 174,
            "vsize": 174,
            "weight": 696,
            "locktime": 0,
            "vin": [{
                "txid": "004f932cef695693fbe7cb1edd944e978d0e46a1f5d8db22f802cedc6c9dc43d",
                "vout": 0,
                "scriptSig": {
                    "asm": "3044022063830e7dc979303960fb2513e718cc70dc8af2da0a79cb4e670c52b2a173ce2702201764286a9a83a3e262269e667b8b01e9c21e1c1ac4b87a6e23d5716626d783f5[ALL] 02507efb460f7275966922105c712472ae4760cb1d21d1bcdb188e977653481df8",
                    "hex": "473044022063830e7dc979303960fb2513e718cc70dc8af2da0a79cb4e670c52b2a173ce2702201764286a9a83a3e262269e667b8b01e9c21e1c1ac4b87a6e23d5716626d783f5012102507efb460f7275966922105c712472ae4760cb1d21d1bcdb188e977653481df8"
                },
                "sequence": 4294967295,
                "source": 9301787,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 de88f9a8cd227d2ad447e01adfefee650a04e39a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914de88f9a8cd227d2ad447e01adfefee650a04e39a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DRRke3tzsvsURv3Upz1kG4nSKCwDcLM5Tt"]
                },
                "assets": [{"assetId": "La3Uf4XMuGTBd7TAVwV2wKjtihpUC38nKnhDf4", "amount": "1", "decimals": 0}]
            }],
            "vout": [{
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 444102010110", "hex": "6a06444102010110", "type": "nulldata"},
                "vout": 0
            }],
            "hex": "01000000013dc49d6cdcce02f822dbd8f5a1460e8d974e94dd1ecbe7fb935669ef2c934f00000000006a473044022063830e7dc979303960fb2513e718cc70dc8af2da0a79cb4e670c52b2a173ce2702201764286a9a83a3e262269e667b8b01e9c21e1c1ac4b87a6e23d5716626d783f5012102507efb460f7275966922105c712472ae4760cb1d21d1bcdb188e977653481df8ffffffff010000000000000000086a0644410201011000000000"
        };
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(results.type).to.equal( 'accidental burn');
        expect(results.changes['La3Uf4XMuGTBd7TAVwV2wKjtihpUC38nKnhDf4']['DRRke3tzsvsURv3Upz1kG4nSKCwDcLM5Tt']).to.equal( -1n);
        expect(txData.vout[0].assets).to.equal( undefined);
    });
    it('malformed tx so unintentional burned', async () => {
        let txData = {
            "txid": "693356b6df6bd56c4b51e20d1ea4e9e41b3fdeb54f10893b4310c6972c84044b",
            "hash": "693356b6df6bd56c4b51e20d1ea4e9e41b3fdeb54f10893b4310c6972c84044b",
            "version": 1,
            "size": 356,
            "vsize": 356,
            "weight": 1424,
            "locktime": 0,
            "vin": [{
                "txid": "58aa5bf95f7dcb89b74c3f0aebf1f497bae87ff394e0b306cbf368774f5d2bf9",
                "vout": 0,
                "scriptSig": {
                    "asm": "30440220598c35fba6b93b74ec0bc5d60f4b45433483814425609ed56ed4fdbf9c4904bb022013ab8073d0db4fe6b922361a92b2a6f87d8976d052a88c204bf1081d2bc3a783[ALL] 03e313b5f7873aa3eb06e367f223e08c6e002d386d13b2e6d70a672c08fca58b2b",
                    "hex": "4730440220598c35fba6b93b74ec0bc5d60f4b45433483814425609ed56ed4fdbf9c4904bb022013ab8073d0db4fe6b922361a92b2a6f87d8976d052a88c204bf1081d2bc3a783012103e313b5f7873aa3eb06e367f223e08c6e002d386d13b2e6d70a672c08fca58b2b"
                },
                "sequence": 4294967295,
                "source": 9872769,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 b4cffdadda6cb2b46164cbf8a55ba6f2f4d24a4a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914b4cffdadda6cb2b46164cbf8a55ba6f2f4d24a4a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DMd9LFXqeQSKvhRGPSJysxqeRpLSwdfZrs"]
                },
                "assets": [{"assetId": "La7Qd3L1n6MWQdmiDLBPNBopNtXLfMy1FVyfmA", "amount": "1499", "decimals": 0}]
            }, {
                "txid": "94e6583d9c2590ed0876870d79f0a62e01a578c963bc58b98ee366280916cc20",
                "vout": 1,
                "scriptSig": {
                    "asm": "3044022033f70b0d19f9d00512b3db81bef869b72e3651ebd9905b5ebd964e4282d5a80a022057ea2b11b870eec52036547d171652fcdcdc05a724e77a869e5e2259c045c993[ALL] 03e313b5f7873aa3eb06e367f223e08c6e002d386d13b2e6d70a672c08fca58b2b",
                    "hex": "473044022033f70b0d19f9d00512b3db81bef869b72e3651ebd9905b5ebd964e4282d5a80a022057ea2b11b870eec52036547d171652fcdcdc05a724e77a869e5e2259c045c993012103e313b5f7873aa3eb06e367f223e08c6e002d386d13b2e6d70a672c08fca58b2b"
                },
                "sequence": 4294967295,
                "source": 9872735,
                "value": "49992480",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 b4cffdadda6cb2b46164cbf8a55ba6f2f4d24a4a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914b4cffdadda6cb2b46164cbf8a55ba6f2f4d24a4a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DMd9LFXqeQSKvhRGPSJysxqeRpLSwdfZrs"]
                }
            }],
            "vout": [{
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 444101251f7db0", "hex": "6a07444101251f7db0", "type": "nulldata"},
                "vout": 0
            }, {
                "value": "49992080",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 b4cffdadda6cb2b46164cbf8a55ba6f2f4d24a4a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914b4cffdadda6cb2b46164cbf8a55ba6f2f4d24a4a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DMd9LFXqeQSKvhRGPSJysxqeRpLSwdfZrs"]
                },
                "vout": 1
            }],
            "hex": "0100000002f92b5d4f7768f3cb06b3e094f37fe8ba97f4f1eb0a3f4cb789cb7d5ff95baa58000000006a4730440220598c35fba6b93b74ec0bc5d60f4b45433483814425609ed56ed4fdbf9c4904bb022013ab8073d0db4fe6b922361a92b2a6f87d8976d052a88c204bf1081d2bc3a783012103e313b5f7873aa3eb06e367f223e08c6e002d386d13b2e6d70a672c08fca58b2bffffffff20cc16092866e38eb958bc63c978a5012ea6f0790d877608ed90259c3d58e694010000006a473044022033f70b0d19f9d00512b3db81bef869b72e3651ebd9905b5ebd964e4282d5a80a022057ea2b11b870eec52036547d171652fcdcdc05a724e77a869e5e2259c045c993012103e313b5f7873aa3eb06e367f223e08c6e002d386d13b2e6d70a672c08fca58b2bffffffff020000000000000000096a07444101251f7db090d1fa02000000001976a914b4cffdadda6cb2b46164cbf8a55ba6f2f4d24a4a88ac00000000"
        };
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(results.type).to.equal( 'accidental burn');
        expect(txData.vout[0].assets).to.equal( undefined);
        expect(txData.vout[1].assets).to.equal( undefined);
    });
    it('first opcode 2 in chain 903514354fbc556c5000d70c203dd2fb0cbe5fd4bc9664f31795ca9000ad07f0', async () => {
        let txData = {
            "txid": "903514354fbc556c5000d70c203dd2fb0cbe5fd4bc9664f31795ca9000ad07f0",
            "hash": "903514354fbc556c5000d70c203dd2fb0cbe5fd4bc9664f31795ca9000ad07f0",
            "version": 1,
            "size": 862,
            "vsize": 862,
            "weight": 3448,
            "locktime": 0,
            "vin": [{
                "txid": "76dd75e9e12c5df2189ce1942b01c079dd9bbbfec30d5c48a0107f4d24dbc75b",
                "vout": 1,
                "scriptSig": {
                    "asm": "3045022100dea04788d873960b9faab9f925ede678fbad1d60bd0fecbca6834856291e80920220314ebd3b950389fb9c019f47c7ecc4f88d5b32992916f984d5c23e0bee025f2f[ALL] 039b5585c2cf929977507d799fdb77a8687c2f78502bc0e735eb6eb843fb014441",
                    "hex": "483045022100dea04788d873960b9faab9f925ede678fbad1d60bd0fecbca6834856291e80920220314ebd3b950389fb9c019f47c7ecc4f88d5b32992916f984d5c23e0bee025f2f0121039b5585c2cf929977507d799fdb77a8687c2f78502bc0e735eb6eb843fb014441"
                },
                "sequence": 4294967295,
                "source": 10717872,
                "value": "999974300",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 fc3c20abea2666ebc7efc7bf6bcd5af5a71e6407 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914fc3c20abea2666ebc7efc7bf6bcd5af5a71e640788ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DU8nrLgi2rSBeDpvnurTKfCYWqFfosTT3E"]
                }
            }],
            "vout": [{
                "value": "17100",
                "scriptPubKey": {
                    "asm": "1 03ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff 03f6b41e899c66c0b71d631a111728241c9b8bf4acba12d844aea12e81e70e1d06 2 OP_CHECKMULTISIG",
                    "hex": "512103ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2103f6b41e899c66c0b71d631a111728241c9b8bf4acba12d844aea12e81e70e1d0652ae",
                    "reqSigs": 1,
                    "type": "multisig",
                    "addresses": ["DNVYgAvW5u5DHhuFhBSthQ9aF5C97t49cz", "DCHDFeFiRSk29MjM3V6otzW3G5EsHRTJ74"]
                },
                "vout": 0
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 38c58e230d4c5cc6c942b2f5e346cfd501a02a47 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91438c58e230d4c5cc6c942b2f5e346cfd501a02a4788ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DAKH3NuJAvKrMWn7VsUKqAZeTnkMsyfsx4"]
                },
                "vout": 1
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 0c4658271743667981908174eaac84db69b321da OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9140c4658271743667981908174eaac84db69b321da88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D6FzvAtT7rU8Hgy9zBWkComgwHBgVAbZL5"]
                },
                "vout": 2
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 5a8e77cc65f3fbd3590ba50339bd92c3568eb4c1 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9145a8e77cc65f3fbd3590ba50339bd92c3568eb4c188ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DDPv2NTV6V8imrLhAKx5Nk1qmHek8Mj3d9"]
                },
                "vout": 3
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 34f8050cf643d437653eeb3b63d0430b9521d89f OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91434f8050cf643d437653eeb3b63d0430b9521d89f88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D9yAnwrJ1atepXKv26YzmiBx21bf8ZP6br"]
                },
                "vout": 4
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 128f4bd7ccacf7757e89b92997c17b3a2dedb2a2 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914128f4bd7ccacf7757e89b92997c17b3a2dedb2a288ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D6qEN7Lvypp6WDm95cmXxUsV6svLSGozKW"]
                },
                "vout": 5
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 abea112c8c3e32511d9befed99d72f708286b175 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914abea112c8c3e32511d9befed99d72f708286b17588ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DLp6VKxbzcW1aWjnMqe4RrK8mDJ7HxFuYe"]
                },
                "vout": 6
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f961cfcc069bc1edf1dcd18c9ae56ed7b922d4c8 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f961cfcc069bc1edf1dcd18c9ae56ed7b922d4c888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DTshy6oCCXCdqMCjCeXWvAmuSom4uJ227h"]
                },
                "vout": 7
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 0cc3ef0e8f4f9cabf9a047eb3f95ff49c36bd678 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9140cc3ef0e8f4f9cabf9a047eb3f95ff49c36bd67888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D6JbNHEBriu2MFsDyTLup1NqFWPSU99vUg"]
                },
                "vout": 8
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 99cabbf9375302cb6e367cfa254fd77e8d094e76 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91499cabbf9375302cb6e367cfa254fd77e8d094e7688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DKAGnqFCiQFqgenY4FiigR82ydprXCzxGQ"]
                },
                "vout": 9
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f81699eda4d2eb139955963d6ad8b2590ba2257a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f81699eda4d2eb139955963d6ad8b2590ba2257a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DTksCCP1kjqQBf2Ajoa61nszgzYrxxxWaX"]
                },
                "vout": 10
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 dfe2dc60b670b7a19f3d7fefa55261daeeab999b OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914dfe2dc60b670b7a19f3d7fefa55261daeeab999b88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DRYtzc32XpDN4bWaTWHts5Ws72bxmvwEPK"]
                },
                "vout": 11
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 7e5089a2987508b79691c749bbfddf2afb2d9b1d OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9147e5089a2987508b79691c749bbfddf2afb2d9b1d88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DGezAHKcSLYsLDwBwL9f3ZZQZRVsLcA1qY"]
                },
                "vout": 12
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f4ed3770917bb66169d019ede814118ecfed5e83 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f4ed3770917bb66169d019ede814118ecfed5e8388ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DTU9bAGqwVD1kMZt6AnPYvJaVbHfGXH8zU"]
                },
                "vout": 13
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 e0adadc67100710e3a8e5fadb11cbdaf9856c863 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914e0adadc67100710e3a8e5fadb11cbdaf9856c86388ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DRd5xeHaGiczCyBeYePBAqKinpN4t8PEKc"]
                },
                "vout": 14
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 44410102640f45f1e8a1207386d024cdf0723c616a4b5cad20f20120120220120320120420120520120620120720120820120920120a20120b20120c20120d20120e201240",
                    "hex": "6a4544410102640f45f1e8a1207386d024cdf0723c616a4b5cad20f20120120220120320120420120520120620120720120820120920120a20120b20120c20120d20120e201240",
                    "type": "nulldata"
                },
                "vout": 15
            }, {
                "value": "999947200",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 23243613b91d07a350e16427146527dd1d89a1c8 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91423243613b91d07a350e16427146527dd1d89a1c888ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8LuZyQyRFZcZksVpWbFqYSoPTRT46kMwc"]
                },
                "vout": 16
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 fc3c20abea2666ebc7efc7bf6bcd5af5a71e6407 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914fc3c20abea2666ebc7efc7bf6bcd5af5a71e640788ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DU8nrLgi2rSBeDpvnurTKfCYWqFfosTT3E"]
                },
                "vout": 17
            }],
            "hex": "01000000015bc7db244d7f10a0485c0dc3febb9bdd79c0012b94e19c18f25d2ce1e975dd76010000006b483045022100dea04788d873960b9faab9f925ede678fbad1d60bd0fecbca6834856291e80920220314ebd3b950389fb9c019f47c7ecc4f88d5b32992916f984d5c23e0bee025f2f0121039b5585c2cf929977507d799fdb77a8687c2f78502bc0e735eb6eb843fb014441ffffffff12cc4200000000000047512103ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2103f6b41e899c66c0b71d631a111728241c9b8bf4acba12d844aea12e81e70e1d0652ae58020000000000001976a91438c58e230d4c5cc6c942b2f5e346cfd501a02a4788ac58020000000000001976a9140c4658271743667981908174eaac84db69b321da88ac58020000000000001976a9145a8e77cc65f3fbd3590ba50339bd92c3568eb4c188ac58020000000000001976a91434f8050cf643d437653eeb3b63d0430b9521d89f88ac58020000000000001976a914128f4bd7ccacf7757e89b92997c17b3a2dedb2a288ac58020000000000001976a914abea112c8c3e32511d9befed99d72f708286b17588ac58020000000000001976a914f961cfcc069bc1edf1dcd18c9ae56ed7b922d4c888ac58020000000000001976a9140cc3ef0e8f4f9cabf9a047eb3f95ff49c36bd67888ac58020000000000001976a91499cabbf9375302cb6e367cfa254fd77e8d094e7688ac58020000000000001976a914f81699eda4d2eb139955963d6ad8b2590ba2257a88ac58020000000000001976a914dfe2dc60b670b7a19f3d7fefa55261daeeab999b88ac58020000000000001976a9147e5089a2987508b79691c749bbfddf2afb2d9b1d88ac58020000000000001976a914f4ed3770917bb66169d019ede814118ecfed5e8388ac58020000000000001976a914e0adadc67100710e3a8e5fadb11cbdaf9856c86388ac0000000000000000476a4544410102640f45f1e8a1207386d024cdf0723c616a4b5cad20f20120120220120320120420120520120620120720120820120920120a20120b20120c20120d20120e201240c0fb993b000000001976a91423243613b91d07a350e16427146527dd1d89a1c888ac58020000000000001976a914fc3c20abea2666ebc7efc7bf6bcd5af5a71e640788ac00000000"
        };
        /** @type {DigiAssetIssuance} */let results = await assetDecoder(txData);
        expect(results.metadataHash).to.equal( "f6b41e899c66c0b71d631a111728241c9b8bf4acba12d844aea12e81e70e1d06");
        expect(results.supply).to.equal( 15n);
        expect(results.divisibility).to.equal( 2);
        expect(results.changes['Ua2ehwEAajnSt9DrZ9HVcY8CP4dniXcCwZn3Vs']['DU8nrLgi2rSBeDpvnurTKfCYWqFfosTT3E']).to.equal( 15n);
    });
    it('locked asset issuance no output', async () => {
        let txData = {
            "txid": "589b41dc537dfa29d49f3940522bf3b1bbfc4a8e1b8cfe9223574462d0399b68",
            "hash": "589b41dc537dfa29d49f3940522bf3b1bbfc4a8e1b8cfe9223574462d0399b68",
            "version": 1,
            "size": 299,
            "vsize": 299,
            "weight": 1196,
            "locktime": 0,
            "vin": [{
                "txid": "e4bd2e6950a9cfa48e8718692cdfa006d98ded82f34a3c667d6325f783c06144",
                "vout": 2,
                "scriptSig": {
                    "asm": "3045022100a828a8aa887aa1e9478ed96ea2ad7d8452cd8368e1e5be884c1b4d5c3848e8d502206225bf087612b458e70c78203ab004888e52f63eb6ffca7d19f4f5bc94c92fbe[ALL] 020327216922c120a384439faa2e57130ccc0e6bd8c17bf6b0061fa0f9c231b2ca",
                    "hex": "483045022100a828a8aa887aa1e9478ed96ea2ad7d8452cd8368e1e5be884c1b4d5c3848e8d502206225bf087612b458e70c78203ab004888e52f63eb6ffca7d19f4f5bc94c92fbe0121020327216922c120a384439faa2e57130ccc0e6bd8c17bf6b0061fa0f9c231b2ca"
                },
                "sequence": 4294967295,
                "source": 11064853,
                "value": "49995046",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 1673a6753241326e0fa0a90b720903de07db7746 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9141673a6753241326e0fa0a90b720903de07db774688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D7Bowzo4XauAZgjXuk7V9QhwRAa6uZcUEh"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 7afd192dd1aadbc15525f414d079e3a712ef6833 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9147afd192dd1aadbc15525f414d079e3a712ef683388ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DGMQBF6KvmdDyyAESvaCtrGxfPz3TKCj9k"]
                },
                "vout": 0
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 44410101467b83cb5f2588422ea91500029ee79ed60826f9fb6be2a4df55ccce41de5287dc4e7515346c44f4a8eeb3a704e2dae4baf01811200000200010",
                    "hex": "6a3e44410101467b83cb5f2588422ea91500029ee79ed60826f9fb6be2a4df55ccce41de5287dc4e7515346c44f4a8eeb3a704e2dae4baf01811200000200010",
                    "type": "nulldata"
                },
                "vout": 1
            }, {
                "value": "49992929",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 1673a6753241326e0fa0a90b720903de07db7746 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9141673a6753241326e0fa0a90b720903de07db774688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D7Bowzo4XauAZgjXuk7V9QhwRAa6uZcUEh"]
                },
                "vout": 2
            }],
            "hex": "01000000014461c083f725637d663c4af382ed8dd906a0df2c6918878ea4cfa950692ebde4020000006b483045022100a828a8aa887aa1e9478ed96ea2ad7d8452cd8368e1e5be884c1b4d5c3848e8d502206225bf087612b458e70c78203ab004888e52f63eb6ffca7d19f4f5bc94c92fbe0121020327216922c120a384439faa2e57130ccc0e6bd8c17bf6b0061fa0f9c231b2caffffffff0358020000000000001976a9147afd192dd1aadbc15525f414d079e3a712ef683388ac0000000000000000406a3e44410101467b83cb5f2588422ea91500029ee79ed60826f9fb6be2a4df55ccce41de5287dc4e7515346c44f4a8eeb3a704e2dae4baf01811200000200010e1d4fa02000000001976a9141673a6753241326e0fa0a90b720903de07db774688ac00000000"
        };
        /** @type {DigiAssetIssuance} */let results = await assetDecoder(txData);
        expect(results).to.equal( false);
    });
    it('2 different assets on input 0a1126a58ffb3520350207c95dd4b974fbc89d1819793c370189cddddef593ef', async () => {
        let txData = {
            "txid": "0a1126a58ffb3520350207c95dd4b974fbc89d1819793c370189cddddef593ef",
            "hash": "0a1126a58ffb3520350207c95dd4b974fbc89d1819793c370189cddddef593ef",
            "version": 1,
            "size": 425,
            "vsize": 425,
            "weight": 1700,
            "locktime": 0,
            "vin": [{
                "txid": "8d11331f291c5b67a4600a22eb9e3c990220ce0599a2455e52ff8439b7387d1d",
                "vout": 3,
                "scriptSig": {
                    "asm": "304402205949e386fc3eb6392f9c0e10d35991881007c28d7c1af20208103e9ece5e70b20220513ed41a610cc82c05a206248159d8ba6340f0d9d95f84e7aeb4019a3e2c74fc[ALL] 034e31ff8c1dcf2133cc94ca49f6222dd80102345019ae640fd4bf8d27fb3e54c4",
                    "hex": "47304402205949e386fc3eb6392f9c0e10d35991881007c28d7c1af20208103e9ece5e70b20220513ed41a610cc82c05a206248159d8ba6340f0d9d95f84e7aeb4019a3e2c74fc0121034e31ff8c1dcf2133cc94ca49f6222dd80102345019ae640fd4bf8d27fb3e54c4"
                },
                "sequence": 4294967295,
                "source": 11792283,
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 7b1cb9e12572701a744cbe7bcbee787be92f6850 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9147b1cb9e12572701a744cbe7bcbee787be92f685088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DGN44n3WQKmG43xTxZvmY33se3HT69vLX5"]
                },
                "assets": [{
                    "assetId": "La9GoZ7NrKGbA3nMSUMjrZ1ETNacxjNPJmCRbX",
                    "amount": "6",
                    "decimals": 0
                }, {"assetId": "Ua4MgDjpyYuwgWkFAgVAVHBvhpctX6SD857KDH", "amount": "47", "decimals": 0}]
            }, {
                "txid": "8d11331f291c5b67a4600a22eb9e3c990220ce0599a2455e52ff8439b7387d1d",
                "vout": 2,
                "scriptSig": {
                    "asm": "30440220374d5be03ea3f105b633e65c51b8416329d629f55a7a029aeed729e07e93e02502204e0047e854d85984ccb7936979f2be5f1b325044775591adc8f5cc26c3be16fe[ALL] 0348d7d9961d99135b55ea04dcc549e474424642c5ec5fb600277805975449feac",
                    "hex": "4730440220374d5be03ea3f105b633e65c51b8416329d629f55a7a029aeed729e07e93e02502204e0047e854d85984ccb7936979f2be5f1b325044775591adc8f5cc26c3be16fe01210348d7d9961d99135b55ea04dcc549e474424642c5ec5fb600277805975449feac"
                },
                "sequence": 4294967295,
                "source": 11792283,
                "value": "4457000",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 27f60b47cdf8eb99ca71e2fa08dff6a85751f933 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91427f60b47cdf8eb99ca71e2fa08dff6a85751f93388ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8nPeBTZ42WYGQoSZcSbxjxPwYzKfNn93b"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 efc99c66046c8723ce109a9c3dbac8de0b99afb5 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914efc99c66046c8723ce109a9c3dbac8de0b99afb588ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DSzyZH8t4R4K4ddof9zF9Di9F1AzDxuvYT"]
                },
                "vout": 0
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 4441021580010001",
                    "hex": "6a084441021580010001",
                    "type": "nulldata"
                },
                "vout": 1
            }, {
                "value": "4455700",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 27f60b47cdf8eb99ca71e2fa08dff6a85751f933 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91427f60b47cdf8eb99ca71e2fa08dff6a85751f93388ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8nPeBTZ42WYGQoSZcSbxjxPwYzKfNn93b"]
                },
                "vout": 2
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 7b1cb9e12572701a744cbe7bcbee787be92f6850 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9147b1cb9e12572701a744cbe7bcbee787be92f685088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DGN44n3WQKmG43xTxZvmY33se3HT69vLX5"]
                },
                "vout": 3
            }],
            "hex": "01000000021d7d38b73984ff525e45a29905ce2002993c9eeb220a60a4675b1c291f33118d030000006a47304402205949e386fc3eb6392f9c0e10d35991881007c28d7c1af20208103e9ece5e70b20220513ed41a610cc82c05a206248159d8ba6340f0d9d95f84e7aeb4019a3e2c74fc0121034e31ff8c1dcf2133cc94ca49f6222dd80102345019ae640fd4bf8d27fb3e54c4ffffffff1d7d38b73984ff525e45a29905ce2002993c9eeb220a60a4675b1c291f33118d020000006a4730440220374d5be03ea3f105b633e65c51b8416329d629f55a7a029aeed729e07e93e02502204e0047e854d85984ccb7936979f2be5f1b325044775591adc8f5cc26c3be16fe01210348d7d9961d99135b55ea04dcc549e474424642c5ec5fb600277805975449feacffffffff0458020000000000001976a914efc99c66046c8723ce109a9c3dbac8de0b99afb588ac00000000000000000a6a08444102158001000114fd4300000000001976a91427f60b47cdf8eb99ca71e2fa08dff6a85751f93388ac58020000000000001976a9147b1cb9e12572701a744cbe7bcbee787be92f685088ac00000000",
            "blockhash": "596342637df15fa65669c8dc419c789e5a7f2796e98b88c166b9c8ffdfeb0b1a",
            "height": 11792312,
            "time": 1603843834
        };
        /*
        input:
        La9GoZ7NrKGbA3nMSUMjrZ1ETNacxjNPJmCRbX: 6
        Ua4MgDjpyYuwgWkFAgVAVHBvhpctX6SD857KDH: 47

        output:
        looks like 1 asset each intended for output 0 but input system does not like that they are both on same input
        matches original server so left

        //todo  fix for v3
         */
        /** @type {DigiAssetTransference} */let results = await assetDecoder(txData);
        expect(txData.vout[3].assets.length).to.equal( 2);
        expect(results.changes['La9GoZ7NrKGbA3nMSUMjrZ1ETNacxjNPJmCRbX']['DGN44n3WQKmG43xTxZvmY33se3HT69vLX5']).to.equal( 0n);
        expect(results.changes['Ua4MgDjpyYuwgWkFAgVAVHBvhpctX6SD857KDH']['DGN44n3WQKmG43xTxZvmY33se3HT69vLX5']).to.equal( 0n);
    });
    it('transfer with no actual assets 1a84e79e8a623c563044dd0aff8681e963e112929d906d79455d1878aa215b02', async () => {
        let txData = {
            "txid": "1a84e79e8a623c563044dd0aff8681e963e112929d906d79455d1878aa215b02",
            "hash": "1a84e79e8a623c563044dd0aff8681e963e112929d906d79455d1878aa215b02",
            "version": 1,
            "size": 423,
            "vsize": 423,
            "weight": 1692,
            "locktime": 0,
            "vin": [{
                "txid": "eadf026a12cf3b1a1ae6e49136253df00329a1da10d206e51f374844883e88c2",
                "vout": 0,
                "scriptSig": {
                    "asm": "3044022023db59852ea735ad1ea7ed5444d862f20a0c0970ba508e303c744512ba31569602204703336bc98be4ae19b1099f8e7de2ee7813aafdc41477eda1acb8f8dab5dd9f[ALL] 025e1ef16ecbaedccc4cf7544c02beade3b699f439cfafa4eb1c112960562575af",
                    "hex": "473044022023db59852ea735ad1ea7ed5444d862f20a0c0970ba508e303c744512ba31569602204703336bc98be4ae19b1099f8e7de2ee7813aafdc41477eda1acb8f8dab5dd9f0121025e1ef16ecbaedccc4cf7544c02beade3b699f439cfafa4eb1c112960562575af"
                },
                "sequence": 4294967295,
                "source": 12140803,
                "value": "9899387",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 5f707a53a53f250442d795bc08ba20d721cf7690 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9145f707a53a53f250442d795bc08ba20d721cf769088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DDqjUaZxUxPSfdz9WShAZYcdPb8Ggf9jqq"]
                }
            }, {
                "txid": "3a0d065319ca25b5d47b87e389f82b52a94a80fb9896ebd3b406e770aac8f855",
                "vout": 0,
                "scriptSig": {
                    "asm": "3044022072f2de1adc40424d2b5eac0afe349dbaf181f36c523443bd339bb40100f13aa2022014222ace3832e17036e772d07fd910cb408c44a90ef44a1fc39f6438241e5dc9[ALL] 025e1ef16ecbaedccc4cf7544c02beade3b699f439cfafa4eb1c112960562575af",
                    "hex": "473044022072f2de1adc40424d2b5eac0afe349dbaf181f36c523443bd339bb40100f13aa2022014222ace3832e17036e772d07fd910cb408c44a90ef44a1fc39f6438241e5dc90121025e1ef16ecbaedccc4cf7544c02beade3b699f439cfafa4eb1c112960562575af"
                },
                "sequence": 4294967295,
                "source": 11988316,
                "value": "11879355",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 5f707a53a53f250442d795bc08ba20d721cf7690 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9145f707a53a53f250442d795bc08ba20d721cf769088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DDqjUaZxUxPSfdz9WShAZYcdPb8Ggf9jqq"]
                }
            }],
            "vout": [{
                "value": "21559747",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 5f707a53a53f250442d795bc08ba20d721cf7690 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9145f707a53a53f250442d795bc08ba20d721cf769088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DDqjUaZxUxPSfdz9WShAZYcdPb8Ggf9jqq"]
                },
                "vout": 0
            }, {
                "value": "217775",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 27f60b47cdf8eb99ca71e2fa08dff6a85751f933 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91427f60b47cdf8eb99ca71e2fa08dff6a85751f93388ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["D8nPeBTZ42WYGQoSZcSbxjxPwYzKfNn93b"]
                },
                "vout": 1
            }, {
                "value": "0",
                "scriptPubKey": {"asm": "OP_RETURN 444102150000", "hex": "6a06444102150000", "type": "nulldata"},
                "vout": 2
            }, {
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 8e7ead7b12fab98af5f7a747652a9a13cfac3e22 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9148e7ead7b12fab98af5f7a747652a9a13cfac3e2288ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DJ8YFDWJtmQ6kQEtVK21hjtfPYNgBYM4gN"]
                },
                "vout": 3
            }],
            "hex": "0100000002c2883e884448371fe506d210daa12903f03d253691e4e61a1a3bcf126a02dfea000000006a473044022023db59852ea735ad1ea7ed5444d862f20a0c0970ba508e303c744512ba31569602204703336bc98be4ae19b1099f8e7de2ee7813aafdc41477eda1acb8f8dab5dd9f0121025e1ef16ecbaedccc4cf7544c02beade3b699f439cfafa4eb1c112960562575afffffffff55f8c8aa70e706b4d3eb9698fb804aa9522bf889e3877bd4b525ca1953060d3a000000006a473044022072f2de1adc40424d2b5eac0afe349dbaf181f36c523443bd339bb40100f13aa2022014222ace3832e17036e772d07fd910cb408c44a90ef44a1fc39f6438241e5dc90121025e1ef16ecbaedccc4cf7544c02beade3b699f439cfafa4eb1c112960562575afffffffff04c3f94801000000001976a9145f707a53a53f250442d795bc08ba20d721cf769088acaf520300000000001976a91427f60b47cdf8eb99ca71e2fa08dff6a85751f93388ac0000000000000000086a0644410215000058020000000000001976a9148e7ead7b12fab98af5f7a747652a9a13cfac3e2288ac00000000"
        };
        let results = await assetDecoder(txData);
        expect(results).to.equal( false);
    });
    it('asset with ilegally large quantity', async () => {
        //DigiAsset specs put max quantity at 18,014,398,509,481,983 so consider issuances larger then this a burn.
        // Personally I am ok with 2^64-1 but the specs do have a reason for the max size
        let txData = {
            "txid": "1d04cd23bf6ea9409dfe0679d357c2f23bbb169aa24e13dfdb737dbd760604f0",
            "hash": "1d04cd23bf6ea9409dfe0679d357c2f23bbb169aa24e13dfdb737dbd760604f0",
            "version": 1,
            "size": 299,
            "vsize": 299,
            "weight": 1196,
            "locktime": 0,
            "vin": [{
                "txid": "f873305498ec5374847cec13acef621414fd09c73b07d89b9ad5b7a42b23d63b",
                "vout": 1,
                "scriptSig": {
                    "asm": "3045022100e262b283625550662f4c341b872aaa0159ff66010b098bed6545300b4ded00a702205d365aeac7e9d879883460d480cc0c1cce81754f8b0a445af5acd39d7a9832ed[ALL] 0208946228c672f6a9807f4e3b7950bae7521070ee956064be674fa182fd7c6581",
                    "hex": "483045022100e262b283625550662f4c341b872aaa0159ff66010b098bed6545300b4ded00a702205d365aeac7e9d879883460d480cc0c1cce81754f8b0a445af5acd39d7a9832ed01210208946228c672f6a9807f4e3b7950bae7521070ee956064be674fa182fd7c6581"
                },
                "sequence": 4294967295,
                "source": 12654562,
                "value": "49999575",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 46997b02e504c3df9f84ec604ded11562fb91f20 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91446997b02e504c3df9f84ec604ded11562fb91f2088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DBaPhhXa2yykd5JQjvmqMbQv4i8jwapJ5Q"]
                }
            }],
            "vout": [{
                "value": "600",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 a7df9fe867b38760db604f18f245065556d11759 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914a7df9fe867b38760db604f18f245065556d1175988ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DLSjH1L7htT24xKEZeZbeMUi7TMg6i2A7g"]
                },
                "vout": 0
            }, {
                "value": "0",
                "scriptPubKey": {
                    "asm": "OP_RETURN 4441010186fa1b2d8a9127f51ee65f7e67984da1b77c098b4a8f90ba8ead6185da185a57a23db396128295748f74738bc7a1da452011c29b7c00007c0010",
                    "hex": "6a3e4441010186fa1b2d8a9127f51ee65f7e67984da1b77c098b4a8f90ba8ead6185da185a57a23db396128295748f74738bc7a1da452011c29b7c00007c0010",
                    "type": "nulldata"
                },
                "vout": 1
            }, {
                "value": "49996975",
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 46997b02e504c3df9f84ec604ded11562fb91f20 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a91446997b02e504c3df9f84ec604ded11562fb91f2088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": ["DBaPhhXa2yykd5JQjvmqMbQv4i8jwapJ5Q"]
                },
                "vout": 2
            }],
            "hex": "01000000013bd6232ba4b7d59a9bd8073bc709fd141462efac13ec7c847453ec98543073f8010000006b483045022100e262b283625550662f4c341b872aaa0159ff66010b098bed6545300b4ded00a702205d365aeac7e9d879883460d480cc0c1cce81754f8b0a445af5acd39d7a9832ed01210208946228c672f6a9807f4e3b7950bae7521070ee956064be674fa182fd7c6581ffffffff0358020000000000001976a914a7df9fe867b38760db604f18f245065556d1175988ac0000000000000000406a3e4441010186fa1b2d8a9127f51ee65f7e67984da1b77c098b4a8f90ba8ead6185da185a57a23db396128295748f74738bc7a1da452011c29b7c00007c0010afe4fa02000000001976a91446997b02e504c3df9f84ec604ded11562fb91f2088ac00000000"
        };
        let results = await assetDecoder(txData);
        expect(results).to.equal( false);
    });

    it('unmovable asset', async () => {
        let txData = {"txid":"522b12006a8bd21c945b7256733745588c55b074e3f0b2a905aba8861a261354","hash":"41f6f61e0a529ca88cc1ed86ba69e91bb801d35a7736042917ee6313a9eb4d96","version":1,"size":277,"vsize":196,"weight":781,"locktime":0,"vin":[{"txid":"9d7206d18679a663e9698a80cbf4949ef9940c346e4336f5d70a557dede20faa","vout":2,"scriptSig":{"asm":"","hex":""},"txinwitness":["304402202e8e796eb6ae4b6a2da3e8db545f6d9c0e928a9e95f060ea6521e9aa673998550220157a3689a604f90d0e20ef3d158e49afe8617f52df278d15f80ab4b5b56c638d01","0248cce9c5ad00e5c18eb3138495327b333ded7c3364b35d02272c569e78bb56a4"],"sequence":4294967295,"source":12830249,"value":"100000000","scriptPubKey":{"asm":"0 dc5db823be5eddf34c379732aa68a27d1b891f86","hex":"0014dc5db823be5eddf34c379732aa68a27d1b891f86","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qm3wmsga7tmwlxnphjue2569z05dcj8uxjx69p6"]}}],"vout":[{"value":"600","scriptPubKey":{"asm":"0 b350efa6c03fe65a47207cddb0c10c5840b513d1","hex":"0014b350efa6c03fe65a47207cddb0c10c5840b513d1","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qkdgwlfkq8ln953eq0nwmpsgvtpqt2y73vjz7j7"]},"vout":0,"assets":[{"assetId":"Ua9BVKiWLAQvsb2yonwVxv6CdEcxQHBN2qj8nv","amount":"1","decimals":0,"rules":true}]},{"value":"0","scriptPubKey":{"asm":"OP_RETURN 444103044c158eab1c9c2e0dda6c357733f7ac9eae786f9cac2b3f31660afdb672e43e9c014000000f000100","hex":"6a2c444103044c158eab1c9c2e0dda6c357733f7ac9eae786f9cac2b3f31660afdb672e43e9c014000000f000100","type":"nulldata"},"vout":1},{"value":"99999008","scriptPubKey":{"asm":"0 dc5db823be5eddf34c379732aa68a27d1b891f86","hex":"0014dc5db823be5eddf34c379732aa68a27d1b891f86","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qm3wmsga7tmwlxnphjue2569z05dcj8uxjx69p6"]},"vout":2}],"hex":"01000000000101aa0fe2ed7d550ad7f536436e340c94f99e94f4cb808a69e963a67986d106729d0200000000ffffffff035802000000000000160014b350efa6c03fe65a47207cddb0c10c5840b513d100000000000000002e6a2c444103044c158eab1c9c2e0dda6c357733f7ac9eae786f9cac2b3f31660afdb672e43e9c014000000f00010020ddf50500000000160014dc5db823be5eddf34c379732aa68a27d1b891f860247304402202e8e796eb6ae4b6a2da3e8db545f6d9c0e928a9e95f060ea6521e9aa673998550220157a3689a604f90d0e20ef3d158e49afe8617f52df278d15f80ab4b5b56c638d01210248cce9c5ad00e5c18eb3138495327b333ded7c3364b35d02272c569e78bb56a400000000","blockhash":"0000000000000001a14327a7a961067581afe48485fc98ca4504bcef88b3c7b9","height":13564060,"time":1630319447};
        let results = await assetDecoder(txData);
        expect(results.rules.rewritable).to.equal( false);
        expect(results.rules.vote.options.length).to.equal( 0);
        expect(results.rules.vote.movable).to.equal( false);
    });

});




/*
██╗   ██╗██████╗     ████████╗██████╗  █████╗ ███╗   ██╗███████╗ █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██║   ██║╚════██╗    ╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
██║   ██║ █████╔╝       ██║   ██████╔╝███████║██╔██╗ ██║███████╗███████║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
╚██╗ ██╔╝ ╚═══██╗       ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
 ╚████╔╝ ██████╔╝       ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
  ╚═══╝  ╚═════╝        ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
 */

describe("V3 Transactions",function() {
    this.timeout(20000);
    it('V3 issuance-royalty required', async()=>{
        //c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"txid":"a6326462e01a450d3fd96da45b257577d58e14895cc61b4e9688488ec17bed8d","hash":"a6326462e01a450d3fd96da45b257577d58e14895cc61b4e9688488ec17bed8d","version":1,"size":377,"vsize":377,"weight":1508,"locktime":0,"vin":[{"txid":"a3c0b13a3737f00ee593ae98f423c30f4a2004e7107e484927f2bf637b9c5212","vout":1,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"asm":"OP_HASH160 00c025be6a7daa4cd928a96f3f2ae3a61eab17f1 OP_EQUAL","hex":"a91400c025be6a7daa4cd928a96f3f2ae3a61eab17f187","reqSigs":1,"type":"scripthash","addresses":["SMMyDUnFBnkuAbYDYBBekuRhQMD343xuCP"]},"sequence":4294967295},{"txid":"8bbedee99f2361e2773b79893e8e99340713c3dbc4050cf2294c3a609ed7157a","vout":0,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"asm":"OP_DUP OP_HASH160 1f173ce8cf2452e33dfbfe967cea1e2f8faf719a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9141f173ce8cf2452e33dfbfe967cea1e2f8faf719a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["D7yVKodCytSVaKvHipRLbS8KoePpu2y1Ls"]},"sequence":4294967295}],"vout":[{"value":"600","n":0,"scriptPubKey":{"asm":"0 3176de7edbec037d47156572f31c4ebef4ab5e09","hex":"00143176de7edbec037d47156572f31c4ebef4ab5e09","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qx9mdulkmasph63c4v4e0x8zwhm62khsf83qc2w"]}},{"value":"600","n":1,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 7bea5080db16e83c0f82e3f7f42dadc1892fc09a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9147bea5080db16e83c0f82e3f7f42dadc1892fc09a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DGSJMJpj3dwx2yhgGg2Hi6Gpmo5YvVsPRd"]}},{"value":"600","n":2,"scriptPubKey":{"asm":"0 326c4825e3f1798962988f99ea772ea97076fb50","hex":"0014326c4825e3f1798962988f99ea772ea97076fb50","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3"]}},{"value":"600","n":3,"scriptPubKey":{"asm":"0 b956001b3ab16843b17f807d420bace37aca7d24","hex":"0014b956001b3ab16843b17f807d420bace37aca7d24","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qh9tqqxe6k95y8vtlsp75yzavudav5lfyut0n3v"]}},{"value":"500000000","n":4,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 eaa5333e82962b3ea4a4296b0cd386e38fa99e21 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914eaa5333e82962b3ea4a4296b0cd386e38fa99e2188ac","reqSigs":1,"type":"pubkeyhash","addresses":["DSXnZTQABeBrJEU5b2vpnysoGiiZwjKKDY"]}},{"value":"0","n":5,"scriptPubKey":{"asm":"OP_RETURN 44410303f7d13a5addd60d72be19dcc39f21672f5e26b8e71711bcb677623a321ea22ca8331010401f03054002201210","hex":"6a3044410303f7d13a5addd60d72be19dcc39f21672f5e26b8e71711bcb677623a321ea22ca8331010401f03054002201210","type":"nulldata"}},{"value":"902380010","n":6,"scriptPubKey":{"asm":"0 94c5d6f3558ae0914812236777ea05fa0418eeb0","hex":"001494c5d6f3558ae0914812236777ea05fa0418eeb0","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qjnzadu643tsfzjqjydnh06s9lgzp3m4sg3j68x"]}},{"value":"98837586602","n":7,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 ca5f3d7387be0d6364dadbadb7c6fed5d015bc38 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914ca5f3d7387be0d6364dadbadb7c6fed5d015bc3888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPb98QJ8GLR6yBC8Ybt57ybrELDkM6w3bM"]}}]};
        /** @type {DigiAssetIssuance} */let results=await assetDecoder(txData);
        expect(results.assetId).to.equal('La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb');
        expect(results.changes['La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb']['dgb1qh9tqqxe6k95y8vtlsp75yzavudav5lfyut0n3v']).to.equal(5n);
        expect(results.changes['La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb']['dgb1qx9mdulkmasph63c4v4e0x8zwhm62khsf83qc2w']).to.equal(100n);
        expect(results.changes['La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb']['DGSJMJpj3dwx2yhgGg2Hi6Gpmo5YvVsPRd']).to.equal(100n);
        expect(results.changes['La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb']['dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3']).to.equal(100n);
        expect(results.rules.royalties['DSXnZTQABeBrJEU5b2vpnysoGiiZwjKKDY']).to.equal(500000000n);
        expect(results.version).to.equal(3);
        expect(results.supply).to.equal(305n);
        expect(results.issuer).to.equal('SMMyDUnFBnkuAbYDYBBekuRhQMD343xuCP');
        expect(txData.vout[0].assets[0].assetId).to.equal("La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb");
        expect(txData.vout[0].assets[0].amount).to.equal("100");
        expect(txData.vout[0].assets[0].decimals).to.equal(0);
        expect(txData.vout[0].assets[0].rules).to.equal(true);
    });
    it('V3 transfer-royalty required and paid to little', async()=>{
        //df6d53fc3bd4698306219e370719b81b2c80a11641a34607c97685f1fc370191
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"txid":"40a132d4d92340a55e2706fb24a1d5d96e6066ab696029a49a1ff48e720914a0","hash":"40a132d4d92340a55e2706fb24a1d5d96e6066ab696029a49a1ff48e720914a0","version":1,"size":277,"vsize":277,"weight":1108,"locktime":0,"vin":[{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":0,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["SMMyDUnFBnkuAbYDYBBekuRhQMD343xuCP"]},"sequence":4294967295,"assets":[{"assetId":"La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb","amount":"100","decimals":0}]},{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":7,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["D7yVKodCytSVaKvHipRLbS8KoePpu2y1Ls"]},"sequence":4294967295}],"vout":[{"value":"600","n":0,"scriptPubKey":{"asm":"0 326c4825e3f1798962988f99ea772ea97076fb50","hex":"0014326c4825e3f1798962988f99ea772ea97076fb50","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3"]}},{"value":"600","n":1,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 7bea5080db16e83c0f82e3f7f42dadc1892fc09a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9147bea5080db16e83c0f82e3f7f42dadc1892fc09a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DGSJMJpj3dwx2yhgGg2Hi6Gpmo5YvVsPRd"]}},{"value":"600","n":2,"scriptPubKey":{"asm":"0 3176de7edbec037d47156572f31c4ebef4ab5e09","hex":"00143176de7edbec037d47156572f31c4ebef4ab5e09","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qx9mdulkmasph63c4v4e0x8zwhm62khsf83qc2w"]}},{"value":"0","n":3,"scriptPubKey":{"asm":"OP_RETURN 44410315400205002550","hex":"6a0a44410315400205002550","type":"nulldata"}},{"value":"500000000","n":4,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 eaa5333e82962b3ea4a4296b0cd386e38fa99e21 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914eaa5333e82962b3ea4a4296b0cd386e38fa99e2188ac","reqSigs":1,"type":"pubkeyhash","addresses":["DSXnZTQABeBrJEU5b2vpnysoGiiZwjKKDY"]}},{"value":"98337584762","n":5,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 ca5f3d7387be0d6364dadbadb7c6fed5d015bc38 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914ca5f3d7387be0d6364dadbadb7c6fed5d015bc3888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPb98QJ8GLR6yBC8Ybt57ybrELDkM6w3bM"]}}]};
        /** @type {DigiAssetTransference} */let results=await assetDecoder(txData);
        expect(results.changes['La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb']['SMMyDUnFBnkuAbYDYBBekuRhQMD343xuCP']).to.equal(-100n);
        expect(results.type).to.equal("accidental burn");
    });
    it('V3 transfer-royalty required and not paid', async()=>{
        //5cf6e74c2a8874817412a19e67d4ca85c557b0ac4f1066f1d274c2bf926b7b68
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"txid":"5366d6c88a60a06191aa72d93effa122c35c5de59074a7c89f75ebe637b30c3a","hash":"5366d6c88a60a06191aa72d93effa122c35c5de59074a7c89f75ebe637b30c3a","version":1,"size":210,"vsize":210,"weight":840,"locktime":0,"vin":[{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":1,"value":"600","scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["dgb1qx9mdulkmasph63c4v4e0x8zwhm62khsf83qc2w"]},"sequence":4294967295,"assets":[{"assetId":"La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb","amount":"100","decimals":0}]},{"txid":"df6d53fc3bd4698306219e370719b81b2c80a11641a34607c97685f1fc370191","vout":5,"value":"98337584762","scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["DPb98QJ8GLR6yBC8Ybt57ybrELDkM6w3bM"]},"sequence":4294967295}],"vout":[{"value":"600","n":0,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 7bea5080db16e83c0f82e3f7f42dadc1892fc09a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9147bea5080db16e83c0f82e3f7f42dadc1892fc09a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DGSJMJpj3dwx2yhgGg2Hi6Gpmo5YvVsPRd"]}},{"value":"600","n":1,"scriptPubKey":{"asm":"0 3176de7edbec037d47156572f31c4ebef4ab5e09","hex":"00143176de7edbec037d47156572f31c4ebef4ab5e09","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qx9mdulkmasph63c4v4e0x8zwhm62khsf83qc2w"]}},{"value":"0","n":2,"scriptPubKey":{"asm":"OP_RETURN 4441031540012051","hex":"6a084441031540012051","type":"nulldata"}},{"value":"97837583558","n":3,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 ca5f3d7387be0d6364dadbadb7c6fed5d015bc38 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914ca5f3d7387be0d6364dadbadb7c6fed5d015bc3888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPb98QJ8GLR6yBC8Ybt57ybrELDkM6w3bM"]}}]};
        /** @type {DigiAssetTransference} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("accidental burn");
        expect(results.changes['La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb']['dgb1qx9mdulkmasph63c4v4e0x8zwhm62khsf83qc2w']).to.equal(-100n);
        expect(txData.vout[0].assets).to.equal(undefined);
        expect(txData.vout[1].assets).to.equal(undefined);
        expect(txData.vout[3].assets).to.equal(undefined);
    });
    it('V3 issuance-vote asset', async()=>{
        //c9995bf82a24355b0ea9e0aafebf431b90d23cecf05e72d8069d7ed6ab033fac
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"txid":"c9995bf82a24355b0ea9e0aafebf431b90d23cecf05e72d8069d7ed6ab033fac","hash":"510f24c3c895afa764ac6f489a277a3dbd26cb75bb9437bf061826bf4a6ab390","version":1,"size":492,"vsize":302,"weight":1206,"locktime":0,"vin":[{"txid":"1892fb5840fc208af64c290da625be91ff6ad7fe09ef6dd05ed3ae64f6fb94da","vout":1,"value":"49999000","scriptSig":{"asm":"0020d5aefe5740cef8b6b5b31b9e3c106d5a6120ba713b3aabb69898db9cf0c40d10","hex":"220020d5aefe5740cef8b6b5b31b9e3c106d5a6120ba713b3aabb69898db9cf0c40d10"},"scriptPubKey":{"asm":"OP_HASH160 9395a781893b052df3e6c6b89a0c16a33e496e13 OP_EQUAL","hex":"a9149395a781893b052df3e6c6b89a0c16a33e496e1387","reqSigs":1,"type":"scripthash","addresses":["SakMeCs6aT1SBvzXWkxeYRMXzX1crSeEeD"]},"txinwitness":["","304402202159fac52f38f01a805e91830748824edb6fa1dafdc03bb88929276a39e2fbe402202d4f6369d2a66884f16cdc66fb083a2e9748902cc0494454002ac16def22d5ce01","3044022032aa3e99c29125b8bcb09d85a6067dc52acc6964b2771056cf43a23f72dbf25f02204176dc9224bc584cfafab574232636e6c6e1c1f1628dc00adbc15d7e4a5f6a8101","522103663338927d5e0ba5a478682fe010b4ebdea954f17254bb932313961ccdb0a37821022e99b1a7325a44e7f65cb6db930ea4ad028ebe8cab199bb3878b101fb639eac52103cdf05d28d7bb9fcb16d6070aa86db6dfe03aab3bf3ea2106d338b8a90987ecd053ae"],"sequence":4294967295}],"vout":[{"value":"600","n":0,"scriptPubKey":{"asm":"0 326c4825e3f1798962988f99ea772ea97076fb50","hex":"0014326c4825e3f1798962988f99ea772ea97076fb50","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3"]}},{"value":"0","n":1,"scriptPubKey":{"asm":"OP_RETURN 444103047a9a016c2ef0dea7b423684acfa1b63d2bb18ca9af14b80de5641380915f8fec0a40420e600f000a00","hex":"6a2d444103047a9a016c2ef0dea7b423684acfa1b63d2bb18ca9af14b80de5641380915f8fec0a40420e600f000a00","type":"nulldata"}},{"value":"5900010","n":2,"scriptPubKey":{"asm":"0 94c5d6f3558ae0914812236777ea05fa0418eeb0","hex":"001494c5d6f3558ae0914812236777ea05fa0418eeb0","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qjnzadu643tsfzjqjydnh06s9lgzp3m4sg3j68x"]}},{"value":"44097963","n":3,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 ca5f3d7387be0d6364dadbadb7c6fed5d015bc38 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914ca5f3d7387be0d6364dadbadb7c6fed5d015bc3888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPb98QJ8GLR6yBC8Ybt57ybrELDkM6w3bM"]}}],"hex":"01000000000101da94fbf664aed35ed06def09fed76aff91be25a60d294cf68a20fc4058fb92180100000023220020d5aefe5740cef8b6b5b31b9e3c106d5a6120ba713b3aabb69898db9cf0c40d10ffffffff045802000000000000160014326c4825e3f1798962988f99ea772ea97076fb5000000000000000002f6a2d444103047a9a016c2ef0dea7b423684acfa1b63d2bb18ca9af14b80de5641380915f8fec0a40420e600f000a00ea065a000000000016001494c5d6f3558ae0914812236777ea05fa0418eeb0abe1a002000000001976a914ca5f3d7387be0d6364dadbadb7c6fed5d015bc3888ac040047304402202159fac52f38f01a805e91830748824edb6fa1dafdc03bb88929276a39e2fbe402202d4f6369d2a66884f16cdc66fb083a2e9748902cc0494454002ac16def22d5ce01473044022032aa3e99c29125b8bcb09d85a6067dc52acc6964b2771056cf43a23f72dbf25f02204176dc9224bc584cfafab574232636e6c6e1c1f1628dc00adbc15d7e4a5f6a810169522103663338927d5e0ba5a478682fe010b4ebdea954f17254bb932313961ccdb0a37821022e99b1a7325a44e7f65cb6db930ea4ad028ebe8cab199bb3878b101fb639eac52103cdf05d28d7bb9fcb16d6070aa86db6dfe03aab3bf3ea2106d338b8a90987ecd053ae00000000","blockhash":"87023329cc87850bfd3c68d0b3cff337bd85983f44aefa0afb73fbe3a298837d","confirmations":16,"time":1616789025,"blocktime":1616789025};
        /** @type {DigiAssetIssuance} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("issuance");
        expect(results.assetId).to.equal("Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5");
        expect(results.issuer).to.equal("SakMeCs6aT1SBvzXWkxeYRMXzX1crSeEeD");
        expect(results.aggregation).to.equal(0);
        expect(results.divisibility).to.equal(0)
        expect(results.supply).to.equal(10n);
        expect(results.metadataHash).to.equal("7a9a016c2ef0dea7b423684acfa1b63d2bb18ca9af14b80de5641380915f8fec");
        expect(results.changes['Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5']['dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3']).to.equal(10n);
        expect(results.rules.rewritable).to.equal(false);
        expect(results.rules.vote.options[0].address).to.equal("D8LWk1fGksGDxZai17A5wQUVsRiV69Nk7J");
        expect(results.rules.vote.options[1].address).to.equal("DBJNvWeirccgeAdZn9gV5otheutdthzWxx");
        expect(results.rules.vote.options[2].address).to.equal("D9zaWjGHuVNB32G7Pf5BMmtvDifdoS3Wsq");
        expect(results.rules.vote.options[3].address).to.equal("DEKQEMFHTc1M8Gs4xvY6paZ5RKtE1cbqNp");
        expect(results.version).to.equal(3);

    });
    it('V3 transfer-vote 1 sent 9 returned back', async()=>{
        //9629ea36fa55fc8aebfa127bc8f9b32c014ce100f4aa5911221d12af6b943516
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"txid":"9629ea36fa55fc8aebfa127bc8f9b32c014ce100f4aa5911221d12af6b943516","hash":"fd285e184815e33adb2b6290b2e7ed9c4743b41c3c6a803911c2633d438477ec","version":1,"size":426,"vsize":344,"weight":1374,"locktime":0,"vin":[{"txid":"c9995bf82a24355b0ea9e0aafebf431b90d23cecf05e72d8069d7ed6ab033fac","vout":0,"scriptSig":{"asm":"","hex":""},"txinwitness":["304402204975b667c269ea3e1b0b82af2c75af753d1919ff7c0dc30ab86af9feb50d67be0220344ab94547d31cfb89bdcc98c3bbebacf3a0daa4ce44eacc276fc7f12614a55e01","0354e18ff8b2e5d1b2cabcf776e17a8217a720fecd46a0608a7d448bbf2924cbb1"],"sequence":4294967295,"source":12659142,"value":"600","scriptPubKey":{"asm":"0 326c4825e3f1798962988f99ea772ea97076fb50","hex":"0014326c4825e3f1798962988f99ea772ea97076fb50","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3"]},"assets":[{"assetId":"Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5","amount":"10","decimals":0,"rules":true}]},{"txid":"9a6bac5ec84afa748dbe3a1c9760382ec53e608c339ed17a939cbcae2cf7e7e8","vout":1,"scriptSig":{"asm":"30440220154463e4b7b15107417e90370b2fb0d94848bcea695e3165ef8b6c58c09926e70220369a053d772ebdafa412f2556dd4462e259175c736a3be58951a858e80595821[ALL] 03d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0","hex":"4730440220154463e4b7b15107417e90370b2fb0d94848bcea695e3165ef8b6c58c09926e70220369a053d772ebdafa412f2556dd4462e259175c736a3be58951a858e80595821012103d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0"},"sequence":4294967295,"source":12642650,"value":"82153247693","scriptPubKey":{"asm":"OP_DUP OP_HASH160 399bdd885122394e6362ca660de6468ea6442a4a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914399bdd885122394e6362ca660de6468ea6442a4a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAPhmucYFtYg8CrHQNmsHYz55xKnijHYzB"]}}],"vout":[{"value":"600","scriptPubKey":{"asm":"0 326c4825e3f1798962988f99ea772ea97076fb50","hex":"0014326c4825e3f1798962988f99ea772ea97076fb50","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3"]},"vout":0},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 2311280265aff58f522353ca0b1c124eac6f99a1 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9142311280265aff58f522353ca0b1c124eac6f99a188ac","reqSigs":1,"type":"pubkeyhash","addresses":["D8LWk1fGksGDxZai17A5wQUVsRiV69Nk7J"]},"vout":1,"spent":12808860},{"value":"0","scriptPubKey":{"asm":"OP_RETURN 4441031501010009","hex":"6a084441031501010009","type":"nulldata"},"vout":2},{"value":"82153246523","scriptPubKey":{"asm":"OP_DUP OP_HASH160 399bdd885122394e6362ca660de6468ea6442a4a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914399bdd885122394e6362ca660de6468ea6442a4a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAPhmucYFtYg8CrHQNmsHYz55xKnijHYzB"]},"vout":3,"spent":12875575}],"hex":"01000000000102ac3f03abd67e9d06d8725ef0ec3cd2901b43bffeaae0a90e5b35242af85b99c90000000000ffffffffe8e7f72caebc9c937ad19e338c603ec52e3860971c3abe8d74fa4ac85eac6b9a010000006a4730440220154463e4b7b15107417e90370b2fb0d94848bcea695e3165ef8b6c58c09926e70220369a053d772ebdafa412f2556dd4462e259175c736a3be58951a858e80595821012103d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0ffffffff045802000000000000160014326c4825e3f1798962988f99ea772ea97076fb5058020000000000001976a9142311280265aff58f522353ca0b1c124eac6f99a188ac00000000000000000a6a0844410315010100093b0fb720130000001976a914399bdd885122394e6362ca660de6468ea6442a4a88ac0247304402204975b667c269ea3e1b0b82af2c75af753d1919ff7c0dc30ab86af9feb50d67be0220344ab94547d31cfb89bdcc98c3bbebacf3a0daa4ce44eacc276fc7f12614a55e01210354e18ff8b2e5d1b2cabcf776e17a8217a720fecd46a0608a7d448bbf2924cbb10000000000","blockhash":"39f5ce597bacd5fcdd5057003e72c051e10109a61f9b52734a5122eedf74e649","height":12667198,"time":1616909333};
        /** @type {DigiAssetTransference} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("transfer");
        expect(results.changes["Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5"]["dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3"]).to.equal(-1n);
        expect(results.changes["Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5"]["D8LWk1fGksGDxZai17A5wQUVsRiV69Nk7J"]).to.equal(1n);
        expect(txData.txid).to.equal("9629ea36fa55fc8aebfa127bc8f9b32c014ce100f4aa5911221d12af6b943516");
        expect(txData.vout[0].assets[0].assetId).to.equal("Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5")
        expect(txData.vout[0].assets[0].amount).to.equal("9");
        expect(txData.vout[0].assets[0].decimals).to.equal(0);
        expect(txData.vout[0].assets[0].rules).to.equal(true);
        expect(txData.vout[1].assets[0].assetId).to.equal("Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5")
        expect(txData.vout[1].assets[0].amount).to.equal("1");
        expect(txData.vout[1].assets[0].decimals).to.equal(0);
        expect(txData.vout[1].assets[0].rules).to.equal(true);
    });
    it('V3 transfer-vote sent to invalid address', async()=>{
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"txid":"9629ea36fa55fc8aebfa127bc8f9b32c014ce100f4aa5911221d12af6b943516","hash":"fd285e184815e33adb2b6290b2e7ed9c4743b41c3c6a803911c2633d438477ec","version":1,"size":426,"vsize":344,"weight":1374,"locktime":0,"vin":[{"txid":"c9995bf82a24355b0ea9e0aafebf431b90d23cecf05e72d8069d7ed6ab033fac","vout":0,"value":"600","scriptSig":{"asm":"","hex":""},"txinwitness":["304402204975b667c269ea3e1b0b82af2c75af753d1919ff7c0dc30ab86af9feb50d67be0220344ab94547d31cfb89bdcc98c3bbebacf3a0daa4ce44eacc276fc7f12614a55e01","0354e18ff8b2e5d1b2cabcf776e17a8217a720fecd46a0608a7d448bbf2924cbb1"],"sequence":4294967295,"scriptPubKey":{"addresses":["DAPhmucYFtYg8CrHQNmsHYz55xKnijHYzB"]},"assets":[{"assetId":"Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5","amount":"10","decimals":0}]},{"txid":"9a6bac5ec84afa748dbe3a1c9760382ec53e608c339ed17a939cbcae2cf7e7e8","vout":1,"value":"82153247693","scriptSig":{"asm":"30440220154463e4b7b15107417e90370b2fb0d94848bcea695e3165ef8b6c58c09926e70220369a053d772ebdafa412f2556dd4462e259175c736a3be58951a858e80595821[ALL] 03d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0","hex":"4730440220154463e4b7b15107417e90370b2fb0d94848bcea695e3165ef8b6c58c09926e70220369a053d772ebdafa412f2556dd4462e259175c736a3be58951a858e80595821012103d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0"},"sequence":4294967295,"scriptPubKey":{"addresses":["DAPhmucYFtYg8CrHQNmsHYz55xKnijHYzB"]}}],"vout":[{"value":"600","n":0,"scriptPubKey":{"asm":"0 326c4825e3f1798962988f99ea772ea97076fb50","hex":"0014326c4825e3f1798962988f99ea772ea97076fb50","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qxfkysf0r79ucjc5c37v75aew49c8d76sh4tny3"]}},{"value":"600","n":1,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 2311280265aff58f522353ca0b1c124eac6f99a1 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9142311280265aff58f522353ca0b1c124eac6f99a188ac","reqSigs":1,"type":"pubkeyhash","addresses":["D8LWk1fGksGDxZai17A5wQUVsRiV69Nk7J"]}},{"value":"0","n":2,"scriptPubKey":{"asm":"OP_RETURN 4441031501010009","hex":"6a084441031501010009","type":"nulldata"}},{"value":"82153246523","n":3,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 399bdd885122394e6362ca660de6468ea6442a4a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914399bdd885122394e6362ca660de6468ea6442a4a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAPhmucYFtYg8CrHQNmsHYz55xKnijHYzB"]}}],"hex":"01000000000102ac3f03abd67e9d06d8725ef0ec3cd2901b43bffeaae0a90e5b35242af85b99c90000000000ffffffffe8e7f72caebc9c937ad19e338c603ec52e3860971c3abe8d74fa4ac85eac6b9a010000006a4730440220154463e4b7b15107417e90370b2fb0d94848bcea695e3165ef8b6c58c09926e70220369a053d772ebdafa412f2556dd4462e259175c736a3be58951a858e80595821012103d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0ffffffff045802000000000000160014326c4825e3f1798962988f99ea772ea97076fb5058020000000000001976a9142311280265aff58f522353ca0b1c124eac6f99a188ac00000000000000000a6a0844410315010100093b0fb720130000001976a914399bdd885122394e6362ca660de6468ea6442a4a88ac0247304402204975b667c269ea3e1b0b82af2c75af753d1919ff7c0dc30ab86af9feb50d67be0220344ab94547d31cfb89bdcc98c3bbebacf3a0daa4ce44eacc276fc7f12614a55e01210354e18ff8b2e5d1b2cabcf776e17a8217a720fecd46a0608a7d448bbf2924cbb10000000000","blockhash":"39f5ce597bacd5fcdd5057003e72c051e10109a61f9b52734a5122eedf74e649","confirmations":12,"time":1616909452,"blocktime":1616909452};
        /** @type {DigiAssetTransference} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("accidental burn");
        expect(results.changes["Ua9hJ3q7zKnaRZS9E5frb3Ukon6aBNNgxLX3i5"]["DAPhmucYFtYg8CrHQNmsHYz55xKnijHYzB"]).to.equal(-10n);
        expect(txData.vout[0].assets).to.equal(undefined);
        expect(txData.vout[1].assets).to.equal(undefined);
        expect(txData.vout[2].assets).to.equal(undefined);
        expect(txData.vout[3].assets).to.equal(undefined);
    });
    it ('V3 fiat based royalty issuance', async()=>{
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"txid":"3094e376137794217cd7a912a45c7837560b07d816ef894bc168c10dd5dcec72","hash":"3094e376137794217cd7a912a45c7837560b07d816ef894bc168c10dd5dcec72","version":1,"size":3747,"vsize":3747,"weight":14988,"locktime":0,"vin":[{"txid":"9629ea36fa55fc8aebfa127bc8f9b32c014ce100f4aa5911221d12af6b943516","vout":3,"scriptSig":{"asm":"30440220288f9312ef7668ea32bca3401bbc7a78ded52b33c30e0f41e51815ad67de9c100220379e23c67d1bbcc2af5f20178a48813efaa6fd199c2116e018e70d327b6d68ed[ALL] 03d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0","hex":"4730440220288f9312ef7668ea32bca3401bbc7a78ded52b33c30e0f41e51815ad67de9c100220379e23c67d1bbcc2af5f20178a48813efaa6fd199c2116e018e70d327b6d68ed012103d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0"},"sequence":4294967295,"source":12667198,"value":"82153246523","scriptPubKey":{"asm":"OP_DUP OP_HASH160 399bdd885122394e6362ca660de6468ea6442a4a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914399bdd885122394e6362ca660de6468ea6442a4a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAPhmucYFtYg8CrHQNmsHYz55xKnijHYzB"]}}],"vout":[{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 aeaa5269c49313a45389df18b86a29d011702dee OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914aeaa5269c49313a45389df18b86a29d011702dee88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DM4e9p3JNYhPygrq9vw5qMKKuC1sDJUCKM"]},"vout":0,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"10000","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 da76d93e01e5bcede71eed86506b642ed5c2b30d OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914da76d93e01e5bcede71eed86506b642ed5c2b30d88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DR4EDphH2ouDNbz6LRzdAbPGQZ9JP4fwXJ"]},"vout":1,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 7218aaeba3684f2af0395cd649130a08401301a5 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9147218aaeba3684f2af0395cd649130a08401301a588ac","reqSigs":1,"type":"pubkeyhash","addresses":["DFYP84nQ9MHdzboHuyVPev3a5HUS8SfG5U"]},"vout":2,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 c6616fa688deabc4378f3d963df0267c3cd4e630 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914c6616fa688deabc4378f3d963df0267c3cd4e63088ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPE34DqjKmcr3i5UsWpy3NoMryAQ3MzNe7"]},"vout":3,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 64365bdba792c5fb8fefd9812ce0f9e6119669ec OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91464365bdba792c5fb8fefd9812ce0f9e6119669ec88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DEGyEMkNdhfmYg95MFq2zTcc68CmJenPGj"]},"vout":4,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 601b6eb0309cf7004f758cd6ef19b4ba59a4252e OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914601b6eb0309cf7004f758cd6ef19b4ba59a4252e88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DDuGGi5Wsumt6XE5zNWnSA5mK3BZjfnbLx"]},"vout":5,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 031e23bee1a3cce2dba16d7ade3d901570b0a127 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914031e23bee1a3cce2dba16d7ade3d901570b0a12788ac","reqSigs":1,"type":"pubkeyhash","addresses":["D5RafyLqb1UnvwVZzudPc85c8TKTU9njSc"]},"vout":6,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 2e8773dc75c4bdd4b0044bfeb8f2df9cc333ec30 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9142e8773dc75c4bdd4b0044bfeb8f2df9cc333ec3088ac","reqSigs":1,"type":"pubkeyhash","addresses":["D9P7tVYy7V5kUXahH7sqVmvuCkdjLqMMQh"]},"vout":7,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 2d0197731ddd3bf037c656a95bfc121286a385a4 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9142d0197731ddd3bf037c656a95bfc121286a385a488ac","reqSigs":1,"type":"pubkeyhash","addresses":["D9F4rUdLUWkvS78X5yrD65V2XGzJwN9QCD"]},"vout":8,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 47f5b1d2afac877ecb5fc2041bfaac7805eac022 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91447f5b1d2afac877ecb5fc2041bfaac7805eac02288ac","reqSigs":1,"type":"pubkeyhash","addresses":["DBhar3Ge6iGFDqHRT8NGfdh112KtLYXksy"]},"vout":9,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_HASH160 57389512734efca14f8c998df1d1ed152bfdf21c OP_EQUAL","hex":"a91457389512734efca14f8c998df1d1ed152bfdf21c87","reqSigs":1,"type":"scripthash","addresses":["SVFBbwRLUHuHGaLUEXg3JQPKQZeWD8JKTE"]},"vout":10,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 1de50861a159ac7d96ec81618053d0617ae2b8f3 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9141de50861a159ac7d96ec81618053d0617ae2b8f388ac","reqSigs":1,"type":"pubkeyhash","addresses":["D7sAWJ5WHuvdfMD3X7n5edEcvxRV6LvjWh"]},"vout":11,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 e4b53ac3c8749b47032f552af62dde162ac81e95 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914e4b53ac3c8749b47032f552af62dde162ac81e9588ac","reqSigs":1,"type":"pubkeyhash","addresses":["DRzPi3bqnhKGzpCH9ppX3U8rsqjL8Drt9N"]},"vout":12,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 8cc15948b32b5a2691720b5005976d9523e01250 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9148cc15948b32b5a2691720b5005976d9523e0125088ac","reqSigs":1,"type":"pubkeyhash","addresses":["DHyLmDrZPTsSZRJZyJumXHdVfKJsYBZS4M"]},"vout":13,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 a942bdfad03f4d9a398312e8c73ea866091f43c5 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914a942bdfad03f4d9a398312e8c73ea866091f43c588ac","reqSigs":1,"type":"pubkeyhash","addresses":["DLa4gzzqJTwksnv5qYtQKRgPU4B83GcsEp"]},"vout":14,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 71996985cb0408546f97ade29aa639b93dee79f5 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91471996985cb0408546f97ade29aa639b93dee79f588ac","reqSigs":1,"type":"pubkeyhash","addresses":["DFVkgCebVM4qu4F9v6UKqJH52Zbh4MDSeR"]},"vout":15,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 9f2125044191ea049b257650cca814a9c7c82963 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9149f2125044191ea049b257650cca814a9c7c8296388ac","reqSigs":1,"type":"pubkeyhash","addresses":["DKeVggmH7oAfGYgiVeRuLgnFfJ4c4V36Mm"]},"vout":16,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 cbccd3bf5d199d1705c773f0aa7248979a9f4c6d OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914cbccd3bf5d199d1705c773f0aa7248979a9f4c6d88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPih5qd2FvNc2ujtKvE6mCZHAzutowmKK9"]},"vout":17,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 3a05a0bc51ac3d21f342714bcd1e683a3f2f4ff8 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9143a05a0bc51ac3d21f342714bcd1e683a3f2f4ff888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DARtUR63xVFQZZw3jVDmqZBSk9d521pNct"]},"vout":18,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 958ed222e9bb09820b2b4e425fbd7f386630c3c8 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914958ed222e9bb09820b2b4e425fbd7f386630c3c888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DJmtKCzAwRv88H5NG749ECvszXFYmxMWu3"]},"vout":19,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 ca05990d4bcf2c3d291b2a6b87ca72beaeef55ec OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914ca05990d4bcf2c3d291b2a6b87ca72beaeef55ec88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPZHjxJNMP7BgfTGxcme8p2ubKt9pgu3gf"]},"vout":20,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 afa8cfa068d5c5c9795761d6327627dd00f99508 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914afa8cfa068d5c5c9795761d6327627dd00f9950888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DM9u22SC4NKqKcgxKrMSN3cAKXQSYgu89a"]},"vout":21,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 30b37601a150d1708aff944dd9d9a9c8f4e6e6cf OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91430b37601a150d1708aff944dd9d9a9c8f4e6e6cf88ac","reqSigs":1,"type":"pubkeyhash","addresses":["D9abxdeCb5udarsZdxgQyaQRh3NySnazTU"]},"vout":22,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 997468c65c160573f67f7d1c1df5aaee57867b5f OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914997468c65c160573f67f7d1c1df5aaee57867b5f88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DK8VNsEJ4GMgHoyen1vHL8HwnXp4yHUU8Y"]},"vout":23,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 c7e946fef66be2f600a50814303063745b7fe56e OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914c7e946fef66be2f600a50814303063745b7fe56e88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPN8TpqXzs1fuZbz8GDiqdkD5MMxbu6x39"]},"vout":24,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 f4af47e7fd4a1598eefb74c89531b960429d9666 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914f4af47e7fd4a1598eefb74c89531b960429d966688ac","reqSigs":1,"type":"pubkeyhash","addresses":["DTSsPo2VZa16soVuSszKKvAppQHsnQ7swG"]},"vout":25,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 80b03376b140781a3cc4d9bfa51230869ccac20a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91480b03376b140781a3cc4d9bfa51230869ccac20a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DGsY7UVsPd5zxDhbydqLJS7osYPX973ugD"]},"vout":26,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 12ba09a2bb661025098178290a248c00680fe5c4 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91412ba09a2bb661025098178290a248c00680fe5c488ac","reqSigs":1,"type":"pubkeyhash","addresses":["D6r7ZqH4qGZu1qgW5rwSpsXjC3bdT6aTV8"]},"vout":27,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 3980d0f191f72890a860d59a91e676b3e6af2e83 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9143980d0f191f72890a860d59a91e676b3e6af2e8388ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAP9NVrWBDTrUwh3suREEvK5UJLATjGwVf"]},"vout":28,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 3b5400f43dc5cb741e0c28797a19c48f3743f5c3 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9143b5400f43dc5cb741e0c28797a19c48f3743f5c388ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAYo3Fu9dt6apoQSrmmeCA4MmU2qtbswwR"]},"vout":29,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 7329386c16aab76f33a8479ec8ffa3566d74263c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9147329386c16aab76f33a8479ec8ffa3566d74263c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DFe1dMyg32WWk72xozCvznY36boSdu3fqy"]},"vout":30,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 01b91df7008df90c786175682ca8bbd1c9d493c8 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91401b91df7008df90c786175682ca8bbd1c9d493c888ac","reqSigs":1,"type":"pubkeyhash","addresses":["D5JCycEw8kRSZ1Kf6sENEczt5amAqe23xK"]},"vout":31,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 5a2b80b15296f7fd1b6d4bf13e0bad6dd10df357 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9145a2b80b15296f7fd1b6d4bf13e0bad6dd10df35788ac","reqSigs":1,"type":"pubkeyhash","addresses":["DDMsU9KDGYPoecCLoh5Hembgh21XRp1SxR"]},"vout":32,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 7d6e50eaf25780929455ef0833e5ac431840e687 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9147d6e50eaf25780929455ef0833e5ac431840e68788ac","reqSigs":1,"type":"pubkeyhash","addresses":["DGaKA8gM4QPpyiuKtRnvX1UmhdUw2vPzKN"]},"vout":33,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 3ab86cd5ad37adc909b7cada0dc3b5cb0be20c43 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9143ab86cd5ad37adc909b7cada0dc3b5cb0be20c4388ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAVafU5TraZCTDj2hfrGgzuJvDfD1ekqUo"]},"vout":34,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 744846c53b9144dcdd190354b3f260d480cba7a4 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914744846c53b9144dcdd190354b3f260d480cba7a488ac","reqSigs":1,"type":"pubkeyhash","addresses":["DFjwWNCeMCQ8tznpQAUdruePmKnj95kkjh"]},"vout":35,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 ef417b83ff2bd32426dc2636f8a86f6d96eeeb5a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914ef417b83ff2bd32426dc2636f8a86f6d96eeeb5a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DSxAUueiyTKGsprhfVS1xzTrzenH5T2TAb"]},"vout":36,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 85cc0e7deb772c7b63d38f576b7e81aaa245b1ef OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91485cc0e7deb772c7b63d38f576b7e81aaa245b1ef88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DHLYrsd9Dx68NFPyb154t5N35CqwDrFJdf"]},"vout":37,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 4825dbfe29e53e5f3c8f376cefee6e4f34fdee8d OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9144825dbfe29e53e5f3c8f376cefee6e4f34fdee8d88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DBiaYap4wM8ttLfWA6j1EpPGbL5xoYJyRH"]},"vout":38,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 875146c04d010e002f0ff2d56cfe48af23a43e14 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914875146c04d010e002f0ff2d56cfe48af23a43e1488ac","reqSigs":1,"type":"pubkeyhash","addresses":["DHUb8LVSt775d4w5QTgH6EHd6DXUgLGv9p"]},"vout":39,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 52e4b7f73967a0e48802013ee79685ead9e71f3e OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91452e4b7f73967a0e48802013ee79685ead9e71f3e88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DChPwdshvBpQP4Q7PreRzLGmTUCq15dtWr"]},"vout":40,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 1d4baa724a5c7f33cc9d3aeb79a21c33fb05e7b7 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9141d4baa724a5c7f33cc9d3aeb79a21c33fb05e7b788ac","reqSigs":1,"type":"pubkeyhash","addresses":["D7oznB3KbD8SmxowYxTfTsLW7njNm6dtQB"]},"vout":41,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 864479f55d7918c55e7424213206738a95f666bd OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914864479f55d7918c55e7424213206738a95f666bd88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DHP37nd7VguQvvX9TKTgbTxSKorXhuusL2"]},"vout":42,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 59feb688735698a95a5a83c62f75cb2dc1a3d93b OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91459feb688735698a95a5a83c62f75cb2dc1a3d93b88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DDLwp6t5vPmGPBa4sWmjJpnWCepCe4DmKz"]},"vout":43,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 d9affd6041144626fc11b369b431885626055308 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914d9affd6041144626fc11b369b43188562605530888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DQz7zsHfaB9Su6ox7mFejmtyb7VATLnizs"]},"vout":44,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 780154dbf0cb39ba28070c96d9607cc69dbb11e2 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914780154dbf0cb39ba28070c96d9607cc69dbb11e288ac","reqSigs":1,"type":"pubkeyhash","addresses":["DG5dDnqDsqAKdEUrL6vdZPwZzQDmKuR4Az"]},"vout":45,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 d5f764409b0867e6a2e4e647fdfa5d74d2e75a9f OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914d5f764409b0867e6a2e4e647fdfa5d74d2e75a9f88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DQeSqBuKK7r2s2C4ksnqj41nVpyf4Mr9bU"]},"vout":46,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 f9cda30a5ab1ee85cc76f92f6c439517e2e12ed2 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914f9cda30a5ab1ee85cc76f92f6c439517e2e12ed288ac","reqSigs":1,"type":"pubkeyhash","addresses":["DTuw8vbbYcYt4tHNs4t9SBmeTaHBS6VdvA"]},"vout":47,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 c19278474ba2263cecece9befa757c6f9a08a892 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914c19278474ba2263cecece9befa757c6f9a08a89288ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNncRBemwWHtZVE6T4WGcKWRj3aEff7o68"]},"vout":48,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 2898389cf1dcd080a8d6081bd816cf78cc4a75b7 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9142898389cf1dcd080a8d6081bd816cf78cc4a75b788ac","reqSigs":1,"type":"pubkeyhash","addresses":["D8qjvSbs4iUC3pDuPVK464J5uXcyJxPtK1"]},"vout":49,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 5f54c730ae377319e8c86d6d1083f82235a69f35 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9145f54c730ae377319e8c86d6d1083f82235a69f3588ac","reqSigs":1,"type":"pubkeyhash","addresses":["DDqAHy3QnwTAxhpD3pvQujtnMofXvBEYEV"]},"vout":50,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 a2473ee40067ecf3e0dc851158e690104bee2367 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914a2473ee40067ecf3e0dc851158e690104bee236788ac","reqSigs":1,"type":"pubkeyhash","addresses":["DKw9Ma3xXLE7fnAHbLAEGWQqw97833s17i"]},"vout":51,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 8c537ad0bd00b7c2bb1d39897b556af3e06aed70 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9148c537ad0bd00b7c2bb1d39897b556af3e06aed7088ac","reqSigs":1,"type":"pubkeyhash","addresses":["DHw59PXgMVnZQN9Ago6Vkn2WWmhvRLR9UR"]},"vout":52,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 e24b8d8f4b4cd7b1144e5cca838e6c672ee38ce9 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914e24b8d8f4b4cd7b1144e5cca838e6c672ee38ce988ac","reqSigs":1,"type":"pubkeyhash","addresses":["DRmdm8AYYQ5isWJ63nEmrV1pH2khuUDM1Q"]},"vout":53,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 cd6deaeaa22fedbeb990ca3c887f50e63313a796 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914cd6deaeaa22fedbeb990ca3c887f50e63313a79688ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPsJjo5v5zd7XmLV5Ww8e7CFFs7ENdn1nb"]},"vout":54,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 fc1052a65306b8efd93ac265fd97f17f33490516 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914fc1052a65306b8efd93ac265fd97f17f3349051688ac","reqSigs":1,"type":"pubkeyhash","addresses":["DU7tNjN8EBg8NjXjvbhHZec6JFWp4dVH4H"]},"vout":55,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 e33d8ff25effb72487fd06a5f8afec5e29f82c3c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914e33d8ff25effb72487fd06a5f8afec5e29f82c3c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DRrdgE7pwPTBHxCu471od4VvTrBCGHh38n"]},"vout":56,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 802f5fad91d71244ec1bc2c9fade79266f346158 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914802f5fad91d71244ec1bc2c9fade79266f34615888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DGpsnQ3HWSAnNUZ7xRMLGNrzeZ454xzGBg"]},"vout":57,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 e0b3f62705c1d40c2495be97dc2cbaf12c3512c1 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914e0b3f62705c1d40c2495be97dc2cbaf12c3512c188ac","reqSigs":1,"type":"pubkeyhash","addresses":["DRdDVB6rZ8rdhxSmaWqw1gvyaggWL2mrMb"]},"vout":58,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 6c5fc7a32a7ea173c684bf80a072156b6bafc02c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9146c5fc7a32a7ea173c684bf80a072156b6bafc02c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DF28Fsjr4HsoGtpgXKqeQnJgv2gtm8oTu1"]},"vout":59,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 b7388a55e390ed17141e452e7724c85417349168 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914b7388a55e390ed17141e452e7724c8541734916888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DMqsvrgYEWm1zgkxzECVnYt11UheDi71Ge"]},"vout":60,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 69b875236c4e9710ed2bae7a0af488c17ad478b9 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91469b875236c4e9710ed2bae7a0af488c17ad478b988ac","reqSigs":1,"type":"pubkeyhash","addresses":["DEn6TjitFEjBrZuo1Qqr9uU8dumVCufDEY"]},"vout":61,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 6c1c7403cbce27609fdf21d256bd0f419180bb01 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9146c1c7403cbce27609fdf21d256bd0f419180bb0188ac","reqSigs":1,"type":"pubkeyhash","addresses":["DEzjbwMTcGBLo1AExqG5LM2SNpe2WyN7dj"]},"vout":62,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 008e3e2fb4ee1969c1999cc85574067e35564420 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914008e3e2fb4ee1969c1999cc85574067e3556442088ac","reqSigs":1,"type":"pubkeyhash","addresses":["D5C2wUBYiA7ZUTPr4WWTmJT4Dm6oNE7wmq"]},"vout":63,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 721c4e84833147d518ab03b36f609ef63ec5f2cd OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914721c4e84833147d518ab03b36f609ef63ec5f2cd88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DFYTUuqRNRWVYQuEsB52HYAti2GuTfFAvH"]},"vout":64,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 6d154727c19d8751cce3f3f108e0948813498008 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9146d154727c19d8751cce3f3f108e094881349800888ac","reqSigs":1,"type":"pubkeyhash","addresses":["DF5sgaw7C8Ms2Xv1AeVpf1uSKRJtr6PnAs"]},"vout":65,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 d5f248e58e5d48d4261ed16b61495d6dd6f14bd1 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914d5f248e58e5d48d4261ed16b61495d6dd6f14bd188ac","reqSigs":1,"type":"pubkeyhash","addresses":["DQeLiMinDJsyixCkuScVCg4g3tdHtbxd4o"]},"vout":66,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 7e20a0cf39342c2e005036cb03540aeca232fd7c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9147e20a0cf39342c2e005036cb03540aeca232fd7c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DGdzmUR9FznoBRaAfy1fL9E9nR4kw3Lvur"]},"vout":67,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 0bdd2f21f022d4578c15a4561b5160e7565c67a3 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9140bdd2f21f022d4578c15a4561b5160e7565c67a388ac","reqSigs":1,"type":"pubkeyhash","addresses":["D6DpwWY8RAAD4BhnGHvog59XBt2CYtVvcc"]},"vout":68,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 7d27d350fe0bfbb652dbcf89768ed28d251dbc0a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9147d27d350fe0bfbb652dbcf89768ed28d251dbc0a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DGYriMjhiyzFohcZ9RdANkHrRqQhj7WisA"]},"vout":69,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 239fd90371b55e7a75335e312ec4ae0c86bfbd38 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914239fd90371b55e7a75335e312ec4ae0c86bfbd3888ac","reqSigs":1,"type":"pubkeyhash","addresses":["D8PTgPLps4mEFzjvXk8zd5w9MhVLrq97Pu"]},"vout":70,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 c8a64c73247e0ebe581eec1e05949d071d41c1f2 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914c8a64c73247e0ebe581eec1e05949d071d41c1f288ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPS2uFoZUKmAnj2ecVt49YYfK6sbwXwRix"]},"vout":71,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 3b6a3d6b4695091b68110b9d4b5c386c59dfb71b OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9143b6a3d6b4695091b68110b9d4b5c386c59dfb71b88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAZFgFmGoZLAz71PgWwRBS6PZ1d5obHHKY"]},"vout":72,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 b2e920d58da1bbe08f4af6c62509e83af915806e OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914b2e920d58da1bbe08f4af6c62509e83af915806e88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DMT66STAiMTXrgEs7rSckfsXuep1YjB6HP"]},"vout":73,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 5da91f23fe70efc2088d7e4ae86aa12c5f3813cc OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9145da91f23fe70efc2088d7e4ae86aa12c5f3813cc88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DDgKysnZ8qkGTCsVr2Ycnqx1e26DvD9SjV"]},"vout":74,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 e924e2339d1a14c89b7c80498f56c9d887620410 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914e924e2339d1a14c89b7c80498f56c9d88762041088ac","reqSigs":1,"type":"pubkeyhash","addresses":["DSPrAfxASG8DDdDcAJSKgofG3pxoZK9ya6"]},"vout":75,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 e978bd1fa39b1b92b97eb00febf38e2d0b0a4d34 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914e978bd1fa39b1b92b97eb00febf38e2d0b0a4d3488ac","reqSigs":1,"type":"pubkeyhash","addresses":["DSRad2mcxpDYLTW8cdCZNbzd1VhE3w42Pr"]},"vout":76,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 149ba583595f8ff1496eeb3bc438672648fe6518 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914149ba583595f8ff1496eeb3bc438672648fe651888ac","reqSigs":1,"type":"pubkeyhash","addresses":["D724Wc6ahsyQ53T2vHGJ8s7xUoeBBUwJ7b"]},"vout":77,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 18188e91b9ec4dc19359edbd4d7a1a502ab2f276 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91418188e91b9ec4dc19359edbd4d7a1a502ab2f27688ac","reqSigs":1,"type":"pubkeyhash","addresses":["D7LWB78QPZr3LVsyczoxGuX32ERCADXSsm"]},"vout":78,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 cd211a8248cb2d1e36011f9c2caea18a8e7832af OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914cd211a8248cb2d1e36011f9c2caea18a8e7832af88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPqiifA5CJdanxWq1ao9jXVN5EZThzARES"]},"vout":79,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 5eb247fadac38981ac6a96d7736622d45743a48b OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9145eb247fadac38981ac6a96d7736622d45743a48b88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DDmodUzbhmxGdbbVPDoY2M6sk4KEbf5GFp"]},"vout":80,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 27bbff0502b8a6e58d09e68b40fb22ff05f5dcc1 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91427bbff0502b8a6e58d09e68b40fb22ff05f5dcc188ac","reqSigs":1,"type":"pubkeyhash","addresses":["D8mC6wdb7pvEw1qXd8bSYVj2TKy8tnnvNw"]},"vout":81,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 0d764ce228513a96877323b7b7705b9ffdbcb343 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9140d764ce228513a96877323b7b7705b9ffdbcb34388ac","reqSigs":1,"type":"pubkeyhash","addresses":["D6NH3QKsUkUeeBxCDruPXQpvN7NptvPfhg"]},"vout":82,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 0a6332652bb669d9c18ee306b7d1a9d8c0de135a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9140a6332652bb669d9c18ee306b7d1a9d8c0de135a88ac","reqSigs":1,"type":"pubkeyhash","addresses":["D6628VfvZn8cp1XYcwS7ERJvw31xZmddYP"]},"vout":83,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 f441f2e18b592ba2bb57ae7f1998f516382dce40 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914f441f2e18b592ba2bb57ae7f1998f516382dce4088ac","reqSigs":1,"type":"pubkeyhash","addresses":["DTQcRGK7tmKfVkChPGqRby3DWkbBM3qpFo"]},"vout":84,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 3bc3b3757b28ebb223a36d666533a6de95040946 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9143bc3b3757b28ebb223a36d666533a6de9504094688ac","reqSigs":1,"type":"pubkeyhash","addresses":["DAb6r7yapbuWWSmbTSqFg5ETitWuyPvZTa"]},"vout":85,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 a93511b234fd333560d9339c07f85c33cb33e88d OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914a93511b234fd333560d9339c07f85c33cb33e88d88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DLZnJz6fvJb5PnxvPC8rG2SBnoByJYhP6h"]},"vout":86,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 10ad9824a59b39e5aad49bdfe7481e7dff19c191 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91410ad9824a59b39e5aad49bdfe7481e7dff19c19188ac","reqSigs":1,"type":"pubkeyhash","addresses":["D6fHJsWvi4ZtVpmQJjJLjNxYLuiLHc8SXb"]},"vout":87,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 0ba71f5d8d5b3b348598a445cfb3fb4121d31e43 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9140ba71f5d8d5b3b348598a445cfb3fb4121d31e4388ac","reqSigs":1,"type":"pubkeyhash","addresses":["D6CiBFAAULytkMcKrgU8fzniYT6F3Piuf4"]},"vout":88,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 d09e3907c9dd02440651327affc998c86757796e OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914d09e3907c9dd02440651327affc998c86757796e88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DQAAdfqB5Ni88Uk1hxWR1d6UJE4EWSMV6N"]},"vout":89,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 837b38b24b63179d09ea804efa2e7e08c54795ae OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914837b38b24b63179d09ea804efa2e7e08c54795ae88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DH8JfxzC4ffrsDCnQewiVsKEuaDiz53Emr"]},"vout":90,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 43882b0e472444075f7a6fbae475dfa7f99afa24 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91443882b0e472444075f7a6fbae475dfa7f99afa2488ac","reqSigs":1,"type":"pubkeyhash","addresses":["DBJAwF2BjdJqQ7Z1L8LTRXc1yWhBCe4nZP"]},"vout":91,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 be3a696270898bfafa60f343e353ec9464c421b3 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914be3a696270898bfafa60f343e353ec9464c421b388ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNUvuDgHE8i2FMuWpdNSKqCSrTW6QC46Nm"]},"vout":92,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 c8ef9dc6e092a4e100af3d980aa71e024f1625cb OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914c8ef9dc6e092a4e100af3d980aa71e024f1625cb88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPTYjTX3f9seRfY2mk2EesapmcR4nbDWBL"]},"vout":93,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 c172c0d882e40bd230344ffc8355213f70f52afc OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914c172c0d882e40bd230344ffc8355213f70f52afc88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNmxRUrSbv8spRL9TPjkTqUyHTb9UXU7rp"]},"vout":94,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 1ff7ed93e587e41fe29c479ef14d001604cd12b5 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9141ff7ed93e587e41fe29c479ef14d001604cd12b588ac","reqSigs":1,"type":"pubkeyhash","addresses":["D848VYhESUcsBwKhhUmhZyp2vqrtWFtjsH"]},"vout":95,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 a9d4779bae4ee4d177cfeb4d8776e40c9d13bd82 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914a9d4779bae4ee4d177cfeb4d8776e40c9d13bd8288ac","reqSigs":1,"type":"pubkeyhash","addresses":["DLd5GAB47a47nfaFHZTnDTSQwgAgGNXXJU"]},"vout":96,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 c6bd3fe25a4db2a5812c161264f79d3f0dc3ba8c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914c6bd3fe25a4db2a5812c161264f79d3f0dc3ba8c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DPFw3Xh1yQLobVWM3mCpRYZrmfSbqWAbb7"]},"vout":97,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 247c1fa791b8a8d35bfcf2a8a7fc0bc50872925b OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914247c1fa791b8a8d35bfcf2a8a7fc0bc50872925b88ac","reqSigs":1,"type":"pubkeyhash","addresses":["D8U1ZRhvfuqetZfuBe2tNiJFSH2Ndk7rGt"]},"vout":98,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 1b41a099e1ab020a038b24d797e64724bcd149b6 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9141b41a099e1ab020a038b24d797e64724bcd149b688ac","reqSigs":1,"type":"pubkeyhash","addresses":["D7dDQJhSnPfmBdjsstXEUdjEd5E6UzZac2"]},"vout":99,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 3e4c74030c69294d0277578b4cb83ff71b6b5e87 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9143e4c74030c69294d0277578b4cb83ff71b6b5e8788ac","reqSigs":1,"type":"pubkeyhash","addresses":["DApW2DDS7FQYSPqDcGCHnCqhRGMKi5PoFc"]},"vout":100,"assets":[{"assetId":"La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP","amount":"5","decimals":0,"rules":true}]},{"value":"50000000","scriptPubKey":{"asm":"0 d08c419bf7c235960712a6b4fdd86b2bed7b415d","hex":"0014d08c419bf7c235960712a6b4fdd86b2bed7b415d","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1q6zxyrxlhcg6evpcj5660mkrt90khks2aqtap33"]},"vout":101},{"value":"0","scriptPubKey":{"asm":"OP_RETURN 444103040446e0ee58285b9b0f45b08b273d6cd79be9cbdaa614b46709415fe89881ca112692980265001f406405004270b010","hex":"6a33444103040446e0ee58285b9b0f45b08b273d6cd79be9cbdaa614b46709415fe89881ca112692980265001f406405004270b010","type":"nulldata"},"vout":102},{"value":"16318190010","scriptPubKey":{"asm":"0 94c5d6f3558ae0914812236777ea05fa0418eeb0","hex":"001494c5d6f3558ae0914812236777ea05fa0418eeb0","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qjnzadu643tsfzjqjydnh06s9lgzp3m4sg3j68x"]},"vout":103},{"value":"65784992046","scriptPubKey":{"asm":"OP_DUP OP_HASH160 833ca9518c4111ab19da61a15579678fbe647900 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914833ca9518c4111ab19da61a15579678fbe64790088ac","reqSigs":1,"type":"pubkeyhash","addresses":["DH71jDVe9t9YAXYFu5P4wXAxu8qoGYN2Tr"]},"vout":104}],"hex":"01000000011635946baf121d221159aaf400e14c012cb3f9c87b12faeb8afc55fa36ea2996030000006a4730440220288f9312ef7668ea32bca3401bbc7a78ded52b33c30e0f41e51815ad67de9c100220379e23c67d1bbcc2af5f20178a48813efaa6fd199c2116e018e70d327b6d68ed012103d6cf6284e23de9f3f0855ef51ba926198d3a18af6dbe3e147f8a4b72608e8bc0ffffffff6958020000000000001976a914aeaa5269c49313a45389df18b86a29d011702dee88ac58020000000000001976a914da76d93e01e5bcede71eed86506b642ed5c2b30d88ac58020000000000001976a9147218aaeba3684f2af0395cd649130a08401301a588ac58020000000000001976a914c6616fa688deabc4378f3d963df0267c3cd4e63088ac58020000000000001976a91464365bdba792c5fb8fefd9812ce0f9e6119669ec88ac58020000000000001976a914601b6eb0309cf7004f758cd6ef19b4ba59a4252e88ac58020000000000001976a914031e23bee1a3cce2dba16d7ade3d901570b0a12788ac58020000000000001976a9142e8773dc75c4bdd4b0044bfeb8f2df9cc333ec3088ac58020000000000001976a9142d0197731ddd3bf037c656a95bfc121286a385a488ac58020000000000001976a91447f5b1d2afac877ecb5fc2041bfaac7805eac02288ac580200000000000017a91457389512734efca14f8c998df1d1ed152bfdf21c8758020000000000001976a9141de50861a159ac7d96ec81618053d0617ae2b8f388ac58020000000000001976a914e4b53ac3c8749b47032f552af62dde162ac81e9588ac58020000000000001976a9148cc15948b32b5a2691720b5005976d9523e0125088ac58020000000000001976a914a942bdfad03f4d9a398312e8c73ea866091f43c588ac58020000000000001976a91471996985cb0408546f97ade29aa639b93dee79f588ac58020000000000001976a9149f2125044191ea049b257650cca814a9c7c8296388ac58020000000000001976a914cbccd3bf5d199d1705c773f0aa7248979a9f4c6d88ac58020000000000001976a9143a05a0bc51ac3d21f342714bcd1e683a3f2f4ff888ac58020000000000001976a914958ed222e9bb09820b2b4e425fbd7f386630c3c888ac58020000000000001976a914ca05990d4bcf2c3d291b2a6b87ca72beaeef55ec88ac58020000000000001976a914afa8cfa068d5c5c9795761d6327627dd00f9950888ac58020000000000001976a91430b37601a150d1708aff944dd9d9a9c8f4e6e6cf88ac58020000000000001976a914997468c65c160573f67f7d1c1df5aaee57867b5f88ac58020000000000001976a914c7e946fef66be2f600a50814303063745b7fe56e88ac58020000000000001976a914f4af47e7fd4a1598eefb74c89531b960429d966688ac58020000000000001976a91480b03376b140781a3cc4d9bfa51230869ccac20a88ac58020000000000001976a91412ba09a2bb661025098178290a248c00680fe5c488ac58020000000000001976a9143980d0f191f72890a860d59a91e676b3e6af2e8388ac58020000000000001976a9143b5400f43dc5cb741e0c28797a19c48f3743f5c388ac58020000000000001976a9147329386c16aab76f33a8479ec8ffa3566d74263c88ac58020000000000001976a91401b91df7008df90c786175682ca8bbd1c9d493c888ac58020000000000001976a9145a2b80b15296f7fd1b6d4bf13e0bad6dd10df35788ac58020000000000001976a9147d6e50eaf25780929455ef0833e5ac431840e68788ac58020000000000001976a9143ab86cd5ad37adc909b7cada0dc3b5cb0be20c4388ac58020000000000001976a914744846c53b9144dcdd190354b3f260d480cba7a488ac58020000000000001976a914ef417b83ff2bd32426dc2636f8a86f6d96eeeb5a88ac58020000000000001976a91485cc0e7deb772c7b63d38f576b7e81aaa245b1ef88ac58020000000000001976a9144825dbfe29e53e5f3c8f376cefee6e4f34fdee8d88ac58020000000000001976a914875146c04d010e002f0ff2d56cfe48af23a43e1488ac58020000000000001976a91452e4b7f73967a0e48802013ee79685ead9e71f3e88ac58020000000000001976a9141d4baa724a5c7f33cc9d3aeb79a21c33fb05e7b788ac58020000000000001976a914864479f55d7918c55e7424213206738a95f666bd88ac58020000000000001976a91459feb688735698a95a5a83c62f75cb2dc1a3d93b88ac58020000000000001976a914d9affd6041144626fc11b369b43188562605530888ac58020000000000001976a914780154dbf0cb39ba28070c96d9607cc69dbb11e288ac58020000000000001976a914d5f764409b0867e6a2e4e647fdfa5d74d2e75a9f88ac58020000000000001976a914f9cda30a5ab1ee85cc76f92f6c439517e2e12ed288ac58020000000000001976a914c19278474ba2263cecece9befa757c6f9a08a89288ac58020000000000001976a9142898389cf1dcd080a8d6081bd816cf78cc4a75b788ac58020000000000001976a9145f54c730ae377319e8c86d6d1083f82235a69f3588ac58020000000000001976a914a2473ee40067ecf3e0dc851158e690104bee236788ac58020000000000001976a9148c537ad0bd00b7c2bb1d39897b556af3e06aed7088ac58020000000000001976a914e24b8d8f4b4cd7b1144e5cca838e6c672ee38ce988ac58020000000000001976a914cd6deaeaa22fedbeb990ca3c887f50e63313a79688ac58020000000000001976a914fc1052a65306b8efd93ac265fd97f17f3349051688ac58020000000000001976a914e33d8ff25effb72487fd06a5f8afec5e29f82c3c88ac58020000000000001976a914802f5fad91d71244ec1bc2c9fade79266f34615888ac58020000000000001976a914e0b3f62705c1d40c2495be97dc2cbaf12c3512c188ac58020000000000001976a9146c5fc7a32a7ea173c684bf80a072156b6bafc02c88ac58020000000000001976a914b7388a55e390ed17141e452e7724c8541734916888ac58020000000000001976a91469b875236c4e9710ed2bae7a0af488c17ad478b988ac58020000000000001976a9146c1c7403cbce27609fdf21d256bd0f419180bb0188ac58020000000000001976a914008e3e2fb4ee1969c1999cc85574067e3556442088ac58020000000000001976a914721c4e84833147d518ab03b36f609ef63ec5f2cd88ac58020000000000001976a9146d154727c19d8751cce3f3f108e094881349800888ac58020000000000001976a914d5f248e58e5d48d4261ed16b61495d6dd6f14bd188ac58020000000000001976a9147e20a0cf39342c2e005036cb03540aeca232fd7c88ac58020000000000001976a9140bdd2f21f022d4578c15a4561b5160e7565c67a388ac58020000000000001976a9147d27d350fe0bfbb652dbcf89768ed28d251dbc0a88ac58020000000000001976a914239fd90371b55e7a75335e312ec4ae0c86bfbd3888ac58020000000000001976a914c8a64c73247e0ebe581eec1e05949d071d41c1f288ac58020000000000001976a9143b6a3d6b4695091b68110b9d4b5c386c59dfb71b88ac58020000000000001976a914b2e920d58da1bbe08f4af6c62509e83af915806e88ac58020000000000001976a9145da91f23fe70efc2088d7e4ae86aa12c5f3813cc88ac58020000000000001976a914e924e2339d1a14c89b7c80498f56c9d88762041088ac58020000000000001976a914e978bd1fa39b1b92b97eb00febf38e2d0b0a4d3488ac58020000000000001976a914149ba583595f8ff1496eeb3bc438672648fe651888ac58020000000000001976a91418188e91b9ec4dc19359edbd4d7a1a502ab2f27688ac58020000000000001976a914cd211a8248cb2d1e36011f9c2caea18a8e7832af88ac58020000000000001976a9145eb247fadac38981ac6a96d7736622d45743a48b88ac58020000000000001976a91427bbff0502b8a6e58d09e68b40fb22ff05f5dcc188ac58020000000000001976a9140d764ce228513a96877323b7b7705b9ffdbcb34388ac58020000000000001976a9140a6332652bb669d9c18ee306b7d1a9d8c0de135a88ac58020000000000001976a914f441f2e18b592ba2bb57ae7f1998f516382dce4088ac58020000000000001976a9143bc3b3757b28ebb223a36d666533a6de9504094688ac58020000000000001976a914a93511b234fd333560d9339c07f85c33cb33e88d88ac58020000000000001976a91410ad9824a59b39e5aad49bdfe7481e7dff19c19188ac58020000000000001976a9140ba71f5d8d5b3b348598a445cfb3fb4121d31e4388ac58020000000000001976a914d09e3907c9dd02440651327affc998c86757796e88ac58020000000000001976a914837b38b24b63179d09ea804efa2e7e08c54795ae88ac58020000000000001976a91443882b0e472444075f7a6fbae475dfa7f99afa2488ac58020000000000001976a914be3a696270898bfafa60f343e353ec9464c421b388ac58020000000000001976a914c8ef9dc6e092a4e100af3d980aa71e024f1625cb88ac58020000000000001976a914c172c0d882e40bd230344ffc8355213f70f52afc88ac58020000000000001976a9141ff7ed93e587e41fe29c479ef14d001604cd12b588ac58020000000000001976a914a9d4779bae4ee4d177cfeb4d8776e40c9d13bd8288ac58020000000000001976a914c6bd3fe25a4db2a5812c161264f79d3f0dc3ba8c88ac58020000000000001976a914247c1fa791b8a8d35bfcf2a8a7fc0bc50872925b88ac58020000000000001976a9141b41a099e1ab020a038b24d797e64724bcd149b688ac58020000000000001976a9143e4c74030c69294d0277578b4cb83ff71b6b5e8788ac80f0fa0200000000160014d08c419bf7c235960712a6b4fdd86b2bed7b415d0000000000000000356a33444103040446e0ee58285b9b0f45b08b273d6cd79be9cbdaa614b46709415fe89881ca112692980265001f406405004270b010bad1a3cc0300000016001494c5d6f3558ae0914812236777ea05fa0418eeb02e5117510f0000001976a914833ca9518c4111ab19da61a15579678fbe64790088ac00000000","blockhash":"0000000000000000eeaac8ff455a1f8a995eeb29518ee5df86c89626fb5bfe42","height":12875575,"time":1620023442};
        /** @type {DigiAssetIssuance} */let results=await assetDecoder(txData);
        expect(results.assetId).to.equal("La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP");
        expect(results.supply).to.equal(10500n);
        expect(results.changes["La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP"]["DM4e9p3JNYhPygrq9vw5qMKKuC1sDJUCKM"]).to.equal(10000n);
        expect(results.changes["La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP"]["DR4EDphH2ouDNbz6LRzdAbPGQZ9JP4fwXJ"]).to.equal(5n);
        expect(results.changes["La9oiVh9bLhXtxB2GtHQCwtztoSR8EDJgFPUEP"]["DFYP84nQ9MHdzboHuyVPev3a5HUS8SfG5U"]).to.equal(5n);
        expect(results.rules.rewritable).to.equal(false);
        expect(results.rules.currency.address).to.equal("dgb1qunxh378eltj2jrwza5sj9grvu5xud43vqvudwh");
        expect(results.rules.currency.index).to.equal(0);
        expect(results.rules.currency.name).to.equal("CAD");
        expect(results.rules.royalties["dgb1q6zxyrxlhcg6evpcj5660mkrt90khks2aqtap33"]).to.equal(50000000n);
        expect(results.newRules).to.equal(true);
        expect(results.version).to.equal(3);
    });
    it ('V3 asset tx royalty paid but no encoded output(change)', async()=>{
        let txData={"txid":"40a132d4d92340a55e2706fb24a1d5d96e6066ab696029a49a1ff48e720914a0","hash":"40a132d4d92340a55e2706fb24a1d5d96e6066ab696029a49a1ff48e720914a0","version":1,"size":277,"vsize":277,"weight":1108,"locktime":0,"vin":[{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":0,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["SMMyDUnFBnkuAbYDYBBekuRhQMD343xuCP"]},"sequence":4294967295,"assets":[{"assetId":"La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb","amount":"100","decimals":0}]},{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":7,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["D7yVKodCytSVaKvHipRLbS8KoePpu2y1Ls"]},"sequence":4294967295}],"vout":[{"value":"0","n":5,"scriptPubKey":{"asm":"OP_RETURN 44410315","hex":"6a0444410315","type":"nulldata"}},{"value":"500000000","n":6,"scriptPubKey":{"addresses":["DSXnZTQABeBrJEU5b2vpnysoGiiZwjKKDY"]}},{"value":"97837581654","n":7,"scriptPubKey":{"addresses":["DPb98QJ8GLR6yBC8Ybt57ybrELDkM6w3bM"]}}]};
        let results=await assetDecoder(txData);

//todo set rules
//todo set rules
    });
    it('V3 attempts to cheat royalties', async()=>{
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }


        //many outputs but only paid once
        let txData={"txid":"40a132d4d92340a55e2706fb24a1d5d96e6066ab696029a49a1ff48e720914a0","hash":"40a132d4d92340a55e2706fb24a1d5d96e6066ab696029a49a1ff48e720914a0","version":1,"size":277,"vsize":277,"weight":1108,"locktime":0,"vin":[{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":0,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["SMMyDUnFBnkuAbYDYBBekuRhQMD343xuCP"]},"sequence":4294967295,"assets":[{"assetId":"La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb","amount":"100","decimals":0}]},{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":7,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["D7yVKodCytSVaKvHipRLbS8KoePpu2y1Ls"]},"sequence":4294967295}],"vout":[{"value":"600","n":0,"scriptPubKey":{"addresses":["dgb1qx9mdulkmasph63c4v4e0x8zwhm62khsf83qc2w"]}},{"value":"600","n":1,"scriptPubKey":{"addresses":["DGSJMJpj3dwx2yhgGg2Hi6Gpmo5YvVsPRd"]}},{"value":"600","n":2,"scriptPubKey":{"addresses":["DFf3P5fE4ckcQnCTdvNtbmUjdL24gXZMVr"]}},{"value":"600","n":3,"scriptPubKey":{"addresses":["D6pnvTX4CiKhsEPuLy7oc1xCfmL8zReSLX"]}},{"value":"600","n":4,"scriptPubKey":{"addresses":["DKGxyPDySEVTWkQZsY6fbBGT1EdoziEGzr"]}},{"value":"0","n":5,"scriptPubKey":{"asm":"OP_RETURN 4441031540040a002051","hex":"6a0a4441031540040a002051","type":"nulldata"}},{"value":"500000000","n":6,"scriptPubKey":{"addresses":["DSXnZTQABeBrJEU5b2vpnysoGiiZwjKKDY"]}},{"value":"97837581654","n":7,"scriptPubKey":{"addresses":["DPb98QJ8GLR6yBC8Ybt57ybrELDkM6w3bM"]}}]};
        /** @type {DigiAssetTransference} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("accidental burn");  //fee should be 20 DGB

        //todo multiple asset types but only paid larger of to



        //use change to send without paying royalty
        txData={"txid":"40a132d4d92340a55e2706fb24a1d5d96e6066ab696029a49a1ff48e720914a0","hash":"40a132d4d92340a55e2706fb24a1d5d96e6066ab696029a49a1ff48e720914a0","version":1,"size":277,"vsize":277,"weight":1108,"locktime":0,"vin":[{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":0,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["SMMyDUnFBnkuAbYDYBBekuRhQMD343xuCP"]},"sequence":4294967295,"assets":[{"assetId":"La5fMQh1m8tbaBNDmyvh8Ug3f2Bd85nVbcrDvb","amount":"100","decimals":0}]},{"txid":"c57fc42847ebf7b3842fde56ed3ef1897d330413d3325e6b2043b78b5ed7f3fa","vout":7,"scriptSig":{"asm":"","hex":""},"scriptPubKey":{"addresses":["D7yVKodCytSVaKvHipRLbS8KoePpu2y1Ls"]},"sequence":4294967295}],"vout":[{"value":"0","n":5,"scriptPubKey":{"asm":"OP_RETURN 44410315","hex":"6a0444410315","type":"nulldata"}},{"value":"97837581654","n":7,"scriptPubKey":{"addresses":["DPb98QJ8GLR6yBC8Ybt57ybrELDkM6w3bM"]}}]};
        results=await assetDecoder(txData);
        expect(results.type).to.equal("accidental burn");  //fee should be 5 DGB
    });

    it('V3 decode kyc rules',async()=>{
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }


        let txData={"txid":"3ecbd2db0c6ca4826dc2d8e8e808ab1b8e81ac43fe410b3384a0152bcfc88763","hash":"4cddd4ae9e220d1a257ec25243df30a15e5b53379a4e38bc243bd0d93ae03536","version":1,"size":344,"vsize":263,"weight":1049,"locktime":0,"vin":[{"txid":"e6ddb7cbeb0653c2733d35062656b8ec96c8c7adfb0ccbd6302651d205da9588","vout":0,"scriptSig":{"asm":"","hex":""},"txinwitness":["304402203086f677cc9e556f8d2b08880bce21f677f52e6fc0998ff5e8ffeb35b2a1267a022001419233e4b8f70aaf4a1cfcf3dd1628d9c0e5fedae3bbff4030435363d5190b01","039f1e5bce792d83dd14dd3f41452a0a05e0b0786baf77ab4f07c0e255dd9145bd"],"sequence":4294967295,"source":13930906,"value":"10000000000","scriptPubKey":{"asm":"0 aba6b159aca00f82bc3321babe07a57c484c81d9","hex":"0014aba6b159aca00f82bc3321babe07a57c484c81d9","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1q4wntzkdv5q8c90pnyxatupa903yyeqwem92r8s"]}}],"vout":[{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 074576a34f54615eb21b9d5c98ce1d62061270f7 OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914074576a34f54615eb21b9d5c98ce1d62061270f788ac","reqSigs":1,"type":"pubkeyhash","addresses":["D5oYV1EsbVrSydPevip7j1Qb4jp33mbWZZ"]},"vout":0},{"value":"600","scriptPubKey":{"asm":"0 15f799556ba92ab3f5538cd618d04f5741589ee8","hex":"001415f799556ba92ab3f5538cd618d04f5741589ee8","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qzhmej4tt4y4t8a2n3ntp35z02aq438hgs54u5u"]},"vout":1},{"value":"0","scriptPubKey":{"asm":"OP_RETURN 4441030328c20c9fa75d5ed3a07c4ce203dc2ce1d68d3d14cd002e3cc613eccf6e8d58e614340e8f9fff40010a00","hex":"6a2e4441030328c20c9fa75d5ed3a07c4ce203dc2ce1d68d3d14cd002e3cc613eccf6e8d58e614340e8f9fff40010a00","type":"nulldata"},"vout":2},{"value":"3210799","scriptPubKey":{"asm":"0 dd43c5aeaa2ff85dff1a20796b11e9044058077e","hex":"0014dd43c5aeaa2ff85dff1a20796b11e9044058077e","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qm4putt429lu9mlc6ypukky0fq3q9spm7pjwcy8"]},"vout":3},{"value":"9996787539","scriptPubKey":{"asm":"0 aba6b159aca00f82bc3321babe07a57c484c81d9","hex":"0014aba6b159aca00f82bc3321babe07a57c484c81d9","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1q4wntzkdv5q8c90pnyxatupa903yyeqwem92r8s"]},"vout":4}],"hex":"010000000001018895da05d2512630d6cb0cfbadc7c896ecb8562606353d73c25306ebcbb7dde60000000000ffffffff0558020000000000001976a914074576a34f54615eb21b9d5c98ce1d62061270f788ac580200000000000016001415f799556ba92ab3f5538cd618d04f5741589ee80000000000000000306a2e4441030328c20c9fa75d5ed3a07c4ce203dc2ce1d68d3d14cd002e3cc613eccf6e8d58e614340e8f9fff40010a002ffe300000000000160014dd43c5aeaa2ff85dff1a20796b11e9044058077e53dfda5302000000160014aba6b159aca00f82bc3321babe07a57c484c81d90247304402203086f677cc9e556f8d2b08880bce21f677f52e6fc0998ff5e8ffeb35b2a1267a022001419233e4b8f70aaf4a1cfcf3dd1628d9c0e5fedae3bbff4030435363d5190b0121039f1e5bce792d83dd14dd3f41452a0a05e0b0786baf77ab4f07c0e255dd9145bd00000000","blockhash":"4f226b13ccf14cf79c4839f1ef3e3bc10d8db2db00831f34e162a9a1b0f128a3","height":13930984,"time":1635797805};
        /** @type {DigiAssetIssuance} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("issuance");
        expect(results.assetId).to.equal("Ua9kuG9uJmdJfh6oGeDKaCgJe5zXrmyiAMZWfq");
        expect(results.issuer).to.equal("dgb1q4wntzkdv5q8c90pnyxatupa903yyeqwem92r8s");
        expect(results.supply).to.equal(20n);
        expect(results.rules.kyc.ban[0]).to.equal("AFG");
    });

    it('V3 issuance with expiry',async()=>{
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"txid":"781d7a9885506700d43eae9484113754ffa4e57c74ac148f1e5717de7e61c980","hash":"3fa582b9affe62ddbe0c36c5e9fc9d5c62dea6f67f79d74ed9168b425e16fce1","version":1,"size":311,"vsize":230,"weight":917,"locktime":0,"vin":[{"txid":"995ccce45aabc442be922b2c9570d4aef46eef5548e82ccb560ec37fca3f407a","vout":4,"scriptSig":{"asm":"","hex":""},"txinwitness":["3044022001b18025448a2bad5311ab407fe9c6c50579cbd66bb0618806db87b5b2f00fd30220377e050462a21059b9dd7cae0d832a0e222834b9eca17e4e7aae5a33a4ffedb401","039f1e5bce792d83dd14dd3f41452a0a05e0b0786baf77ab4f07c0e255dd9145bd"],"sequence":4294967295,"source":13932106,"value":"3996741036","scriptPubKey":{"asm":"0 aba6b159aca00f82bc3321babe07a57c484c81d9","hex":"0014aba6b159aca00f82bc3321babe07a57c484c81d9","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1q4wntzkdv5q8c90pnyxatupa903yyeqwem92r8s"]}}],"vout":[{"value":"600","scriptPubKey":{"asm":"0 24540fab394b41a7f413a5a2dea09709f846ce67","hex":"001424540fab394b41a7f413a5a2dea09709f846ce67","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qy32ql2eefdq60aqn5k3dagyhp8uydnn8gjwa4y"]},"vout":0,"assets":[{"assetId":"La5548q3qyCQ7f38MrW8BGejmUsXzqEwDvWXNW","amount":"10","decimals":0,"rules":true}]},{"value":"0","scriptPubKey":{"asm":"OP_RETURN 444103049728fcdc386980c2b11656834eedd08b97579500e1b949ebab2de1883a3cc8e20a4806154a5d100f000a10","hex":"6a2f444103049728fcdc386980c2b11656834eedd08b97579500e1b949ebab2de1883a3cc8e20a4806154a5d100f000a10","type":"nulldata"},"vout":1},{"value":"3140643","scriptPubKey":{"asm":"0 dd43c5aeaa2ff85dff1a20796b11e9044058077e","hex":"0014dd43c5aeaa2ff85dff1a20796b11e9044058077e","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qm4putt429lu9mlc6ypukky0fq3q9spm7pjwcy8"]},"vout":2},{"value":"3993599364","scriptPubKey":{"asm":"0 aba6b159aca00f82bc3321babe07a57c484c81d9","hex":"0014aba6b159aca00f82bc3321babe07a57c484c81d9","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1q4wntzkdv5q8c90pnyxatupa903yyeqwem92r8s"]},"vout":3}],"hex":"010000000001017a403fca7fc30e56cb2ce84855ef6ef4aed470952c2b92be42c4ab5ae4cc5c990400000000ffffffff04580200000000000016001424540fab394b41a7f413a5a2dea09709f846ce670000000000000000316a2f444103049728fcdc386980c2b11656834eedd08b97579500e1b949ebab2de1883a3cc8e20a4806154a5d100f000a1023ec2f0000000000160014dd43c5aeaa2ff85dff1a20796b11e9044058077e847d09ee00000000160014aba6b159aca00f82bc3321babe07a57c484c81d902473044022001b18025448a2bad5311ab407fe9c6c50579cbd66bb0618806db87b5b2f00fd30220377e050462a21059b9dd7cae0d832a0e222834b9eca17e4e7aae5a33a4ffedb40121039f1e5bce792d83dd14dd3f41452a0a05e0b0786baf77ab4f07c0e255dd9145bd00000000","blockhash":"0036dc1936bc53657f1e1bf3dfa0022a0da7f840e508000872984446515261f1","height":13952931,"time":1636124960};
        /** @type {DigiAssetIssuance} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("issuance");
        expect(results.assetId).to.equal("La5548q3qyCQ7f38MrW8BGejmUsXzqEwDvWXNW");
        expect(results.issuer).to.equal("dgb1q4wntzkdv5q8c90pnyxatupa903yyeqwem92r8s");
        expect(results.aggregation).to.equal(0);
        expect(results.divisibility).to.equal(0)
        expect(results.supply).to.equal(10n);
        expect(results.rules.expires).to.equal(13952930n);
        expect(results.version).to.equal(3);
    });

    it('V3 transfer after expiry',async()=>{
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"height":13952944,"txid":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX","vin":[{"value":"600","scriptPubKey":{"asm":"0 24540fab394b41a7f413a5a2dea09709f846ce67","hex":"001424540fab394b41a7f413a5a2dea09709f846ce67","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qy32ql2eefdq60aqn5k3dagyhp8uydnn8gjwa4y"]},"vout":0,"assets":[{"assetId":"La5548q3qyCQ7f38MrW8BGejmUsXzqEwDvWXNW","amount":"10","decimals":0,"rules":true}],"txid":"781d7a9885506700d43eae9484113754ffa4e57c74ac148f1e5717de7e61c980"},{"value":"16903005690","scriptPubKey":{"asm":"0 333e212af65b211495bc13f2ea9a051218dcb40a","hex":"0014333e212af65b211495bc13f2ea9a051218dcb40a","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qxvlzz2hktvs3f9duz0ew4xs9zgvdedq2tqa7xm"]},"vout":7,"txid":"6476b3de5d4bf32739a14c575950bef1900ba81055b2ff25f56e640d3ae70b43"},{"value":"3993599364","scriptPubKey":{"asm":"0 aba6b159aca00f82bc3321babe07a57c484c81d9","hex":"0014aba6b159aca00f82bc3321babe07a57c484c81d9","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1q4wntzkdv5q8c90pnyxatupa903yyeqwem92r8s"]},"vout":3,"txid":"781d7a9885506700d43eae9484113754ffa4e57c74ac148f1e5717de7e61c980"},{"value":"1000000000","scriptPubKey":{"asm":"0 ea98057b1adb147fc818faed7138eee5aa0b420d","hex":"0014ea98057b1adb147fc818faed7138eee5aa0b420d","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qa2vq27c6mv28ljqcltkhzw8wuk4qkssddq8kjs"]},"vout":4,"txid":"6476b3de5d4bf32739a14c575950bef1900ba81055b2ff25f56e640d3ae70b43"},{"value":"1000000000","scriptPubKey":{"asm":"0 4203209d1adebad8e1358420cb5b35f9b6025e53","hex":"00144203209d1adebad8e1358420cb5b35f9b6025e53","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qggpjp8g6m6ad3cf4sssvkke4lxmqyhjnf4cuts"]},"vout":1,"txid":"995ccce45aabc442be922b2c9570d4aef46eef5548e82ccb560ec37fca3f407a"}],"vout":[{"value":"600","vout":"0","scriptPubKey":{"addresses":["dgb1qyz9jn0a8uxz4tctq9qy07npre5efcyce3jldqr"]},"assets":[{"assetId":"La5548q3qyCQ7f38MrW8BGejmUsXzqEwDvWXNW","amount":"9","decimals":0,"rules":true}]},{"value":"600","vout":"1","scriptPubKey":{"addresses":["DR9dkvsJzwmCwmPN5nXUkopVgirf2tRYoR"]},"assets":[{"assetId":"La5548q3qyCQ7f38MrW8BGejmUsXzqEwDvWXNW","amount":"1","decimals":0,"rules":true}]},{"value":"0","vout":"2","scriptPubKey":{"hex":"6a084441031501010009"}},{"value":"22896603344","vout":"3","scriptPubKey":{"addresses":["dgb1q96yhgdgrvwt23qtllzg7xrvd44temhfnf2ftyh"]}}]};
        /** @type {DigiAssetIssuance} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("accidental burn");
    });

    it('V3 transfer before expiry',async()=>{
        if (config.s3.accessKeyId==="REDACTED") {
            expect("must configure s3 for this test").to.equal("s3 not configured");
            return;
        }
        let txData={"height":13952000,"txid":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX","vin":[{"value":"600","scriptPubKey":{"asm":"0 24540fab394b41a7f413a5a2dea09709f846ce67","hex":"001424540fab394b41a7f413a5a2dea09709f846ce67","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qy32ql2eefdq60aqn5k3dagyhp8uydnn8gjwa4y"]},"vout":0,"assets":[{"assetId":"La5548q3qyCQ7f38MrW8BGejmUsXzqEwDvWXNW","amount":"10","decimals":0,"rules":true}],"txid":"781d7a9885506700d43eae9484113754ffa4e57c74ac148f1e5717de7e61c980"},{"value":"16903005690","scriptPubKey":{"asm":"0 333e212af65b211495bc13f2ea9a051218dcb40a","hex":"0014333e212af65b211495bc13f2ea9a051218dcb40a","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qxvlzz2hktvs3f9duz0ew4xs9zgvdedq2tqa7xm"]},"vout":7,"txid":"6476b3de5d4bf32739a14c575950bef1900ba81055b2ff25f56e640d3ae70b43"},{"value":"3993599364","scriptPubKey":{"asm":"0 aba6b159aca00f82bc3321babe07a57c484c81d9","hex":"0014aba6b159aca00f82bc3321babe07a57c484c81d9","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1q4wntzkdv5q8c90pnyxatupa903yyeqwem92r8s"]},"vout":3,"txid":"781d7a9885506700d43eae9484113754ffa4e57c74ac148f1e5717de7e61c980"},{"value":"1000000000","scriptPubKey":{"asm":"0 ea98057b1adb147fc818faed7138eee5aa0b420d","hex":"0014ea98057b1adb147fc818faed7138eee5aa0b420d","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qa2vq27c6mv28ljqcltkhzw8wuk4qkssddq8kjs"]},"vout":4,"txid":"6476b3de5d4bf32739a14c575950bef1900ba81055b2ff25f56e640d3ae70b43"},{"value":"1000000000","scriptPubKey":{"asm":"0 4203209d1adebad8e1358420cb5b35f9b6025e53","hex":"00144203209d1adebad8e1358420cb5b35f9b6025e53","reqSigs":1,"type":"witness_v0_keyhash","addresses":["dgb1qggpjp8g6m6ad3cf4sssvkke4lxmqyhjnf4cuts"]},"vout":1,"txid":"995ccce45aabc442be922b2c9570d4aef46eef5548e82ccb560ec37fca3f407a"}],"vout":[{"value":"600","vout":"0","scriptPubKey":{"addresses":["dgb1qyz9jn0a8uxz4tctq9qy07npre5efcyce3jldqr"]},"assets":[{"assetId":"La5548q3qyCQ7f38MrW8BGejmUsXzqEwDvWXNW","amount":"9","decimals":0,"rules":true}]},{"value":"600","vout":"1","scriptPubKey":{"addresses":["DR9dkvsJzwmCwmPN5nXUkopVgirf2tRYoR"]},"assets":[{"assetId":"La5548q3qyCQ7f38MrW8BGejmUsXzqEwDvWXNW","amount":"1","decimals":0,"rules":true}]},{"value":"0","vout":"2","scriptPubKey":{"hex":"6a084441031501010009"}},{"value":"22896603344","vout":"3","scriptPubKey":{"addresses":["dgb1q96yhgdgrvwt23qtllzg7xrvd44temhfnf2ftyh"]}}]};
        /** @type {DigiAssetIssuance} */let results=await assetDecoder(txData);
        expect(results.type).to.equal("transfer");
    });





});