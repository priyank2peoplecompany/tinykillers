import React, {useContext} from 'react';
import {
    Accordion,
    AccordionContext,
    Button,
    Card,
    Carousel, CloseButton,
    Col,
    Container, Modal,
    Row,
    useAccordionButton
} from "react-bootstrap";

import avatarOne from "../assets/images/Grupo 4227.png";
import avatarTwo from "../assets/images/Grupo 4226.png";
import SamuraiOne from "../assets/images/Samurai_Pose04.png";
import SamuraiTwo from "../assets/images/Samurai_Pose03_04.png";
import "./slider.css";
import CustomCheckbox from "./CustomCheckbox";
import SuggestionForm from "./SuggestionForm";
import {toast} from "react-toastify";
import axios from 'axios';

const faqData = [
    {
        name: "LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR? ",
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life terry richardson ad squid. Nihil anim keffiyeh helvetica, craft labore wes anderson cred nesciunt sapiente ea proident."
    },
    {
        name: "LOREM IPSUM DOLOR SIT AMET? ",
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life terry richardson ad squid. Nihil anim keffiyeh helvetica, craft labore wes anderson cred nesciunt sapiente ea proident."
    },
    {
        name: "LOREM IPSUM DOLOR SIT AMET? ",
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life terry richardson ad squid. Nihil anim keffiyeh helvetica, craft labore wes anderson cred nesciunt sapiente ea proident."
    },
    {
        name: "LOREM IPS MAGNA ALIQUYAM ERAT, SED DIAM VOLUPTUA? ",
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life terry richardson ad squid. Nihil anim keffiyeh helvetica, craft labore wes anderson cred nesciunt sapiente ea proident."
    },
    {
        name: "LOREM IPS MAGNA ALIQUYAM ERAT, SED DIAM VOLUPTUA? ",
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life terry richardson ad squid. Nihil anim keffiyeh helvetica, craft labore wes anderson cred nesciunt sapiente ea proident."
    }
]

function CustomToggle({eventKey}) {
    const {activeEventKey} = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        eventKey
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
        <Button
            onClick={decoratedOnClick}
            className="custom-button bg-transparent border-0 float-end font-size-40"
        >
            <label
                style={{color: isCurrentEventKey ? 'black' : 'white'}}>{isCurrentEventKey === true ? "-" : "+"}</label>
        </Button>
    );
}


const Slider = () => {
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.email.value === "" || e.target.email.value === null) {
            toast.error("Cannot keep email field empty")
        } else if (e.target.suggestion.value === "" || e.target.suggestion.value === null) {
            toast.error("Cannot keep suggestion field empty")
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:3001/mail/send',
                headers: {
                    'Content-Type': "application/json",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Accept": "*/*",
                    'Access-Control-Allow-Origin': '*',
                },
                data: {
                    email: e.target.email.value,
                    suggestion: e.target.suggestion.value,
                }
            }).then(res => {
                const persons = res.data;
                console.log("persons", persons)
            });
            toast.success("Submitted successfully")
            console.log("Form was submitted, now the modal can be closed");
            handleClose();
        }
    };

    return (
        <>
            <Container fluid className="slider-section">
                <Container className="pt-5 pd-5 px-0 mx-auto">
                    <Carousel>
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
                                        src={avatarTwo}
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
                                        src={avatarTwo}
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
                                        src={avatarTwo}
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
                                        src={avatarTwo}
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
                                        src={avatarTwo}
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
                                        src={avatarTwo}
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
                                        src={avatarTwo}
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
                                        src={avatarTwo}
                                        alt="First slide"
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </Container>
            <Container fluid className="road-section">
                <Container>
                    <Row>
                        <Col lg={12} md={12} xs={12}>
                            <label className="roadmap-section-title">Roadmap</label>
                        </Col>
                    </Row>
                    <CustomCheckbox/>
                </Container>
            </Container>
{/*            <Container fluid className="game-section">
                <img src="" alt=""/>
                <Container>
                    <Row>
                        <Col lg={12} md={12} xs={12} className="text-center">
                            <label className="game-section-title">GAME</label>
                        </Col>
                        <Col lg={12} md={12} xs={12} className="text-center w-100 ml-20px">
                            <iframe className="video-section" width="868px" height="511px"
                                    src="https://www.youtube.com/embed/B-CUjgWlg40?autoplay=1&controls=0&mute=1&amp;start=55"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </Col>
                        <Col lg={12} md={12} xs={12} className="text-center w-100">
                            <div className="game-subtitle w-868px mt-5">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>*/}
            <Container fluid className="next-section text-center">
                <Row className="next-row-section">
                    <Col lg={4} md={4} xs={4} className="">
                        <picture>
                            <img className="samuraiOne" src={SamuraiOne} alt="samurai pose"/>
                        </picture>
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                        <label className="next-section-title">NEXT KILLERS COLLECTION?</label>
                    </Col>
                    <Col lg={4} md={4} xs={4} className="d-none"/>
                </Row>
                <Container>
                    <Row>
                        <Col lg={12} md={12} xs={12}>
                            <div className="w-868px game-subtitle">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet.
                                <Col lg={12} className="mt-5">
                                    <button className="btn sug-btn" onClick={handleShow}>MAKE A SUGGESTION
                                    </button>
                                </Col>
                            </div>
                        </Col>
                        <Modal
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            className="box-main-modal"
                            fullscreen="lg-down"
                            show={show}
                            onHide={handleClose}
                        >
                            <Modal.Header className="bg-theme-modal" closeButton={false}>
                                <CloseButton variant="white" onClick={handleClose} className="form-control"/>
                            </Modal.Header>
                            <Modal.Body className="bg-theme-modal">
                                <SuggestionForm handleSubmit={handleSubmit}/>

                            </Modal.Body>
                            <Modal.Footer className="bg-theme-modal">
                                <Col lg={12} className="text-center">
                                    <Button className="btn sug-btn mt-3" type="submit" form="myForm">SEND
                                        SUGGESTION</Button>
                                </Col>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="bg-join-footer text-center">
                <Row className="py-5 join-comm">
                    <Col lg={12} className="justify-content-md-center position-relative py-5">
                        <img className="samuraiOneFooter d-block" src={SamuraiOne} alt="samurai pose" />
                        <label className="join-section-title mt-8rem">OUR COMMUNITY DECIDES WHO COMES NEXT!</label>
                        <p className="join-sec-para col-md-6 my-4 mx-auto">After the first edition – Samurais – which set of Tiny Killers would you like to see next? So
                            many overly aggressive characters to choose from… Make a suggestion below, we’d love to hear
                            – and will account – each idea we receive.</p>
                        <div className="mt-3">
                            <button className="btn dis-btn px-4">MAKE A SUGGESTION</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="faq-section pb-5 pb-md-0">
                <Row className="justify-content-md-center text-center pt-5">
                    <Col xs lg={2} className="join-comm">
                        <label className="faq-section-title">FAQS</label>
                    </Col>
                </Row>
                {faqData.map((v, ix) => (
                    <Row className="justify-content-md-center faq-section-box">
                        <Accordion defaultActiveKey={ix}>
                            <Card className="faq-section-sub-title mt-5 px-4 py-1">
                                <Card.Header className='faq-section-sub-title'>
                                    <Row className="justify-content-between align-items-center">
                                        <Col lg={8} md={8} xs={8}>
                                            <label className="faq-title">
                                                {v.name}
                                            </label>
                                        </Col>
                                        <Col lg={2} md={2} xs={2}>
                                            <CustomToggle eventKey="1" className="text-black"/>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
										<span className="v-desc float-start">
											{v.description}
										</span>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row>
                ))}
                <div className="pb-5 pb-md-0">

                </div>
            </Container>
            <Container fluid className="bg-join-footer text-center">
                <Row className="py-5">
                    <Col lg={12} className="justify-content-md-center position-relative py-5">
                        <img className="samuraiTwoFooter d-block" src={SamuraiTwo} alt="samurai pose" />
                        <label className="join-section-title mt-8rem">JOIN OUR COMMUNITY</label>
                        {/*<p>After the first edition – Samurais – which set of Tiny Killers would you like to see next? So*/}
                        {/*    many overly aggressive characters to choose from… Make a suggestion below, we’d love to hear*/}
                        {/*    – and will account – each idea we receive.</p>*/}
                        <div className="mt-3">
                            <button className="btn dis-btn px-4">JOIN ON DISCORD</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="faq-section h-auto">
                <Row className="justify-content-md-center mb-5 text-center pt-5">
                    <Col xs lg={2} className="join-comm">
                        <label className="faq-section-title">OUR TEAM</label>
                    </Col>
                </Row>
                <Row className="col-xl-8 col-lg-10 mx-auto justify-content-center">
                    <Col className="col-md-3 col-6 mb-3">
                        <div className="our-team">
                            <div className="top-image"></div>
                            <h6>CHARLES OLIVER</h6>
                            <p>CO-CREATOR</p>
                            <p>PROJECT LEAD</p>
                        </div>
                    </Col>
                    <Col className="col-md-3 col-6 mb-3">
                        <div className="our-team">
                            <div className="top-image"></div>
                            <h6>CHARLES OLIVER</h6>
                            <p>CO-CREATOR</p>
                            <p>PROJECT LEAD</p>
                        </div>
                    </Col>
                    <Col className="col-md-3 col-6 mb-3">
                        <div className="our-team">
                            <div className="top-image"></div>
                            <h6>CHARLES OLIVER</h6>
                            <p>CO-CREATOR</p>
                            <p>PROJECT LEAD</p>
                        </div>
                    </Col>
                    <Col className="col-md-3 col-6 mb-3">
                        <div className="our-team">
                            <div className="top-image"></div>
                            <h6>CHARLES OLIVER</h6>
                            <p>CO-CREATOR</p>
                            <p>PROJECT LEAD</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Slider;
