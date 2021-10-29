import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import "./main-banner.css";
import RectTwo from "../assets/images/Retângulo 1146.svg";

const Banner = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col className="hero-title">
                        <label className="hero-text">sold out</label>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col className="scroll-sec hero-title">
                        <a href="#footer">
                            <img className="z-index-5" src={RectTwo} alt="scrollerSec"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Banner;