import React, { useEffect } from "react";
import useStore from "../../store";
import { useContextMenu } from "../../hooks/useContextMenu";
import ContextMenu from "./ContextMenu";
export default function Icon({ name, logo, content }) {
  const [ElementRef, showMenu] = useContextMenu();

  const AddWindow = useStore((state) => state.AddWindow);

  return (
    <div
      ref={ElementRef}
      onDoubleClick={() => AddWindow(name, content)}
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
