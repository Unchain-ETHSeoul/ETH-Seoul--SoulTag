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

const Partici = () => {

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

    return (
        <S.Container>
            <h1><a href='/' className='pageName'>Participants</a></h1>
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
                                <Button variant="secondary" href='/host'>host</Button>
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
            <Container></Container>
        </S.Container>
    )
}
export default Partici;