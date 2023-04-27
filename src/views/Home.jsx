import React, { useState, useEffect, useRef } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import useStore from "../store";
import { styleReset, List, ListItem, Divider } from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)

import TaskBar from "../components/TaskBar";

import Desktop from "../components/desktop/Desktop";
import "../main.css";

const Home = () => {
  const DesktopRef = useRef(null);

  const Lisner = () => {
    console.log(DesktopRef.current.offsetWidth)
    useStore.setState({
      DesktopSize: [
        DesktopRef.current.offsetWidth,
        DesktopRef.current.offsetHeight,
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
    <div>
      <ThemeProvider theme={original}>
        <Desktop Dref={DesktopRef} />
        <TaskBar />
      </ThemeProvider>
    </div>
  );
};

export default Home;
