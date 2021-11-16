import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";

import "./main-banner.css";
import Logo from "../assets/images/TinyFooter.svg";
import Discord from "../assets/images/discord-blue.svg";
import Twitter from "../assets/images/twitter-blue.svg";

const Footer = () => {
    return (
        <>
            <Container fluid className="footer-section" id="google">
                <Container className="py-4 py-md-0">
                    <Row className="d-flex justify-content-between align-items-baseline">
                        <div className="d-inline-block w-auto">
                            <img src={Logo} alt='logo'/>
                            <p className="w-auto d-none d-md-block">© 2021 Tiny Killers, all rights reserved.</p>
                        </div>
                        <div className="d-inline-block w-auto">
                            <div className="d-flex">
                                <Nav.Link href="#action1"><img src={Discord} alt="nav-icon"/></Nav.Link>
                                <Nav.Link href="#action2"><img src={Twitter} alt="nav-icon"/></Nav.Link>
                            </div>
                            <p className="px-3 d-none d-md-block">
                                Terms of use
                            </p>
                        </div>
                    </Row>
                    <Row className="justify-content-start">
                        <Col className="col-12">
                            <p className="w-auto d-md-none">© 2021 Tiny Killers, all rights reserved.</p>
                            <p className="d-md-none">
                                <a href="#">Terms of use</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Footer;
