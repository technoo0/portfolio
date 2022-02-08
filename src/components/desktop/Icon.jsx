import React, { useEffect } from "react";
import useStore from "../../store";
import useLongPress from "../../useLongPress";
import { useContextMenu } from "../hooks/useContextMenu";
import ContextMenu from "./ContextMenu";
export default function Icon(props) {
  const [ElementRef, showMenu] = useContextMenu();

  const AddWindow = useStore((state) => state.AddWindow);
  const onLongPress = () => {
    AddWindow();
  };

  const onClick = () => {
    // console.log("click is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  return (
    <div
      ref={ElementRef}
      {...longPressEvent}
      onDoubleClick={AddWindow}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={props.logo}
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
        {props.name}
      </p>
      {showMenu ? <ContextMenu /> : ""}
    </div>
  );
}
