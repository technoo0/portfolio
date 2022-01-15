import React, { useRef, useEffect } from "react";
import Icon from "./Icon";
import useStore from "../../store";
export default function Desktop() {
  const DesktopRef = useRef(null);
  const Lisner = () => {
    useStore.setState({
      DesktopSize: [
        DesktopRef.current.offsetWidth,
        DesktopRef.current.offsetHeight - 40,
      ],
    });
  };
  useEffect(() => {
    Lisner();
    window.addEventListener("resize", Lisner);
    return () => {
      window.removeEventListener("resize", Lisner);
    };
  }, []);
  return (
    <div
      ref={DesktopRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        // backgroundColor: "red",
      }}
    >
      <Icon width={100} />
    </div>
  );
}
