import React, { useEffect, useState } from "react";
import Home from "./views/Home";
import Office from "./views/Office";
import { analytics } from "../firebase";
import BottomStart from "./views/BottomStart";
export default function App() {
  console.log(import.meta.env)
  const [videoEnded, setVideoEnded] = useState(false)
  const [ShowIntro, setShowIntro] = useState(false)
  useEffect(() => {

    // console.log("intro", localStorage.getItem("intro"))
    if (localStorage.getItem("intro")) {
      setVideoEnded(true)
    }
  }, [])
  const onVideoEnded = () => {
    localStorage.setItem("intro", true);
    console.log("video Ended form app.jsx")
    setVideoEnded(true)
  }
  // return <Home />;
  return (<div style={{ width: "100%", height: "100vh" }}>
    {videoEnded ? <Home /> : <Office onVideoEnded={onVideoEnded} />}
    <div style={{ position: "fixed", bottom: 60, right: 15 }}>
      <BottomStart />
    </div>
  </div>);
}
