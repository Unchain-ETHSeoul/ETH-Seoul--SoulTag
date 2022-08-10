import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

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

    const [nowevent, setNowevent] = useState([]);

    const [cnt, setCnt] = useState(0);

    //const [property, setProperty] = useState<PropertyInput[]>({ id: 0, title: ''});

    //let property_cnt = 0;

    let nowpropname;
    let nowproptype;
    let nowev;

    useEffect(() => {
        setProperty([...property, {
            //title: "",
            props: {
                id: 0,
                propname: "",
                proptype: "no"
            }
        }]);
        setNowevent([{
            title: "",
            props: {
                id: 0,
                propname: "",
                proptype: "no"
            }
        }])
        setCnt(cnt + 1);
    }, [])

    function hostEvent() {
        setEvents([...events, {
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

    function draweventbtn() {
        return (
            <>
                {events.map((item, index) => (
                    <>
                        <Button variant="outline-secondary" size="md" key={index} onClick={e => {
                            console.log(item);
                            console.log(item.props);
                            setNowevent(item.props);
                            nowev = item;
                            handleeventShow();
                            //drawevent(item);
                        }}>
                            <S.Margin>{item.title}</S.Margin>
                        </Button>


                        <Modal show={eventshow} onHide={handleeventClose}>
                            <Modal.Header closeButton gap={3}>
                                <Modal.Title><S.ColGap>Event {nowevent.title == "" ? null : nowevent.title}</S.ColGap></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {item.props.map((it, idx) => (
                                    <h4 key={idx}>{it.props.propname}, {it.props.proptype}</h4>
                                ))}
                                {/* {nowevfunc} */}
                            </Modal.Body>
                            <Modal.Footer>

                            </Modal.Footer>
                        </Modal>
                    </>
                ))}
            </>
        )
    }

    function allinput() {
        //console.log("ALLINPUT");
        //console.log(eventname.length);
        //console.log(property);
        for (var i = 0; i < property.length; i++) {
            //console.log(property[i].props.propname+ ", "+property[i].props.proptype);
            if (property[i].props.propname == "") {
                return true;
            } else if (property[i].props.proptype == "no") {
                return true;
            }
        }
        if (eventname == "") {
            return true;
        }
        return false;
    }

    function noweventprint(item) {
        console.log(item);
    }

    function nowevfunc() {
        return (
            nowev.map((it, idx) => (
                <h4 key={idx}>{it.props.propname}, {it.props.proptype}</h4>
            ))
        )
    }

    return (
        <S.Container className='d-grid gap-2'>
            <Button variant="primary" size="lg" onClick={handleShow}>
                <S.Margin>HOST</S.Margin>
            </Button>

            {/* properyty input modal */}
            <Modal show={show} onHide={hostClose}>
                <Modal.Header closeButton gap={3}>
                    <Modal.Title><S.ColGap>Event</S.ColGap></Modal.Title>
                    <Form>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            onChange={e => {
                                //console.log("e.target.value: "+ e.target.value + ", "+index);
                                //setType(e.target.value);
                                //eventname = e.target.value;
                                //console.log(e.target.value.length);
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
                    <Button variant="primary" onClick={hostEvent} disabled={allinput()}>
                        HOST!
                    </Button>
                </Modal.Footer>
            </Modal>

            {draweventbtn()}



            {/* One Event modal needed */}
        </S.Container>
    )
}
export default Host;