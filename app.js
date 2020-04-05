// Connect a the web3 provider
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/7c17e9b040494b5a81626a3372fc4217"));
}


// Get the contract address
var RemixContract = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
], 
'0x5BCA4Bc274c48664a5637F02A1d7694de32D01cd',
{
    from: '0xb24926A44f1fB2D6bE4699522208B35A9A3E5c72',
    gasPrice: '1000000',
    gas: '1048576'
}
);

RemixContract.defaultAccount = '0xb24926A44f1fB2D6bE4699522208B35A9A3E5c72';
// console.log(RemixContract);

$("#setMessageButton").click(function () {
    let message = $("#userInput").val();
	RemixContract.methods.setMessage(message)
		.send({from: RemixContract.defaultAccount},
			  (err, result) => { message = result });
    console.log($("#userInput").val())
});
