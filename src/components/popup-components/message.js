import React from "react";
import { useState, useEffect } from "react";
import tinyLogo from "../../assets/images/TinyLogo.svg";
import "./startQuiz.css";
import samurai from "../../assets/images/Samurai_Pose03_04.png";

import clan1Fill from "../../assets/images/clan-success/SAKEDA.svg";
import clan2Fill from "../../assets/images/clan-success/KAJIWARA.svg";
import clan3Fill from "../../assets/images/clan-success/TOZAWA.svg";
import clan4Fill from "../../assets/images/clan-success/ASAGO.svg";
import clan5Fill from "../../assets/images/clan-success/KUSAKI.svg";

import API from "../../utils/api";

let time = new Date().toLocaleString();
const Message = (props) => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(8);
  const [clan, setClan] = useState("");
  const [clanImage, setClanImage] = useState("");
  const [clanColor, setClanColor] = useState("");
  const [check, setCheck] = useState(false);
  function updateTime() {
    localStorage.setItem("lastTime", `${hours}:${minutes}:${seconds}`);
    if (minutes === 0 && seconds === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(9);
    } else {
      if (hours === 0) {
        if (minutes === 0 && seconds === 0) {
          console.log("stop watch");
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
  }, [updateTime]);
  useEffect(async () => {
    const data = await API.post(`user/details`, {
      id: localStorage.getItem("userId"),
    });

    // var date = new Date();
    // const date24hours = date.toLocaleString("en-US", { hour12: false });
    // const currentHour = new Date(date24hours).getHours();
    // const currentMinutes = new Date(date24hours).getMinutes();
    // const currentSeconds = new Date(date24hours).getSeconds();

    // var date = new Date(data.data.data[0].updated_at);
    // const userDate24hours = date.toLocaleString("en-US", { hour12: false });
    // const userHour = new Date(userDate24hours).getHours();
    // const userMinutes = new Date(userDate24hours).getMinutes();
    // const userSeconds = new Date(userDate24hours).getSeconds();

    // const lastTime = localStorage.getItem("lastTime");
    // const lastTimeHour = lastTime.split(":")[0];
    // const lastTimeMinut = lastTime.split(":")[1];
    // const lastTimeSecond = lastTime.split(":")[2];

    // setMinutes(lastTimeMinut - (currentMinutes - userMinutes));
    // setHours(lastTimeHour - (currentHour - userHour));
    // setSeconds(lastTimeSecond - (currentSeconds - userSeconds));
    const total_point = data.data.data[0].total_point;

    switch (true) {
      case total_point < 5:
        return setClan("");
      case total_point < 9:
        setClanColor('#277AFF')
        setClanImage(clan3Fill)
        return setClan("Tozawa Clan");
      case total_point < 13:
        setClanColor('#E4E4E4')
        setClanImage(clan5Fill)
        return setClan("Kusaki Clan");
      case total_point < 17:
        setClanColor('#00C977')
        setClanImage(clan4Fill)
        return setClan("Asago Clan");
      case total_point < 21:
        setClanColor('#FF5050')
        setClanImage(clan1Fill)
        return setClan("Sakeda Clan");
      case total_point < 25:
        setClanColor('#FEBF66')
        setClanImage(clan2Fill)
        return setClan("Kajiwara Clan");
    }
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-12 py-5 text-center quiz-sec position-relative">
            {/* <img src={samurai} className="samurai-image" alt=""/> */}
            <img src={clanImage} className="img-fluid mb-5" alt="" />
            {/* <img src={tinyLogo} className="img-fluid mb-5" alt=""/> */}
            <h3 style={{ fontSize: "64px" }}>CONGRATULATIONS!</h3>
            <p>
              Your answers have revealed that your personality is most similar
              to the <span style={{color: clanColor}}>{clan}</span> clan. Your Tiny Killers will be most honored to be
              owned and led by you. May your partnership be long and prosperous.
            </p>
            <div className="w-100">
              <div className="event mt-5">
                <span>Time remaining for mint:</span>
                <h5 className="mt-2">
                  {hours} HOURS, {minutes} MINUTES,{" "}
                  {seconds < 10 ? `0${seconds}` : seconds} SECONDS
                </h5>
              </div>
              <button className="btn start-btn set-start mt-4" disabled={check}>
                MINT
              </button>
            </div>

            <a className="back-home" onClick={props.closePopup}>
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
