import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useWeb3React } from '@web3-react/core';
import { injected } from '../../lib/connector';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';


import HostPage from '../../pages/HostPage';
import ClientPage from '../../pages/ClientPage';
import MainPage from '../../pages/MainPage';
import TestPage from '../../pages/TestPage';



import './index.css'

const Ui = () => {
    return (
        <>
            <h1><a href='/' className='pageName'>Page</a></h1>
            <Tabs
                defaultActiveKey="main"
                id="uncontrolled-tab-example"
                fill
                className='pageColor'
            >
                <Tab eventKey="main" title="Main">
                    <MainPage></MainPage>
                </Tab>
                <Tab eventKey="host" title="Host">
                    <HostPage></HostPage>
                </Tab>
                <Tab eventKey="client" title="Client">
                    <ClientPage></ClientPage>
                </Tab>
                <Tab eventKey="text" title="Test">
                    <TestPage></TestPage>
                </Tab>
            </Tabs>
        </>
    )
}
export default Ui;