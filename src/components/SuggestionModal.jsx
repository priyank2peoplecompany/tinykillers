import React from 'react';
import {Button, CloseButton, Col, Modal} from "react-bootstrap";
import "../components/main-banner.css";
import axios from 'axios';

const SuggestionModal = (props) => {
	const getData = () => {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				const persons = res.data;
				console.log("persons", persons)
			})
	}
	return (
		<div>
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="box-main-modal"
				fullscreen="lg-down"
				onClick={getData}
			>
				{/*{ this.state.persons.map(person => <li>{person.name}</li>)}*/}
				<Modal.Header className="bg-theme-modal" closeButton={false}>

					<CloseButton variant="white" onClick={props.onHide}  className="form-control"/>
				</Modal.Header>
				{/*<Modal.Title id="contained-modal-title-vcenter">*/}
				{/*</Modal.Title>*/}
				<Modal.Body className="bg-theme-modal">
					<h2 className="pl-4 pr-2 pt-2 pb-2 bg-theme-modal font-size-40">SUGGEST THE NEXT KILLER COLLECTIONS!</h2>
					<h6>EMAIL&#42;</h6>
					<div className="pl-2 pr-2 pt-2 pb-2">
						<input type="text" className="form-control modal-email" placeholder="Your Email" />
					</div>
					<h6>YOUR SUGGESTION &#42;</h6>
					<div className="pl-2 pr-2 pt-2 pb-2">
						<textarea className="form-control modal-email">
						  Your Suggestion
						</textarea>
					</div>
				</Modal.Body>
				<Modal.Footer className="bg-theme-modal">
					<Col lg={12} className="text-center">
						<Button className="btn sug-btn mt-3" onClick={props.onHide} >SEND SUGGESTION</Button>
					</Col>
				</Modal.Footer>
			</Modal>

		</div>
	);
};

export default SuggestionModal;