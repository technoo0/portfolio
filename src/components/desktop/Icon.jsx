import React from "react";

export default function Icon(props) {
  return (
    <div
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
          fontSize: "15px",
          color: "white",
          textAlign: "center",
        }}
      >
        {props.name}
      </h1>
    </div>
  );
}
