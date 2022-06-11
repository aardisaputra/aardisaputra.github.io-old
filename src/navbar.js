import React from "react";
import "./Navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import logoImg from "./media/logo.jpeg";

function Navbar() {
  return (
    <div className="navBar">
      <div className="leftBtn">
        <IconButton>
          <HomeOutlinedIcon fontSize="inherit" className="homeBtn" />
        </IconButton>
      </div>

      <img src={logoImg} className="logoImg" alt="logo" />

      <div className="rightBtn">
        <IconButton>
          <MenuIcon fontSize="inherit" className="menuBtn" />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
