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
						<Row className="d-flex">
							<Col>
								<Nav.Link className="" href="#action1"><img src={Discord} alt="nav-icon"/></Nav.Link>
							</Col>
							<Col>
								<Nav.Link className="" href="#action1"><img src={Insta} alt="nav-icon"/></Nav.Link>
							</Col>
							<Col>
								<Button variant="btn btn-light button-wallet border-0 w-100"><Nav.Link className="h-25" href="#action1">Connect Wallet</Nav.Link></Button>
							</Col>
							{/*<Nav.Link className="mr-4" href="#action2"><img src={Twitter}*/}
							{/*                                                alt="nav-icon"/></Nav.Link>*/}
							{/*<Nav.Link className="mr-4" href="#action2"></Nav.Link>*/}
							{/**/}
						</Row>
					</Container>
				</Navbar>
				<Container>
					<Row className="justify-content-center text-center">
						<Col className="hero-title">
							<label className="hero-text">sold out</label>
						</Col>
					</Row>
					<Row className="justify-content-center text-center">
						<Col className="scroll-sec hero-title">
							<a href="#footer">
								<img className="z-index-5" src={RectTwo} alt="scrollerSec"/>
							</a>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	)
}

export default Header;