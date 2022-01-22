import React from "react";
import useStore from "../../store";
import useLongPress from "../../useLongPress";
export default function Icon(props) {
  const AddWindow = useStore((state) => state.AddWindow);
  const onLongPress = () => {
    AddWindow();
  };

  const onClick = () => {
    console.log("click is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  return (
    <div
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
      <h1
        style={{
          fontFamily: "ms_sans_serif",
          fontSize: "14px",
          color: "white",
          textAlign: "center",
        }}
      >
        {props.name}
      </h1>
    </div>
  );
}
