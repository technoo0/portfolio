import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/icons/mycomputerIcon.png";
import useStore from "../../store";
export default function Icon() {
  const [IconPos, setIconPos] = useState([0, 0]);
  const IconRef = useRef();
  const [CouserPos, setCourserPos] = useState([0, 0]);
  const onMouseDown = (event) => {
    setCourserPos([event.nativeEvent.layerX, event.nativeEvent.layerY]);
  };
  const onDragEnd = (event) => {
    const DesktopSize = useStore.getState().DesktopSize;
    console.log(DesktopSize);
    var newPos = [event.pageX - CouserPos[0], event.pageY - CouserPos[1]];
    if (newPos[0] < 0) {
      newPos[0] = 0;
    } else if (newPos[0] > DesktopSize[0] - IconRef.current.offsetWidth) {
      newPos[0] = DesktopSize[0] - IconRef.current.offsetWidth;
    }
    if (newPos[1] < 0) {
      newPos[1] = 0;
    } else if (newPos[1] > DesktopSize[1] - IconRef.current.offsetHeight) {
      newPos[1] = DesktopSize[1] - IconRef.current.offsetHeight;
    }
    setIconPos(newPos);
  };
  return (
    <div
      ref={IconRef}
      draggable={true}
      onDragEnd={onDragEnd}
      onMouseDown={onMouseDown}
      style={{ position: "absolute", top: IconPos[1], left: IconPos[0] }}
    >
      <img src={Logo} alt="logo" />
    </div>
  );
}
