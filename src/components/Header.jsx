import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';

import Logo from "../assets/images/TinyLogo.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";
import Insta from "../assets/images/insta.svg";

import "./main-banner.css";

const Header = () => {
    return (
        <React.Fragment>
            <Navbar bg="trans" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src={Logo} alt='logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                        </Nav>
                        <Nav className="d-flex">
                            <Nav.Link className="mr-4" href="#action1"><img src={Discord} alt="nav-icon"/></Nav.Link>
                            <Nav.Link className="mr-4" href="#action2"><img src={Twitter} alt="nav-icon"/></Nav.Link>
                            <Nav.Link className="mr-4" href="#action2"><img src={Insta} alt="nav-icon"/></Nav.Link>
                            <Button variant="btn btn-light button-wallet">Connect Wallet</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;