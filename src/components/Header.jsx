import React from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';

import Logo from "../assets/images/TinyLogo.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";
import Insta from "../assets/images/insta.svg";

import "./main-banner.css";
import RectTwo from "../assets/images/Retângulo 1146.svg";

const Header = () => {
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
									<Button variant="btn btn-light button-wallet border-0 w-100"><Nav.Link
										className="h-25 wallet-text" href="#action1">Connect Wallet</Nav.Link></Button>
								</Col>
							</Row>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Container className="p-20">
					<Row className="justify-content-center text-center">
						<Col lg={12} className="">
							<label className="hero-text">sold out</label>
						</Col>
						<Col lg={12} className="scroll-sec mt-3">
							<a href="#footer">
								<img className="img-fluid" src={RectTwo} alt="scrollerSec"/>
							</a>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	)
}

export default Header;