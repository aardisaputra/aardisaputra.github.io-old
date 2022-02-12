import React from 'react';
import './body.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function body() {
    return (
        <div className='landingPage'>
            <div className='introText'>
                <h1>Hi, my name is Austin</h1>
            </div>

            <div className='btmText'>
                <h2>I am a</h2>
                <h2>
                    <div className='textWrapper'>
                        <div className='box1'>developer</div>
                        <div className='box2'>student</div>
                        <div className='box3'>innovator</div>
                        <div className='box4'>thinker</div>
                    </div>
                </h2>
            </div>

            <div className='arrow'>
                <KeyboardArrowDownOutlinedIcon fontSize='large'/>
            </div>

            <div className='filler'>
                
            </div>
        </div>
    )
}

export default body;