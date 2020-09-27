require('nodeunit');
const assetDecoder = require('../index');

module.exports = {

    /*
████████╗██████╗  █████╗ ███╗   ██╗███████╗███████╗███████╗██████╗
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝██╔════╝██╔══██╗
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗█████╗  █████╗  ██████╔╝
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██╔══╝  ██╔══╝  ██╔══██╗
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║     ███████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝
     */
    'first transfer': function(test) {
        let txData={
            "txid": "5168afe2c85f24c3985c3aeafe8dc4c836c57e89f0c63242c85e9376b1d49ac6",
            "hash": "5168afe2c85f24c3985c3aeafe8dc4c836c57e89f0c63242c85e9376b1d49ac6",
            "version": 1,
            "size": 425,
            "vsize": 425,
            "weight": 1700,
            "locktime": 0,
            "vin": [
                {
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
                        "addresses": [
                            "DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU"
                        ]
                    },
                    "assets": [
                        {
                            assetId:    "Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC",
                            amount:     "100",
                            decimals:   2
                        }
                    ]
                },
                {
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
                        "addresses": [
                            "D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC"
                        ]
                    }
                }
            ],
            "vout": [
                {
                    "value": "600",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 b0d5d15901856da5e6713e18d9215625d32c6514 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a914b0d5d15901856da5e6713e18d9215625d32c651488ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "DMG7cLdhFZNraPpUZyschxBB8ogPqFMWMt"
                        ]
                    },
                    "vout": 0
                },
                {
                    "value": "0",
                    "scriptPubKey": {
                        "asm": "OP_RETURN 444101150001",
                        "hex": "6a06444101150001",
                        "type": "nulldata"
                    },
                    "vout": 1
                },
                {
                    "value": "200994344",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 a7731941a96f891504956370af1a21d775c234c0 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a914a7731941a96f891504956370af1a21d775c234c088ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "DLQVGVKYtJ8nWHrPGVL6KSC1VcT3rxPQke"
                        ]
                    },
                    "vout": 2
                },
                {
                    "value": "600",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 2d6d5ceebfdf0829d4ed12a0e26c04b73b123528 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC"
                        ]
                    },
                    "vout": 3
                }
            ],
            "hex": "01000000027f2e4c12d8e61aa922425690ccc045702f240d1a6e6d8d3a47652cfafea1d57a020000006b48304502210088de3816ea59166ea162f55002ce137c05ac32bd8bb01527251ad1a56e942ff1022042025c4aeae5a5282f78a927b5fc63ea1f94c65a2701ebb0bcc80376fec4e8f801210361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67cffffffff7f2e4c12d8e61aa922425690ccc045702f240d1a6e6d8d3a47652cfafea1d57a010000006b483045022100f919d947c7bdee9fb3dc10d4a327089d3eaf50d04940d3b2e5b2c9d861e33d910220277af6cb57fc98c5e869c1f8e5e6311a2c3674cfbcab05d46fefd8ec9cc130ca0121031a2617af533d6e58442b274a69d39194c64431a5caca5d45433f020744e40848ffffffff0458020000000000001976a914b0d5d15901856da5e6713e18d9215625d32c651488ac0000000000000000086a0644410115000128eefa0b000000001976a914a7731941a96f891504956370af1a21d775c234c088ac58020000000000001976a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac00000000",
            "blockhash": "00000000000000024f0e5f8831e13d9c4dc3b3462510db453844c22dca075bac",
            "height": 8432959,
            "time": 1553608681
        };

        //process asset tx
        let changes=assetDecoder(txData);

        //test that tx data was modified correctly
        test.equal(txData.vout[0].assets[0].assetId,'Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC');
        test.equal(txData.vout[0].assets[0].amount,"1");
        test.equal(txData.vout[0].assets[0].decimals,2);
        test.equal(txData.vout[1].assets,undefined);
        test.equal(txData.vout[2].assets,undefined);
        test.equal(txData.vout[3].assets[0].assetId,'Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC');
        test.equal(txData.vout[3].assets[0].amount,"99");
        test.equal(txData.vout[3].assets[0].decimals,2);
        test.equal(txData.vout.length,4);

        //test that changes are correct
        test.equal(changes['type'],'transfer');
        test.equal(changes['changes']['Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC']['DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU'],-100n);
        test.equal(changes['changes']['Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC']['DMG7cLdhFZNraPpUZyschxBB8ogPqFMWMt'],1n);
        test.equal(changes['changes']['Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC']['D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC'],99n);

        test.done();
    },
    'transfer 9895c4294821d7b06de34658776bbc47afb0a2464e9da04730ca142fe9e06ce8': function(test) {
        let txData={
            "txid": "9895c4294821d7b06de34658776bbc47afb0a2464e9da04730ca142fe9e06ce8",
            "hash": "9895c4294821d7b06de34658776bbc47afb0a2464e9da04730ca142fe9e06ce8",
            "version": 1,
            "size": 425,
            "vsize": 425,
            "weight": 1700,
            "locktime": 0,
            "vin": [
                {
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
                        "addresses": [
                            "DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB"
                        ]
                    },
                    "assets": [
                        {
                            "assetId":  "Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW",
                            "amount":   "100000000",
                            "decimals": 2
                        }
                    ]
                },
                {
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
                        "addresses": [
                            "D85M3PGHBZKdk8RxkH86MsZGjFA4hJ6qPk"
                        ]
                    }
                }
            ],
            "vout": [
                {
                    "value": "600",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 7643deadf56e645ae24c6f460c17827442ef01f4 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a9147643deadf56e645ae24c6f460c17827442ef01f488ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "DFvRaaEET5e5kiJ2PRFUyM2KwWHyfxsEvb"
                        ]
                    },
                    "vout": 0
                },
                {
                    "value": "0",
                    "scriptPubKey": {
                        "asm": "OP_RETURN 44410115002016",
                        "hex": "6a0744410115002016",
                        "type": "nulldata"
                    },
                    "vout": 1
                },
                {
                    "value": "400988744",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 edf8191a31cad677ba12d134003e4605539834b1 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a914edf8191a31cad677ba12d134003e4605539834b188ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "DSqMtsqmGSor6bp7mzzemN5uXYAjCSRkEi"
                        ]
                    },
                    "vout": 2
                },
                {
                    "value": "600",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 2032d1be63bef18fdb954edf68106d69f2cee846 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a9142032d1be63bef18fdb954edf68106d69f2cee84688ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "D85M3PGHBZKdk8RxkH86MsZGjFA4hJ6qPk"
                        ]
                    },
                    "vout": 3
                }
            ],
            "hex": "0100000002bf52c1dcfdbf1cbb2fb523a4d32ba79067464af9228b91fc3aafaf4be3ef0447020000006a47304402207fed2d405a3df5673a594dee6fb73101d5ee6ca6de8d2b8f7841a17d7de01794022021f3b0b526da92133188bb8b7b64daf1f65d7a04ea74edb728be50e95dcdb356012102a0b30a0f14c924eea97f3fe60ea65afa425b055124fd687315d778efaef58511ffffffffbf52c1dcfdbf1cbb2fb523a4d32ba79067464af9228b91fc3aafaf4be3ef0447010000006b483045022100f1630bba1b4c3c5f6d88a8ccd95b69dd693a639efa62ccaaab727dd4932925480220355bdbe917a7023d638ccd5c9bee6de60b0035e0a994b02894a5d08cd4299748012103d6ca1e6820a8087c02e7b7f7990d9076860b9a07d88c3ae27db17ba6e81b901effffffff0458020000000000001976a9147643deadf56e645ae24c6f460c17827442ef01f488ac0000000000000000096a0744410115002016489ae617000000001976a914edf8191a31cad677ba12d134003e4605539834b188ac58020000000000001976a9142032d1be63bef18fdb954edf68106d69f2cee84688ac00000000",
            "blockhash": "db54a7e341a6858d88889e3223ffb3714f88d7a16af8d9722fde1f5c6e863c3f",
            "height": 8432975,
            "time": 1553609003
        };

        //process asset tx
        let changes=assetDecoder(txData);

        //test that tx data was modified correctly
        test.equal(txData.vout[0].assets[0].assetId,'Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW');
        test.equal(txData.vout[0].assets[0].amount,"1000000");
        test.equal(txData.vout[0].assets[0].decimals,2);
        test.equal(txData.vout[1].assets,undefined);
        test.equal(txData.vout[2].assets,undefined);
        test.equal(txData.vout[3].assets[0].assetId,'Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW');
        test.equal(txData.vout[3].assets[0].amount,"99000000");
        test.equal(txData.vout[3].assets[0].decimals,2);
        test.equal(txData.vout.length,4);

        //test that changes are correct
        test.equal(changes['type'],'transfer');
        test.equal(changes['changes']['Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW']['DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB'],-100000000n);
        test.equal(changes['changes']['Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW']['DFvRaaEET5e5kiJ2PRFUyM2KwWHyfxsEvb'],1000000n);
        test.equal(changes['changes']['Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW']['D85M3PGHBZKdk8RxkH86MsZGjFA4hJ6qPk'],99000000n);

        test.done();
    },




/*
██╗███████╗███████╗██╗   ██╗ █████╗ ███╗   ██╗ ██████╗███████╗
██║██╔════╝██╔════╝██║   ██║██╔══██╗████╗  ██║██╔════╝██╔════╝
██║███████╗███████╗██║   ██║███████║██╔██╗ ██║██║     █████╗
██║╚════██║╚════██║██║   ██║██╔══██║██║╚██╗██║██║     ██╔══╝
██║███████║███████║╚██████╔╝██║  ██║██║ ╚████║╚██████╗███████╗
╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
 */
    'first asset issuance': function(test) {
        let txData={
            "txid": "7ad5a1fefa2c65473a8d6d6e1a0d242f7045c0cc90564222a91ae6d8124c2e7f",
            "hash": "7ad5a1fefa2c65473a8d6d6e1a0d242f7045c0cc90564222a91ae6d8124c2e7f",
            "version": 1,
            "size": 295,
            "vsize": 295,
            "weight": 1180,
            "locktime": 0,
            "vin": [
                {
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
                        "addresses": [
                            "DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU"
                        ]
                    }
                }
            ],
            "vout": [
                {
                    "value": "0",
                    "scriptPubKey": {
                        "asm": "OP_RETURN 44410101fcd4de62198f3ca3f6603a00db0f640ba0770796aacb99ce6af3ba7555af6f3064db727c998fdb779469f49da82a2017a6c1fea6201440",
                        "hex": "6a3b44410101fcd4de62198f3ca3f6603a00db0f640ba0770796aacb99ce6af3ba7555af6f3064db727c998fdb779469f49da82a2017a6c1fea6201440",
                        "type": "nulldata"
                    },
                    "vout": 0
                },
                {
                    "value": "299994400",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 2d6d5ceebfdf0829d4ed12a0e26c04b73b123528 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "D9HHxZp1UNvGT2X7ivGR74uBLvs55SrPhC"
                        ]
                    },
                    "vout": 1
                },
                {
                    "value": "600",
                    "scriptPubKey": {
                        "asm": "OP_DUP OP_HASH160 fcfb5344c88cf4687cfde418ad86c17f931c0177 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a914fcfb5344c88cf4687cfde418ad86c17f931c017788ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash",
                        "addresses": [
                            "DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU"
                        ]
                    },
                    "vout": 2
                }
            ],
            "hex": "0100000001016b9001cf2ec3a9c57d2fcecc950a86577d7edb27960d824cb338b660f449dd010000006a47304402200b78670e1af4311c30577f907580e90aa0bedd15a72c46d3da06360dfd138eb202201062fd5cfec6ea6b24219d1c4f075cad87303ac756b6595af8e97c42e29f54d401210361c0d3a2175c32c1ad08972a22004779d9aee8d4d72fb3c038b373883b70b67cffffffff0300000000000000003d6a3b44410101fcd4de62198f3ca3f6603a00db0f640ba0770796aacb99ce6af3ba7555af6f3064db727c998fdb779469f49da82a2017a6c1fea6201440208de111000000001976a9142d6d5ceebfdf0829d4ed12a0e26c04b73b12352888ac58020000000000001976a914fcfb5344c88cf4687cfde418ad86c17f931c017788ac00000000",
            "blockhash": "ce8c783ce1ebe3b7ab3628a82b42dc92d76b8a1820daa97df269970edd1323f8",
            "height": 8432316,
            "time": 1553598843
        };

        //process asset tx
        let changes=assetDecoder(txData);

        //test that tx data was modified correctly
        test.equal(txData.vout[0].assets,undefined);
        test.equal(txData.vout[1].assets,undefined);
        test.equal(txData.vout[2].assets[0].assetId,'Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC');
        test.equal(txData.vout[2].assets[0].amount,"100");
        test.equal(txData.vout[2].assets[0].decimals,2);
        test.equal(txData.vout.length,3);

        //test that changes are correct
        test.equal(changes['type'],'issuance');
        test.equal(changes['assetId'],'Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC');
        test.equal(changes['issuer'],'DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU');
        test.equal(changes['locked'],false);
        test.equal(changes['aggregation'],0);
        test.equal(changes['divisibility'],2);
        test.equal(changes['supply'],100n);
        test.equal(changes['torrent'],'fcd4de62198f3ca3f6603a00db0f640ba0770796');
        test.equal(changes['metadataHash'],'aacb99ce6af3ba7555af6f3064db727c998fdb779469f49da82a2017a6c1fea6');
        test.equal(changes['changes']['Ua94nEKabzhJeDJtxGFXdviT185tYeHqyHKeWC']['DUCjtz7RDTm9JvCmYX4ZFJgzGvifKMPjNU'],100n);

        test.done();
    },
    'issuance 4704efe34bafaf3afc918b22f94a466790a72bd3a423b52fbb1cbffddcc152bf': function(test) {
        let txData={
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
        let changes=assetDecoder(txData);

        //test that tx data was modified correctly
        test.equal(txData.vout[0].assets,undefined);
        test.equal(txData.vout[1].assets,undefined);
        test.equal(txData.vout[2].assets[0].assetId,'Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW');
        test.equal(txData.vout[2].assets[0].amount,"100000000");
        test.equal(txData.vout[2].assets[0].decimals,2);
        test.equal(txData.vout.length,3);

        //test that changes are correct
        test.equal(changes['type'],'issuance');
        test.equal(changes['assetId'],'Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW');
        test.equal(changes['issuer'],'DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB');
        test.equal(changes['locked'],false);
        test.equal(changes['aggregation'],0);
        test.equal(changes['divisibility'],2);
        test.equal(changes['supply'],100000000n);
        test.equal(changes['torrent'],'8b070252024ceb8c9a4447b3d87b1702b238fcaf');
        test.equal(changes['metadataHash'],'01055b20ca31594c895c4660fee6cf130e0fa42e34a5fe64945a3e51c803b5be');
        test.equal(changes['changes']['Ua6Q6Huj6r9wTKWYpMaMDmfp4yttTjA7cZQLBW']['DNXvGEbektkqX2csSGjM2FrxEBHTaPdxkB'],100000000n);

        test.done();

    },'transfer match error in version 2 code': function(test) {
        let txData={"txid":"563e391eceeb6c215d7eef940e7ed4f157d9e2ebaf84c427d560bc8fac208fcf","hash":"563e391eceeb6c215d7eef940e7ed4f157d9e2ebaf84c427d560bc8fac208fcf","version":1,"size":426,"vsize":426,"weight":1704,"locktime":0,"vin":[{"txid":"0b3a84f814473a3a973c0843f2a4023af59e3da17b870a57427d77b90b5ff227","vout":1,"scriptSig":{"asm":"3044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e[ALL] 02c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763","hex":"473044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763"},"sequence":4294967295,"value":"10000000","source":8741473,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]}},{"txid":"388d6623399c6fb71b1f60fbbfd3ab772778753a9dd7ee2a74a58375eb03d97f","vout":0,"scriptSig":{"asm":"3045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44[ALL] 02c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763","hex":"483045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763"},"sequence":4294967295,"value":"600","source":8741475,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]},"assets":[{"assetId":"La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn","amount":"1","decimals":0}]}],"vout":[{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 f382101097b7c4cc70d1c4e65d722cf3ca2282ac OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914f382101097b7c4cc70d1c4e65d722cf3ca2282ac88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DTLeYnshgD2Hx3eaKcYWnfHBCfxVWQwf7i"]},"vout":0},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 9d01269d19b835972133d670e59a95747fad5eda OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9149d01269d19b835972133d670e59a95747fad5eda88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DKTG1LWdHgXCWkBEq8HdmNh4Q6G7s5jza2"]},"vout":1},{"value":"0","scriptPubKey":{"asm":"OP_RETURN 4441021500000101","hex":"6a084441021500000101","type":"nulldata"},"vout":2},{"value":"9998900","scriptPubKey":{"asm":"OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]},"vout":3}],"hex":"010000000227f25f0bb9777d42570a877ba13d9ef53a02a4f243083c973a3a4714f8843a0b010000006a473044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763ffffffff7fd903eb7583a5742aeed79d3a75782777abd3bffb601f1bb76f9c3923668d38000000006b483045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763ffffffff0458020000000000001976a914f382101097b7c4cc70d1c4e65d722cf3ca2282ac88ac58020000000000001976a9149d01269d19b835972133d670e59a95747fad5eda88ac00000000000000000a6a08444102150000010134929800000000001976a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac00000000"};
        //asset should be moved to output 1 but error in how legacy systems worked the output should go to 3
        let changes=assetDecoder(txData);
        test.equal(changes.changes.La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn.DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj,0n);
        test.done();
    },'transfer match error fix version 3': function(test) {
        let txData={"txid":"563e391eceeb6c215d7eef940e7ed4f157d9e2ebaf84c427d560bc8fac208fcf","hash":"563e391eceeb6c215d7eef940e7ed4f157d9e2ebaf84c427d560bc8fac208fcf","version":1,"size":426,"vsize":426,"weight":1704,"locktime":0,"vin":[{"txid":"0b3a84f814473a3a973c0843f2a4023af59e3da17b870a57427d77b90b5ff227","vout":1,"scriptSig":{"asm":"3044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e[ALL] 02c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763","hex":"473044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763"},"sequence":4294967295,"value":"10000000","source":8741473,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]}},{"txid":"388d6623399c6fb71b1f60fbbfd3ab772778753a9dd7ee2a74a58375eb03d97f","vout":0,"scriptSig":{"asm":"3045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44[ALL] 02c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763","hex":"483045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763"},"sequence":4294967295,"value":"600","source":8741475,"scriptPubKey":{"asm":"OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]},"assets":[{"assetId":"La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn","amount":"1","decimals":0}]}],"vout":[{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 f382101097b7c4cc70d1c4e65d722cf3ca2282ac OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914f382101097b7c4cc70d1c4e65d722cf3ca2282ac88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DTLeYnshgD2Hx3eaKcYWnfHBCfxVWQwf7i"]},"vout":0},{"value":"600","scriptPubKey":{"asm":"OP_DUP OP_HASH160 9d01269d19b835972133d670e59a95747fad5eda OP_EQUALVERIFY OP_CHECKSIG","hex":"76a9149d01269d19b835972133d670e59a95747fad5eda88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DKTG1LWdHgXCWkBEq8HdmNh4Q6G7s5jza2"]},"vout":1},{"value":"0","scriptPubKey":{"asm":"OP_RETURN 4441031500000101","hex":"6a084441031500000101","type":"nulldata"},"vout":2},{"value":"9998900","scriptPubKey":{"asm":"OP_DUP OP_HASH160 bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c OP_EQUALVERIFY OP_CHECKSIG","hex":"76a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac","reqSigs":1,"type":"pubkeyhash","addresses":["DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj"]},"vout":3}],"hex":"010000000227f25f0bb9777d42570a877ba13d9ef53a02a4f243083c973a3a4714f8843a0b010000006a473044022048f278e725abe9bbd6e50647163b6842d135129b02dd88dc4b1611e43d7f49c602204a4d4ccefa94120b85d5be1c0ab48ce4bf685d35ad191b666eeb0d441d86229e012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763ffffffff7fd903eb7583a5742aeed79d3a75782777abd3bffb601f1bb76f9c3923668d38000000006b483045022100ebb9c98f6be6d5d78e12ff73f10a4dc80c3398d0a12c624bbc321cc71e1a042d02203001b84246e1311cfa20af8f2b6ec35e4b30539e9b2d3335a5064cc34dd34b44012102c3b32c2a627120c36cc15f24e427a886b2c9b9362aa79ce99c97e610e8795763ffffffff0458020000000000001976a914f382101097b7c4cc70d1c4e65d722cf3ca2282ac88ac58020000000000001976a9149d01269d19b835972133d670e59a95747fad5eda88ac00000000000000000a6a08444102150000010134929800000000001976a914bb6e24f1d0512fb2a0e7edcb4b8bb93c4584732c88ac00000000"};
        //asset should be moved to output 1 but error in how legacy systems worked the output should go to 3
        let changes=assetDecoder(txData);
        test.equal(changes.changes.La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn.DNE8r6HMT3dM2hrCAp6Z9svu6N6RpXttgj,-1n);
        test.equal(changes.changes.La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn.DTLeYnshgD2Hx3eaKcYWnfHBCfxVWQwf7i,0n);
        test.equal(changes.changes.La4JuXuysRvcuShxJfwbmiXNsVLa9ytqt7odBn.DKTG1LWdHgXCWkBEq8HdmNh4Q6G7s5jza2,1n);
        test.done();
    }
};

