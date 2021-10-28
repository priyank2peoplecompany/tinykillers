import React from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import avatarOne from "../assets/images/Grupo 4227.png";
import "./slider.css";

const Slider = () => {
    const a = document.getElementsByClassName("carousel-control-prev");
    console.log(a)
    return (
        <>
            <Container fluid className="slider-section">
                <Container className="pt-5 pd-5 vh-50">
                    <Carousel pause='hover'>
                        <Carousel.Item>
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <img
                                        className="img-fluid d-block"
                                        src={avatarOne}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <img
                                        className="img-fluid d-block"
                                        src={avatarOne}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <img
                                        className="img-fluid d-block"
                                        src={avatarOne}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <img
                                        className="img-fluid d-block"
                                        src={avatarOne}
                                        alt="First slide"
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                         <Carousel.Item>
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <img
                                        className="img-fluid d-block"
                                        src={avatarOne}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <img
                                        className="img-fluid d-block"
                                        src={avatarOne}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <img
                                        className="img-fluid d-block"
                                        src={avatarOne}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <img
                                        className="img-fluid d-block"
                                        src={avatarOne}
                                        alt="First slide"
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>

                    </Carousel>
                </Container>
            </Container>
        </>
    );
};

export default Slider;