import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/data/dataActions";
import { connect } from "../redux/blockchain/blockchainActions";

import Logo from "../assets/images/TinyLogo.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";
import RectTwo from "../assets/images/Retângulo 1146.svg";
import * as s from "../styles/globalStyles";
import "./main-banner.css";
import WhoAvatar from "../assets/images/Grupo 4281.png";

const Header = () => {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
	const [feedback,setFeedback] = useState("");
	const [claimingNft,setClaimingNft] = useState(false);

	const claimNFTs = (_amount) => {
		setClaimingNft(true);
		blockchain.smartContract.methods.mint(blockchain.account, _amount).send({
			from : blockchain.account,
			value : blockchain.web3.utils.toWei((0.1 * _amount).toString() , "ether"),
			gas:100000,
		}).once("error" , (err) => {
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
			<Container fluid className="main-banner">
				<Navbar bg="trans" expand="lg">
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
									        disabled = {claimingNft ? 1 : 0 }
									        variant="btn btn-light button-wallet border-0 wallet-text p-1"
									        onClick={(e) => {
									          e.preventDefault();
									          claimNFTs(1);
									          //dispatch(connect());
									        }}
									      >
									        {claimingNft ? "Busy Minting NFTS" : "MINT"}
									      </Button>
										  <s.SpacerXSmall />
										  <s.TextDescription style={{ textAlign : "center"}}> {feedback} </s.TextDescription>
										  <s.SpacerSmall />
										  </>
									  )}
								</Col>
							</Row>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Container className="p-20">
					<Row className="justify-content-center text-center">
						<Col lg={12} className="">
							<label className="hero-text">sold out</label>
							<Col lg={12} className="scroll-sec mt-3">
								<a href="#footer">
									<img className="img-fluid" src={RectTwo} alt="scrollerSec"/>
								</a>
							</Col>
						</Col>

					</Row>
				</Container>
			</Container>
			<Container fluid className="ml-0 mr-0 who-section">
				<Row className="justify-content-center text-center">
					<Col className="col-8">
						<label className="who-section-title mt-100"> WHO ARE THE TINY KILLERS?</label>
					</Col>
					<Col className="col-6">
						<label className="mt-2px">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat,
							sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
							kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
						</label>
					</Col>
					<Col className="col-12">
						<img className='img-fluid bg-who' src={WhoAvatar} alt="who-img"/>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Header;