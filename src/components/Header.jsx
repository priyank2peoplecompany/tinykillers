import React, {useEffect, useState} from 'react';
import {Button, CloseButton, Col, Container, Modal, Nav, Navbar, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/data/dataActions";
import {connect} from "../redux/blockchain/blockchainActions";

import Logo from "../assets/images/TinyLogo.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";

/*banner images*/
import banner1 from "../assets/images/banner-1.svg";
import banner2 from "../assets/images/banner-2.svg";
import samuraiMain from "../assets/images/samurai-banner.png";
import samuraiOne from "../assets/images/Samurai_Pose03_04.png";
import samuraiTwo from "../assets/images/Samurai_Pose04.png";

import * as s from "../styles/globalStyles";
import "./main-banner.css";
import WhoAvatar from "../assets/images/Samurai_Disassemble.gif";
import StartQuiz from "./popup-components/start-quiz";
import Question from "./popup-components/question";
import Message from "./popup-components/message";

const Header = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);

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
        }
    }, [blockchain.smartContract, dispatch]);

    const renderedHtml = () => {
        return (
            <StartQuiz selectNumber={() => renderedQuestion}/>
        )
    }

    const renderedQuestion = () => {
        // setPopup((<Question selectAnswer={() => renderedMessage} />))
    }

    const renderedMessage = () => {
        // setPopup((<Message closePopup={() => handleClose()} />))
    }

    const [show, setShow] = React.useState(false);
    const [popup, setPopup] = useState(null);

    const handleShow = () => {
        setShow(true)
        setPopup(renderedHtml)
        console.log(popup);
    };
    const handleClose = () => setShow(false);

    return (
        <>
            <Container fluid className="main-banner p-0">
                <Navbar bg="trans" expand="lg" className="pt-5">
                    <Container>
                        <Navbar.Brand href="#"><img src={Logo} alt='logo'/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Row className="d-flex">
                                <Col lg={2}>
                                    <Nav.Link className="" href="#action1">
                                        <img src={Discord} alt="nav-icon"/></Nav.Link>
                                </Col>
                                <Col lg={2}>
                                    <Nav.Link className="" href="#action1"><img src={Twitter}
                                                                                alt="nav-icon"/></Nav.Link>
                                </Col>
                                <Col>
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
                                </Col>
                            </Row>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="" style={{paddingTop: '100px'}}>
                    <Row className="position-relative pt-5  justify-content-between align-items-center">
                        <img src={banner1} className="banner" alt=""/>
                        <img src={samuraiOne} className="position-absolute top-samurai" alt=""/>
                        <img src={samuraiTwo} className="position-absolute bottom-samurai" alt=""/>
                        <img src={samuraiMain} className="middle-samurai position-absolute" alt=""/>
                        <img src={banner2} className="banner" alt=""/>
                    </Row>
                    <Row className="justify-content-center text-center">
                        <Col lg={12} className="">
                            <Button btn className="part-btn" onClick={handleShow}>PARTICIPATE</Button>
                        </Col>

                    </Row>
                </Container>
            </Container>
            <Container fluid className="ml-0 mr-0 who-section pt-5">
                <Container className="row col-md-9 mt-5 px-0 px-md-3 mx-auto">
                    <Row className="justify-content-center text-start">
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
                            <label className="text-white last-para">
                                OH, BY THE WAY, TINY KILLERS WILL BE LAUNCHED IN MULTIPLE,
                                CONSECUTIVE, EDITIONS – THE FIRST ONE BEING SAMURAIS. OUR
                                COMMUNITY WILL DETERMINE WHAT THE NEXT EDITIONS WILL BE.
                            </label>
                        </Col>
                        <Col className="col-12 mx-auto text-center">
                            <img className='img-fluid bg-who mt-5' src={WhoAvatar} alt="who-img"/>
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
                    <Modal.Body className="bg-theme-modal px-5">
                        {popup}
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}

export default Header;
