import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';


/*

Client scenario

Premise
p1) The client is subscribed to the service.
p2) There are events that clients can apply for.
p3) All of these can be confirmed on one screen.

1. The client account (Ethereum) should be displayed on the top bar. The same goes for logging out.
2. The client clicks on the event and fills out a kind of application (application form).
3. If you hover over (or click) Help in the form, the Help tooltip appears.
3-1. In the case of the form to fill out, first of all, include only four [Name (required), Nickname (required), Age (Optional), Gender (Optional) ]). After, the form elemets will be added
3-2. If you can get information through my did, it will be automatically filled in or only ask for additional information you need.
4. If the required fill-in form is blank, the Submit (Apply) button is disabled.
5. If you have filled out the form according to your requirements, click the Apply button.
6. Whether the application has been received or completed is displayed through the warning window.

Gogogo

*/

const Client = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onSwitchAction = () => {
        setIsSwitchOn(!isSwitchOn);
        console.log(isSwitchOn);
    };

    return(
        <S.Container>
                <Row xs="5">
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col><Button size="lg" variant="primary" href="/" onClick={() => { alert("logged out.") }}>Wallet Connected</Button>{''}</Col>
                </Row>
            
                <Button variant="outline-secondary" size="lg" onClick={handleShow}>
                    <S.Margin>ETH</S.Margin>
                </Button>
                
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Participate Some Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>ETH(example)</h4>
                        <p>Modal body content</p>
                        <Form.Check 
                            type="checkbox"
                            id={`default-checkbox`}
                            label={`agree(name)`}
                        />
                        <Form.Check 
                            type="checkbox"
                            id={`default-checkbox`}
                            label={`agree(age)`}
                        />
                        <Form.Check 
                            type="checkbox"
                            id={`default-checkbox`}
                            label={`agree(gender)`}
                        />
                        <h4>Header2(optional?)</h4>
                        <p>Modal body content</p>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Do you agree something or not?"
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
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} disabled = {!isSwitchOn}>
                        Participate!
                    </Button>
                </Modal.Footer>
            </Modal>
        </S.Container>
    )
}
export default Client;