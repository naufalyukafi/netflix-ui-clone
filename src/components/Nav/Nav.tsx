import React, { useState, useEffect } from 'react'
import './Nav.css';

const Nav = () => {
    const [ isShow, setIsShow ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setIsShow(true);
            } else setIsShow(false);
        });
    }, []);

    return (
        <div className={`nav ${isShow && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="./images/netflix-logo.png" 
                alt="Netflix Logo" 
            />
            <img 
                className="nav__avatar"
                src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" 
                alt="Account Logo" 
            />
        </div>
    )
}

export default Nav
