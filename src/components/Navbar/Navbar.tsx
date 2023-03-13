import { FiGithub } from 'react-icons/fi'
import './NavbarStyles.css'

export function Navbar(){
    return(
        <>
            <nav>
                <div className="content">
                    <a href="https://github.com/egfs1">
                        <FiGithub className='logo'/>
                    </a>

                    <div>
                        <ul id='navbar-list'>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="index.html">About</a>
                            </li>
                            <li>
                                <a href="index.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}