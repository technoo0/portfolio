import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import mycomputerIcon from "../../assets/icons/mycomputerIcon.png";
import Trash from "../../assets/icons/trashIcon.png";
const ResponsiveGridLayout = WidthProvider(Responsive);
import Icon from "./Icon";
export default function Desktop() {
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
    <ResponsiveGridLayout
      style={{
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
      cols={{ lg: 20, md: 10, sm: 8, xs: 6, xxs: 4 }}
      rowHeight={60}
      maxRows={Math.floor(window.innerHeight / 70) - 1}
    >
      {Items.map((item, index) => (
        <div key={String(index)}>
          <Icon name={item.name} logo={item.logo} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}
