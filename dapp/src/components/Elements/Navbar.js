import React from "react";

import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return(
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Main Page</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/host">Host Page</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/client">Client Page</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar