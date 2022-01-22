import React, { useState, useEffect, useRef } from "react";
import useStore from "../../../store";
import DefultContent from "./windowConent/defultContent";

import styled from "styled-components";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95";

const Wrapper = styled.div`
  background: ___CSS_0___;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    font-size: 16px;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: black;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

export default function WindowContaner(props) {
  const [IconPos, setIconPos] = useState([0, 0]);
  const IconRef = useRef();
  const [CouserPos, setCourserPos] = useState([0, 0]);
  const [MosueDown, setMosueDown] = useState(false);
  const onMouseDown = (event) => {
    const MoveToTop = useStore.getState().MoveToTop;
    MoveToTop(props.data.id);
    setCourserPos([event.nativeEvent.layerX, event.nativeEvent.layerY]);
    if (
      event.target.attributes.name &&
      event.target.attributes.name.value == "hello"
    ) {
      setMosueDown(true);
    }
  };
  const onMouseUp = (event) => {
    setMosueDown(false);
  };
  const onMouseMove = (event) => {
    if (event.target.attributes.name) {
      if (MosueDown && event.target.attributes.name.value == "hello") {
        onDragEnd(event);
      }
    }
  };

  const onDragEnd = (event) => {
    const DesktopSize = useStore.getState().DesktopSize;
    // console.log(DesktopSize);
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
      draggable={false}
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        top: IconPos[1],
        left: IconPos[0],
        zIndex: props.data.index,
      }}
    >
      <Wrapper>
        <Window resizable className="window">
          <WindowHeader
            name="hello"
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="window-header"
          >
            <span>
              {props.data.name} {props.data.id} {props.data.index}
            </span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          <DefultContent />
        </Window>
      </Wrapper>
    </div>
  );
}
