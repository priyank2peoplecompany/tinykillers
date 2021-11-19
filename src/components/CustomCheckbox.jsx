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
                    className={this.state.isFirstBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickFirst}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={2}>
                            <strong className="font-size-20 font-poppins percent-text">0%</strong>
                        </Col>
                        <Col lg={2} className="text-lg-end">
                            <button
                                onClick={this.handleClickFirst}
                                className={this.state.isFirstBox ? "c-box border-0" : "d-box border-0"}>
                            </button>
                        </Col>
                    </Row>
                    <Col lg={12}>
                        <p className="font-poppins text-road">
                            The drop beings, as the Tiny Killers are attributed to their new owners.
                            <span className="semibold ms-1">Oh, please be careful while maneuvering these small beasts of death.</span>
                        </p>
                    </Col>
                </Row>
                <Row
                    className={this.state.isSecondBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickSecond}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={2}>
                            <strong className="font-size-20 font-poppins percent-text">10%</strong>
                        </Col>
                        <Col lg={2} className="text-lg-end">
                            <button
                                onClick={this.handleClickSecond}
                                className={this.state.isSecondBox ? "c-box border-0" : "d-box border-0"}>
                            </button>
                        </Col>
                    </Row>
                    <Col lg={12}>
                        <p className="font-poppins text-road">
                            <span className="me-1 semibold">1 NFT Give away!</span> Submit a derivative in your
                            style: by community vote, the best design wins!
                        </p>
                    </Col>
                </Row>
                <Row
                    className={this.state.isThirdBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickThird}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={2}>
                            <strong className="font-size-20 font-poppins percent-text">25%</strong>
                        </Col>
                        <Col lg={2} className="text-lg-end">
                            <button
                                onClick={this.handleClickThird}
                                className={this.state.isThirdBox ? "c-box border-0" : "d-box border-0"}>
                            </button>
                        </Col>
                    </Row>
                    <Col lg={12}>
                        <p className="font-poppins text-road">
                            Where the Killers at? Post your Tiny Killer on Twitter, tag us, and the 25 posts with more
                            engagement at the set time (to be announced) will be given a second Tiny Killer! (limited to
                            one offer per account).
                        </p>
                    </Col>
                </Row>
                <Row
                    className={this.state.isFourthBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickFourth}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={2}>
                            <strong className="font-size-20 font-poppins percent-text">50%</strong>
                        </Col>
                        <Col lg={2} className="text-lg-end">
                            <button
                                onClick={this.handleClickFourth}
                                className={this.state.isFourthBox ? "c-box border-0" : "d-box border-0"}>
                            </button>
                        </Col>
                    </Row>
                    <Col lg={12}>
                        <p className="font-poppins text-road">
                            1 ETH giveaway for every 1500 Tiny Killers minted. So, owner of minted killer #1500, #3000,
                            #4500, #6000, #7500 and #9000 will receive 1 ETH each. Oh, such lucky ones!
                        </p>
                    </Col>
                </Row>
            </>

        );
    }
}

export default CustomCheckbox;
