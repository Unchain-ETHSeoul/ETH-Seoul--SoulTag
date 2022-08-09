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

    const [eventshow, seteventShow] = useState(false);
    const handleeventClose = () => seteventShow(false);
    const handleeventShow = () => seteventShow(true);

    //const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [property, setProperty] = useState([]);
    const [propsname, setPropsname] = useState(false);
    const [propstype, setPropstype] = useState(false);

    const [eventname, setEventname] = useState("");
    const [events, setEvents] = useState([]);

    const [cnt, setCnt] = useState(0);

    //const [property, setProperty] = useState<PropertyInput[]>({ id: 0, title: ''});

    //let property_cnt = 0;

    useEffect(() => {
        setProperty([...property, {
            //title: "",
            props: {
                id: 0,
                propname: "",
                proptype: "no"
            }
        }]);
        setCnt(cnt + 1);
    }, [])

    function hostEvent() {
        setEvents([...events,{
            title: eventname,
            props: property
        }]); // add event
        console.log(events);
        hostClose();
        const jsonContent = JSON.stringify(events);
        console.log(jsonContent);
    }

    function hostClose() {
        setProperty([]);
        handleClose();
        setProperty([{
            //title: eventname,
            props: {
                id: 0,
                propname: "",
                proptype: "no"
            }
        }]);
        setCnt(0 + 1);
        setEventname("");
    }

    function addProp() {
        setCnt(cnt + 1);
        setProperty([...property, {
            //title: eventname,
            props: {
                id: cnt,
                propname: "",
                proptype: "no"
            }
        }]);
    }

    const deleteProp = (index) => {
        // will be added...
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
    }, [property]);

    function drawprops() {
        //console.log("asdf");
        return (
            property.map((item, index) => (
                <Form.Group key={index} as={Row} className="mb-3" controlId={item.id + "form"}>
                    <Form.Label column sm={2}>
                        Prop{index + 1}
                    </Form.Label>
                    <Col sm={10}>
                        <S.Property>
                            <Form.Control
                                type="text"
                                placeholder="Property Name"
                                onChange={e => {
                                    //console.log("e.target.value: "+ e.target.value + ", "+index);
                                    //setType(e.target.value);
                                    property[index].props.propname = e.target.value;
                                    setProperty([...property]);
                                }}
                            />
                            <S.ColGap></S.ColGap>

                            <Form.Select aria-label="Default select example"
                                onChange={e => {
                                    //console.log("e.target.value: "+ e.target.value + ", "+index);
                                    //setType(e.target.value);
                                    property[index].props.proptype = e.target.value;
                                    setProperty([...property]);
                                }}>
                                <option value="no">Select Type</option>
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

    function drawevents() {
        return (
            events.map((item, index) => (
                <Button variant="outline-secondary" size="md" key={index}>
                    <S.Margin>{item.title}</S.Margin>
                </Button>
            ))
        )
    }

    function allinput() {
        console.log(eventname);
        console.log(property);
        if(eventname==""){
            return false;
        }
        for(var i=0;i<property.length;i++){
            if(property[i].propname==""){
                return false;
            } else if(property[i].proptype=="no"){
                return false;
            }
        }
        return true;
    }

    return (
        <S.Container className='d-grid gap-2'>
            <Button variant="primary" size="lg" onClick={handleShow}>
                <S.Margin>HOST</S.Margin>
            </Button>

            <Modal show={show} onHide={hostClose}>
                <Modal.Header closeButton gap={3}>
                    <Modal.Title><S.ColGap>Event</S.ColGap></Modal.Title>
                    <Form>
                        <Form.Control
                            type="text"
                            placeholder="Property Name"
                            onChange={e => {
                                //console.log("e.target.value: "+ e.target.value + ", "+index);
                                //setType(e.target.value);
                                //eventname = e.target.value;
                                setEventname(e.target.value);
                            }}
                        />
                    </Form>
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
                    <Button variant="primary" onClick={hostEvent} disabled={allinput() ? false : true}>
                        HOST!
                    </Button>
                </Modal.Footer>
            </Modal>

            {drawevents()}

            <Button variant="outline-secondary" size="lg">
                <S.Margin>ETH</S.Margin>
            </Button>

            {/* One Event modal needed */}
        </S.Container>
    )
}
export default Host;