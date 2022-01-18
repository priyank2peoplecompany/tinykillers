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

import avatarOne from "../assets/images/avatar_1.png";
import avatarTwo from "../assets/images/avatar_2.png";
import avatarThree from "../assets/images/avatar_3.png";
import avatarFour from "../assets/images/avatar_4.png";
import clan1Bg from "../assets/images/clan/clan1-bg.png";
import clan2Bg from "../assets/images/clan/clan2-bg.png";
import clan3Bg from "../assets/images/clan/clan-3-bg.png";
import clan4Bg from "../assets/images/clan/clan4-bg.png";
import clan5Bg from "../assets/images/clan/clan5-bg.png";
import clan1Sign from "../assets/images/clan/clan-1-sign.svg";
import clan2Sign from "../assets/images/clan/clan-2-sign.png";
import clan3Sign from "../assets/images/clan/clan3-sign.svg";
import clan4Sign from "../assets/images/clan/clan4-sign.svg";
import clan5Sign from "../assets/images/clan/clan5-sign.svg";

import gifOne from "../assets/images/clan/samuraiOneGif.gif"
import gifTwo from "../assets/images/clan/samuraiTwoGif.gif"


/*Icons*/
import clan1Blank from "../assets/images/clan/clan1-blank.svg";
import clan1Fill from "../assets/images/clan/clan1-color.svg";
import clan2Blank from "../assets/images/clan/clan2-blank.svg";
import clan2Fill from "../assets/images/clan/clan2-color.svg";
import clan3Blank from "../assets/images/clan/clan3-blank.svg";
import clan3Fill from "../assets/images/clan/clan3-color.svg";
import clan4Blank from "../assets/images/clan/clan4-blank.svg";
import clan4Fill from "../assets/images/clan/clan4-color.svg";
import clan5Blank from "../assets/images/clan/clan5-blank.svg";
import clan5Fill from "../assets/images/clan/clan-5-color.svg";

import minus from "../assets/images/minus_icon.svg";
import plus from "../assets/images/plus_icon.svg";

import roadBg from "../assets/images/Samurai_Pose10.png";
import fightBg from "../assets/images/screen_killer.png";

import "./slider.css";
import CustomCheckbox from "./CustomCheckbox";
import SuggestionForm from "./SuggestionForm";
import {toast} from "react-toastify";
import axios from 'axios';
import Slider from "react-slick";

const faqData = [
    {
        name: "What is an NFT? ",
        description: "It stands for “Non-fungible token”, a one-of-a-kind digital item that can be bought, owned and sold. It can be digital art or have other functions such as providing access to websites, games, events, etc. "
    },
    {
        name: "How were the Tiny Killers generated? ",
        description: "Each Tiny Killer was generated out of a pool of +200 original 3D assets. "
    },
    {
        name: "How can I get a Tiny Killer? ",
        description: "Tiny Killers will be minted on our website for the initial release. If they sell out, you can purchase them on the secondary market at Opensea.io. "
    },
    {
        name: "Where does my NFT go after I purchase a Tiny Killer? ",
        description: "Good question. Your Tiny Killer NFT will appear in the address or wallet you used to purchase it. You can also see your Tiny Killer in the game (when it’s launched) and at Opensea.io."
    },
    {
        name: "How do I get involved? ",
        description: "Join our discord community, tag us on Twitter, send us an email. Get in touch, let us hear your voice, your ideas, your battle plans for future Tiny World domination!"
    },
    {
        name: "What can I do with my Tiny Killer? ",
        description: "Oh, the possibilities… In broad terms, you are free to do anything with your Tiny Killer under a non-exclusive license. You can also use it to get access to the game – when launched - and all the possibilities within it!"
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
                style={{
                    color: isCurrentEventKey ? 'white' : 'white',
                    cursor: "pointer"
                }}>{isCurrentEventKey === true ? <img src={minus}/> : <img src={plus}/>}</label>
        </Button>
    );
}
function NameToggle({eventKey, children}) {
    const {activeEventKey} = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        eventKey
    );
    return (
        <Button
            onClick={decoratedOnClick}
            className="custom-button bg-transparent border-0 "
        >
            {children}
        </Button>
    );
};


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
                url: 'https://api.tinykillers.com/api/mail/send',
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
                toast.success("Submitted successfully")
                console.log("Form was submitted, now the modal can be closed");
                console.log("persons", persons)
            });
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
                    slidesToScroll: 1,
                }
            }
        ],
        arrows: false,
        dotsClass: "slick-dots"
    };

    const [clans, setClans] = useState([
        {class: 'clan-1 clan active', id: 1, isShow: true, blank: clan1Blank, fill: clan1Fill},
        {class: 'clan-2 clan', id: 2, isShow: false, blank: clan2Blank, fill: clan2Fill},
        {class: 'clan-3 clan', id: 3, isShow: false, blank: clan3Blank, fill: clan3Fill},
        {class: 'clan-4 clan', id: 4, isShow: false, blank: clan4Blank, fill: clan4Fill},
        {class: 'clan-5 clan', id: 5, isShow: false, blank: clan5Blank, fill: clan5Fill}
    ])

    const clan1 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-lg-5 order-2 order-lg-1 text-start text-white">
                    <h5 className="clan-h d-flex align-items-center"    >
                        TOZAWA
                        <img src={clan1Sign} className="ms-3" alt=""/>
                    </h5>
                    <p className="clan-para">
                        <span style={{color: '#277AFF'}} className="top-title">
                            Calm. Reason. Efficiency.
                        </span>
                        <br/>
                        Tozawa clan has its origin in the coldest regions of Japan. They are
                        brough into this world outside, in the snow, and are left for 3 days in semi-hibernation as an
                        offering to both gods and wildlife. Only the fittest survive to live a life of privation and
                        spirituality. They have no unnecessary possessions nor attachments to the physical world. Tozawa
                        clan members are, most of all, masters of efficiency. They only move when movement is required.
                        They only talk when they need to be listened. And they only fight when they need to kill.
                    </p>
                </div>
                <div className="col-lg-7 order-1 order-lg-2 text-center position-relative">
                    <img src={clan1Bg} className="img-fluid" alt=""/>
                </div>
            </div>
        )
    }

    const clan2 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-lg-5  order-2 order-lg-1 text-start text-white">
                    <h5 className="clan-h d-flex align-items-center">
                        SAKEDA
                        <img src={clan2Sign} className="ms-3" alt=""/>
                    </h5>
                    <p className="clan-para">
                        <span style={{color: '#FF5050'}} className="top-title">Wealth. Power. Courtesy.</span>
                        <br/>
                        The members of the Sakeda clan are the wealthiest of clans. Raised in
                        the beautiful cherry-tree gardens of Japan, in an environment of prosperity, where they learn
                        from the best masters all the knowledges from the physical world, as well as the spiritual one.
                        They are fed with the finest foods, allowing them to grow strong and powerful. Oh but don’t be
                        mistaken by their polite manners and easy smile. For centuries they are kept and increased their
                        wealth from all sorts of enemies, which they invariably destroyed. Sakeda are the most
                        illustrious of friends, but the most ferocious of foes.
                    </p>
                </div>
                <div className="col-lg-7 order-1 order-lg-2 text-center position-relative">
                    <img src={clan2Bg} className="img-fluid" alt=""/>
                </div>
            </div>
        )
    }

    const clan3 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-lg-5 order-2 order-lg-1 text-start text-white">
                    <h5 className="clan-h d-flex align-items-center">KAJIWARA
                        <img src={clan3Sign} className="ms-3" alt=""/></h5>
                    <p className="clan-para">
                        <span style={{color: '#FEBF66'}} className="top-title">Energy. Endurance. Madness.</span>
                        <br/>
                        As soon as they are born, Kajiwara clan members are placed in a bed
                        of scorpions, under the burning sun. Those who survive the stings, are engraved with the power
                        of the venom, filled with power and stamina to prosper in the unforgiving desert. Oh but the
                        venom has a terrible, terrible downside, a madness that they carry through life, making them
                        strange, unsociable beings, and unpredictable enemies in the battlefield, fearless in the face
                        of death.
                    </p>
                </div>
                <div className="col-lg-7 order-1 order-lg-2 text-center position-relative">
                    <img src={clan3Bg} className="img-fluid" alt=""/>
                </div>
            </div>
        )
    }

    const clan4 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-lg-5 order-2 order-lg-1 text-start text-white">
                    <h5 className="clan-h d-flex align-items-center">ASAGO
                        <img src={clan4Sign} className="ms-3" alt=""/></h5>
                    <p className="clan-para">
                        <span style={{color: '#00C977'}} className="top-title">Bravery. Loyalty. Intelligence.</span>
                        <br/>
                        To be consecrated as a member of the Asago clan, one must
                        retrieve a cub from the tiger’s cave. They do this not by facing the mighty tiger, but by
                        outsmarting it. The cub is returned to its mother, as the Asago member must uphold the true
                        values of nature and respect for its fellow living beings. They are the most peaceful of clans,
                        living in unity with the forest, feeding from what its gives them and forming large communities
                        that protect and prosper, together. When threatened, they are a tremendous opponent, uniting
                        their bravery and their wits.
                    </p>
                </div>
                <div className="col-lg-7 order-1 order-lg-2 text-center position-relative">
                    <img src={clan4Bg} className="img-fluid" alt=""/>
                </div>
            </div>
        )
    }

    const clan5 = () => {
        return (
            <div className="row clan-detail">
                <div className="col-lg-5 order-2 order-lg-1 text-start text-white">
                    <h5 className="clan-h d-flex align-items-center">KUSAKI
                        <img src={clan5Sign} className="ms-3" alt=""/></h5>
                    <p className="clan-para">
                        <span style={{color: '#E4E4E4'}} className="top-title">Craftiness. Attentiveness. Resistance.</span>
                        <br/>
                        The poorest of clans, they have scavenged for centuries
                        and became masters of survival. As a young child, Kusaki clan members are sent barefoot to the
                        peak of Japan’s biggest mountain without any food or water. Fall seven times, rise eight is
                        their belief. They might not be the most powerful or skillful warriors, but they are the hardest
                        to defeat. It is told they are more resistant than cockroaches. They do whatever is needed to
                        survive, both in life and in battle. That makes them deadly dangerous.
                    </p>
                </div>
                <div className="col-lg-7 order-1 order-lg-2 text-center position-relative">
                    <img src={clan5Bg} className="img-fluid" alt=""/>
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
                        <ul className="col-12 d-flex align-items-start flex-wrap set-clan-ul">
                            {
                                clans.map((item) => (
                                    <li className={item.class} key={item.id} onClick={() => handleClan(item.id)}>
                                        <img src={!item.isShow ? item.blank : item.fill} alt=""/>
                                    </li>
                                ))
                            }
                        </ul>
                        {clanDetail}
                    </Row>
                </Container>
            </Container>
            <Container fluid className="road-section">
                <Container className="position-relative">
                    <Row className="py-1">
                        <Col lg={12} md={12} xs={12}>
                            <label className="roadmap-section-title">Roadmap</label>
                        </Col>
                    </Row>
                    <img src={roadBg} className="road-bg" alt=""/>
                    <CustomCheckbox/>
                </Container>
            </Container>
            <Container fluid className="w-100 py-5 my-5 px-0 mx-md-0 row">
                <div className="col-md-12 col-lg-6 px-md-0 fix-par px-xxl-3 text-xxl-center">
                    <img src={fightBg} className="img-fluid fight-bg screen-smurai" alt=""/>
                </div>
                <div className="col-md-12 col-lg-6 px-4 fight-for-clan">
                    <h3>FIGHT FOR YOUR CLAN!</h3>
                    <p>By owning a Tiny Killer NFT you are granted access to the war for Tiny World domination! Fear has
                        no place here, as the war is made of small battles, each one contributing to the final outcome.
                        <br/><br/>
                        Get your Tiny Killer pumped for combat and destroy the opposition, win reputation inside your
                        faction and, why not, apply for a democratically elected leadership role – and get a decisive
                        role in the decision-making process of your faction!</p>
                    <div className="mt-1 comming-soon-txt">
                        {/* <button className="btn dis-btn px-4 col-md-3">PLAY</button> */}
                        COMING SOON!
                    </div>
                </div>
            </Container>
            <Container fluid className="bg-join-footer text-center">
                <Row className="py-5 join-comm">
                    <Col lg={12} className="justify-content-md-center position-relative py-5">
                        {/* <img className="samuraiOneFooter d-block" src={gifOne} alt="samurai pose"/> */}
                        <label className="join-section-title mt-8rem">OUR COMMUNITY DECIDES WHO COMES NEXT!</label>
                        <p className="join-sec-para my-4 text-center mx-auto">After the first edition – Samurais – which
                            set of Tiny Killers would you like to see next?</p>
                        <div className="mt-3">
                            <button className="btn dis-btn px-4" onClick={handleShow}>MAKE A SUGGESTION</button>
                        </div>

                        <Modal
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            className="box-main-modal"
                            fullscreen="lg-down"
                            show={show}
                            onHide={handleClose}
                        >
                            <Modal.Header className="bg-theme-modal px-4 pt-3" closeButton={false}>
                                <CloseButton variant="white" onClick={handleClose} className="form-control"/>
                            </Modal.Header>
                            <Modal.Body className="bg-theme-modal px-5">
                                <SuggestionForm handleSubmit={handleSubmit}/>

                            </Modal.Body>
                            <Modal.Footer className="bg-theme-modal px-5 pb-5">
                                <Col lg={12} className="text-center">
                                    <Button className="btn sug-btn mt-3 col-md-8 py-3" type="submit" form="myForm">SEND
                                        SUGGESTION</Button>
                                </Col>
                            </Modal.Footer>
                        </Modal>
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
                            <Card className="faq-section-sub-title mt-5 px-md-4 py-1">
                            <NameToggle eventKey="1">

                                <Card.Header className='faq-section-sub-title p-0'>

                                    <Row className="justify-content-between align-items-center">
                                        <Col lg={10} md={10} xs={10}>
                                            <label className="faq-title">
                                               
                                                {v.name}
                                               
                                               
                                            </label>
                                        </Col>
                                        <Col lg={2} md={2} xs={2}>
                                            <CustomToggle eventKey="1" className="text-black"/>
                                        </Col>
                                    </Row>

                                </Card.Header>
                                </NameToggle>

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
                        {/* <img className="samuraiTwoFooter d-block" src={gifTwo} alt="samurai pose"/> */}
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

            {/* <Container fluid className="faq-section h-auto">
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
            </Container> */}
        </>
    );
};

export default SliderMain;
