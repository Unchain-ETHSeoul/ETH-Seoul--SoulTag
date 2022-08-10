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

// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Host = () => {
    const [moadlMakeshow, setModalMakeShow] = useState(false);
    const handleregiClose = () => setModalMakeShow(false);
    const handleregiShow = () => setModalMakeShow(true);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modaleventshow, setmodaleventShow] = useState(false);
    const handlemodaleventClose = () => setmodaleventShow(false);
    const handlmodaleeventShow = () => setmodaleventShow(true);

    // const [fileImg, setFileImg] = useState(null);

    //const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [property, setProperty] = useState([]);
    // const [propsname, setPropsname] = useState(false);
    // const [propstype, setPropstype] = useState(false);

    const [script, setScript] = useState("");

    const [eventname, setEventname] = useState("");
    const [events, setEvents] = useState([]);

    const [nowevent, setNowevent] = useState([]);

    const [logophoto, setlogoPhoto] = useState(null);
    const [logohash, setLogoHash] = useState("");
    const [logofileName, setLogofileName] = useState("");

    const [prizephoto, setprizePhoto] = useState(null);

    const [cnt, setCnt] = useState(0);

    //const [fileImg, setFileImg] = useState(null);
    const [imgsrc, setImgsrc] = useState("");
    const [ihash, setIhash] = useState("");

    const [isadded, setIsadded] = useState(false);

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
        setScript("");
        setlogoPhoto();
        setCnt(cnt + 1);
    }, [])

    function hostEvent() {
        sendImageToIPFSPinata();
        console.log(events);
        hostClose();
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
        setlogoPhoto();
        setScript("");
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

    function allinput() {
        console.log("ALLINPUT");
        //console.log(eventname.length);
        console.log(property);
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

        if (logophoto == null) {
            return true;
        }

        if (script == "") {
            return true;
        }

        return false;
    }

    // function noweventprint(item) {
    //     console.log(item);
    // }

    // function nowevfunc() {
    //     return (
    //         nowev.map((it, idx) => (
    //             <h4 key={idx}>{it.props.propname}, {it.props.proptype}</h4>
    //         ))
    //     )
    // }

    const sendEVENTJSONToIPFSPinata = async (EV) => {
        try {

            const res = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
                data: EV,
                headers: {
                    'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                    'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                },
            });

            console.log("ipfs URI ", `ipfs://${res.data.IpfsHash}`)
            const tokenURI = `ipfs://${res.data.IpfsHash}`;
            console.log("Token URI", tokenURI);
            //mintNFT(tokenURI, currentAccount)   // pass the winner

            const result = JSON.parse(tokenURI.toString());
            console.log(result);

        } catch (error) {
            console.log("ERROR: ")
            console.log(error);
        }
    }


    const sendImageToIPFSPinata = async (e) => {
        if (logophoto) {
            try {

                const formData = new FormData();
                formData.append("file", logophoto);
                console.log(formData);
                console.log(logophoto);
                const res = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });

                //console.log(resFile);
                setIhash(res.data.IpfsHash);
                const RealHash = res.data.IpfsHash;
                setLogoHash(RealHash);
                const ImgHash = `ipfs://${res.data.IpfsHash}`;
                console.log(ImgHash);

                setImgsrc(ImgHash);

                let oneEV = {
                    title: eventname,
                    script: script,
                    logohash: RealHash,
                    props: property
                }
                console.log(oneEV);
                setEvents([...events, oneEV]); // add event  
                const jsonContent = JSON.stringify(oneEV);
                console.log(jsonContent);
                console.log("EVENT");
                console.log(events);
                sendEVENTJSONToIPFSPinata(jsonContent);
                return true;

            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
                return false;
            }
        }
    }

    function AddEvent() {
        handleregiShow();
    }

    function Partici() {
        handlmodaleeventShow();
    }

    function partilist() {
        return (
            <S.PersonContainer>
                <S.Person className="mb-3">
                    <Card>
                        <Card.Body>
                            <Container>
                                <Row className="mb-2">
                                    <Col>Name : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Nickname : </Col>
                                    <Col>Kathy</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Age : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Address : </Col>
                                    <Col>private</Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </S.Person>
                <S.Person className="mb-3">
                    <Card>
                        <Card.Body>
                            <Container>
                                <Row className="mb-2">
                                    <Col>Name : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Nickname : </Col>
                                    <Col>Kathy</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Age : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Address : </Col>
                                    <Col>private</Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </S.Person>
                <S.Person className="mb-3">
                    <Card>
                        <Card.Body>
                            <Container>
                                <Row className="mb-2">
                                    <Col>Name : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Nickname : </Col>
                                    <Col>Kathy</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Age : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Address : </Col>
                                    <Col>private</Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </S.Person>
                <S.Person className="mb-3">
                    <Card>
                        <Card.Body>
                            <Container>
                                <Row className="mb-2">
                                    <Col>Name : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Nickname : </Col>
                                    <Col>Kathy</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Age : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Address : </Col>
                                    <Col>private</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Address : </Col>
                                    <Col>private</Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </S.Person>
            </S.PersonContainer>
        )
    }

    function ViewEvent() {
    }

    function newevent() {
        return (
            <>
                <S.EventUI onClick={ViewEvent}>dd</S.EventUI>
                <Modal show={moadlMakeshow} onHide={handleregiClose}>
                    <Modal.Header closeButton gap={3}>
                        <Modal.Title><S.ColGap>Event: </S.ColGap></Modal.Title>
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
                    <Modal.Body gap={3}>
                        <Form>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Script</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    onChange={e => {
                                        //console.log("e.target.value: "+ e.target.value + ", "+index);
                                        //setType(e.target.value);
                                        //eventname = e.target.value;
                                        //console.log(e.target.value.length);
                                        setScript(e.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group controlId="formFilelogo" className="mb-3">
                                <Form.Label>Logo Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    //label={logofileName}
                                    onChange={(e) => {
                                        setlogoPhoto(e.target.files[0]);
                                    }}
                                />
                            </Form.Group>
                        </Form>
                        <Form>
                            {drawprops()}
                        </Form>

                        <Button variant="primary" size="sm" onClick={addProp}>
                            +
                        </Button>{' '}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleregiClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={hostEvent} disabled={allinput()}>
                            HOST!
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    return (
        <S.Container>
            <h1><a href='/' className='pageName'>Host</a></h1>
            <Container>
                <Row>
                    <Col sm>
                        <S.MainUi>
                            <ListGroup horizontal>
                                <ListGroup.Item><S.Account1>Account</S.Account1></ListGroup.Item>
                                <ListGroup.Item><S.Account2>{active ? account : "-"}</S.Account2></ListGroup.Item>
                            </ListGroup>
                        </S.MainUi>
                    </Col>
                    <Col>
                        <S.MainUi>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" href='/host'>Host</Button>
                                <Button variant="secondary" href='/'>Main</Button>
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
                    <S.EventUI onClick={Partici}>asdf</S.EventUI>
                    {isadded ? newevent() : null}
                    <S.EventUI onClick={AddEvent}> + </S.EventUI>
                    {/* switch */}
                </Row>
            </Container>




            {/* Event make modal  == >  Event add */}
            <Modal show={moadlMakeshow} onHide={handleregiClose}>
                <Modal.Header closeButton gap={3}>
                    <Modal.Title><S.ColGap>Event: </S.ColGap></Modal.Title>
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
                <Modal.Body gap={3}>
                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Script</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                onChange={e => {
                                    //console.log("e.target.value: "+ e.target.value + ", "+index);
                                    //setType(e.target.value);
                                    //eventname = e.target.value;
                                    //console.log(e.target.value.length);
                                    setScript(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group controlId="formFilelogo" className="mb-3">
                            <Form.Label>Logo Image</Form.Label>
                            <Form.Control
                                type="file"
                                //label={logofileName}
                                onChange={(e) => {
                                    setlogoPhoto(e.target.files[0]);
                                }}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        {drawprops()}
                    </Form>

                    <Button variant="primary" size="sm" onClick={addProp}>
                        +
                    </Button>{' '}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleregiClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hostEvent} disabled={allinput()}>
                        HOST!
                    </Button>
                </Modal.Footer>
            </Modal>





            {/* Event manage modal  == >  Event manage */}
            <Modal show={modaleventshow} onHide={handlemodaleventClose}>
                <Modal.Header closeButton gap={3}>
                    <Modal.Title><S.ColGap>Participants list</S.ColGap></Modal.Title>
                    <Form>

                    </Form>
                </Modal.Header>
                <Modal.Body gap={3}>
                    <Form>

                    </Form>
                    <Form>

                    </Form>
                    <Form>
                        {/*drawprops()*/}
                        {partilist()}
                    </Form>
                    {/*
                    <Button variant="primary" size="sm" onClick={addProp}>
                        +
                    </Button>{' '}
                     */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlemodaleventClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlemodaleventClose}>
                        Confirmed
                    </Button>
                </Modal.Footer>
            </Modal>
        </S.Container>
    )
}
export default Host;