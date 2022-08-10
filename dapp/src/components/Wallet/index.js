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
import ClientPage from '../../pages/ClientPage';

import './index.css';
import Ui from '../Ui';

const Wallet = () => {

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
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const [fullscreen_Mintmodal, setFullscreen_Mintmodal] = useState(true);
    const [show_Mintmodal, setShow_Mintmodal] = useState(false);

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const onSwitchAction = () => {
        setIsSwitchOn(!isSwitchOn);
        console.log(isSwitchOn);
    };

    function handleShow_Mint(breakpoint) {
        setFullscreen_Mintmodal(breakpoint);
        setShow_Mintmodal(true);
    }

    function printMsg(msg) {
        alert(msg);
    }

    return (
        <S.Container>
            <Ui/>
            <Card>
                <Card.Body className='App'>
                        <br/>
                        <Row xs="3">
                            <Col><ListGroup horizontal>
                                <ListGroup.Item><S.Account1>Account</S.Account1></ListGroup.Item>
                                <ListGroup.Item><S.Account2>{active ? account : "-"}</S.Account2></ListGroup.Item>
                            </ListGroup></Col>
                            <Col><Button className='b' variant='outline-warning' size='lg' onClick={() => handleShow_Mint('md-down')}>Mint STT</Button></Col>
                            <Col><Button className='b' variant='outline-warning' size='lg'onClick={handdleConnect}>{active ? "Disconnect" : "Connect"}</Button></Col>
                        </Row>
                        <br/><br/>
                        <ColoredHR></ColoredHR>
                        {/* SBT */}
                        <Row>
                            <Col>
                                <Row>
                                    <Col><Card.Title className='c' align='left'>My SBT</Card.Title></Col><Col></Col><Col></Col>
                                </Row>
                                <Row><p className='c' align='left'>This part can be added dynamically, later.</p>
                                    <Stack gap={3}>
                                        <ListGroup horizontal className='c'>
                                            <ListGroup.Item><S.SBT1><Badge bg="secondary">10</Badge></S.SBT1></ListGroup.Item>
                                            <ListGroup.Item><S.SBT2>blah blah no example</S.SBT2></ListGroup.Item>
                                            <ListGroup.Item><S.SBT3><Button className='b' variant="outline-secondary" onClick={() => printMsg("To be implemented...")}>View</Button></S.SBT3></ListGroup.Item>
                                        </ListGroup>
                                        <ListGroup horizontal='sm' className='d'>
                                            <ListGroup.Item><S.SBT1><Badge bg="secondary">30</Badge></S.SBT1></ListGroup.Item>
                                            <ListGroup.Item><S.SBT2>blah blah 'SM' example</S.SBT2></ListGroup.Item>
                s                            <ListGroup.Item><S.SBT3><Button className='b' variant="outline-secondary" onClick={() => handleShow('md-down')}>View</Button></S.SBT3></ListGroup.Item>
                                        </ListGroup>
                                        <ListGroup horizontal='md' className='d'>
                                            <ListGroup.Item><S.SBT1><Badge bg="secondary">50</Badge></S.SBT1></ListGroup.Item>
                                            <ListGroup.Item><S.SBT2>blah blah 'MD' example</S.SBT2></ListGroup.Item>
                                            <ListGroup.Item><S.SBT3><Button className='b' variant="outline-secondary" onClick={() => printMsg("To be implemented...")}>View</Button></S.SBT3></ListGroup.Item>
                                        </ListGroup>
                                        <br/><br/><br/>
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
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* SBT or STT Modal */}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>ETH</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Header1</h4>
                    <p>Modal body content</p>
                    <h4>Header2</h4>
                    <p>Modal body content</p>
                </Modal.Body>
            </Modal>

            {/* Mint STT Modal */}
            {/* <Modal show={show_Mintmodal} fullscreen={fullscreen_Mintmodal} onHide={() => setShow_Mintmodal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Mint some STT Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>ETH(example)</h4>
                    <p>Modal body content</p>
                    <Form.Check
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`claim1(name)`}
                    />
                    <Form.Check
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`claim2(age)`}
                    />
                    <Form.Check
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`claim3(gender)`}
                    />
                    <h4>Header2(optional?)</h4>
                    <p>Modal body content</p>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Include or not?"
                        onChange={onSwitchAction}
                        checked={isSwitchOn}
                    />
                    <Form.Check
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`claim1(name)`}
                        disabled={!isSwitchOn}
                    />
                    <Form.Check
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`claim2(age)`}
                        disabled={!isSwitchOn}
                    />
                    <Form.Check
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`claim3(gender)`}
                        disabled={!isSwitchOn}
                    />
                    <Button onClick={() => printMsg("To be implemented...")}>Mint</Button>
                </Modal.Body>
            </Modal> */}
        </S.Container>
    )
}
export default Wallet;