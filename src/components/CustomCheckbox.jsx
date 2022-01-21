import React from "react";
import {Col, Row} from "react-bootstrap";
import "./slider.css";

class CustomCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstBox: true,
            isSecondBox: true,
            isThirdBox: true,
            isFourthBox: true,
            isFifthBox: true,
            isSixthBox: true,
        };
        this.handleClickFirst = this.handleClickFirst.bind(this);
        this.handleClickSecond = this.handleClickSecond.bind(this);
        this.handleClickThird = this.handleClickThird.bind(this);
        this.handleClickFourth = this.handleClickFourth.bind(this);
        this.handleClickFifth = this.handleClickFifth.bind(this);
        this.handleClickSixth = this.handleClickSixth.bind(this);
    }

    handleClickFirst() {
        // this.setState(state => ({
        //     isFirstBox: !state.isFirstBox,
        // }));
    }

    handleClickSecond() {
        // this.setState(state => ({
        //     isSecondBox: !state.isSecondBox,
        // }));
    }

    handleClickThird() {
        // this.setState(state => ({
        //     isThirdBox: !state.isThirdBox,
        // }));
    }

    handleClickFourth() {
        // this.setState(state => ({
        //     isFourthBox: !state.isFourthBox,
        // }));
    }

    handleClickFifth() {
        // this.setState(state => ({
        //     isFifth: !state.isFifthBox,
        // }));
    }

    handleClickSixth() {
        // this.setState(state => ({
        //     isSixth: !state.isSixthBox,
        // }));
    }

    render() {
        return (
            <>
                <Row
                    className={this.state.isFirstBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickFirst}  id="fix-phases">
                    <Row className="justify-content-between align-items-center">
                        <Col lg={4}>
                            <strong className="font-size-20 font-poppins percent-text">PHASE 1</strong>
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
                            We drop the first Tiny Killers collection, the Samurai Edition, and 10.000 Killers will now be in their new masters’ hands and ready to scramble!
                            <span className="semibold ms-1">  Oh, please be careful while maneuvering these small beasts of death.</span>
                        </p>
                    </Col>
                </Row>
                <Row
                    className={this.state.isSecondBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickSecond}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={5}>
                            <strong className="font-size-20 font-poppins percent-text">PHASE 2</strong>
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
                        V1.0 of the Tiny Killers game is released, and users are now able to fight for their clans, upgrade their Killers and collect precious resources.
                            <span className="semibold ms-1"> Who will prosper, who will lead, who will fall?</span>
                        </p>
                    </Col>
                </Row>
                <Row
                    className={this.state.isThirdBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickThird}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={5}>
                            <strong className="font-size-20 font-poppins percent-text">PHASE 3</strong>
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
                        We are working hard to introduce craftable skills and assets (NFTs) that your Killer can generate and use in his path to glory! It will require quite a lot of tiny effort and tiny sweat, keep that in mind!
                        </p>
                    </Col>
                </Row>
                <Row
                    className={this.state.isFourthBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickFourth}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={5}>
                            <strong className="font-size-20 font-poppins percent-text">PHASE 4</strong>
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
                        <span className="semibold">Time to get seriou$, as we are planning on launching $TinyCoins.</span><br></br>Our very own token will be the setting stone for the creation of a Tiny Economy!
                        </p>
                    </Col>
                </Row>
                <Row
                    className={this.state.isFirstBox ? "handled-check" : "unhandled-check"}
                    onClick={this.handleClickFifth}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={5}>
                            <strong className="font-size-20 font-poppins percent-text">PHASE 5</strong>
                        </Col>
                        <Col lg={2} className="text-lg-end">
                            <button
                                onClick={this.handleClickFifth}
                                className={this.state.isFifthBox ? "c-box border-0" : "d-box border-0"}>
                            </button>
                        </Col>
                    </Row>
                    <Col lg={12}>
                        <p className="font-poppins text-road">
                            <span className="semibold me-1">Tiny Killers game V2 is released!</span>
                            A bigger, more ferocious world where Clans can now battle and conquer TinyVerse dominance in a one-of-a-kind blockchain-based strategy game.
                        </p>
                    </Col>
                </Row>
                {/*TODO onClick={this.handleClickSixth}*/}
                <Row
                    className={this.state.isSixthBox ? "handled-check" : "unhandled-check"}>
                    <Row className="justify-content-between align-items-center">
                        <Col lg={5}>
                            <strong className="font-size-20 font-poppins percent-text">PHASE 6</strong>
                        </Col>
                        <Col lg={2} className="text-lg-end">
                            <button
                                onClick={this.handleClickSixth}
                                className={this.state.isSixthBox ? "c-box border-0" : "d-box border-0"}>
                            </button>
                        </Col>
                    </Row>
                    <Col lg={12}>
                        <p className="font-poppins text-road">
                        <span className="semibold me-1">TinyVerse expansion with the release of the second collection! What could it be? Pirates? Soldiers? You decide! </span><br></br>Priority minting is given to holders of the first edition. #loyalty
                        </p>
                    </Col>
                </Row>
            </>

        );
    }
}

export default CustomCheckbox;
