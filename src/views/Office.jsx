import React, { useEffect, useRef, useState } from "react";
import ScrollMagic from "scrollmagic";
import VideoPlayer from "./VideoPlayer";
import UseObjectFit from "../hooks/UseObjectFit";
export default function Office() {
  let VideRef = useRef();
  const BottonPos = UseObjectFit();
  const [stepOne, setSepOne] = useState(true);
  const PauseVideo = () => {
    if (VideRef.current.currentTime >= 2) {
      VideRef.current.pause();
      setSepOne(false);
    }
  };
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
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <VideoPlayer VideRef={VideRef} />
      {!stepOne && (
        <div
          onClick={() => VideRef.current.play()}
          style={{
            position: "absolute",
            transitionDuration: "2s",
            top: BottonPos.y,
            left: BottonPos.x,
            width: BottonPos.w,
            height: BottonPos.h,
            //   border: "white solid",
            borderRadius: 5,
            boxShadow: "0 0 20px 7px #0ff",
          }}
        ></div>
      )}
    </div>
  );
}
