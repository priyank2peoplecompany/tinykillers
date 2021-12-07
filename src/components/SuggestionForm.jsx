import React from "react";
import { Form } from "react-bootstrap";

import "../components/main-banner.css";

export default function SuggestionForm({ handleSubmit }) {
	return (
		<Form onSubmit={handleSubmit} id="myForm">
			<h2 className="pl-4 pr-2 pt-2 pb-2 bg-theme-modal h2 font-size-40">SUGGEST THE NEXT KILLER COLLECTIONS!</h2>
			<Form.Group controlId="formBasicEmail" className="mt-3">
				<Form.Label className="mb-0">
					<h6 className="mt-2 form-h6">EMAIL &#42;</h6>
				</Form.Label>
				<Form.Control type="text" placeholder="Your email" className="input" name="email"/>
			</Form.Group>

			<Form.Group controlId="formBasicPassword" className="mt-3">
				<Form.Label className="mb-0">
					<h6  className="mt-2 form-h6">YOUR SUGGESTION &#42;</h6>
				</Form.Label>
				<textarea placeholder="Your Suggestion" name="suggestion" className="form-control" rows="3" />
			</Form.Group>
		</Form>
	);
}
