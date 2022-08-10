import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useWeb3React } from '@web3-react/core';
import { injected } from '../../lib/connector';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import HostPage from '../../pages/HostPage';
import ClientPage from '../../pages/ClientPage';
import MainPage from '../../pages/MainPage';

import './index.css';

const Ui = () => {
    return (
        <>
        <h1 className='a-1'>Page Name</h1>
            <div className='a'>
            <Tabs
                defaultActiveKey="main"
                id="uncontrolled-tab-example"
                fill
                className='d'
            >
                <Tab eventKey="main" title="Main" variant="secondary">
                    <MainPage></MainPage>
                </Tab>
                <Tab eventKey="host" title="Host">
                    <HostPage></HostPage>
                </Tab>
                <Tab eventKey="client" title="Client">
                    <ClientPage></ClientPage>
                </Tab>
            </Tabs>
            </div>
        </>
    )
}
export default Ui;