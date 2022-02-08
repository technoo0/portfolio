import { useState, useEffect, useRef } from "react";

export const useContextMenu = () => {
  const ElementRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const OnContextMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
  };
  const onClickAway = (e) => {
    if (!ElementRef.current.contains(e.target)) {
      if (showMenu) {
        e.preventDefault();
        setShowMenu(false);
      }
    }
  };
  useEffect(() => {
    ElementRef.current.addEventListener("contextmenu", OnContextMenu);
    window.addEventListener("mousedown", onClickAway);

    return () => {
      ElementRef.current.removeEventListener("contextmenu", OnContextMenu);
      window.removeEventListener("mousedown", onClickAway);
    };
  }, [showMenu, setShowMenu]);
  return [ElementRef, showMenu];
};
