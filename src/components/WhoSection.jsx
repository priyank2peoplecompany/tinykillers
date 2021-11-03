import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import WhoAvatar from "../assets/images/Grupo 4281.png";
import "./who-section.css";

const WhoSection = () => {
	return (
		<>
			<Container fluid className="ml-0 mr-0 who-section">
				<Row className="justify-content-center text-center">
					<Col className="col-8">
						<label className="who-section-title mt-100"> WHO ARE THE TINY KILLERS?</label>
					</Col>
					<Col className="col-6">
						<label className="mt-2p">
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
	);
};

export default WhoSection;