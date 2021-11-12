import React from "react";
import { Form } from "react-bootstrap";

import "../components/main-banner.css";

export default function SuggestionForm({ handleSubmit }) {
	return (
		<Form onSubmit={handleSubmit} id="myForm">
			<h2 className="pl-4 pr-2 pt-2 pb-2 bg-theme-modal font-size-40">SUGGEST THE NEXT KILLER COLLECTIONS!</h2>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>
					<h6 className="mt-2">EMAIL &#42;</h6>
				</Form.Label>
				<Form.Control type="email" placeholder="Enter email" name="email"/>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>
					<h6  className="mt-2">YOUR SUGGESTION &#42;</h6>
				</Form.Label>
				<Form.Control className="form-control" type="textarea" placeholder="Your Suggestion" name="suggestion"/>
			</Form.Group>
		</Form>
	);
}
