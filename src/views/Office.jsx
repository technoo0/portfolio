import React, { useEffect, useRef, useState } from "react";
import ScrollMagic from "scrollmagic";
import VideoPlayer from "./VideoPlayer";
import UseObjectFit from "../hooks/UseObjectFit";
import Arrow from "../assets/images/Arrow.svg"
import Arrow2 from "../assets/images/newArrow.svg"
import Aduio from "../assets/win95.mp3";
export default function Office({ onVideoEnded }) {
  let VideRef = useRef();
  const BottonPos = UseObjectFit(VideRef);
  const [stepOne, setSepOne] = useState(true);
  const [showbottom, setshowbottom] = useState(true)
  const [ended, setended] = useState(false);



  const OnEnded = () => {
    console.log("Video Ended")
    setended(true);
    onVideoEnded()
  };

  const PauseVideo = () => {
    if (VideRef.current.currentTime >= 2) {
      VideRef.current.pause();
      setSepOne(false);
    }
  };

  const onUserClick = () => {
    VideRef.current.play();
    setshowbottom(false);
    setTimeout(() => {
      let audio = new Audio(Aduio)
      audio.play()
    }, 10000)
  }
  useEffect(() => {
    console.log(stepOne);

    const TimeInter = setInterval(() => {
      if (VideRef.current && stepOne) {
        PauseVideo();
      }
    }, 100);
    return () => {
      clearInterval(TimeInter);
    };
  }, [stepOne, setSepOne]);

  useEffect(() => {
    VideRef.current.addEventListener("ended", OnEnded);


    return () => {
      if (VideRef.current) {
        VideRef.current.removeEventListener("ended", OnEnded);
      }

    };
  }, [ended, setended]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <VideoPlayer VideRef={VideRef} />
      {!stepOne && (
        <div

          style={{
            display: showbottom ? "block" : "none",
            position: "absolute",
            // transitionDuration: "2s",
            top: BottonPos.y,
            left: BottonPos.x,
            width: BottonPos.w,
            height: BottonPos.h,
            //   border: "white solid",
            // borderRadius: 4,
            // boxShadow: "0 0 20px 7px #0ff",
          }}
        >
          <div
            onClick={onUserClick}
            style={{
              position: "absolute",
              width: BottonPos.w,
              height: BottonPos.h,
              display: "block",
              // border: "white solid",
              zIndex: 100
            }} ></div>
          {window.innerWidth >= 573 ? <div style={{ position: "absolute", left: -150, top: -150 }} >
            <img src={Arrow} alt="Your SVG" width={200} />
          </div> : <div style={{ position: "absolute", left: 10, top: -180 }} >
            <img src={Arrow2} alt="Your SVG" width={200} />
          </div>}

        </div>

      )}
    </div>
  );
}
