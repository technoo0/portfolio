import React, { useState } from "react";
import Home from "./views/Home";
import Office from "./views/Office";

export default function App() {
  const [videoEnded, setVideoEnded] = useState(false)
  const onVideoEnded = () => {
    console.log("video Ended form app.jsx")
    setVideoEnded(true)
  }
  // return <Home />;
  return videoEnded ? <Home /> : <Office onVideoEnded={onVideoEnded} />;
}
