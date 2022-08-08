import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';

import { useWeb3React } from '@web3-react/core';
import { injected } from '../../lib/connector';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import ColoredHR from '../Elements/ColoredHR';

const Main = () => {

    const { chainedId, account, active, activate, deactivate } = useWeb3React();
    const handdleConnect = () => {
        if(active) {
          deactivate();
          return;
        }
        activate(injected, (error) => {
            if('/No Ethereum provider was found on window.ethereum/'.test(error)) {
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

    return(
        <S.Container>
            <Card>
                <div>Main Page Prototype</div>
                <Container>
                    <Row>
                        <Col><ListGroup horizontal>
                            <ListGroup.Item>Address Img</ListGroup.Item>
                            <ListGroup.Item><Col ></Col>Account: {account}</ListGroup.Item>
                        </ListGroup></Col>
                        <Col><Button onClick={() => handleShow_Mint('md-down')}>Mint STT</Button></Col>
                        <Col><Button onClick={handdleConnect}>{active ? "Disconnect" : "Connect"}</Button></Col>
                    </Row>

                    <ColoredHR></ColoredHR>

                    <Row>
                        <Col>
                            <Card.Body>
                                <Row>
                                    <Col><Card.Title>My SBT</Card.Title></Col><Col></Col><Col></Col>
                                </Row>
                                <Row>This part can be added dynamically, later.
                                    <Stack gap={3}>
                                        <ListGroup horizontal>
                                            <ListGroup.Item><S.SBT1>FileCoindddddfasdfasdfasdf</S.SBT1></ListGroup.Item>
                                            <ListGroup.Item>blah blah no example</ListGroup.Item>
                                            <ListGroup.Item><Button variant="outline-primary" onClick={() => printMsg("To be implemented...")}>View</Button></ListGroup.Item>
                                        </ListGroup>
                                        
                                        <ListGroup horizontal = 'sm'>
                                            <ListGroup.Item>ETH</ListGroup.Item>
                                            <ListGroup.Item>blah blah 'SM' example</ListGroup.Item>
                                            <ListGroup.Item><Button variant="outline-primary" onClick={() => handleShow('md-down')}>View</Button></ListGroup.Item>
                                        </ListGroup>
                                        
                                        <ListGroup horizontal = 'md'>
                                            <ListGroup.Item>Polygon</ListGroup.Item>
                                            <ListGroup.Item>blah blah 'MD' example</ListGroup.Item>
                                            <ListGroup.Item><Button variant="outline-primary" onClick={() => printMsg("To be implemented...")}>View</Button></ListGroup.Item>
                                        </ListGroup>
                                    </Stack>
                                </Row>

                                <ColoredHR></ColoredHR>

                                <Row>
                                    <Col><Card.Title>My STT</Card.Title></Col><Col></Col><Col></Col>
                                </Row>
                                <Row>This part can be added dynamically, later.
                                    <Stack gap={3}>                                        
                                        <ListGroup horizontal = 'md'>
                                            <ListGroup.Item>MYSTT1</ListGroup.Item>
                                            <ListGroup.Item>blah blah 'MD' example</ListGroup.Item>
                                            <ListGroup.Item><Button variant="outline-primary" onClick={() => printMsg("To be implemented...")}>View</Button></ListGroup.Item>
                                        </ListGroup>
                                    </Stack>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
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
            <Modal show={show_Mintmodal} fullscreen={fullscreen_Mintmodal} onHide={() => setShow_Mintmodal(false)}>
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
                        disabled = {!isSwitchOn}
                    />
                    <Form.Check 
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`claim2(age)`}
                        disabled = {!isSwitchOn}
                    />
                    <Form.Check 
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`claim3(gender)`}
                        disabled = {!isSwitchOn}
                    />
                    <Button onClick={() => printMsg("To be implemented...")}>Mint</Button>
                </Modal.Body>
            </Modal>

        </S.Container>
    )
}
export default Main;