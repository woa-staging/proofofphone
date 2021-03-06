var fs = require('fs');
var Web3 = require('web3');
var web3;
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider(config.smartContract.rpc[config.environment]));
}

var clientAddress = "";
var val = 100000000000000000;

sendTransaction();

function sendTransaction() {
	console.log("config:");
	console.log(config);
	if(!web3.isConnected()) {
		console.log('{code: 200, title: "Error", message: "check RPC"}');
	} else {
		console.log(web3.eth.accounts);
		web3.eth.defaultAccount = web3.eth.accounts[1];
		console.log("web3.eth.defaultAccount:");
		console.log(web3.eth.defaultAccount);

		/*var gasWillUsed = web3.eth.estimateGas({
		    from: web3.eth.defaultAccount,
		    to: clientAddress,
		    value: val
		});
		//gasWillUsed += 60000;
		console.log(gasWillUsed);*/

		//return;
		
		//sending test tx
		web3.eth.sendTransaction({
				//gas: gasWillUsed, 
				value: val, 
				from: web3.eth.defaultAccount,
				to: clientAddress
		}, function(err, address) {
		  	if (!err)
		    	console.log(address);
			else {
				console.log("err:");
				console.log(err);
			}
		});
	}
}