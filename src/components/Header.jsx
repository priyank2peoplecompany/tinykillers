import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/data/dataActions";
import {connect} from "../redux/blockchain/blockchainActions";

import Logo from "../assets/images/TinyLogo.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";
import Instagram from "../assets/images/insta.png"

/*banner images*/
import banner1 from "../assets/images/banner-1.svg";
import banner2 from "../assets/images/banner-2.svg";
import samuraiMain from "../assets/images/samurai-banner.png";
import samuraiOne from "../assets/images/Samurai_Pose03_04.png";
import samuraiTwo from "../assets/images/Samurai_Pose04.png";

import * as s from "../styles/globalStyles";
import "./main-banner.css";
import WhoAvatar from "../assets/images/Samurai_Disassemble.gif";

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
                                <Col lg={2} className="mx-2">
                                    <Nav.Link className="" href="#action1"><img src={Instagram}
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
                                                variant="btn btn-light button-wallet border-0 wallet-text p-1"
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
                            <Button btn className="part-btn">PARTICIPATE</Button>
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
                                Tiny Killers are much more than a randomly-generated set of 9,999 small assassins. They
                                are pure, concentrated evil that are split in five factions that fight each other for
                                total and absolute control of Tiny World.
                                <br/><br/>
                                Each one yearns for a human master that will
                                allow his Tiny Killer to unleash all the rage and contribute for the victory of its
                                faction.
                            </label>
                            <br/><br/>
                            <label className="text-white last-para">
                                OH, BY THE WAY, TINY KILLERS WILL BE LAUNCHED IN MULTIPLE, CONSECUTIV E,
                                EDITIONS – THE FIRST ONE BEING SAMURAIS. OUR COMMUNITY WILL DETERMINE WHAT WILL BE THE
                                NEXT EDITION.
                            </label>
                        </Col>
                        <Col className="col-12 mx-auto text-center">
                            <img className='img-fluid bg-who mt-5' src={WhoAvatar} alt="who-img"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Header;
