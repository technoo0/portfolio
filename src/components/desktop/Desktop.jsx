import React, { useState, useEffect, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import mycomputerIcon from "../../assets/icons/mycomputerIcon.png";
import Trash from "../../assets/icons/trashIcon.png";
import Icon from "./Icon";
import useStore from "../../store";
const ResponsiveGridLayout = WidthProvider(Responsive);
import Window from "./windows/window";

import AppsList from "../../apps/appsList";
import Skills from "../../apps/Skills/Skills";
import AboutMe from "../../apps/AboutMe/AboutMe";

export default function Desktop({ Dref }) {
  const Componants = {
    Skills: <Skills />,
    AboutMe: <AboutMe />,
  };
  const windowsStack = useStore((state) => state.windowsStack);

  const Items = [
    {
      id: 0,
      name: "My Computer",
      logo: mycomputerIcon,
    },
    {
      id: 1,
      name: "Recycle Bin",
      logo: Trash,
    },
  ];
  return (
    <div
      ref={Dref}
      style={{ maxWidth: "100vw", minHeight: "95vh", maxHeight: "100vh" }}
    >
      <ResponsiveGridLayout
        style={{
          position: "absolute",
          maxWidth: "100vw",
          minHeight: "95vh",
          maxHeight: "100vh",
          borderWidth: "100px",
          // backgroundColor: "red",
        }}
        className="layout"
        useCSSTransforms={true}
        autoSize={false}
        //   allowOverlap={true}
        compactType={null}
        isBounded={true}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 14, md: 10, sm: 8, xs: 6, xxs: 4 }}
        rowHeight={75}
        maxRows={Math.floor(window.innerHeight / 70) - 1}
      >
        {AppsList.map((item, index) => (
          <div key={String(index)}>
            <Icon
              name={item.name}
              logo={item.logo}
              id={item.id}
              content={item.content}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
      {windowsStack.map((item, key) => (
        <Window key={key} data={item}>
          <item.content />
          ss
        </Window>
      ))}
    </div>
  );
}
