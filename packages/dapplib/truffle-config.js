require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note often modify grid gloom surround ski'; 
let testAccounts = [
"0x4787ba6120b78a7f237ac192078b0724d60d4aade668f9bb1ba55f61f3d3fa4f",
"0x340f63d20d7abf734be9150bef3b4181fd824100635983bdc70e020cd16e1ee5",
"0x033e83ee8293433cab31444000dbb4706e46766c89f8e7fe9040353b28daf6f9",
"0xef71389a1589209fee09e0694ef735ccdcad6330ba09adb5ae6e2e8e2446bcd2",
"0x38f2c901959d2319b6e2d2c145bdecf00c5e99d6fd1fb74b96f636860b5a3790",
"0x098c92e604cc3fa825e0fada236c1994c30f0f3b063a3bbaa9cb6e6c6bdca1c8",
"0xdbb5eb7913e95ddba98753344f0287f9c3b10f96ae80481f668e72b78e4123a2",
"0x1cd625e7632e7dedc7c65b7203274103fd756db07bb6edf63a0f65aa0bc2fc62",
"0x32201573098b7d0ab4f6c6e345011fd2c36ac773bec43cc2236166867aad5ab7",
"0xe002955b4806d5a7c4ba115f9c2e0cbde576ebfe1931f1b21ff48c90c0842b83"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


