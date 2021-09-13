const Web3 = require('web3');
const web3 = new Web3('https://winter-crimson-meadow.quiknode.pro/fcbac7552cda69768b840f0dceb884beb9cb7f3a/');
web3.eth.getBlock('latest').then(answer => console.log(answer))
web3.eth.getBlockNumber().then(blockNum => console.log(blockNum))
