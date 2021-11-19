import React from "react";
import tinyLogo from "../../assets/images/TinyLogo.svg";
import "./startQuiz.css"

const StartQuiz = (props) => {
    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-12 py-5 text-center quiz-sec">
                        <img src={tinyLogo} className="img-fluid mb-5" alt=""/>
                        <h3>HOW MANY KILLERS?</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum.</p>

                        <div className="my-4 quiz">
                            <label className="position-relative"><input type="radio" name="quiz" value="1" className="form-control custom-radio" /><span>1</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="2" className="form-control custom-radio" /><span>2</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="3" className="form-control custom-radio" /><span>3</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="4" className="form-control custom-radio" /><span>4</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="5" className="form-control custom-radio" /><span>5</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="6" className="form-control custom-radio" /><span>6</span></label>
                        </div>

                        <button className="btn start-btn mt-5" onClick={props.selectNumber()}>START QUIZ</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartQuiz;
