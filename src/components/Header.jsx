import React, { useEffect, useState } from "react";
import {
  Button,
  CloseButton,
  Col,
  Container,
  Modal,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector, connect as reduxConnect } from "react-redux";
import { fetchData } from "../redux/data/dataActions";
import { connect } from "../redux/blockchain/blockchainActions";
import API from "../utils/api";

import Logo from "../assets/images/TinyLogo.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";

/*banner images*/
import banner1 from "../assets/images/banner-1.svg";
import banner2 from "../assets/images/banner-2.svg";
import samuraiMain from "../assets/images/samurai-banner.png";
import samuraiOne from "../assets/images/Samurai_Pose03_04.png";
import samuraiMobile from "../assets/images/mobile-banner.png";
import samuraiTwo from "../assets/images/Samurai_Pose04.png";

import * as s from "../styles/globalStyles";
import "./main-banner.css";
import WhoAvatar from "../assets/images/Samurai_Disassemble.gif";
import WhoAvatarVideo from "../assets/videos/Anim_Samurai_Disassemble.mp4";
import StartQuiz from "./popup-components/start-quiz";
import Question from "./popup-components/question";
import Message from "./popup-components/message";
import { setQuizList } from "../redux/actions/quizAction";
import { scrollShowHide, scrollShowHideVideo } from "../utils/utility";
import blueTick from "../assets/images/Grupo_16888.svg";
import moment from "moment";

const Header = ({ blockchain }) => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  let data = [];
  const stateQuizItem = useSelector((state) => state.quizItemData.quizItem);
  const stateMintLength = useSelector((state) => state.mintData.mintData);
  const [quizItem, setQuizItem] = useState();
  const [mintLength, setMint] = useState();
  const [showMintButton, setShowMintButton] = useState(false);
  const [completeTheTimeOrMint, setCompleteTheTimeOrMint] = useState(false);
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(8);
  const [completeMint, setCompleteMint] = useState(false);

  const userId = localStorage.getItem("userId");

  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(null);

  function updateTime() {
    localStorage.setItem("lastTime", `${hours}:${minutes}:${seconds}`);
    if (minutes === 0 && seconds === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(9);
    } else {
      if (hours <= 0) {
        if (minutes === 0 && seconds === 0) {
          setCompleteTheTimeOrMint(true);
        }
      } else {
        if (minutes <= 0) {
          setMinutes(59);
          setHours((hours) => hours - 1);
          setSeconds(59);
        } else {
          if (seconds <= 0) {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          } else {
            setSeconds((seconds) => seconds - 1);
          }
        }
      }
    }
  }

  useEffect(() => {
    const token = setTimeout(updateTime, 1000);

    return function cleanUp() {
      clearTimeout(token);
    };
  }, [updateTime]);

  const handleShow = () => {
    setShow(true);
    API.get(`quiz/list`)
      .then((res) => {
        dispatch(setQuizList(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
    setPopup(<StartQuiz />);
  };
  const handleClose = async () => {
    setShow(false);
    await localStorage.removeItem("lastTime");
  };

  const claimNFTs = (_amount) => {
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((0.01 * _amount).toString(), "ether"),
        gas: 100000,
      })
      .once("error",async (err) => {
        setFeedback("Error");
        setClaimingNft(false);
      })
      .then(async (receipt) => {
        const data = await API.post(`user/mint`, {
          id: localStorage.getItem("userId"),
        });
        if(data){
          setShow(false);
        }
        setFeedback("Success");
        setClaimingNft(false);
      });
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      API.post(`user/Add`, { address: blockchain.account })
        .then((res) => {
          if (
            res.data.data.quiz_completed === true &&
            res.data.data.last_answer_time
          ) {
            let date = new Date();
            const lastAnswer = new Date();
            lastAnswer.setTime(res.data.data.last_answer_time);
            lastAnswer.toLocaleString("en-US", { hour12: false });

            const milliseconds = Math.abs(date - lastAnswer);
            const hours = milliseconds / 36e5;
            if(res.data.data.used_mint >= res.data.data.total_mint){
              setCompleteMint(true);
            }
            if (hours < 9) {
              var userTime = moment
                .unix(+res.data.data.last_answer_time / 1000)
                .add(9, "hours");
              var currentTime = moment();
              setHours(
                moment
                  .utc(
                    moment(userTime, "HH:mm:ss").diff(
                      moment(currentTime, "HH:mm:ss")
                    )
                  )
                  .format("HH")
              );
              setMinutes(
                moment
                  .utc(
                    moment(userTime, "HH:mm:ss").diff(
                      moment(currentTime, "HH:mm:ss")
                    )
                  )
                  .format("mm")
              );
              setSeconds(
                moment
                  .utc(
                    moment(userTime, "HH:mm:ss").diff(
                      moment(currentTime, "HH:mm:ss")
                    )
                  )
                  .format("ss")
              );
              setShowMintButton(true);
            } else {
              setCompleteTheTimeOrMint(true);
            }
          }
          localStorage.setItem("userId", res.data.data.id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [blockchain.smartContract, dispatch, show]);

  useEffect(() => {
    renderedQuestion();
  }, [stateQuizItem]);
  useEffect(() => {
    if (userId) {
      dispatch(connect());
    }
  }, []);

  const renderedQuestion = (e) => {
    setPopup(
      <Question
        selectAnswer={(e) => renderedMessage(e)}
        question={stateMintLength}
        data={stateQuizItem[e === undefined ? 0 : e]}
      />
    );
  };

  scrollShowHide("whoDiv", "whoAvatar");
  scrollShowHideVideo("whoDiv", "WhoAvatarVideo");

  const renderedMessage = (e) => {
    if (e === stateQuizItem.length) {
      setPopup(<Message closePopup={() => handleClose()} />);
    } else {
      renderedQuestion(e);
    }
  };

  return (
    <>
      <Container fluid className="main-banner p-0">
        <Navbar bg="trans" expand="lg" className="pt-3 pt-md-5">
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#">
              <img src={Logo} alt="logo" class="set-mobile-logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbar-light d-none"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-none d-md-inline-block"
            >
              <Row className="d-flex">
                <Col lg={2}>
                  <Nav.Link className="" href="#action1">
                    <img src={Discord} alt="nav-icon" />
                  </Nav.Link>
                </Col>
                <Col lg={2} className="mx-3">
                  <Nav.Link className="" href="#action1">
                    <img src={Twitter} alt="nav-icon" />
                  </Nav.Link>
                </Col>
                <Col>
                  {(blockchain.account === "" ||
                    blockchain.smartContract === null) &&
                  !userId ? (
                    <s.TextTitle>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                        }}
                        variant="btn btn-light button-wallet border-0 wallet-text p-1 ms-2"
                      >
                        CONNECT WALLET
                      </Button>
                      {blockchain.errorMsg !== "" ? (
                        <s.TextDescription>
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      ) : null}
                    </s.TextTitle>
                  ) : (
                    <>
                      {/* <Button
                        disabled={claimingNft ? 1 : 0}
                        variant="btn btn-light button-wallet border-0 wallet-text p-1"
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs(1);
                          //dispatch(connect());
                        }}
                      >
                        {claimingNft ? "Busy Minting NFTS" : "MINT"}
                      </Button> */}
                      <s.SpacerXSmall />
                      <s.TextDescription style={{ textAlign: "center" }}>
                        {" "}
                        {feedback}{" "}
                      </s.TextDescription>
                      <s.SpacerSmall />
                    </>
                  )}
                </Col>
              </Row>
            </Navbar.Collapse>
            <Row className="d-flex d-md-none align-items-center">
              <Nav.Link className="" href="#action1">
                <img src={Discord} alt="nav-icon" className="" />
              </Nav.Link>
              <Nav.Link className="" href="#action1">
                <img src={Twitter} alt="nav-icon" className="" />
              </Nav.Link>
              {(blockchain.account === "" ||
                blockchain.smartContract === null) &&
              !userId ? (
                <div className="w-auto">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                    }}
                    variant="btn btn-light button-wallet border-0 wallet-text ms-2"
                  >
                    <img
                      src={blueTick}
                      className="img-fluid h-100 w-100"
                      alt=""
                    />
                  </Button>
                  {blockchain.errorMsg !== "" ? (
                    <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
                  ) : null}
                </div>
              ) : (
                <>
                  <Button
                    disabled={claimingNft ? 1 : 0}
                    variant="btn btn-light button-wallet border-0 wallet-text w-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      claimNFTs(1);
                      //dispatch(connect());
                    }}
                  >
                    <img
                      src={blueTick}
                      className="img-fluid h-100 w-100"
                      alt=""
                    />
                  </Button>
                  <s.SpacerXSmall />
                  <s.TextDescription style={{ textAlign: "center" }}>
                    {" "}
                    {feedback}{" "}
                  </s.TextDescription>
                  <s.SpacerSmall />
                </>
              )}
              {/*<div>
                                {blockchain.account === "" || blockchain.smartContract === null ? (
                                    <s.TextTitle>
                                        <Button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(connect());
                                            }}
                                            variant="btn btn-light button-wallet border-0 wallet-text p-1 ms-2"
                                        >
                                            CONNECT WALLET
                                        </Button>
                                        {blockchain.errorMsg !== "" ? (
                                            <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
                                        ) : null}
                                    </s.TextTitle>
                                ) : (
                                    <>
                                        <Button
                                            disabled={claimingNft ? 1 : 0}
                                            variant="btn btn-light button-wallet border-0 wallet-text p-1"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                claimNFTs(1);
                                                //dispatch(connect());
                                            }}
                                        >
                                            {claimingNft ? "Busy Minting NFTS" : "MINT"}
                                        </Button>
                                        <s.SpacerXSmall/>
                                        <s.TextDescription
                                            style={{textAlign: "center"}}> {feedback} </s.TextDescription>
                                        <s.SpacerSmall/>
                                    </>
                                )}
                            </div>*/}
            </Row>
          </Container>
        </Navbar>
        <Container className="" style={{ paddingTop: "100px" }}>
          <Row className="position-relative pt-5  justify-content-between align-items-center">
            <img
              src={banner1}
              className="banner d-none d-md-inline-block"
              style={{ marginLeft: "30px" }}
              alt=""
            />
            <img
              src={samuraiOne}
              className="position-absolute top-samurai d-none d-md-inline-block"
              alt=""
            />
            <img
              src={samuraiTwo}
              className="position-absolute bottom-samurai d-none d-md-inline-block"
              alt=""
            />
            <img
              src={samuraiMain}
              className="middle-samurai position-absolute d-none d-md-inline-block"
              alt=""
            />
            <img
              src={samuraiMobile}
              className="middle-samurai position-absolute d-md-none"
              alt=""
            />
            <img
              src={banner2}
              className="banner d-none d-md-inline-block"
              style={{ marginRight: "30px" }}
              alt=""
            />
          </Row>
          <Row className="justify-content-center text-center">
            <Col lg={12} className="mt-5 pt-5">
              {completeTheTimeOrMint ? (
                completeMint ? (
                  "Completed mint"
                ) : (
                  <Button btn className="part-btn" disabled="true">
                    MINT
                  </Button>
                )
              ) : !showMintButton ? (
                <Button
                  btn
                  className="part-btn"
                  onClick={handleShow}
                  disabled={
                    (blockchain.account === "" ||
                      blockchain.smartContract === null) &&
                    !userId
                  }
                >
                  PARTICIPATE
                </Button>
              ) :
              completeMint ? (
                <Button
                btn
                className="part-btn"
                disabled='true'
              >
                {"complelted"}
              </Button>
              ) :  (
                <>
                  <Button
                    btn
                    className="part-btn"
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      claimNFTs(1);
                      //dispatch(connect());
                    }}
                  >
                    {claimingNft ? "Busy Minting NFTS" : "MINT"}
                  </Button>
                  <br></br>
                  <h5 className="mt-3 set-clock">
                    {hours} HOURS, {minutes} MINUTES,{" "}
                    {seconds < 10 ? `0${seconds}` : seconds} SECONDS
                  </h5>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="ml-0 mr-0 who-section pt-5" id="who-section">
        <Container className="row col-md-9 mt-5 px-0 px-md-3 mx-auto">
          <Row className="justify-content-center text-start mx-0 px-0 px-md-3">
            <Col className="col-md-5 col-12">
              <p className="who-section-title text-start">
                THEY ARE SMALL. <br />
                THEY ARE CUTE. <br /> THEY DON’T BITE. <br /> BUT THEY KILL.
              </p>
            </Col>
            <Col className="col-md-7 col-12">
              <label className="text-para">
                Tiny Killers are much more than a randomly-generated set of
                9,999 small assassins. They are made of pure, concentrated fury
                and are split in five factions that fight each other for total
                and absolute control of Tiny World.
                <br />
                <br />
                Each one yearns for a human master that will allow his Tiny
                Killer to unleash all the rage and contribute for the victory of
                its faction
              </label>
              <br />
              <br />
              <br />
              <label className="text-white last-para text-para">
                OH, BY THE WAY, TINY KILLERS WILL BE LAUNCHED IN MULTIPLE,
                CONSECUTIVE, EDITIONS – THE FIRST ONE BEING SAMURAIS. OUR
                COMMUNITY WILL DETERMINE WHAT THE NEXT EDITIONS WILL BE.
              </label>
            </Col>
            <Col
              className="col-12 mx-auto text-center px-0 px-md-3"
              id="whoDiv"
            >
              {/* <img className='img-fluid bg-who mt-5 mb-0 mb-md-5' id="whoAvatar" src={WhoAvatar} alt="who-img"/> */}
              {/* <video className='img-fluid bg-who mt-5 mb-0 mb-md-5' src={WhoAvatarVideo} id="whoAvatar"></video> */}
              <video
                width="600"
                muted
                preload
                controls="controls"
                playsinline
                preload
                id="WhoAvatarVideo"
              >
                <source src={WhoAvatarVideo} type="video/mp4" />
              </video>
            </Col>
          </Row>
        </Container>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="box-main-modal main-banner-modal"
          fullscreen="lg-down"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header
            className="bg-theme-modal px-4 pt-3"
            closeButton={false}
          >
            <CloseButton
              variant="white"
              onClick={handleClose}
              className="form-control"
            />
          </Modal.Header>
          <Modal.Body className="bg-theme-modal px-md-5 px-0">
            {popup}
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    blockchain: state.blockchain,
  };
};
export default reduxConnect(mapStateToProps)(Header);
