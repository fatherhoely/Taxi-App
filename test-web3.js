const Web3 = require('web3');
const web3 = new Web3("https://alfajores-forno.celo-testnet.org"); // Directly pass the URL

console.log('Web3 version:', web3.version ? web3.version : 'Web3 version not available');
