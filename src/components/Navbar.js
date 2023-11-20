import React from 'react';

export default function Navbar() {
    return(
        <div className='navbar-main-container'>
            <div className='navbar-logo'>
                <img src="raydium lab logo 3.png" />
            </div>
            <div className='navbar-links'>
                <ul>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#team'>Team</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}