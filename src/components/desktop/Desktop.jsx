import React, { useState, useEffect, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import mycomputerIcon from "../../assets/icons/mycomputerIcon.png";
import Trash from "../../assets/icons/trashIcon.png";
import Icon from "./Icon";
import useStore from "../../store";
const ResponsiveGridLayout = WidthProvider(Responsive);
import Window from "./windows/window";

export default function Desktop() {
  const DesktopRef = useRef(null);

  const windowsStack = useStore((state) => state.windowsStack);
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
  const Items = [
    {
      name: "My Computer",
      logo: mycomputerIcon,
    },
    {
      name: "Recycle Bin",
      logo: Trash,
    },
  ];
  return (
    <div
      ref={DesktopRef}
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
        {Items.map((item, index) => (
          <div key={String(index)}>
            <Icon name={item.name} logo={item.logo} />
          </div>
        ))}
      </ResponsiveGridLayout>

      {windowsStack.map((item, key) => (
        <Window key={key} data={item} />
      ))}
    </div>
  );
}
