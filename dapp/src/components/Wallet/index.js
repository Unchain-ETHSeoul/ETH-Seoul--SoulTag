import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';

import { useWeb3React } from '@web3-react/core';
import { injected } from '../../lib/connector';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

import ColoredHR from '../Elements/ColoredHR';
import HostPage from '../../pages/HostPage';

import { IpfsImage } from 'react-ipfs-image';
// import ClientPage from '../../pages/ClientPage';

import './index.css';

const Wallet = () => {
    //contract
    const [currentAccount, setCurrentAccount] = useState(null);
    const [metamaksExist, setMetamaskExist] = useState(null);

    const [moadlInfoshow, setModalInfoShow] = useState(false);
    const handleinfoClose = () => setModalInfoShow(false);
    const handleinfoShow = () => setModalInfoShow(true);

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

    let data = null;

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const [fullscreen_Mintmodal, setFullscreen_Mintmodal] = useState(true);
    const [show_Mintmodal, setShow_Mintmodal] = useState(false);


    //const [isSwitchOn, setIsSwitchOn] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn1, setIsSwitchOn1] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);
    const [isSwitchOn3, setIsSwitchOn3] = useState(false);
    const [isSwitchOn4, setIsSwitchOn4] = useState(false);
    const [isSwitchOn5, setIsSwitchOn5] = useState(false);

    const onSwitchAction = () => {
        setIsSwitchOn(!isSwitchOn);
        // console.log(isSwitchOn);
    };
    const onSwitchAction1 = () => {
        setIsSwitchOn1(!isSwitchOn1);
        // console.log(isSwitchOn);
    };
    const onSwitchAction2 = () => {
        setIsSwitchOn2(!isSwitchOn2);
        // console.log(isSwitchOn);
    };
    const onSwitchAction3 = () => {
        setIsSwitchOn3(!isSwitchOn3);
        // console.log(isSwitchOn);
    };
    const onSwitchAction4 = () => {
        setIsSwitchOn4(!isSwitchOn4);
        // console.log(isSwitchOn);
    };
    const onSwitchAction5 = () => {
        setIsSwitchOn5(!isSwitchOn5);
        // console.log(isSwitchOn);
    };

    function handleShow_Mint(breakpoint) {
        setFullscreen_Mintmodal(breakpoint);
        setShow_Mintmodal(true);
    }

    function printMsg(msg) {
        alert(msg);
    }


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
    const connectWallet = async () => {
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
            console.log("Current Account : ", allAccounts[0]);
        } else {
            console.log("Accounts not exist");
        }
    }

    useEffect(() => {
        connectWallet();
    }, metamaksExist)

    const makejsonobject = () => {
        data = {
            "event": "ETH Seoul",
            "description": "Runs from: Aug 5 - 11, 2022, Registration ends: 03 AUGUST 2022, Hackathon ends: 11 AUGUST 2022",
            "claims":{
                "Name": "Bob",
                "Nickname": "BtB",
                "Age": "25",
                "Address": "Seoul"
            },
            "verificationMethods": {
                "Issure": "ETH Seoul",
                "Type": "EcdsaSecp256k1VerificationKey2019",
                "PublicKey": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
            },
            "signature": "Gw4rkP6nWnNZVS66r9afyqrJSVp5km9R+O3Ie2YW1rtmabOVyO0LyfZRWiYGbzc5/HmlkZ4zWNiIrNPptWogBS1ovuGLUkkh+9tnURzDWEsIYgzhd91/0RlRgj5NE8PFHZ32RCwyPy3LccsGTCM1dcKErN/7XRdGmV+8HsgF5lShKmrjOl11ZLPotlgBLbYLMphWDogLrjc3Xo5/ib2rXSLvnjjGSf+WPe0zRtMYnQ4YR7cJFnknD38ejYWserFllTfvRkjKA2qOmxYYPfuIJMKKlFGJxu2GsDJXOphJ9sKz30D2fIlanczXGSgPf1JRtWeMsdhapRh4hEwJRTntag=="
        }
    }

    const exportData = () => {
        makejsonobject();
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(data)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
        link.click();
        handleinfoClose();
    };



    return (
        <S.Container>

            <h1><a href='/wallet' className='pageName'>Soul Tag Wallet</a></h1>
            <br />
            <Card>
                <Card.Body className='App'>
                    <br />
                    <Row>
                        <div className='login'>
                            <Col />
                            <Col><ListGroup horizontal>
                                <ListGroup.Item><S.Account1>Account</S.Account1></ListGroup.Item>
                                <ListGroup.Item><S.Account2>{currentAccount ? currentAccount : "-"}</S.Account2></ListGroup.Item>
                            </ListGroup></Col>
                            <Col />
                            {/* <Col><Button className='b' variant='outline-warning' size='lg' onClick={() => handleShow_Mint('md-down')}>Mint STT</Button></Col> */}
                            {/* <Col><Button className='b' variant='outline-warning' size='lg' onClick={handdleConnect}>{active ? "Disconnect" : "Connect"}</Button></Col> */}
                        </div>
                    </Row>
                    <br /><br />
                    <ColoredHR></ColoredHR>
                    {/* SBT */}
                    <Row>
                        <Col>
                            <div>
                                <Row>
                                    <Col><Card.Title className='c' align='middle'>My Soulbound Token Retrieve</Card.Title></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className='c' align='middle'>This part can be added dynamically, later.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Stack gap={3}>
                                        <div className='md'>
                                            <ListGroup horizontal='sm' className='d'>
                                                <ListGroup.Item><S.SBT2><img src='./ETHSeoul.png' style={{ height: "100px" }}></img></S.SBT2></ListGroup.Item>
                                                <ListGroup.Item><S.SBT3><Row>
                                                    <Col><Form.Check
                                                        type="switch"
                                                        id="name"
                                                        label=""
                                                        onChange={onSwitchAction}
                                                        checked={isSwitchOn}
                                                    /></Col>
                                                    <Col>Name : </Col>
                                                    <Col>{isSwitchOn ? <span>Bob</span> : <span className='blurs'>Bob</span>}</Col>
                                                </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="nickname"
                                                            label=""
                                                            onChange={onSwitchAction1}
                                                            checked={isSwitchOn1}
                                                        /></Col>
                                                        <Col>NickName : </Col>
                                                        <Col>{isSwitchOn1 ? <span>BtB</span> : <span className='blurs'>Btb</span>}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="age"
                                                            label=""
                                                            onChange={onSwitchAction2}
                                                            checked={isSwitchOn2}
                                                        /></Col>
                                                        <Col>Age : </Col>
                                                        <Col>{isSwitchOn2 ? <span>25</span> : <span className='blurs'>25</span>}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="address"
                                                            label=""
                                                            onChange={onSwitchAction3}
                                                            checked={isSwitchOn3}
                                                        /></Col>
                                                        <Col>Address : </Col>
                                                        <Col>{isSwitchOn3 ? <span>Seoul</span> : <span className='blurs'>Seoul</span>}</Col>
                                                    </Row></S.SBT3></ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <S.SBT4>
                                                            <Button variant="secondary" onClick={handleinfoShow}>ISSUE</Button>
                                                        </S.SBT4>
                                                    </Row>

                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                        <div className='md'>
                                            <ListGroup horizontal className='c'>
                                                <ListGroup.Item><S.SBT2><img src='./POLYGON.png' style={{ height: "100px" }}></img></S.SBT2></ListGroup.Item>
                                                <ListGroup.Item><S.SBT3><Row>
                                                    <Col><Form.Check
                                                        type="switch"
                                                        id="name"
                                                        label=""
                                                    // onChange={onSwitchAction}
                                                    // checked={isSwitchOn}
                                                    /></Col>
                                                    <Col>Name : </Col>
                                                    <Col>{false ? <span>Bob</span> : <span className='blurs'>Bob</span>}</Col>
                                                </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="nickname"
                                                            label=""
                                                        // onChange={onSwitchAction1}
                                                        // checked={isSwitchOn1}
                                                        /></Col>
                                                        <Col>NickName : </Col>
                                                        <Col>{false ? <span>BtB</span> : <span className='blurs'>Btb</span>}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="age"
                                                            label=""
                                                        // onChange={onSwitchAction2}
                                                        // checked={isSwitchOn2}
                                                        /></Col>
                                                        <Col>Age : </Col>
                                                        <Col>{false ? <span>25</span> : <span className='blurs'>25</span>}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="address"
                                                            label=""
                                                        // onChange={onSwitchAction3}
                                                        // checked={isSwitchOn3}
                                                        /></Col>
                                                        <Col>Address : </Col>
                                                        <Col>{false ? <span>Seoul</span> : <span className='blurs'>Seoul</span>}</Col>
                                                    </Row></S.SBT3></ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <S.SBT4>
                                                            <Button variant="secondary">ISSUE</Button>
                                                        </S.SBT4>
                                                    </Row>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                        <div className='md'>
                                            <ListGroup horizontal='md' className='d'>
                                                <ListGroup.Item><S.SBT2><img src='./STARKNET.png' style={{ height: "100px" }}></img></S.SBT2></ListGroup.Item>
                                                <ListGroup.Item><S.SBT3><Row>
                                                    <Col><Form.Check
                                                        type="switch"
                                                        id="name"
                                                        label=""
                                                    // onChange={onSwitchAction}
                                                    // checked={isSwitchOn}
                                                    /></Col>
                                                    <Col>Name : </Col>
                                                    <Col>{false ? <span>Bob</span> : <span className='blurs'>Bob</span>}</Col>
                                                </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="nickname"
                                                            label=""
                                                        // onChange={onSwitchAction1}
                                                        // checked={isSwitchOn1}
                                                        /></Col>
                                                        <Col>NickName : </Col>
                                                        <Col>{false ? <span>BtB</span> : <span className='blurs'>Btb</span>}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="age"
                                                            label=""
                                                        // onChange={onSwitchAction2}
                                                        // checked={isSwitchOn2}
                                                        /></Col>
                                                        <Col>Age : </Col>
                                                        <Col>{false ? <span>25</span> : <span className='blurs'>25</span>}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><Form.Check
                                                            type="switch"
                                                            id="address"
                                                            label=""
                                                        // onChange={onSwitchAction3}
                                                        // checked={isSwitchOn3}
                                                        /></Col>
                                                        <Col>Address : </Col>
                                                        <Col>{false ? <span>Seoul</span> : <span className='blurs'>Seoul</span>}</Col>
                                                    </Row></S.SBT3></ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <S.SBT4>
                                                            <Button variant="secondary">ISSUE</Button>
                                                        </S.SBT4>
                                                    </Row>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                        <br /><br /><br />
                                    </Stack>
                                </Row>
                                <ColoredHR></ColoredHR>
                                {/* <Row>
                                    <Col><Card.Title>My STT</Card.Title></Col><Col></Col><Col></Col>
                                </Row>
                                <Row>This part also can be added dynamically, later.
                                    <Stack gap={3}>
                                        <ListGroup horizontal='md'>
                                            <ListGroup.Item><S.SBT1>MYSTT1</S.SBT1></ListGroup.Item>
                                            <ListGroup.Item><S.SBT2>blah blah 'MD' example</S.SBT2></ListGroup.Item>
                                            <ListGroup.Item><S.SBT4><Button variant="outline-primary" onClick={() => printMsg("To be implemented...")}>View</Button></S.SBT4></ListGroup.Item>
                                        </ListGroup>
                                    </Stack>
                                </Row> */}
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* SBT or STT Modal */}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton gap={3}>
                    <Modal.Title><S.ColGap>Eth Seoul 2022<IpfsImage hash='QmaUwMyVAfZEWnPNiVrWAivrx2dUaSHB9DmR3a2GagzehX' gatewayUrl='https://gateway.pinata.cloud/ipfs' style={{ height: "25px", marginLeft: "20px" }}></IpfsImage></S.ColGap></Modal.Title>
                </Modal.Header>
                <Modal.Body gap={3}>
                    <Modal.Title>Submission information list</Modal.Title>
                    <Row>
                        <Col><Form.Check
                            type="switch"
                            id="name"
                            label=""
                            onChange={onSwitchAction}
                            checked={isSwitchOn}
                        /></Col>
                        <Col>Name : </Col>
                        <Col>{isSwitchOn ? <span>Bob</span> : <span className='blurs'>Bob</span>}</Col>
                    </Row>
                    <Row>
                        <Col><Form.Check
                            type="switch"
                            id="nickname"
                            label=""
                            onChange={onSwitchAction1}
                            checked={isSwitchOn1}
                        /></Col>
                        <Col>NickName : </Col>
                        <Col>{isSwitchOn1 ? <span>BtB</span> : <span className='blurs'>Btb</span>}</Col>
                    </Row>
                    <Row>
                        <Col><Form.Check
                            type="switch"
                            id="age"
                            label=""
                            onChange={onSwitchAction2}
                            checked={isSwitchOn2}
                        /></Col>
                        <Col>Age : </Col>
                        <Col>{isSwitchOn2 ? <span>25</span> : <span className='blurs'>25</span>}</Col>
                    </Row>
                    <Row>
                        <Col><Form.Check
                            type="switch"
                            id="address"
                            label=""
                            onChange={onSwitchAction3}
                            checked={isSwitchOn3}
                        /></Col>
                        <Col>Address : </Col>
                        <Col>{isSwitchOn3 ? <span>Seoul</span> : <span className='blurs'>Seoul</span>}</Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Back
                    </Button>
                </Modal.Footer>

            </Modal>

            {/* Mint STT Modal */}
            <Modal show={moadlInfoshow} onHide={() => handleinfoClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Make SoulBound Token</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <S.ModalImg>
                        <img src="./ETHSeoul.png" style={{ width: "500px", position: "relative", left: "-16px", top: "-20px" }}></img>
                    </S.ModalImg>
                    <h4>ETH Seoul</h4>
                    <Card className="mb-3">
                        <Card.Body>
                            <div>Runs from: Aug 5 - 11, 2022</div>
                            <div>Registration ends: 03 AUGUST 2022</div>
                            <div>Hackathon ends: 11 AUGUST 2022</div>
                        </Card.Body>
                    </Card>

                    <h4>Claims</h4>
                    <Card className="mb-3">
                        <ListGroup >
                            <ListGroup.Item><Row>
                                <Col><Form.Check
                                    type="switch"
                                    id="name"
                                    label=""
                                    onChange={onSwitchAction}
                                    checked={isSwitchOn}
                                /></Col>
                                <Col>Name : </Col>
                                <Col>{isSwitchOn ? <span>Bob</span> : <span className='blurs'>Bob</span>}</Col>
                            </Row>
                                <Row>
                                    <Col><Form.Check
                                        type="switch"
                                        id="nickname"
                                        label=""
                                        onChange={onSwitchAction1}
                                        checked={isSwitchOn1}
                                    /></Col>
                                    <Col>NickName : </Col>
                                    <Col>{isSwitchOn1 ? <span>BtB</span> : <span className='blurs'>Btb</span>}</Col>
                                </Row>
                                <Row>
                                    <Col><Form.Check
                                        type="switch"
                                        id="age"
                                        label=""
                                        onChange={onSwitchAction2}
                                        checked={isSwitchOn2}
                                    /></Col>
                                    <Col>Age : </Col>
                                    <Col>{isSwitchOn2 ? <span>25</span> : <span className='blurs'>25</span>}</Col>
                                </Row>
                                <Row>
                                    <Col><Form.Check
                                        type="switch"
                                        id="address"
                                        label=""
                                        onChange={onSwitchAction3}
                                        checked={isSwitchOn3}
                                    /></Col>
                                    <Col>Address : </Col>
                                    <Col>{isSwitchOn3 ? <span>Seoul</span> : <span className='blurs'>Seoul</span>}</Col>
                                </Row></ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <h4>Verification Methods</h4>
                    <Card className="mb-3">
                        <Card.Body>
                            <div>Issure: ETH Seoul</div>
                            <div>Type: EcdsaSecp256k1VerificationKey2019</div>
                            <div className='onl'>Publickey: H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV</div>
                        </Card.Body>
                    </Card>
                    <h4>Signature</h4>
                    <Card className="mb-3">
                        <Card.Body>
                            <div className='onl'>Gw4rkP6nWnNZVS66r9afyqrJSVp5km9R+O3Ie2YW1rtmabOVyO0LyfZRWiYGbzc5/HmlkZ4zWNiIrNPptWogBS1ovuGLUkkh+9tnURzDWEsIYgzhd91/0RlRgj5NE8PFHZ32RCwyPy3LccsGTCM1dcKErN/7XRdGmV+8HsgF5lShKmrjOl11ZLPotlgBLbYLMphWDogLrjc3Xo5/ib2rXSLvnjjGSf+WPe0zRtMYnQ4YR7cJFnknD38ejYWserFllTfvRkjKA2qOmxYYPfuIJMKKlFGJxu2GsDJXOphJ9sKz30D2fIlanczXGSgPf1JRtWeMsdhapRh4hEwJRTntag==</div>
                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleinfoClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={exportData}>
                        Export
                    </Button>
                </Modal.Footer>
            </Modal>
        </S.Container>
    )
}
export default Wallet;