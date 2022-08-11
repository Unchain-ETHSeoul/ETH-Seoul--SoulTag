// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

//사이트 가기 => 등록 => 소울 태그 발급 with eth signateur => 소울 태그 지갑으로 가면 연동 
contract SoulTagPrac2 is Ownable, ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    //host soul
    address internal immutable soul;

    //challenging notification
    event challenging (address challenger);
    //give SoulTag notification
    event soulTag (address challenger);

    mapping (address => bool) isChallenged;
    
    //SolTag claims
    mapping (address => uint256) address2TokenId;
    mapping (address => string) address2VerificationMethod;
    mapping (address => string) address2HostName; 

    address[] challenged_stack;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        soul = msg.sender;
    }

    function challenge() public {
        require(isChallenged[msg.sender] != true,"You are chanllenged .. please wait for SoulTag");
        isChallenged[msg.sender] = true;
        challenged_stack.push(msg.sender);
        
        emit challenging(msg.sender);
    }  

    function showUnsingedChallenge() public view returns(address [] memory) {
        return challenged_stack;
    }

    function giveSoulTag(address to, string memory ipfsURI, string memory name, string memory verificationMethod) public {
        require(balanceOf(to) == 0,"Your SoulTag is already made");
        require(isChallenged[to] == true,"You are not challenged");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, ipfsURI);
        _setHostName(to, name);
        _setVerficationMethod(to, verificationMethod);
        address2TokenId[to] = tokenId;

        //unsinged challenger to singned challenger 
        challenged_stack.pop();
        
        //SoulTag was generated and send
        emit soulTag(to);
    }

    function getURI(address challenger) view public returns(string memory) {
        return tokenURI(address2TokenId[challenger]);
    }

    function _setVerficationMethod(address challenger,string memory verificationMethod) private {
        address2VerificationMethod[challenger] = verificationMethod;
    }

    function getVerificationMethod(address challenger) view public returns(string memory) {
        return address2VerificationMethod[challenger];
    }

    function _setHostName(address challenger, string memory name) private {
        address2HostName[challenger] = name;
    }

    function getHostName(address challenger) public view returns(string memory) {
        return address2HostName[challenger];
    }

    // The following functions are overrides required by Solidity.
    function _afterTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721)
    {
        super._afterTokenTransfer(from, to, tokenId);
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal override(ERC721)
    {
        // if sender is a 0 address, this is a mint transaction, not a transfer
        require(from == address(0), "Error : SoulTag can't be transferred");
        super._beforeTokenTransfer(from, to, tokenId);
    }
}