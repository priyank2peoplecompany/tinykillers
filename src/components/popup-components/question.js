import React, {useEffect, useState} from "react";
import tinyLogo from "../../assets/images/TinyLogo.svg";
import "./question.css"
import samurai from "../../assets/images/Samurai_Pose03_04.png";
import API from "../../utils/api";

const Question = (props) => {
    const [count, setCount] = useState(1);
    const [checked, setChecked] = useState(null)
    const [isInputDisable, setIsInputDisable] = useState(false);

    const counter = (e, item) => {
        setCount(e + 1);
        setIsInputDisable(true);
        let bool = true;
        if (props.data.answer == item) {
            bool = false;
        }
        API.post(
            `user/answer`,
            {
                user_id: localStorage.getItem('userId'),
                question_id: props.data.id,
                answer: props.data.answer == item
            }
        ).then((res) => {
            setTimeout(() => {
                props.selectAnswer(count, bool);
                setIsInputDisable(false)
            }, 1000)
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        setChecked(null);
    }, [checked])

    const changeRadio = (e) => {
        if (e.target.checked) {
            setTimeout(() => {
                setChecked(false);
            }, 1000)
        }
    }

    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-12 py-5 text-center quiz-sec position-relative">
                        <img src={samurai} className="samurai-image" alt=""/>
                        <img src={tinyLogo} className="img-fluid mb-5" alt=""/>
                        <h3>{props && props.data && `${props.data.number} ${props.data.question}`}</h3>
                        <p>CLUE: LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR.</p>

                        <div className="my-4 question text-start">
                            {
                                props && props.data && props.data.options.map((item, i) => (
                                    <label className="position-relative label" key={i}
                                           onClick={() => counter(count, item)}>
                                        <input type="radio" name="quiz" onChange={(e) => changeRadio(e)}
                                               value={`value-${i}`}
                                               disabled={isInputDisable}
                                               className="form-control custom-radio input1"
                                               checked={checked}/>
                                        <span className="span1">{item}</span>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;
