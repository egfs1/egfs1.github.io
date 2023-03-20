import { Component } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import './NavbarStyles.css'

export class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <>
                <nav>
                    <div className="content">
                        <a href="https://github.com/egfs1">
                            <AiFillGithub className='icon'/>
                        </a>
    
                        <div id="navbar-list" className={this.state.clicked ? "#navbar-list active" : "#navbar-list"} >
                            <ul>
                                <li>
                                    <a className="active" href="#Home">Home</a>
                                </li>
                                <li>
                                    <a href="#About">About</a>
                                </li>
                            </ul>
                        </div>
    
                        <div id="mobile" onClick={this.handleClick}>
                            <i children={this.state.clicked ? <FiX className='icon'/> : <FiMenu className='icon'/>}/>
                        </div>
                    </div>
                </nav>
            </>
        )

    }
}