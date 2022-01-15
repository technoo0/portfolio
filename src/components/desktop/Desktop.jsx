import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);
import Icon from "./Icon";
export default function Desktop() {
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
      cols={{ lg: 30, md: 20, sm: 15, xs: 7, xxs: 5 }}
      rowHeight={45}
      maxRows={Math.floor(window.innerHeight / 50) - 2}
    >
      <div key="a">
        <Icon />
      </div>
      <div key="b">
        <Icon />
      </div>
      <div key="c">
        <Icon />
      </div>
      <div key="d">
        <Icon />
      </div>
      <div key="e">
        <Icon />
      </div>
      <div key="f">
        <Icon />
      </div>
    </ResponsiveGridLayout>
  );
}
