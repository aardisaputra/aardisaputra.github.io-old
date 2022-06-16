import React, { useState } from "react";
import "./Navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import logoImg from "./media/logo.jpeg";

import Menu from "./helper_class/Menu.js";
import Grid from "@material-ui/core/Grid";
import "./helper_class/Menu.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  const [visible, setVisible] = useState(false);

  var visibility = "hide";
  if (visible) {
    visibility = "show";
  }

  return (
    <div>
      <div
        id="translucent"
        className={visibility}
        onClick={() => {
          setVisible(!visible);
        }}
      ></div>
      <AppBar position="sticky">
        <div className="navBar">
          <div className="leftBtn"></div>

          <img src={logoImg} className="logoImg" alt="logo" />

          <div className="rightBtn">
            <IconButton
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <MenuIcon fontSize="inherit" className="menuBtn" />
            </IconButton>
          </div>

          <div id="flyoutMenu" className={visibility}>
            <h2
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <a href="#intro">About Me</a>
            </h2>
            <h2
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <a href="#projects">Projects</a>
            </h2>
            <h2
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <a href="#exp">Experience</a>
            </h2>
            <h2
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <a href="#contact">Contact</a>
            </h2>
          </div>
        </div>
      </AppBar>
    </div>
  );
}

export default Navbar;
