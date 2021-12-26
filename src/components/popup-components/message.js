import React from "react";
import { useState, useEffect } from 'react';
import tinyLogo from "../../assets/images/TinyLogo.svg";
import './startQuiz.css'
import samurai from '../../assets/images/Samurai_Pose03_04.png'
let time = new Date().toLocaleString();
const Message = (props) => {

    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(59);
    const [hours, setHours] = useState(8);
    const [clan, setClan] = useState('TOZAWA CLAN')
    const [ckeck, setCheck] = useState(false)
  // switch(21){
  //   case (props.totalPoint < 5):
  //     return setClan('')
  //   case (props.totalPoint < 9):
  //     return setClan('TOZAWA CLAN')
  //   case (props.totalPoint < 13):
  //     return setClan('TOZAWA CLAN')
  //   case (props.totalPoint < 17):
  //     return setClan('TOZAWA CLAN')    
  //   case (props.totalPoint < 21):
  //     return setClan('TOZAWA CLAN')   
  //   case (props.totalPoint < 25):
  //     return setClan('TOZAWA CLAN')      
  // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function updateTime() {
      localStorage.setItem('lastTIme', `${hours}:${minutes}:${seconds}`);
      if (minutes === 0 && seconds === 0) {
        setSeconds(0);
        setMinutes(0);
        setHours(9);
      } else {
        if (hours === 0) {
          if(minutes === 0 && seconds === 0){
            console.log('stop watch');
          }
        } else {
          if (minutes === 0) {
            setMinutes(59);
            setHours((hours) => hours - 1);
            setSeconds(59);
          } else {
            if (seconds === 0) {
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
      },[updateTime]);
      useEffect(() => {
        var date = new Date();
        const date24hours = date.toLocaleString('en-US',{hour12:false})
        localStorage.setItem('currentTIme', date.toLocaleString('en-US',{hour12:false}));
        const currentHour = new Date(date24hours).getHours()
        const currentMinutes = new Date(date24hours).getMinutes()
        const currentSeconds = new Date(date24hours).getSeconds()
        // setMinutes(new Date(date24hours).getMinutes() - currentMinutes);
        // setHours(new Date(date24hours).getHours() - currentHour);
        // setSeconds(new Date(date24hours).getSeconds() - currentSeconds);
        setMinutes(2);
        setHours(4);
        setSeconds(34);
        
      },[]);
    


    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-12 py-5 text-center quiz-sec position-relative">
                        <img src={samurai} className="samurai-image" alt=""/>
                        <img src={tinyLogo} className="img-fluid mb-5" alt=""/>
                        <h3 style={{fontSize: '64px'}}>CONGRATULATIONS!</h3>
                        <p>Your answers have revealed that your personality is most similar to the {clan} clan.
                          Your Tiny Killers will be most honored to be owned and led by you. May your partnership be long and prosperous.</p>
                        <div className="w-100">
                            <div className="event mt-5">
                                <span>Event starts in:</span>
                                <h5 className="mt-2">{hours} HOURS, {minutes} MINUTES, {seconds < 10 ?  `0${seconds}` : seconds} SECONDS</h5>
                            </div>
                            <button className="btn start-btn mt-4" disabled={ckeck}>MINT</button>
                        </div>

                        <a className="back-home" onClick={props.closePopup}>Back to Homepage</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message;
