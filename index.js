//web3 object for accessing ethereeum APIs
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//abi --> containes interface of Voting class in Json form
abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votes","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidates","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"IncrementVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"CandidateExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"NumVotes","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"names","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
//The contract in evm
VotingContract = web3.eth.contract(abi);
//Instance of contract inside evm
contractInstance = VotingContract.at('0x3e22ae8404a1fb45473c04c9062b3afc90d5cd82')
candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"};

//increment vote for candidate by invoking contract
function voteForCandidate() {
  candidateName = $("#candidate").val();
  contractInstance.IncrementVote(candidateName, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.NumVotes.call(candidateName).toString());
  });
}

//display names and votes
$(document).ready(function() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = contractInstance.NumVotes.call(name).toString();
    $("#" + candidates[name]).html(val);
  }
});