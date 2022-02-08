import React from "react";
import { WindowContent, Button, Toolbar, Panel } from "react95";

export default function DefultContent(props) {
  return (
    <div>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm" disabled>
          Save
        </Button>
      </Toolbar>
      <WindowContent>
        <p>
          When you set &quot;resizable&quot; prop, there will be drag handle in
          the bottom right corner (but resizing itself must be handled by you
          tho!)
        </p>
      </WindowContent>
      {/* <Panel variant="well" className="footer">
        Put some useful informations here
      </Panel> */}
    </div>
  );
}
