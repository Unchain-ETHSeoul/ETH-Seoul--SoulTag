import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
/*



*/

const Host = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [property, setProperty] = useState([]);
    const [cnt, setCnt] = useState(0);

    //const [property, setProperty] = useState<PropertyInput[]>({ id: 0, title: ''});

    //let property_cnt = 0;

    useEffect(()=>{
        setProperty([... property, {
            id: 0,
            propname: "",
            proptype: ""
        }]);
        setCnt(cnt+1);
    },[])

    function hostEvent() {
        const jsonContent = JSON.stringify(property);
        console.log(jsonContent);
        hostClose();
    }

    function hostClose() {
        setProperty([]);
        handleClose();
        setProperty([{
            id: 0,
            propname: "",
            proptype: ""
        }]);
        setCnt(0+1);
    }

    function addProp() {
        setCnt(cnt+1);
        setProperty([... property, {
            id: cnt,
            propname: "",
            proptype: ""
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
        //console.log("changed");
        drawprops();
        //console.log(property);
    },[property]);

    function handleChange(event) {
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        //console.log(fieldName + " " +fieldVal);
        //this.setState({form: {...this.state.form, [fieldName]: fleldVal}})
    }

    function drawprops() {
        //console.log("asdf");
        return(
            property.map((item,index) => (
                <Form.Group key={index} as={Row} className="mb-3" controlId={item.id+"form"}>
                    <Form.Label column sm={2}>
                        Prop{index+1}
                    </Form.Label>
                    <Col sm={10}>
                        <S.Property>
                            <Form.Control
                                type="text"
                                placeholder="Property Name"
                                onChange={e => {
                                    console.log("e.target.value: "+ e.target.value + ", "+index);
                                    //setType(e.target.value);
                                    property[index].propname = e.target.value;
                                    setProperty([... property]);
                                }}
                            />
                            <S.ColGap></S.ColGap>

                            <Form.Select aria-label="Default select example"
                                onChange={e => {
                                console.log("e.target.value: "+ e.target.value + ", "+index);
                                //setType(e.target.value);
                                property[index].proptype = e.target.value;
                                setProperty([... property]);
                                }}>
                                <option>Select Type</option>
                                <option value="Number">Number</option>
                                <option value="Text">Text</option>
                            </Form.Select>
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

            <Modal show={show} onHide={hostClose}>
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
                    <Button variant="secondary" onClick={hostClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hostEvent}>
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