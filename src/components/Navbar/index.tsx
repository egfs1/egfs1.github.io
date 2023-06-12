import './style.scss'
import { useState, useEffect } from 'react'
import { translate } from '../../services/i18n';
import { HiOutlineSun, HiMoon } from 'react-icons/hi'

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
                        <HiOutlineSun className="sun-icon"/>
                        <HiMoon className="moon-icon"/>
                    </label>
                </div>
                <div className="navigation-wrapper" >
                    <div className="navigation">
                        <a className="navigation-item" href="#start">{translate('navbar.home')}</a>
                        <a className="navigation-item" href="#about_me">{translate('navbar.about_me')}</a>
                        <a className="navigation-item" href="#my_projects">{translate('navbar.my_projects')}</a>
                        <a className="navigation-item" href="#contact_me">{translate('navbar.contact_me')}</a>
                    </div>
                    <div className='languages'>
                        <a className="language-flag" href="?lang=pt-BR">
                            <img className="icon" src='/images/brazil-flag.svg'/>
                        </a>
                        <a className="language-flag" href="?lang=en-US">
                            <img className="icon" src="/images/united-states-flag.svg"/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}