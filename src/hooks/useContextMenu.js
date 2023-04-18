import { useState, useEffect, useRef } from "react";


export const useContextMenu = () => {

  const ElementRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const OnContextMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
  };


  const onClickAway = (e) => {
    if (ElementRef.current && !ElementRef.current.contains(e.target)) {
      if (showMenu) {
        e.preventDefault();
        setShowMenu(false);
      }
    }
  };

  //touch screen handel

  const [time, setTime] = useState(new Date().getTime())
  const [isMouseDown, setIsMouseDown] = useState(false)
  const touchStart = () => {
    setIsMouseDown(true)
    setTime(new Date().getTime())
  }
  const touchEnd = () => {
    setIsMouseDown(false)
  }

  const CheckTime = () => {
    if (isMouseDown) {
      var now = new Date().getTime();
      var timesince = now - time;

      if ((timesince > 500)) {

        setShowMenu(true);
      }

    }
  }

  useEffect(() => {
    const interval = setInterval(CheckTime, 100)
    return () => {
      clearInterval(interval)
    }

  }, [isMouseDown, time])

  useEffect(() => {
    if (ElementRef.current) {

      ElementRef.current.addEventListener("contextmenu", OnContextMenu);

      window.addEventListener("mousedown", onClickAway);

      ElementRef.current.addEventListener("touchstart", touchStart)
      ElementRef.current.addEventListener("touchend", touchEnd)
    }

    return () => {
      if (ElementRef.current) {
        ElementRef.current.removeEventListener("contextmenu", OnContextMenu);
        ElementRef.current.removeEventListener("touchstart", touchStart);
        ElementRef.current.removeEventListener("touchend", touchEnd);
      }
      window.removeEventListener("mousedown", onClickAway);
    };
  }, [showMenu, setShowMenu]);
  return [ElementRef, showMenu];
};
