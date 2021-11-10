import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';

import Logo from "../assets/images/TinyLogo.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";
import Insta from "../assets/images/insta.svg";

import "./main-banner.css";
import RectTwo from "../assets/images/Retângulo 1146.svg";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import { connect } from "../redux/blockchain/blockchainActions";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px;
`;

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
									<Nav.Link className="" href="#action1"><img src={Insta} alt="nav-icon"/></Nav.Link>
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
									        variant="btn btn-light button-wallet border-0 w-100 h-25 wallet-text p-2"
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
									        variant="btn btn-light button-wallet border-0 w-100 wallet-text p-1"
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
		</>
	)
}

export default Header;