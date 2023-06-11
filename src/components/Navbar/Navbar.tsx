import './NavbarStyles.scss'
import { useState, useEffect } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs' 

export function Navbar(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=> {
        document.querySelector("body")?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
    },[isDarkMode])

    function toggleDarkMode(){
        setIsDarkMode(!isDarkMode);
    }

    return(
        <div className='nav-wrapper'>
            <nav>
                <input className="menu-checkbox" id="menu-checkbox" type="checkbox" />
                <label htmlFor="menu-checkbox" className="menu-label"></label>
                <div className="toggle-dark-mode">
                    <input className="dark-mode-checkbox" id="dark-mode-checkbox" type="checkbox" onClick={toggleDarkMode}/>
                    <label htmlFor="dark-mode-checkbox" className="dark-mode-label">
                        <div className="sun-decoration"></div>
                        <div className="sun-decoration"></div>
                        <div className="sun-decoration"></div>
                        <div className="sun-decoration"></div>
                        <div className="sun-decoration"></div>
                        <div className="sun-decoration"></div>
                        <div className="sun-decoration"></div>
                        <div className="sun-decoration"></div>
                    </label>
                </div>
                <div className="navigation-wrapper" >
                    <div className="navigation">
                        <a className="navigation-item" href="#AboutMe">About me</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}