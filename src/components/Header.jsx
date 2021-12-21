import React, {useEffect, useState} from 'react';
import {Button, CloseButton, Col, Container, Modal, Nav, Navbar, Row} from 'react-bootstrap';
import {useDispatch, useSelector, connect as reduxConnect } from "react-redux";
import {fetchData} from "../redux/data/dataActions";
import {connect} from "../redux/blockchain/blockchainActions";
import API from "../utils/api";

import Logo from "../assets/images/TinyLogo.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";

/*banner images*/
import banner1 from "../assets/images/banner-1.svg";
import banner2 from "../assets/images/banner-2.svg";
import samuraiMain from "../assets/images/samurai-banner.png";
import samuraiOne from "../assets/images/Samurai_Pose03_04.png";
import samuraiMobile from "../assets/images/mobile-banner.png";
import samuraiTwo from "../assets/images/Samurai_Pose04.png";

import * as s from "../styles/globalStyles";
import "./main-banner.css";
import WhoAvatar from "../assets/images/Samurai_Disassemble.gif";
import StartQuiz from "./popup-components/start-quiz";
import Question from "./popup-components/question";
import Message from "./popup-components/message";
import {setQuizList} from "../redux/actions/quizAction";
import {scrollShowHide} from "../utils/utility"
import blueTick from '../assets/images/Grupo_16888.svg'

const Header = ({ blockchain }) => {
    const dispatch = useDispatch();
    const [feedback, setFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);
    console.log('claimingNft', claimingNft)
    let data = [];
    const stateQuizItem = useSelector(state => state.quizItemData.quizItem);
    const [quizItem, setQuizItem] = useState();
    const userId = localStorage.getItem('userId');

    const claimNFTs = (_amount) => {
        setClaimingNft(true);
        blockchain.smartContract.methods.mint(blockchain.account, _amount).send({
            from: blockchain.account,
            value: blockchain.web3.utils.toWei((0.1 * _amount).toString(), "ether"),
            gas: 100000,
        }).once("error", (err) => {
            setFeedback('Error');
            setClaimingNft(false);
        }).then((receipt) => {
            setFeedback("Success");
            setClaimingNft(false);
        });
    }

    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
            API.post(
                `user/Add`,
                {address: blockchain.account}
            ).then((res) => {
                localStorage.setItem('userId', res.data.data.id)
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [blockchain.smartContract, dispatch]);

    useEffect(() => {
        renderedQuestion();
    }, [stateQuizItem])
    useEffect(() => {
        if(userId) {
            dispatch(connect());
        } 
    }, [])

    const renderedQuestion = (e) => {
        console.log(e);
        setPopup((<Question selectAnswer={(e) => renderedMessage(e)}
                            data={stateQuizItem[e === undefined ? 0 : e]}/>))
    }

    scrollShowHide('whoDiv', 'whoAvatar');

    const renderedMessage = (e) => {
        if (e === stateQuizItem.length) {
            setPopup((<Message closePopup={() => handleClose()} />))
        } else {
            renderedQuestion(e)
        }
    }

    const [show, setShow] = useState(false);
    const [popup, setPopup] = useState(null);

    const handleShow = () => {
        setShow(true)
        API.get(
            `quiz/list`
        ).then((res) => {
            dispatch(setQuizList(res.data.data))
        }).catch((err) => {
            console.log(err);
        });
        setPopup((<StartQuiz/>))
    };
    const handleClose = () => setShow(false);

    return (
        <>
            <Container fluid className="main-banner p-0">
                <Navbar bg="trans" expand="lg" className="pt-3 pt-md-5">
                    <Container className="d-flex justify-content-between align-items-center">
                        <Navbar.Brand href="#"><img src={Logo} alt='logo' class="set-mobile-logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light d-none"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-md-inline-block">
                            <Row className="d-flex">
                                <Col lg={2}>
                                    <Nav.Link className="" href="#action1">
                                        <img src={Discord} alt="nav-icon"/></Nav.Link>
                                </Col>
                                <Col lg={2} className="mx-3">
                                    <Nav.Link className="" href="#action1"><img src={Twitter}
                                                                                alt="nav-icon"/></Nav.Link>
                                </Col>
                                <Col>
                                    {(blockchain.account === "" || blockchain.smartContract === null) && !userId ? (
                                        <s.TextTitle>
                                            <Button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    dispatch(connect());
                                                }}
                                                variant="btn btn-light button-wallet border-0 wallet-text p-1 ms-2"
                                            >
                                                CONNECT WALLET
                                            </Button>
                                            {blockchain.errorMsg !== "" ? (
                                                <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
                                            ) : null}
                                        </s.TextTitle>
                                    ) : (
                                        <>
                                            <Button
                                                disabled={claimingNft ? 1 : 0}
                                                variant="btn btn-light button-wallet border-0 wallet-text p-1"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    claimNFTs(1);
                                                    //dispatch(connect());
                                                }}
                                            >
                                                {claimingNft ? "Busy Minting NFTS" : "MINT"}
                                            </Button>
                                            <s.SpacerXSmall/>
                                            <s.TextDescription
                                                style={{textAlign: "center"}}> {feedback} </s.TextDescription>
                                            <s.SpacerSmall/>
                                        </>
                                        )}
                                </Col>
                            </Row>
                        </Navbar.Collapse>
                        <Row className="d-flex d-md-none align-items-center">
                            <Nav.Link className="" href="#action1">
                                <img src={Discord} alt="nav-icon" className="" /></Nav.Link>
                            <Nav.Link className="" href="#action1"><img src={Twitter}
                                                                        alt="nav-icon" className="" /></Nav.Link>
                            {(blockchain.account === "" || blockchain.smartContract === null) && !userId ? (
                                <div className="w-auto">
                                    <Button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(connect());
                                        }}
                                        variant="btn btn-light button-wallet border-0 wallet-text ms-2"
                                    >
                                        <img src={blueTick} className="img-fluid h-100 w-100" alt=""/>
                                    </Button>
                                    {blockchain.errorMsg !== "" ? (
                                        <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
                                    ) : null}
                                </div>
                            ) : (
                                <>
                                    <Button
                                        disabled={claimingNft ? 1 : 0}
                                        variant="btn btn-light button-wallet border-0 wallet-text w-auto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            claimNFTs(1);
                                            //dispatch(connect());
                                        }}
                                    >
                                        <img src={blueTick} className="img-fluid h-100 w-100" alt=""/>
                                    </Button>
                                    <s.SpacerXSmall/>
                                    <s.TextDescription
                                        style={{textAlign: "center"}}> {feedback} </s.TextDescription>
                                    <s.SpacerSmall/>
                                </>
                            )}
                            {/*<div>
                                {blockchain.account === "" || blockchain.smartContract === null ? (
                                    <s.TextTitle>
                                        <Button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(connect());
                                            }}
                                            variant="btn btn-light button-wallet border-0 wallet-text p-1 ms-2"
                                        >
                                            CONNECT WALLET
                                        </Button>
                                        {blockchain.errorMsg !== "" ? (
                                            <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
                                        ) : null}
                                    </s.TextTitle>
                                ) : (
                                    <>
                                        <Button
                                            disabled={claimingNft ? 1 : 0}
                                            variant="btn btn-light button-wallet border-0 wallet-text p-1"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                claimNFTs(1);
                                                //dispatch(connect());
                                            }}
                                        >
                                            {claimingNft ? "Busy Minting NFTS" : "MINT"}
                                        </Button>
                                        <s.SpacerXSmall/>
                                        <s.TextDescription
                                            style={{textAlign: "center"}}> {feedback} </s.TextDescription>
                                        <s.SpacerSmall/>
                                    </>
                                )}
                            </div>*/}
                        </Row>
                    </Container>
                </Navbar>
                <Container className="" style={{paddingTop: '100px'}}>
                    <Row className="position-relative pt-5  justify-content-between align-items-center">
                        <img src={banner1} className="banner d-none d-md-inline-block" style={{marginLeft: '30px'}} alt=""/>
                        <img src={samuraiOne} className="position-absolute top-samurai d-none d-md-inline-block"
                             alt=""/>
                        <img src={samuraiTwo} className="position-absolute bottom-samurai d-none d-md-inline-block"
                             alt=""/>
                        <img src={samuraiMain} className="middle-samurai position-absolute d-none d-md-inline-block"
                             alt=""/>
                        <img src={samuraiMobile} className="middle-samurai position-absolute d-md-none" alt=""/>
                        <img src={banner2} className="banner d-none d-md-inline-block" style={{marginRight: '30px'}} alt=""/>
                    </Row>
                    <Row className="justify-content-center text-center">
                        <Col lg={12} className="mt-5 pt-5">
                            <Button btn className="part-btn"
                                    disabled={(blockchain.account === "" || blockchain.smartContract === null) && !userId}
                                    onClick={handleShow}>PARTICIPATE</Button>
                        </Col>

                    </Row>
                </Container>
            </Container>
            <Container fluid className="ml-0 mr-0 who-section pt-5" id="who-section">
                <Container className="row col-md-9 mt-5 px-0 px-md-3 mx-auto">
                    <Row className="justify-content-center text-start mx-0 px-0 px-md-3">
                        <Col className="col-md-5 col-12">
                            <p className="who-section-title text-start">
                                THEY ARE SMALL. <br/>THEY ARE CUTE. <br/> THEY DON’T BITE. <br/> BUT THEY KILL.</p>
                        </Col>
                        <Col className="col-md-7 col-12">
                            <label className="text-para">
                                Tiny Killers are much more than a randomly-generated set of 9,999
                                small assassins. They are made of pure, concentrated fury and are
                                split in five factions that fight each other for total and absolute
                                control of Tiny World.
                                <br/><br/>
                                Each one yearns for a human master that will allow his Tiny Killer to
                                unleash all the rage and contribute for the victory of its faction
                            </label>
                            <br/><br/><br/>
                            <label className="text-white last-para text-para">
                                OH, BY THE WAY, TINY KILLERS WILL BE LAUNCHED IN MULTIPLE,
                                CONSECUTIVE, EDITIONS – THE FIRST ONE BEING SAMURAIS. OUR
                                COMMUNITY WILL DETERMINE WHAT THE NEXT EDITIONS WILL BE.
                            </label>
                        </Col>
                        <Col className="col-12 mx-auto text-center px-0 px-md-3" id="whoDiv">
                            <img className='img-fluid bg-who mt-5 mb-0 mb-md-5' id="whoAvatar" src={WhoAvatar} alt="who-img"/>
                        </Col>
                    </Row>
                </Container>

                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="box-main-modal main-banner-modal"
                    fullscreen="lg-down"
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Header className="bg-theme-modal px-4 pt-3" closeButton={false}>
                        <CloseButton variant="white" onClick={handleClose} className="form-control"/>
                    </Modal.Header>
                    <Modal.Body className="bg-theme-modal px-md-5 px-0">
                        {popup}
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}
const mapStateToProps = state => {
    return {
        blockchain: state.blockchain
    }
}
export default reduxConnect(mapStateToProps)(Header);

