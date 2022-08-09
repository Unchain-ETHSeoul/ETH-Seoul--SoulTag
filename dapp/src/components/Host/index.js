import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    const [property, setProperty] = useState([]);

    //const [property, setProperty] = useState<PropertyInput[]>({ id: 0, title: ''});

    let property_cnt = 0;
    let Props_Arr = [];

    useEffect(()=>{
        setProperty([... property, {
            id: property_cnt,
            text: ""
        }]);
    },[])

    const onSwitchAction = () => {
        setIsSwitchOn(!isSwitchOn);
        console.log(isSwitchOn);
    };

    function addProp() {
        property_cnt++;
        //Props_Arr.push( {id: property_cnt, text:""} );
        setProperty([... property, {
            id: property_cnt,
            text: ""
        }]);
    }

    const deleteProp = (index) => {
        console.log("click");
        //property_arr.filter(item => item.id !==index);
        let propro = property;
        console.log(index);
        //propro.splice(index,1);
        //setProperty([... property]);
    }

    useEffect(() => {
        console.log("changed");
        console.log(property);
        drawprops();
    },[property]);

    function drawprops() {
        console.log("asdf");
        return(
            property.map((item,index) => (
                <Form.Group key={index} as={Row} className="mb-3" controlId={item.id+"form"}>
                    <Form.Label column sm={2}>
                        Prop{index+1}
                    </Form.Label>
                    <Col sm={10}>
                        <S.Property>
                            <Form.Control type="text" placeholder="Property Name"/>
                            <S.ColGap></S.ColGap>
                            <DropdownButton
                                as={ButtonGroup}
                                key={'Secondary'}
                                id={`dropdown-variants-${'Secondary'}`}
                                variant={'Secondary'.toLowerCase()}
                                title={'Type'}
                            >
                                <Dropdown.Item eventKey="1">Number</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Text</Dropdown.Item>
                            </DropdownButton>
                            <S.ColGap></S.ColGap>
                            <Button variant="outline-danger" key={index}>-</Button>
                        </S.Property>
                    </Col>
                </Form.Group>
            ))
        )
    }

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
                    <Form>                     
                        {drawprops()}
                    </Form>
                    <Button variant="primary" size="sm" onClick={addProp}>
                        +
                    </Button>{' '}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
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