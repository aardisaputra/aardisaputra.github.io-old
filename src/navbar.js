import React from 'react';
import "./navbar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import logoImg from "./media/logo.jpeg";

function navbar() {
    return (
        <div className='navBar'>
            <IconButton className='leftBtn'>
                <HomeOutlinedIcon fontSize='inherit' className='homeBtn'/>
            </IconButton>

            <img src={logoImg} className='logoImg'/>

            <IconButton className='rightBtn'>
                <MenuIcon fontSize='inherit' className='menuBtn'/>
            </IconButton>
        </div>
    )
}

export default navbar