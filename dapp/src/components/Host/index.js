import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

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