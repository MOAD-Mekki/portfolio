import './Nav.css'
import Me from '/public/graphics/Me.JPG'
import Dark from '/public/graphics/dark-mode.svg'
import Light from '/public/graphics/light-mode.svg'
import { useState } from 'react'

export default function Nav({darkMode, setDarkMode}) {
    function togglekMode() {
        setDarkMode(prev => !prev)
    }
    return(
        <div className="nav-div" >
            <div className="nav-cont">
                <img src={Me} alt="picture" />
                <h1 className='title'>Moad Mekki</h1>
                <img 
                className='mode' 
                src={darkMode? Dark : Light} 
                alt='toggle mode'
                onClick={togglekMode} ></img>
            </div>
        </div>
    );
}