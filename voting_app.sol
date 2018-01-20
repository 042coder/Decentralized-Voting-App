pragma solidity ^0.4.19

//contract --> like class in any object oriented language
contract Voting{

// mapping --> like dictionary. Here key(bytes32) --> candidate name and value(uint8) --> votes of candidate
mapping(bytes32 ==> uint8) public votes

//No array of strings allowed in constructor yet by solidity
bytes32[] public candidates;

//Constructor
function Voting(bytes32[] names){

	candidates = names;
}

// Get number of votes for a specific candidate
function NumVotes(bytes32 candidate) returns (uint8) {
	return votes[candidate];
}

// Increase number of votes for a specific candidate
function IncrementVote(bytes32 candidate) {
	// Check if candidate exists
	if(CandidateExists(candidate)) {
		votes[candidate] = votes[candidate] + 1;
	}
	else {
		throw;
	}
}

// Check if given candidate is a valid candidate
function CandidateExists(bytes32 candidate) returns (bool) {
	for (uint i = 0; i < candidates.length; i++) {
		if(candidates[i] == candidate) {
			return true;
		}
	}
	return false;
}
}