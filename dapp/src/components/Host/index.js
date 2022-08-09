import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

/*

Host scenario

Premise
p1) The host is subscribed to this service.
p2) The host does not currently host any events.

1. When the host presses the host button, the event writing form appears.
2. In the event creation form, [agree to various things], [enter basic information], and write [event participation conditions].
3. If you do not fill out the required form, you cannot click the Submit button.
4. When you have completed all required forms, click the Submit button.
4-1. When you click the submit button, the event you created appears right below (on the same page).
4-2. If you click the created event, the event contents created in the form are displayed.
4-3. This created event can be added dynamically in the future to compose a slightly natural UI.

Gogogo

*/

const Host = () => {

    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onSwitchAction = () => {
        setIsSwitchOn(!isSwitchOn);
        console.log(isSwitchOn);
    };

    return(
        <S.Container className='d-grid gap-2'>
            <Button variant="primary" size="lg" onClick={handleShow}>
                <S.Margin>HOST</S.Margin>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Host Some Event</Modal.Title>
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
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} disabled = {!isSwitchOn}>
                        HOST!
                    </Button>
                </Modal.Footer>
            </Modal>

            <Button variant="outline-secondary" size="lg">
                <S.Margin>ETH</S.Margin>
            </Button>
        </S.Container>
    )
}
export default Host;