import React, {useState} from "react";
import tinyLogo from "../../assets/images/TinyLogo.svg";
import "./question.css"
import samurai from "../../assets/images/Samurai_Pose03_04.png";

const Question = (props) => {
    const [count, setCount] = useState(1);
    const counter = (e) => {
        setCount(e + 1);
        props.selectAnswer(count);
    }

    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-12 py-5 text-center quiz-sec position-relative">
                        <img src={samurai} className="samurai-image" alt=""/>
                        <img src={tinyLogo} className="img-fluid mb-5" alt=""/>
                        <h3>{props && props.data && props.data.question}</h3>
                        <p>CLUE: LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR.</p>

                        <div className="my-4 question text-start">
                            <label className="position-relative label" onClick={() => counter(count)}><input type="radio" name="quiz" value="1" className="form-control custom-radio input1" />
                                <span className="span1">LOREM IPSUM DOLOR SIT AMET, CONSETETUR.</span>
                            </label>
                            <label className="position-relative label" onClick={() => counter(count)}><input type="radio" name="quiz" value="2" className="form-control custom-radio input1" />
                                <span className="span1">LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM NONUMY EIRMOD TEMPOR.</span>
                            </label>
                            <label className="position-relative label" onClick={() => counter(count)}><input type="radio" name="quiz" value="3" className="form-control custom-radio input1" />
                                <span className="span1">LOREM IPSUM CONSETETUR.</span>
                            </label>
                            <label className="position-relative label" onClick={() => counter(count)}><input type="radio" name="quiz" value="4" className="form-control custom-radio input1" />
                                <span className="span1">LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM NONUMY.</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;
