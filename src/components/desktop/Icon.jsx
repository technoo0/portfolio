import React, { useEffect, useRef, useState } from "react";
import useStore from "../../store";
import { useContextMenu } from "../../hooks/useContextMenu";
import ContextMenu from "./ContextMenu";
import { useDoubleTap } from "../../hooks/useDoubleTap";
export default function Icon({ name, logo, content, hight, width }) {

  const [ElementRef, showMenu] = useContextMenu();
  const isDoubleTabed = () => {
    AddWindow(name, content, hight, width)
  }
  // const TapRaf = useDoubleTap(isDoubleTabed)
  const AddWindow = useStore((state) => state.AddWindow);




  //------------------- Double Tap -------------------

  const [lastTap, setLastTap] = useState(new Date().getTime())

  const onTap = () => {

    var now = new Date().getTime();
    var timesince = now - lastTap;

    if ((timesince < 400) && (timesince > 0)) {
      // console.log("doubleTap")
      isDoubleTabed()
    }

    setLastTap(now)
  }

  useEffect(() => {
    if (ElementRef.current) {
      ElementRef.current.addEventListener("touchstart", onTap)
    }
    return () => {
      if (ElementRef.current) {
        ElementRef.current.removeEventListener("touchstart", onTap);
      }
    }
  }, [ElementRef, lastTap])

  return (
    <div
      ref={ElementRef}
      onDoubleClick={() => AddWindow(name, content, hight, width)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={logo}
        alt="logo"
        draggable={false}
        width={40}
        style={{ margin: "auto" }}
      />
      <p
        style={{
          fontFamily: "ms_sans_serif",
          fontSize: "14px",
          color: "white",
          textAlign: "center",
        }}
      >
        {name}
      </p>
      {showMenu ? <ContextMenu /> : ""}
    </div>
  );
}
