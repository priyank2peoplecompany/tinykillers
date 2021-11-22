import React from "react";
import tinyLogo from "../../assets/images/TinyLogo.svg";
import './startQuiz.css'
import samurai from '../../assets/images/Samurai_Pose03_04.png'

const Message = (props) => {
    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-12 py-5 text-center quiz-sec position-relative">
                        <img src={samurai} className="samurai-image" alt=""/>
                        <img src={tinyLogo} className="img-fluid mb-5" alt=""/>
                        <h3 style={{fontSize: '64px'}}>CONGRATULATIONS!</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum.</p>

                        <div className="event mt-5">
                            <span>Event starts in:</span>
                            <h5 className="mt-2">06 HOURS, 11 MINUTES, 53 SECONDS</h5>
                        </div>
                        <button className="btn start-btn mt-4">MINT</button>

                        <a className="back-home" onClick={props.closePopup}>Back to Homepage</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message;
