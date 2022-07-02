import React from "react";
import { WindowContent, Button, Toolbar, Cutout } from "react95";

export default function AboutMe(props) {
  return (
    <div style={{ height: "100%" }}>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm">
          Save
        </Button>
      </Toolbar>
      <WindowContent style={{ height: "100%" }}>
        <Cutout style={{ height: "80%", backgroundColor: "white" }}>
          <div>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
          </div>
        </Cutout>
      </WindowContent>
      {/* <Panel variant="well" className="footer">
        Put some useful informations here
      </Panel> */}
    </div>
  );
}
