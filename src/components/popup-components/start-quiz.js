import React, {useEffect, useState} from "react";
import tinyLogo from "../../assets/images/TinyLogo.svg";
import "./startQuiz.css"
import samurai from "../../assets/images/Samurai_Pose03_04.png";
import samuraiTwo from "../../assets/images/Samurai_Pose04.png";
import {useDispatch, useSelector} from "react-redux";
import {setQuizItem, setMint} from "../../redux/actions/quizAction";

const StartQuiz = (props) => {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(null);
    const [participate, setParticipate] = useState(true);
    const quizList = useSelector(state => state.quizData);
    const guessFees = 0.005
    const fee = 0.01

    function handleNumber(e) {
        setNumber(e.target.value)
        const eth = localStorage.getItem('ETH')
        if(eth){
            if((+e.target.value * guessFees * fee) < +eth.slice(0, -4)){
                setParticipate(false)
            }
        }
    }

    const  selectNumber = () => {
        let data = [];
        quizList.quizList.map((re, i) => {
            if (quizList.quizList.length >= i + 1) {
                re.number = i + 1;
                data.push(re)
            }
        })
        dispatch(setQuizItem(data, number))
        dispatch(setMint(number))
        // props.selectNumber()
    }

    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-center align-items-center py-md-5">
                    <div className="col-12 py-5 text-center quiz-sec position-relative">
                        <img src={samurai} className="samurai-image" alt=""/>
                        <img src={samuraiTwo} className="samurai-2-image" alt=""/>
                        <img src={tinyLogo} className="img-fluid mb-5" alt=""/>
                        <h3>HOW MANY KILLERS?</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum.</p>

                        <div className="my-4 quiz">
                            <label className="position-relative"><input type="radio" name="quiz" value="1" className="form-control custom-radio input1" onChange={(e) => {handleNumber(e)}} /><span>1</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="2" className="form-control custom-radio input1" onChange={(e) => {handleNumber(e)}} /><span>2</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="3" className="form-control custom-radio input1" onChange={(e) => {handleNumber(e)}} /><span>3</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="4" className="form-control custom-radio input1" onChange={(e) => {handleNumber(e)}} /><span>4</span></label>
                            <label className="position-relative"><input type="radio" name="quiz" value="5" className="form-control custom-radio input1" onChange={(e) => {handleNumber(e)}} /><span>5</span></label>

                            {/*<label className="position-relative"><input type="radio" name="quiz" value="6" className="form-control custom-radio input1" onChange={(e) => {handleNumber(e)}} /><span>6</span></label>*/}
                        </div>
                        <button className="btn start-btn mt-5" disabled={participate} onClick={() => selectNumber()}>START QUIZ</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartQuiz;
