import React, {useContext, useState} from 'react';
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

import avatarOne from "../assets/images/avatarOne.png";
import avatarTwo from "../assets/images/avatarTwo.png";
import avatarThree from "../assets/images/avatarThree.png";
import avatarFour from "../assets/images/avatarFour.png";
import SamuraiOne from "../assets/images/Samurai_Pose04.png";
import SamuraiTwo from "../assets/images/Samurai_Pose03_04.png";
import clan1Bg from "../assets/images/clan/clan-1-bg.svg";
import clan2Bg from "../assets/images/clan/clan-2-bg.svg";
import clan3Bg from "../assets/images/clan/clan3-bg.svg";
import clan4Bg from "../assets/images/clan/clan4-bg.svg";
import clan5Bg from "../assets/images/clan/clan-5-bg.svg";
import clan2Image from "../assets/images/clan/clan2.png";
import clan1Sign from "../assets/images/clan/clan-1-sign.svg";
import clan2Sign from "../assets/images/clan/clan-2-sign.svg";
import clan3Sign from "../assets/images/clan/clan3-sign.svg";
import clan4Sign from "../assets/images/clan/clan4-sign.svg";
import clan5Sign from "../assets/images/clan/clan-5-sign.svg";
import "./slider.css";
import CustomCheckbox from "./CustomCheckbox";
import SuggestionForm from "./SuggestionForm";
import {toast} from "react-toastify";
import axios from 'axios';
import Slider from "react-slick";

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

const SliderMain = () => {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        arrows: false,
        dotsClass: "slick-dots"
    };

    const [clans, setClans] = useState([{class: 'clan-1 clan active', id: 1, isShow: true},
        {class: 'clan-2 clan', id: 2, isShow: false},
        {class: 'clan-3 clan', id: 3, isShow: false},
        {class: 'clan-4 clan', id: 4, isShow: false},
        {class: 'clan-5 clan', id: 5, isShow: false},])

    const clan1 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-md-6 text-start text-white">
                    <h5 className="clan-h">
                        TOZAWA
                        <img src={clan1Sign} className="ms-3" alt=""/>
                    </h5>
                    <p className="clan-para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        <br/><br/>
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata
                        sanctus est.
                        <br/><br/>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy .</p>
                </div>
                <div className="col-md-6 text-center position-relative">
                    <img src={clan1Bg} className="img-fluid" alt=""/>
                    <img src={SamuraiOne} className="clan-top-image" alt=""/>
                </div>
            </div>
        )
    }

    const clan2 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-md-6 text-start text-white">
                    <h5 className="clan-h">
                        SAKEDA
                        <img src={clan2Sign} className="ms-3" alt=""/>
                    </h5>
                    <p className="clan-para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        <br/><br/>
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata
                        sanctus est.
                        <br/><br/>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy .</p>
                </div>
                <div className="col-md-6 text-center position-relative">
                    <img src={clan2Bg} className="img-fluid" alt=""/>
                    <img src={clan2Image} className="clan-top-image" alt=""/>
                </div>
            </div>
        )
    }

    const clan3 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-md-6 text-start text-white">
                    <h5 className="clan-h">KAJIWARA
                        <img src={clan3Sign} className="ms-3" alt=""/></h5>
                    <p className="clan-para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        <br/><br/>
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata
                        sanctus est.
                        <br/><br/>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy .</p>
                </div>
                <div className="col-md-6 text-center position-relative">
                    <img src={clan3Bg} className="img-fluid" alt=""/>
                    <img src={SamuraiTwo} className="clan-top-image" alt=""/>
                </div>
            </div>
        )
    }

    const clan4 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-md-6 text-start text-white">
                    <h5 className="clan-h">ASAGO
                        <img src={clan4Sign} className="ms-3" alt=""/></h5>
                    <p className="clan-para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        <br/><br/>
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata
                        sanctus est.
                        <br/><br/>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy .</p>
                </div>
                <div className="col-md-6 text-center position-relative">
                    <img src={clan4Bg} className="img-fluid" alt=""/>
                    <img src={SamuraiTwo} className="clan-top-image" alt=""/>
                </div>
            </div>
        )
    }

    const clan5 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-md-6 text-start text-white">
                    <h5 className="clan-h">KUSAKI
                        <img src={clan5Sign} className="ms-3" alt=""/></h5>
                    <p className="clan-para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy
                        eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        <br/><br/>
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata
                        sanctus est.
                        <br/><br/>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy .</p>
                </div>
                <div className="col-md-6 text-center position-relative">
                    <img src={clan5Bg} className="img-fluid" alt=""/>
                    <img src={SamuraiTwo} className="clan-top-image" alt=""/>
                </div>
            </div>
        )
    }

    const handleClan = (e) => {
        const data = clans.map((re) => {
            if (e === re.id) {
                re.class = `clan-${re.id.toString()} active clan`
                re.isShow = true;
            } else {
                re.class = `clan-${re.id.toString()} clan`;
                re.isShow = false;
            }
            return re;
        })
        switch (e) {
            case 1:
                setClanDetails(clan1());
                break;
            case 2:
                setClanDetails(clan2());
                break;
            case 3:
                setClanDetails(clan3());
                break;
            case 4:
                setClanDetails(clan4());
                break;
            case 5:
                setClanDetails(clan5());
                break;
            default:
                setClanDetails(clan1());
        }
        setClans(data);
        console.log(clanDetail);
    }

    const [clanDetail, setClanDetails] = useState(clan1());

    return (
        <>
            <Container fluid className="slider-section">
                <Container className="pt-5 pd-5 px-0 mx-auto">
                    <Slider {...settings} className="row">
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img
                                className="img-fluid d-block mx-auto"
                                src={avatarOne}
                                alt="First slide"
                            />
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img
                                className="img-fluid d-block mx-auto"
                                src={avatarTwo}
                                alt="First slide"
                            />
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img
                                className="img-fluid d-block mx-auto"
                                src={avatarThree}
                                alt="First slide"
                            />
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img
                                className="img-fluid d-block mx-auto"
                                src={avatarFour}
                                alt="First slide"
                            />
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img
                                className="img-fluid d-block mx-auto"
                                src={avatarOne}
                                alt="First slide"
                            />
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img
                                className="img-fluid d-block mx-auto"
                                src={avatarTwo}
                                alt="First slide"
                            />
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img
                                className="img-fluid d-block mx-auto"
                                src={avatarThree}
                                alt="First slide"
                            />
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img
                                className="img-fluid d-block mx-auto"
                                src={avatarFour}
                                alt="First slide"
                            />
                        </Col>
                    </Slider>
                </Container>
            </Container>
            <Container fluid className="road-section pb-5">
                <Container>
                    <Row className="mb-4">
                        <Col lg={12} md={12} xs={12}>
                            <label className="roadmap-section-title p-0">CLANS</label>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-start">
                        <ul className="col-12 mx-0 d-flex align-items-start">
                            {
                                clans.map((item) => (
                                    <li className={item.class} key={item.id} onClick={() => handleClan(item.id)}/>
                                ))
                            }
                        </ul>
                        {clanDetail}
                    </Row>
                </Container>
            </Container>
            <Container fluid className="road-section">
                <Container>
                    <Row className="py-5">
                        <Col lg={12} md={12} xs={12}>
                            <label className="roadmap-section-title">Roadmap</label>
                        </Col>
                    </Row>
                    <CustomCheckbox/>
                </Container>
            </Container>
            <Container fluid className="w-100 py-5 my-5 px-0 mx-0 row">
                <div className="col-md-6 px-4 offset-md-6 fight-for-clan">
                    <h3>FIGHT FOR YOUR CLAN!</h3>
                    <p>By owning a Tiny Killer NFT you are granted access to the war for Tiny World domination! Fear has
                        no place here, as the war is made of small battles, each one contributing to the final outcome.
                        <br/><br/>
                        Get your Tiny Killer pumped for combat and destroy the opposition, win reputation inside your
                        faction and, why not, apply for a democratically elected leadership role – and get a decisive
                        role in the decision-making process of your faction!</p>
                    <div className="mt-3">
                        <button className="btn dis-btn px-4 col-md-3">PLAY</button>
                    </div>
                </div>
            </Container>
            <Container fluid className="bg-join-footer text-center">
                <Row className="py-5 join-comm">
                    <Col lg={12} className="justify-content-md-center position-relative py-5">
                        <img className="samuraiOneFooter d-block" src={SamuraiOne} alt="samurai pose"/>
                        <label className="join-section-title mt-8rem">OUR COMMUNITY DECIDES WHO COMES NEXT!</label>
                        <p className="join-sec-para my-4 text-center mx-auto">After the first edition – Samurais – which
                            set of Tiny Killers would you like to see next? So
                            many overly aggressive characters to choose from… Make a suggestion below, we’d love to hear
                            – and will account – each idea we receive.</p>
                        <div className="mt-3">
                            <button className="btn dis-btn px-4">MAKE A SUGGESTION</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="faq-section pb-5">
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
                <div className="pb-5">

                </div>
            </Container>
            <Container fluid className="bg-join-footer text-center">
                <Row className="py-5">
                    <Col lg={12} className="justify-content-md-center position-relative py-5">
                        <img className="samuraiTwoFooter d-block" src={SamuraiTwo} alt="samurai pose"/>
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

export default SliderMain;
