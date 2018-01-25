# Decentralized-Voting-App
This is a decentralized app made to run on the ethereum virtual machine (EVM). It enables the client to vote for one candidate out of several and show the number of votes for each candidate. The app has been written using Solidity language, developed for writing dapps on EVM. The client has been written and run on nodejs. This project helped in improving my understanding of how decentralized application are implemented and how they work.

### Screenshot
A scrrenshot of the client is presented below - 
![img1](/images/img1.jpg?raw=true)

### Instructions

Get the instance address of the Voting contract instance - 
`$node
> Web3 = require('web3')
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> code = fs.readFileSync('Voting.sol').toString()
> solc = require('solc')
> compiledCode = solc.compile(code)
> abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
> VotingContract = web3.eth.contract(abiDefinition)
> byteCode = compiledCode.contracts[':Voting'].bytecode
> deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
> deployedContract.address
> contractInstance = VotingContract.at(deployedContract.address)`

Copy the hash output from `> deployedContract.address` and paste in `index.js` -
`contractInstance = VotingContract.at('0x3e22ae8404a1fb45473c04c9062b3afc90d5cd82')`

Start the EVM by running `node_modules/.bin/testrpc`
Open `index.html` in a browser.

### Licence
MIT License

Copyright (c) [2018] [Tapish Rathore]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
