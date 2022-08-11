# ETHSeoul-SoulTag
- ETH Seoul 2022 Hackathon Results
- Produced by Team Unchain

## Used Technology Stack
<img width="400" alt="스크린샷 2022-08-11 오후 11 18 35" src="https://user-images.githubusercontent.com/66289619/184155436-4064c83a-529d-40e6-9aa1-11ae00ccdcf0.png">
<img width="400" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184155465-3ba775ad-f8bb-429f-84fd-00878d23b8fc.png">


<img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white"> <img src="https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=Solidity&logoColor=white"> <img src="https://img.shields.io/badge/IPFS-65C2CB?style=for-the-badge&logo=IPFS&logoColor=white">

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"> 

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">

## Project Description

### Reasons for creating this project:
We have recognized that too much of our personal information is abused in our daily lives. Our information is being processed and sold by unreliable third parties. But we are too defenseless on these issues. Blockchain has brought information transparency, but the protection of personal data has not yet been achieved. This is the biggest wall that blockchain has to overcome in order to be applied in reality. Our experimental protocol design makes it possible to achieve self-soverign identity (SSI) by delegating privacy and privacy rights to individuals. We make many things possible, such as data selling and rental, through this point. Also, this will solve the flaws of nft and maximize the performance. It is expected that many problems of the Defi ecosystem can also be solved based on the utilization of this protocol.

### Methodology:
We propose a protocol that achieves both anonymity and confidentiality without using zkp. This protocol allows us to achieve SSI. There are two protocols we propose. One is a least-responsible protocol that does not use stealth addresses and has confidentiality and anonymity. The second is an irresponsible protocol that uses stealth addresses to maintain confidentiality and anonymity.

#### 1. Least Responsibility Protocol with confidentiality and anonymity without using stealth addresses

- A protocol that can protect confidentiality and personal information by selectively disclosing the non-transferable NFT (Soul Bound Token) containing personal information, object identification, and personal information contained therein, and a recovery method were also presented. Through this protocol, we can achieve self-soverign identity (SSI).

- In order to achieve SSI, two preemptive tasks must be resolved. It is anonymity and privacy. We use this protocol to achieve two things: minimal anonymity and privacy. In this case, minimum anonymity means anonymity that is difficult to specify off-chain. It is not intended to guarantee anonymity by using stealth addresses for unique identifiers on-chain.

- The anonymity achieved by using a stealth address can achieve complete confidentiality, but I think that it is highly likely to be abused by society. So, we believe that at least the information of the departure and destination addresses to which the encrypted personal information is transferred should be disclosed. Therefore, while address disclosure is not completely confidential, it is a minimal line of defense against any potential abuse. Also, we encrypted the contents for authentication using an asymmetric key. The party who authorizes this uses their private key to sign and re-stores the document that discloses the public key, which is a signature verification method, on the block chain. Here, since claims are encrypted with the holder's private key, only the person in charge of the personal information can open it, so personal information control is completely possible. In addition, by selectively disclosing the sbt issued in this way in the future, sovereignty control over personal information can be achieved once again.

- We envisioned a scenario in which we applied this protocol. Now the idea of this scenario stems from the discomfort we experienced when entering this hackathon venue. This problem is due to the primitive verification method. The names of the participants on the excel sheet and the participants themselves were asked. If the name you answered at that time and the name on the list match, you were allowed to enter. At this time, there were several participants from foreign countries who registered but had difficulties in entering because their names were lost from the list. Also, the possibility that someone enters by saying someone else's name cannot be ruled out. Therefore, security was very weak, and the possibility of losing my personal information could not be excluded if the list they had was lost. We also questioned the ability to identify ourselves by writing down our real names. This actually does not protect my personal information and allows it to be disclosed to anyone.

- However, the Soul Tag (Sbt) issued by applying this protocol we made identifies us as a unique object, so if we only show this Soul Tag, we selectively show our identity information to guarantee the right to control my personal information You can receive and verify your identity. Also, during the hackathon, you can selectively disclose your information during ice-breaking time and prove to other participants that you are a participant in this hackathon.

#### 2. Responsible protocol using stealth addresses to keep confidentiality and anonymity

- This protocol achieves complete anonymity and confidentiality through stealth addresses that do not disclose addresses. Since the address cannot be specified, the personal information contained in the transmitted sbt can be completely protected. However, the problem is that people who use this protocol for malicious purposes are also untraceable. Therefore, in order to proceed in the right direction, it is recommended to use protocol 1 rather than this method using a stealth address. The difference between protocol 1 and protocol 2 is whether or not a stealth address is used.
 
The detailed preparation method of the protocol is as follows.

Manufacturing method

How to use the protocol

### Applied in generality meeting

When you need to identify for a one-time event

#### 1. One-time ticket to ensure anonymity and authenticate yourself
   Method: Personal information protection authentication can be achieved by issuing a one-time ticket sbt and disclosing the minimum information required for authentication.

#### 2. One-time ID that can guarantee anonymity and authenticate yourself
Method: One-time identification card for refugees (refugees can achieve identification and anonymity only with the sbt issued by itself)

#### 3. Anonymous Electronic Voting
Method: Because transfer is impossible, their rights cannot be transferred and only sbt ownership can identify them.

### Organize

As a methodology for achieving SSI, we presented two protocols. Achieving SSI requires reconciling anonymity and confidentiality. This protocol presents a solution that can solve the fundamental problems of the nft and defi ecosystems. Additionally, it may be difficult for the establishment of SSI to find a connection point for a solution to the problem of defi and nft. However, if you apply sbt to reality as above, you will understand naturally.
 
## Environment
 (introduce our project environment…)
 
## Prerequisite
 (intruduce additional package, or dependencies…)

## Files
 (introduce our KEY(main) files…)

## Usage
 (introduce how to execute our project…)

## Tracks we participated in
### Main Tracks
- Creativity
- Public Goods
- dApps
- Privacy & Scaling
- etc

### Sponsor Tracks
- IPFS & Filecoin
- Polygon

## Contributers
- Team Unchain

## Presentation Images
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184172479-e209efc9-13a9-4363-bbd7-6c246010288e.png">
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184171805-ee204d04-c72f-43df-b120-2266b8e5b2e1.png">
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184171804-bd11f903-35d8-4da2-b6f8-2ed82cfd84a2.png">
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184171801-fe7a1a6a-6904-4401-8e07-a4bde6359af5.png">
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184171797-06cbb816-ca7c-46f4-8576-dd757d24602f.png">
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184171795-8118579b-d881-49b9-99d2-e4cec1b6f21c.png">
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184171791-a02e1cce-4497-48e7-94a7-2e91aada7b1c.png">
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184171786-9d203f5d-2136-454b-a969-efcb0be443fe.png">
<img width="500" alt="스크린샷 2022-08-11 오후 11 19 49" src="https://user-images.githubusercontent.com/66289619/184171781-88612eaa-5034-43aa-9047-014cd3eaba2f.png">
