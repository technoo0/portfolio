import React, { useState, useEffect, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import mycomputerIcon from "../../assets/icons/mycomputerIcon.png";
import Trash from "../../assets/icons/trashIcon.png";
import Icon from "./Icon";
import useStore from "../../store";
const ResponsiveGridLayout = WidthProvider(Responsive);
import Window from "./windows/window";

import AppsList from "../../apps/appsList";


export default function Desktop({ Dref }) {

  const windowsStack = useStore((state) => state.windowsStack);
  const AddWindow = useStore((state) => state.AddWindow);
  useEffect(() => {
    AddWindow(AppsList[0].name, AppsList[0].content, AppsList[0].initalHight, AppsList[0].initalWidth)
  }, [])


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
              hight={item.initalHight}
              width={item.initalWidth}

            />
          </div>
        ))}
      </ResponsiveGridLayout>
      {windowsStack.map((item, key) => (
        <Window key={key} data={item}>
          <item.content {...item.props} />
        </Window>
      ))}
    </div>
  );
}
