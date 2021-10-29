import React, {useState} from 'react';
import {Button, Carousel, Col, Collapse, Container, Row} from "react-bootstrap";

import avatarOne from "../assets/images/Grupo 4227.png";
import avatarTwo from "../assets/images/Grupo 4226.png";
import SamuraiOne from "../assets/images/Samurai_Pose04.png";
import SamuraiTwo from "../assets/images/Samurai_Pose03_04.png";
import "./slider.css";

const Slider = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Container fluid className="slider-section">
				<Container className="pt-5 pd-5 vh-50">
					<Carousel pause='hover'>
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
					<Row className="roadmap-section-title mt-2pc unhandled-check">
						<Col lg={2}>
							<strong className="custom-checks">25 %</strong>
						</Col>
						<Col lg={8}>
							{/*asdas*/}
							<strong className="" id="customCheck1">
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod temporebum. Stet clita
								kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
							</strong>
						</Col>
						<Col lg={2}>
							<fieldset>
								<input id="checkbox" type="checkbox" checked/>
								<label className="c-box" htmlFor="checkbox"/>
							</fieldset>
						</Col>
					</Row>
					<Row className="roadmap-section-title mt-2pc handled-check">
						<Col lg={2}>
							<strong className="custom-checks">50 %</strong>
						</Col>
						<Col lg={8}>
							<strong className="" id="customCheck2">
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod temporebum. Stet clita
								kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
							</strong>
						</Col>
						<Col lg={2}>
							<fieldset>
								<input id="checkbox" type="checkbox"/>
								<label className="c-box" htmlFor="customCheck2"/>
							</fieldset>
						</Col>
					</Row>
					<Row className="roadmap-section-title mt-2pc handled-check">
						<Col lg={2}>
							<strong className="custom-checks">75 %</strong>
						</Col>
						<Col lg={8}>
							<strong className="" id="customCheck2">
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod temporebum. Stet clita
								kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
							</strong>
						</Col>
						<Col lg={2}>
							<fieldset>
								<input id="checkbox" type="checkbox"/>
								<label className="c-box" htmlFor="customCheck2"/>
							</fieldset>
						</Col>
					</Row>
					<Row className="roadmap-section-title mt-2pc handled-check">
						<Col lg={2}>
							<strong className="custom-checks">100 %</strong>
						</Col>
						<Col lg={8}>
							<strong className="" id="customCheck2">
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod temporebum. Stet clita
								kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
							</strong>
						</Col>
						<Col lg={2}>
							<fieldset>
								<input id="checkbox" type="checkbox"/>
								<label className="c-box" htmlFor="customCheck2"/>
							</fieldset>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className="game-section">
				<Container>
					<Row>
						<Col lg={12} md={12} xs={12} className="text-center">
							<label className="game-section-title">GAME</label>
						</Col>
						<Col lg={12} md={12} xs={12} className="text-center">
							<iframe width="100%" height="510px"
							        src="https://www.youtube.com/embed/13NzZfbATW8?autoplay=0&mute=1&start=112"
							        title="YouTube video player" frameBorder="0"
							        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							        allowFullScreen>
							</iframe>
						</Col>
						<Col lg={12} md={12} xs={12} className="text-center">
							<div className="game-subtitle">
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
								sanctus est Lorem ipsum dolor sit amet.
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className="next-section text-center">
				<Row className="next-row-section">
					<Col lg={4} md={4} xs={4} className="mt-5">
						<picture>
							<img className="samuraiOne" src={SamuraiOne} alt="samurai pose" height="100%" width="50%"/>
						</picture>
					</Col>
					<Col lg={4} md={4} xs={4}>
						<label className="game-section-title">NEXT KILLERS COLLECTION?</label>
					</Col>
					<Col lg={4} md={4} xs={4} className="d-none"></Col>
				</Row>
				<Container>
					<Row>
						<Col lg={12} md={12} xs={12} className="mt-5">
                            <span className="game-subtitle">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </span>
						</Col>
						<Col lg={12} className="mt-5">
							<button className="btn sug-btn">MAKE A SUGGESTION</button>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className="faq-section">
				<Container>
					<Col lg={12} className="game-section-title">
						FAQS
					</Col>
					<Col lg={12} className="faq-section-sub-title p-5">
						<label>LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, INVIDUNT UT LABORE ET DOLORE
							MAGNA ALIQUYAM ERAT, SED DIAM VOLUPTUA? </label>
						<Button
							onClick={() => setOpen(!open)}
							aria-controls="example-collapse-text"
							aria-expanded={open}
							className="bg-transparent border-0 float-end"
						>
							<span className="font-size-20">{open === true ? `-`: `+` }</span>
						</Button>
						<Collapse in={open}>
							<div id="example-collapse-text" className="text-black">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
								terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
								labore wes anderson cred nesciunt sapiente ea proident.
							</div>
						</Collapse>
					</Col>
					<Col lg={12} className="faq-section-sub-title p-5 mt-5">
						<label>
							LOREM IPSUM DOLOR SIT AMET, CONSETETUR?
						</label>
						<Button
							onClick={() => setOpen(!open)}
							aria-controls="example-collapse-text"
							aria-expanded={open}
							className="bg-transparent border-0 float-end"
						>
							<span className="font-size-20">{open === true ? `-`: `+` }</span>
						</Button>
						<Collapse in={open}>
							<div id="example-collapse-text" className="text-black">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
								terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
								labore wes anderson cred nesciunt sapiente ea proident.
							</div>
						</Collapse>
					</Col>
					<Col lg={12} className="faq-section-sub-title p-5 mt-5">
						<label>
							LOREM IPSUM DOLOR SIT AMET, CONSETETUR?
						</label>
						<Button
							onClick={() => setOpen(!open)}
							aria-controls="example-collapse-text"
							aria-expanded={open}
							className="bg-transparent border-0 float-end"
						>
							<span className="font-size-20">{open === true ? `-`: `+` }</span>
						</Button>
						<Collapse in={open}>
							<div id="example-collapse-text" className="text-black">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
								terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
								labore wes anderson cred nesciunt sapiente ea proident.
							</div>
						</Collapse>
					</Col>
					<Col lg={12} className="faq-section-sub-title p-5 mt-5">
						<label>
							LOREM IPSUM DOLOR SIT AMET, CONSETETUR?
						</label>
						<Button
							onClick={() => setOpen(!open)}
							aria-controls="example-collapse-text"
							aria-expanded={open}
							className="bg-transparent border-0 float-end"
						>
							<span className="font-size-20">{open === true ? `-`: `+` }</span>
						</Button>
						<Collapse in={open}>
							<div id="example-collapse-text" className="text-black">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
								terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
								labore wes anderson cred nesciunt sapiente ea proident.
							</div>
						</Collapse>
					</Col>
				</Container>
			</Container>
			<Container fluid className="bg-join text-center">
				<Row className="next-row-section">
					<Col lg={3} md={4} xs={4} className="mt-5">
						<picture>
							<img className="samuraiTwo" src={SamuraiTwo} alt="samurai pose" height="100%" width="50%"/>
						</picture>
					</Col>
					<Col lg={6} className="justify-content-md-center">
						<label className="join-section-title mt-8rem">JOIN OUR COMMUNITY</label>
						<div className="mt-3">
							<button className="btn sug-btn ">JOIN OUR DISCORD</button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Slider;