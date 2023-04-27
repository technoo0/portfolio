import "./window.css";
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
  .max-icon {
    display: inline-block;
    font-size: 16px;
    width: 12px;
    height: 10px;
    margin-left: -1px;
    margin-top: -1px;

    position: absolute;

    border-top: solid 4px black;
    border-left: solid 2px black;
    border-right: solid 2px black;
    border-bottom: solid 2px black;
  }
  .max-icon:span {
  }
  .min-icon {
    display: inline-block;
    font-size: 16px;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;

    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: black;
    }

    &:after {
      height: 4px;
      width: 100%;
      left: 0px;
      top: 85%;
      transform: translateY(-50%);
    }
  }
  .window {
    min-width: 400px;
    min-height: 300px;
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
  //----------------------------------- resize functions -------------------------------
  const windowRef = useRef();
  const resizeHandel = useRef();
  const [resizePostion, setResizePostion] = useState({ x: 0, y: 0 });
  const [resizeState, setResizeState] = useState("off");
  const [windowSize, setWindowSize] = useState({ width: props.data.width, height: props.data.hight });
  const [initwindowSize, setinitWindowSize] = useState({
    width: props.data.width,
    height: props.data.hight,
  });
  useEffect(() => {

    if (windowSize.width > window.outerWidth) {
      setWindowSize({
        width: window.outerWidth,
        height: windowSize.height
      })
    }

    if (windowSize.height > window.outerHeight) {
      setWindowSize({
        width: windowSize.width,
        height: window.outerHeight
      })
    }
  }, [])

  const ResizeMouseDown = (e) => {
    if (!IsMax) {

      setResizePostion({ x: e.x, y: e.y });
      setResizeState("on");
    }
  };
  const ResizeTouchown = (e) => {
    if (!IsMax) {
      setResizePostion({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      setResizeState("on");
    }
  };

  const ResizeMouseUp = () => {

    setResizeState("off");
    setinitWindowSize(windowSize);
  };


  const ResizeMouseMove = (e) => {
    let newWidth = initwindowSize.width + (e.x - resizePostion.x)
    let newHight = initwindowSize.height + (e.y - resizePostion.y)
    if (newWidth < props.data.width && props.data.width > window.outerWidth) {
      newWidth = props.data.width
    }
    if (newWidth > window.outerWidth) {
      newWidth = window.outerWidth
    }

    if (newHight < props.data.hight && props.data.hight > window.outerHeight) {
      newHight = props.data.hight
    }
    if (newHight > window.outerHeight) {
      newHight = window.outerHeight
    }

    if (resizeState == "on") {
      setWindowSize((c) => ({
        width: newWidth,
        height: newHight,
      }));
    }
  };
  const ResizTouchMove = (e) => {
    let newWidth = initwindowSize.width + (e.touches[0].clientX - resizePostion.x)
    let newHight = initwindowSize.height + (e.touches[0].clientY - resizePostion.y)
    if (newWidth < props.data.width && props.data.width > window.outerWidth) {
      newWidth = props.data.width
    }
    if (newWidth > window.outerWidth) {
      newWidth = window.outerWidth
    }

    if (newHight < props.data.hight && props.data.hight > DSize[1]) {
      newHight = props.data.hight
    }
    if (newHight > DSize[1]) {
      newHight = DSize[1]
    }

    if (resizeState == "on") {
      setWindowSize((c) => ({
        width: newWidth,
        height: newHight,
      }));
    }


  };

  //----------------------------------- resize useEffect -------------------------------
  useEffect(() => {
    //get the ref of the resize handel
    resizeHandel.current =
      windowRef.current.children[windowRef.current.children.length - 1];

    resizeHandel.current.addEventListener("mousedown", ResizeMouseDown);
    resizeHandel.current.addEventListener("touchstart", ResizeTouchown);
    window.addEventListener("mouseup", ResizeMouseUp);
    window.addEventListener("touchend", ResizeMouseUp);
    window.addEventListener("mousemove", ResizeMouseMove);
    window.addEventListener("touchmove", ResizTouchMove);

    return () => {
      resizeHandel.current.removeEventListener("mousedown", ResizeMouseDown);
      resizeHandel.current.removeEventListener("touchstart", ResizeTouchown);
      window.removeEventListener("mouseup", ResizeMouseUp);
      window.removeEventListener("touchend", ResizeMouseUp);
      window.removeEventListener("mousemove", ResizeMouseMove);
      window.removeEventListener("touchmove", ResizTouchMove);
    };
  }, [
    resizeState,
    setResizeState,
    resizePostion,
    setResizePostion,
    setWindowSize,
    windowSize,
    initwindowSize,
    setinitWindowSize,
  ]);

  //----------------------------------- Index and Move functions -------------------------------

  const DSize = useStore((state) => state.DesktopSize);
  const spwanMargin = useStore((state) => state.spwanMargin);
  const [IconPos, setIconPos] = useState([
    (DSize[0] / 2) - (windowSize.width / 2),
    (DSize[1] / 2) - (windowSize.height / 2),
  ]);
  useEffect(() => {
    setIconPos([IconPos[0] + spwanMargin, IconPos[1] + spwanMargin]);
    // console.log(IconPos, spwanMargin);
  }, []);

  useEffect(() => {
    if (IconPos[0] < 0) {
      setIconPos([0, IconPos[1]])
    }
    // if (IconPos[0] + windowSize.height > window.outerHeight) {
    //   setIconPos([window.outerHeight - (windowSize.height), IconPos[1]])
    // }
    if (IconPos[1] < 0) {
      setIconPos([IconPos[1], 0])
    }
    // if (IconPos[1] + windowSize.width > window.outerWidth) {
    //   setIconPos([window.outerWidth - windowSize.width, IconPos[1]])
    // }
  }, [IconPos, windowSize])
  const windowsStack = useStore((state) => state.windowsStack);
  const maxIndex = useStore((state) => state.maxIndex);

  const IconRef = useRef();
  const [CouserPos, setCourserPos] = useState([0, 0]);
  const [MosueDown, setMosueDown] = useState(false);

  const CloseCurrentWindow = () => {
    const CloseWindow = useStore.getState().CloseWindow;
    CloseWindow(props.data.id);
  };

  const MinmizeCurrentWindow = () => {
    const MinmizeWindow = useStore.getState().MinmizeWindow;
    MinmizeWindow(props.data.id);
  };
  const [IsMax, setIsMax] = useState(false);
  const MaxmizeCurrentWindow = () => {
    const DesktopSize = useStore.getState().DesktopSize;
    if (!IsMax) {
      setIsMax(true);
      setinitWindowSize({ width: DesktopSize[0], height: DesktopSize[1] });
      setWindowSize({ width: DesktopSize[0], height: DesktopSize[1] });
      setIconPos([0, 0]);
    } else {
      setIsMax(false);
      let newWidth = props.data.width
      let newHight = props.data.hight

      if (newWidth > window.outerWidth) {
        newWidth = window.outerWidth
      }


      if (newHight > DSize[1]) {
        newHight = DSize[1]
      }
      setinitWindowSize({ width: newWidth, height: newHight });
      setWindowSize({ width: newWidth, height: newHight });
      setIconPos([
        (DSize[0] / 2) - (newWidth / 2),
        (DSize[1] / 2) - (newHight / 2),
      ]);
    }
  };

  const onMouseDown = (event) => {
    const MoveToTop = useStore.getState().MoveToTop;

    if (props.data.index != maxIndex - 1) {
      MoveToTop(props.data.id);
    }

    setCourserPos([event.nativeEvent.layerX, event.nativeEvent.layerY]);
    if (
      event.target.attributes.name &&
      event.target.attributes.name.value == "hello"
    ) {
      setMosueDown(true);
    }
  };
  const onTouchStart = (event) => {
    const MoveToTop = useStore.getState().MoveToTop;

    if (props.data.index != maxIndex - 1) {
      MoveToTop(props.data.id);
    }
    // console.log("touch down", event)
    const elePos = event.target.getBoundingClientRect()

    setCourserPos([event.touches[0].pageX - elePos.x, event.touches[0].pageY - elePos.y]);
    if (
      event.target.attributes.name &&
      event.target.attributes.name.value == "hello"
    ) {
      setMosueDown(true);
    }
  }

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

  const onTouchMove = (event) => {
    if (event.target.attributes.name) {
      if (MosueDown && event.target.attributes.name.value == "hello") {
        // console.log(event.target.getBoundingClientRect())
        // console.log(event)
        onDragEnd(event);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [setMosueDown]);

  const onDragEnd = (event) => {
    const DesktopSize = useStore.getState().DesktopSize;
    // console.log(DesktopSize);
    var newPos;
    if (event.pageX) {

      newPos = [event.pageX - CouserPos[0], event.pageY - CouserPos[1]];
    } else {
      newPos = [event.touches[0].pageX - CouserPos[0], event.touches[0].pageY - CouserPos[1]];
    }
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
  //----------------------------------- Functions End -------------------------------
  return (
    <div
      ref={IconRef}
      draggable={false}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        ...windowSize,
        position: "absolute",
        top: IconPos[1],
        left: IconPos[0],
        zIndex: props.data.index,
        display: props.data.minimized ? "none" : "",
      }}
    >
      <Wrapper style={{ height: "inherit" }}>
        <Window
          resizable={!IsMax}
          ref={windowRef}
          className="window"
          style={{ ...windowSize, minHeight: 100, minWidth: 100 }}
        >
          <WindowHeader
            active={props.data.index == maxIndex - 1}
            name="hello"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            className="window-header"
          >
            <span>{props.data.name}</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={MinmizeCurrentWindow}
                style={{ marginRight: "5px" }}
              >
                <span className="min-icon" />
              </Button>
              <Button
                onClick={MaxmizeCurrentWindow}
                style={{ marginRight: "5px" }}
              >
                <span className="max-icon" />
              </Button>
              <Button onClick={CloseCurrentWindow}>
                <span className="close-icon" />
              </Button>
            </div>
          </WindowHeader>
          {/* <DefultContent /> */}
          {props.children}
        </Window>
      </Wrapper>
    </div>
  );
}
