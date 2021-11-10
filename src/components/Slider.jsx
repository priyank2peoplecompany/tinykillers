import React, {useContext} from 'react';
import {
	Accordion,
	AccordionContext,
	Button,
	Card,
	Carousel,
	Col,
	Container,
	Row,
	useAccordionButton
} from "react-bootstrap";

import avatarOne from "../assets/images/Grupo 4227.png";
import avatarTwo from "../assets/images/Grupo 4226.png";
import SamuraiOne from "../assets/images/Samurai_Pose04.png";
import SamuraiTwo from "../assets/images/Samurai_Pose03_04.png";
import "./slider.css";
import SuggestionModal from "./SuggestionModal";
import CustomCheckbox from "./CustomCheckbox";

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
			<label style={{color: isCurrentEventKey ? 'black' : 'white'}}>{isCurrentEventKey === true ? "-" : "+"}</label>
		</Button>
	);
}

const Slider = () => {
	const [modalShow, setModalShow] = React.useState(false);


	return (
		<>
			<Container fluid className="slider-section">
				<Container className="pt-5 pd-5 vh-50">
					<Carousel>
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
					<CustomCheckbox/>
				</Container>
			</Container>
			<Container fluid className="game-section">
				<Container>
					<Row>
						<Col lg={12} md={12} xs={12} className="text-center">
							<label className="game-section-title">GAME</label>
						</Col>
						<Col lg={12} md={12} xs={12} className="text-center w-100 ml-20px">
							<iframe width="868px" height="511px" src="https://www.youtube.com/embed/B-CUjgWlg40?autoplay=1&controls=0&mute=1&amp;start=55" title="YouTube video player" frameBorder="0"	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
						</Col>
						<Col lg={12} md={12} xs={12} className="text-center w-100">
							<div className="game-subtitle w-868px ">
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
					<Col lg={4} md={4} xs={4} className="">
						<picture>
							<img className="samuraiOne" src={SamuraiOne} alt="samurai pose" />
						</picture>
					</Col>
					<Col lg={4} md={4} xs={4}>
						<label className="next-section-title">NEXT KILLERS COLLECTION?</label>
					</Col>
					<Col lg={4} md={4} xs={4} className="d-none"/>
				</Row>
				<Container>
					<Row>
						<Col lg={12} md={12} xs={12}>
                            <div className="w-868px game-subtitle">
	                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
	                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
	                            <Col lg={12} md={12} xs={12} className="mt-5">
		                            <button className="btn sug-btn" onClick={() => setModalShow(true)}>MAKE A SUGGESTION
		                            </button>
	                            </Col>
                            </div>
						</Col>
						<SuggestionModal
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
					</Row>
				</Container>
			</Container>
			<Container fluid className="faq-section">
					<Row  className="justify-content-md-center text-center pt-5">
						<Col xs lg={2}>
							<legend className="faq-section">FAQS</legend>
						</Col>
					</Row>
					{faqData.map((v, ix) => (
						<Row className="justify-content-md-center">
							<Accordion defaultActiveKey={ix}>
								<Card className="faq-section-sub-title mt-5">
									<Card.Header className='faq-section-sub-title'>
										<Row className="justify-content-around">
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