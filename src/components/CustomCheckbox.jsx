import React from "react";
import {Col, Row} from "react-bootstrap";
import "./slider.css";

class CustomCheckbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFirstBox: false,
			isSecondBox: true,
			isThirdBox: true,
			isFourthBox: true,
		};
		this.handleClickFirst = this.handleClickFirst.bind(this);
		this.handleClickSecond = this.handleClickSecond.bind(this);
		this.handleClickThird = this.handleClickThird.bind(this);
		this.handleClickFourth = this.handleClickFourth.bind(this);
	}

	handleClickFirst() {
		this.setState(state => ({
			isFirstBox: !state.isFirstBox,
		}));
	}
	handleClickSecond() {
		this.setState(state => ({
			isSecondBox: !state.isSecondBox,
		}));
	}
	handleClickThird() {
		this.setState(state => ({
			isThirdBox: !state.isThirdBox,
		}));
	}
	handleClickFourth() {
		this.setState(state => ({
			isFourthBox: !state.isFourthBox,
		}));
	}

	render() {
		return (
			<>
				<Row
					className={this.state.isFirstBox ? "handled-check" : "unhandled-check"}>
					<Col lg={2}>
						<strong className="font-size-20 font-poppins">25%</strong>
					</Col>
					<Col lg={8}>
						<strong className="font-poppins">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitrsed diam nonumy eirmod temporebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
						</strong>
					</Col>
					<Col lg={2} className="text-lg-end">
						<button
							onClick={this.handleClickFirst}
							className={this.state.isFirstBox ? "c-box border-0" : "d-box border-0"}>
						</button>
					</Col>
				</Row>
				<Row
					className={this.state.isSecondBox ? "handled-check" : "unhandled-check"}>
					<Col lg={2}>
						<strong className="font-size-20 font-poppins">50%</strong>
					</Col>
					<Col lg={8}>
						<strong className="font-poppins">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitrsed diam nonumy eirmod temporebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
						</strong>
					</Col>
					<Col lg={2} className="text-lg-end">
						<button
							onClick={this.handleClickSecond}
							className={this.state.isSecondBox ? "c-box border-0" : "d-box border-0"}>
						</button>
					</Col>
				</Row>
				<Row
					className={this.state.isThirdBox ? "handled-check" : "unhandled-check"}>
					<Col lg={2}>
						<strong className="font-size-20 font-poppins">75%</strong>
					</Col>
					<Col lg={8}>
						<strong className="font-poppins">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitrsed diam nonumy eirmod temporebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
						</strong>
					</Col>
					<Col lg={2} className="text-lg-end">
						<button
							onClick={this.handleClickThird}
							className={this.state.isThirdBox ? "c-box border-0" : "d-box border-0"}>
						</button>
					</Col>
				</Row>
				<Row
					className={this.state.isFourthBox ? "handled-check" : "unhandled-check"}>
					<Col lg={2}>
						<strong className="font-size-20 font-poppins">100%</strong>
					</Col>
					<Col lg={8}>
						<strong className="font-poppins">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitrsed diam nonumy eirmod temporebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
						</strong>
					</Col>
					<Col lg={2} className="text-lg-end">
						<button
							onClick={this.handleClickFourth}
							className={this.state.isFourthBox ? "c-box border-0" : "d-box border-0"}>
						</button>
					</Col>
				</Row>
			</>

		);
	}
}

export default CustomCheckbox;