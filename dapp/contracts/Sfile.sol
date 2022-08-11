// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

contract Sfile {

    address owner;
    string s1file;
    //string s2file;


    constructor() {
      owner = msg.sender;
    }

    modifier onlyOwner {
      require(msg.sender == owner);
      _;
    }

    function in_Tag(string memory _s1file) public {
        s1file = _s1file;
    }

    function out_Tag() public view onlyOwner returns(string memory) {
        return s1file;
    }
}