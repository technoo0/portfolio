import React, { memo } from "react";
import Video from "../assets/video2.mp4";
const VideoPlayer = memo(({ VideRef }) => {
  // console.log("render");
  return (
    <video
      ref={VideRef}
      muted="muted"
      autoPlay="autoplay"
      playsInline
      defaultMuted
      preload="auto"
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
      }}
      src={Video}
    ></video>
  );
});

export default VideoPlayer;
