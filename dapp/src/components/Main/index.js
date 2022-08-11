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

const Main = () => {

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

    function submitbtn() {
        handleregiClose();
        sbm=true;
        //onShowAlert();
        setTimeout(function() {
            sbm=false;
        }, 3000);
    }

    return (
        <S.Container className='App'>
            <h1><a href='/' className='pageName'>Bleem</a></h1>
            <Container>
                <Row>
                    <Col sm>
                        <S.MainUi>
                            <ListGroup horizontal>
                                <ListGroup.Item><S.Account1>Account</S.Account1></ListGroup.Item>
                                <ListGroup.Item><S.Account2>{active ? submitbtn : "-"}</S.Account2></ListGroup.Item>
                            </ListGroup>
                        </S.MainUi>
                    </Col>
                    <Col>
                        <S.MainUi>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" href='/host'>Host</Button>
                                <Button variant="secondary" href='/wallet'>Wallet</Button>
                                <Button variant="secondary" href='/partici'>Participants</Button>
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
                    <Modal.Title>Submission information list</Modal.Title>
                    <Row>
                        <Col>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Name"
                                onChange={onSwitchAction}
                                checked={isSwitchOn}
                            />
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Nickname"
                                onChange={setIsSwitchOn1}
                                checked={isSwitchOn1}
                            />
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Age"
                                onChange={setIsSwitchOn2}
                                checked={isSwitchOn2}
                            />
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Gender"
                                onChange={setIsSwitchOn3}
                                checked={isSwitchOn3}
                            />
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Address"
                                onChange={setIsSwitchOn4}
                                checked={isSwitchOn4}
                            />
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Job"
                                onChange={setIsSwitchOn5}
                                checked={isSwitchOn5}
                            />
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={regitoinfo}>
                        Back
                    </Button>
                    <Button variant="primary" onClick={submitbtn}>
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