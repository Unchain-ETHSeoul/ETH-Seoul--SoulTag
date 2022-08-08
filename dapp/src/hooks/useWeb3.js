import { useEffect, useState } from 'react';
import Web3 from 'web3/dist/web3.min.js';

const useWeb3 = () => {
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);
 
    const getChainId = async () => {
        const chainId = await window.ethereum.request({
            // 메타마스크가 사용하고 있는 네트워크의 체인 아이디를 return
            method: 'eth_chainId',
        });
 
        return chainId;
    };
 
    const getRequestAccounts = async () => {
        const accounts = await window.ethereum.request({
            // 연결이 안되어 있다면 메타마스크 내의 계정들과 연결 요청
            // 연결이 되었다면 메타마스크가 갖고 있는 계정들 중 사용하고 있는 계정 가져오기
            method: 'eth_requestAccounts',
        });
 
        console.log(accounts);
 
        return accounts;
    };
 
    const addNetwork = async (_chainId) => {
        // 메타마스크에서 네트워크 추가를 할 때 들어가는 속성들
        const network = {
            chainId: _chainId,
            chainName: 'Ganache',
            rpcUrls: ['http://127.0.0.1:8545'],
            nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH', // 통화 단위
                decimals: 18, // 소수점 자리수
            },
        };
 
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [network],
        });
    };
 
    // window 객체에 대한 접근은 모든 요소들이 랜더 완료되었을 때 하는 것이 효과적이다.
    useEffect(() => {
        // console.log(window.ethereum);
        const init = async () => {
            try {
                const targetChainId = '0x4d2';
                const chainId = await getChainId(); // 1234 , hex: 0x4d2
                console.log('체인 아이디 : ', chainId);
                if (targetChainId !== chainId) {
                    // 네트워크 추가하는 코드
                    addNetwork(targetChainId);
                }
 
                const [accounts] = await getRequestAccounts();
 
                // web3 라이브러리를 메타마스크에 연결 (맵핑)
                const web3 = new Web3(window.ethereum);
                setAccount(accounts);
                setWeb3(web3);
            } catch (e) {
                console.error(e.message);
            }
        };
 
        if (window.ethereum) {
            // 메타마스크 설치된 클라이언트
            // window.ethereum.request() : 메타마스크에 요청 보내는 메소드
            // RPC 사용
            init();
        }
    }, []);
 
    return [account, web3];
};
 
export default useWeb3;