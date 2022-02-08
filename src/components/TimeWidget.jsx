import React, { useEffect, useState } from "react";
import { Cutout, Tooltip, WindowContent } from "react95";
import moment from "moment";
export default function TimeWidget() {
  const [clockState, setClockState] = useState();
  const [dateState, setDateState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDateState(moment().format("DD-M-YYYY"));
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div style={{}}>
      <Tooltip
        style={{
          fontFamily: "ms_sans_serif",
          top: "-6px",
        }}
        text={dateState}
        enterDelay={100}
        leaveDelay={500}
      >
        <Cutout
          style={{
            fontFamily: "ms_sans_serif",
            textAlign: "center",
            width: 100,
            marginRight: "10px",
          }}
        >
          {clockState}
        </Cutout>
      </Tooltip>
    </div>
  );
}
