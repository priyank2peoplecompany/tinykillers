import React from "react";
import {Col, Row} from "react-bootstrap";
import "./slider.css";

export const checkData = [
	{
		badgeNumber: "25%",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrsed diam nonumy eirmod temporebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		isSidebar: true,
	},
	{
		badgeNumber: "50%",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrsed diam nonumy eirmod temporebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		isSidebar: false,
	},
	{
		badgeNumber: "75%",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrsed diam nonumy eirmod temporebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		isSidebar: false,
	},
	{
		badgeNumber: "100%",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrsed diam nonumy eirmod temporebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		isSidebar: false,
	},
]

class CustomCheckbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSidebar: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isSidebar: !state.isSidebar,
		}));
	}

	render() {
		return (
			<>
				{checkData.map((i, k) =>
					<Row
						className={this.state.isSidebar ? "handled-check" : "unhandled-check"}
						key={k}>
						<Col lg={2}>
							<strong className="font-size-20 font-poppins">{i.badgeNumber}</strong>
						</Col>
						<Col lg={8}>
							<strong className="font-poppins">
								{i.description}
							</strong>
						</Col>
						<Col lg={2} className="text-lg-end">
							<button
								onClick={this.handleClick}
								className={this.state.isSidebar ? "c-box border-0" : "d-box border-0"}>
							</button>
						</Col>
					</Row>
				)}
			</>

		);
	}
}

export default CustomCheckbox;