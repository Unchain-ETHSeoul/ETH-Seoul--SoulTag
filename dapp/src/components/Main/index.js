import React, { useState, useEffect, useRef, useCallback } from 'react';

import * as S from './style';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import ColoredHR from '../Elements/ColoredHR';

const Main = () => {
    return(
        <S.Container>
            <Card>
                <div>Main Page Prototype</div>
                <Container>
                    <Row>
                        <Col><ListGroup horizontal>
                                <ListGroup.Item>Img</ListGroup.Item>
                                <ListGroup.Item><Col ></Col>Address</ListGroup.Item>
                        </ListGroup></Col>
                        <Col><Button href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Mint STT</Button></Col>
                        <Col><Button href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Logout</Button></Col>
                    </Row>

                    <ColoredHR></ColoredHR>

                    <Row>
                        <Col>
                            <Card.Body>
                                <Row>
                                    <Col><Card.Title>My SBT</Card.Title></Col><Col></Col><Col></Col>
                                </Row>
                                <Row>This part can be added dynamically, later.
                                    <Stack gap={3}>
                                        <ListGroup horizontal>
                                            <ListGroup.Item>FileCoin</ListGroup.Item>
                                            <ListGroup.Item>blah blah no example</ListGroup.Item>
                                            <ListGroup.Item>'View' button or blah blah</ListGroup.Item>
                                        </ListGroup>

                                        <ListGroup horizontal = 'sm'>
                                            <ListGroup.Item>ETH</ListGroup.Item>
                                            <ListGroup.Item>blah blah 'SM' example</ListGroup.Item>
                                            <ListGroup.Item>'View' button or blah blah</ListGroup.Item>
                                        </ListGroup>
                                        
                                        <ListGroup horizontal = 'md'>
                                            <ListGroup.Item>Polygon</ListGroup.Item>
                                            <ListGroup.Item>blah blah 'MD' example</ListGroup.Item>
                                            <ListGroup.Item>'View' button or blah blah</ListGroup.Item>
                                        </ListGroup>
                                    </Stack>
                                </Row>

                                <ColoredHR></ColoredHR>

                                <Row>
                                    <Col><Card.Title>My STT</Card.Title></Col><Col></Col><Col></Col>
                                </Row>
                                <Row>This part can be added dynamically, later.
                                    <Stack gap={3}>                                        
                                        <ListGroup horizontal = 'md'>
                                            <ListGroup.Item>MYSTT1</ListGroup.Item>
                                            <ListGroup.Item>blah blah 'MD' example</ListGroup.Item>
                                            <ListGroup.Item>'View' button or blah blah</ListGroup.Item>
                                        </ListGroup>
                                    </Stack>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </S.Container>
    )
}
export default Main;