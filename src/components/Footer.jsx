import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";

import "./main-banner.css";
import Logo from "../assets/images/TinyFooter.svg";
import Discord from "../assets/images/discord-blue.svg";
import Twitter from "../assets/images/twitter-blue.svg";
import Insta from "../assets/images/insta-blue.svg";

const Footer = () => {
    return (
        <>
            <Container fluid className="footer-section" id="google">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img src={Logo} alt='logo'/>
                        </Col>
                        <Col lg={2} md={2} sm={2} xs={2}>
                            <div className="d-flex float-right footer-links">
                                <Nav.Link href="#action1"><img src={Discord} alt="nav-icon"/></Nav.Link>
                                <Nav.Link href="#action2"><img src={Twitter} alt="nav-icon"/></Nav.Link>
                                <Nav.Link href="#action2"><img src={Insta} alt="nav-icon"/></Nav.Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col lg={3}>
                            2021 Tinykillers
                        </Col>
                        <Col lg={2}>
                            <div className="d-flex float-right">
                                Terms of use
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Footer;