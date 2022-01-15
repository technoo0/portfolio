import React from "react";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
} from "react95";
import logoIMG from "../assets/images/logo.png";

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  return (
    <Toolbar
      style={{
        background: "rgb(198, 198, 198)",
        borderColor:
          "rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10) rgb(254, 254, 254)",
        boxShadow:
          "rgb(223 223 223) 1px 1px 0px 1px inset, rgb(132 133 132) -1px -1px 0px 1px inset",
        justifyContent: "space-between",
        position: "fixed",
        left: 0,
        bottom: 0,
        height: "40px",
        width: "100%",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <Button
          onClick={() => setOpen(!open)}
          active={open}
          style={{ fontWeight: "bold" }}
        >
          <img
            src={logoIMG}
            alt="react95 logo"
            style={{ height: "20px", marginRight: 4 }}
          />
          Start
        </Button>
        {open && (
          <List
            style={{
              position: "absolute",
              left: "0",
              bottom: "100%",
            }}
            onClick={() => setOpen(false)}
          >
            <ListItem>
              <span role="img" aria-label="👨‍💻">
                👨‍💻
              </span>
              Profile
            </ListItem>
            <ListItem>
              <span role="img" aria-label="📁">
                📁
              </span>
              My account
            </ListItem>
            <Divider />
            <ListItem disabled>
              <span role="img" aria-label="🔙">
                🔙
              </span>
              Logout
            </ListItem>
          </List>
        )}
      </div>

      <TextField
        style={{ marginRight: 10 }}
        placeholder="Search..."
        width={150}
      />
    </Toolbar>
  );
}
