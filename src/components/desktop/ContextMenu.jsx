import React from "react";
import { List, ListItem, Bar, Divider } from "react95";
export default function ContextMenu(props) {
  return (
    <div style={{ position: "absolute", top: 10, left: 60 }}>
      <List style={{ zIndex: 10 }}>
        <ListItem primary size="sm">
          View
        </ListItem>
        <Divider />
        <ListItem size="sm">Paste</ListItem>
        <ListItem size="sm">Paste Shortcut</ListItem>
        <ListItem size="sm">Undo Copy</ListItem>
        <Divider />
        <ListItem size="sm">Properties</ListItem>
      </List>
    </div>
  );
}
