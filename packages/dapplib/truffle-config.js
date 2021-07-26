require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note sister pulp gesture permit foster ghost'; 
let testAccounts = [
"0xc8d6628d8652356a19c7833d5b3c126c3bab35f6ea0bd372523a3acd7daf7a65",
"0x4c0a2104f8dfb5909d905b5f9405209ee19f51a7649831eb095d9c26f08fba26",
"0x6e6720172755559e669c1b539fc1f30c61646332981ad32a0f4390fd7bd3fe41",
"0xfe9196f607c5863b266f28360cb0e2b592aa59afe1514656ba50baa32ca0e8a7",
"0x31e45cb22828d30e633b6de2aeea0766da4de4cca7741508a01d39eca7a3a463",
"0xefc539f156d92214ec6f4968255c073f3055d4146ceacc6c761e36797e5a1b05",
"0xec6925e51b8e4c72cd858f9957cf0a855bbb1d44387009efba17a7cca6b7479a",
"0xdcc099be5fffd3b58ac8db8b206ea9bc7c596e7673325db367572e5841133ed5",
"0x16511d982c97733cd8e5f99707f16456fa8a5498de9c409945fe8b044c85661d",
"0x2909b02d32321791c272f28ff0a47818961a22601e7ad39315265aa9732128f7"
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


