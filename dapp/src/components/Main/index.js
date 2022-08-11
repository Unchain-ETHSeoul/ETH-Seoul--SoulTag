import React, { useState, useEffect, useRef, useCallback } from 'react';
// import Ui from '../Ui/Ui';

import * as S from './style';

import { useWeb3React } from '@web3-react/core';
import { injected } from '../../lib/connector';

import axios from 'axios';
import { IpfsImage } from 'react-ipfs-image';
// import './index.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css'
import ColoredHR from '../Elements/ColoredHR';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';

// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

// import ColoredHR from '../Elements/ColoredHR';
import HostPage from '../../pages/HostPage';
// import ClientPage from '../../pages/ClientPage';

import { Contract , ethers }  from "ethers";
import contract_SoulTag from "../../artifacts/contracts/SoulTag.sol/SoulTagPrac2.json";

import contract_Sfile from "../../artifacts/contracts/Sfile.sol/SoulTagPrac2.json";

import rsa from "node-rsa";

const contractAddress = "0xf31969aa4ed63b403d030f6528eb14d6209d8492";
const abi = contract_SoulTag.abi;

const contractAddress2 = "0xe912997B0e801230f8Bd1CD89cFEC993Bbf6cdE2";
const abi2 = contract_Sfile.abi;


const Main = () => {
    //contract
    const [currentAccount, setCurrentAccount] = useState(null); 
    const [unsignedChallengerList, setUnsignedChallengerList] = useState(null); 
    const [metamaksExist, setMetamaskExist] = useState(null);

    const [moadlInfoshow, setModalInfoShow] = useState(false);
    const handleinfoClose = () => setModalInfoShow(false);
    const handleinfoShow = () => setModalInfoShow(true);

    const [moadlRegishow, setModalRegiShow] = useState(false);
    const handleregiClose = () => setModalRegiShow(false);
    const handleregiShow = () => setModalRegiShow(true);

    const { chainedId, account, active, activate, deactivate } = useWeb3React();
    const handdleConnect = () => {
        if (active) {
            deactivate();
            return;
        }
        activate(injected, (error) => {
            if ('/No Ethereum provider was found on window.ethereum/'.test(error)) {
                window.open('https://metamask.io/download.html');
            }
        });

    }

    function infotoregi() {
        handleinfoClose();
        handleregiShow();
    }

    function regitoinfo() {
        handleregiClose();
        handleinfoShow();
    }

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn1, setIsSwitchOn1] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);
    const [isSwitchOn3, setIsSwitchOn3] = useState(false);
    const [isSwitchOn4, setIsSwitchOn4] = useState(false);
    const [isSwitchOn5, setIsSwitchOn5] = useState(false);
    const [isSwitchOn6, setIsSwitchOn6] = useState(false);

    const [sbm, setSbm] = useState(false);

    const onSwitchAction = () => {
        setIsSwitchOn(!isSwitchOn);
        console.log(isSwitchOn);
    };

    //checkWallet
    const checkWalletIsConnected = () => {
        const { ethereum } = window; 
        if (!ethereum) {
          console.log("Make sure you have MetaMask installed");
        } else {
          console.log("Wallet exists!");
          setMetamaskExist(true);
        }
    }

    useEffect(() => {
        checkWalletIsConnected();
    }, [])
    
    //connectWallet
    const connectWallet = async() => {
        const { ethereum } = window;
    
        if (!ethereum) {
          console.log("Make Sure you have Metamask installed");
          return;
        } else {
          console.log("Wallet exists!");
        }
    
        const allAccounts = await ethereum.request({ method: 'eth_requestAccounts' });
    
        if (allAccounts.length !== 0) {
          setCurrentAccount(allAccounts[0]);
          console.log("Current Account : ",allAccounts[0]);
        } else {
           console.log("Accounts not exist");
        }
    } 

    useEffect(() => {
        connectWallet();
    }, metamaksExist) 

    //submit
    const submit = async () => {
        handleregiClose();

        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const SoulTag = new ethers.Contract(contractAddress, abi, signer);
        const Sfile = new ethers.Contract(contractAddress2, abi2, signer);
        
        console.log("Initialize payment");
        let challengeTx = await SoulTag.challenge();
        let in_Tag = await Sfile.in_Tag("{\"name\" : \"kc\" , \"nikname\" : \"kc\", \"age\" : 25}");

        let key = new rsa().generateKeyPair();
        let publicKey = new rsa();
        let privateKey = new rsa(); 

        let a = key.exportKey("public");
        let b = key.exportKey("private");
        publicKey.importKey(a);
        privateKey.importKey(b);

        console.log(publicKey,privateKey);
        const encry = privateKey.encryptPrivate(in_Tag,"base64");
        console.log("encry" ,encry);
        console.log(challengeTx.message);
    }

    return (
        <S.Container className='App'>
            <h1><a href='/' className='pageName'>Main</a></h1>
            <Container>
                <Row>
                    <Col sm>
                        <S.MainUi>
                            <ListGroup horizontal>
                                <ListGroup.Item><S.Account1>Account</S.Account1></ListGroup.Item>
                                <ListGroup.Item><S.Account2>{currentAccount ? currentAccount : "-"}</S.Account2></ListGroup.Item>
                            </ListGroup>
                        </S.MainUi>
                    </Col>
                    <Col>
                        <S.MainUi>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="outline-warning" href='/host'>&emsp;Host&emsp;</Button>
                                <Button variant="outline-warning" href='/'>&ensp;Main&ensp;</Button>
                            </ButtonGroup>
                        </S.MainUi>
                    </Col>
                    <Col>
                        <S.MainUi>
                            <Button className='b' variant='outline-warning' size='md' onClick={handdleConnect}>{active ? "Disconnect" : "Connect"}</Button>
                        </S.MainUi>
                    </Col>
                </Row>
            </Container>

            <ColoredHR />
            <Tabs defaultActiveKey="main" id="uncontrolled-tab-example" fill className='pageColor'></Tabs>
            {/* -- Ui Menu -- */}

            {/* -- Main Menu -- */}
            <Container>
                <Row>
                    <Col sm><S.EventUI className='im'><IpfsImage hash='QmRACojSdFuqnyyfQZ9Zgiz6zrVCUX1JRkYZyvRGu1MCzG' gatewayUrl='https://gateway.pinata.cloud/ipfs' style={{ width: "150px" }}></IpfsImage></S.EventUI></Col>
                    <Col sm><S.EventUI className='im' onClick={handleinfoShow}><IpfsImage hash='QmaUwMyVAfZEWnPNiVrWAivrx2dUaSHB9DmR3a2GagzehX' gatewayUrl='https://gateway.pinata.cloud/ipfs' style={{ height: "150px" }}></IpfsImage></S.EventUI></Col>
                    <Col sm><S.EventUI className='im'><img src="https://gateway.pinata.cloud/ipfs/QmYFLAuKx7AspjzgVActznhm78Lt99u1Gs6WCZSTJ6ZMKT/filecoin-fil-logo.png" style={{ width: "150px" }}></img></S.EventUI></Col>
                    {/* <Col sm>Add event dynamically</Col> */}
                </Row>
            </Container>

            {/* Event info modal  == >  Event register modal */}
            <Modal show={moadlInfoshow} onHide={handleinfoClose}>
                <Modal.Header closeButton gap={3}>
                    <Modal.Title><S.ColGap>Eth Seoul 2022<IpfsImage hash='QmaUwMyVAfZEWnPNiVrWAivrx2dUaSHB9DmR3a2GagzehX' gatewayUrl='https://gateway.pinata.cloud/ipfs' style={{ height: "25px", marginLeft: "20px" }}></IpfsImage></S.ColGap></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title><S.ColGap>Informations</S.ColGap></Modal.Title>
                    <Card>
                        <Card.Body>
                            <Container>
                                <div>Runs from: Aug 5 - 11, 2022</div>
                                <div>Registration starts: 20 JULY 2022</div>
                                <div>Registration ends: 03 AUGUST 2022</div>
                                <div>Hackathon starts: 05 AUGUST 2022</div>
                                <div>Hackathon ends: 11 AUGUST 2022</div>
                            </Container>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleinfoClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={infotoregi}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Event info modal  == >  Event register modal  == >  Submit */}
            <Modal show={moadlRegishow} onHide={regitoinfo}>
                <Modal.Header closeButton gap={3}>
                    <Modal.Title><S.ColGap>Eth Seoul 2022<IpfsImage hash='QmaUwMyVAfZEWnPNiVrWAivrx2dUaSHB9DmR3a2GagzehX' gatewayUrl='https://gateway.pinata.cloud/ipfs' style={{ height: "25px", marginLeft: "20px" }}></IpfsImage></S.ColGap></Modal.Title>
                </Modal.Header>
                <Modal.Body gap={3}>
                    <Modal.Title className='mb-3'>Submission information list</Modal.Title>
                    <Row>
                        <Col>
                            <Form.Group className='mb-1' controlId='exampleForm.ControlInput1'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder='Name'/>
                            </Form.Group>
                            <Form.Group className='mb-1' controlId='exampleForm.ControlInput2'>
                                <Form.Label>Nickname</Form.Label>
                                <Form.Control placeholder='Nickname'/>
                            </Form.Group>
                            <Form.Group className='mb-1' controlId='exampleForm.ControlInput3'>
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder='Age'/>
                            </Form.Group>
                            <Form.Group className='mb-1' controlId='exampleForm.ControlInput4'>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder='Address'/>
                            </Form.Group>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={regitoinfo}>
                        Back
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Submit
                    </Button>
                </Modal.Footer>

            </Modal>
            <Alert key='success' variant='success' show={sbm}>
                    asdf
          {/* This is a {variant} alert—check it out! */}
        </Alert>
        </S.Container>
    )
}
export default Main;