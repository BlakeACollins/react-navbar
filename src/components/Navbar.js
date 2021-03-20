import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <div className='navbar'>
                <div className='nav-container'>
                    <NavLink exact to='/' className='nav-logo'>
                        EvergreenDevelopment
                    </NavLink>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink exact to='/' 
                            activeClassName='active' 
                            className='nav-links'
                            onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/about' activeClassName='active' className='nav-links' onClick={handleClick}>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/services' activeClassName='active' className='nav-links' onClick={handleClick}>
                                Services
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/projects' activeClassName='active' className='nav-links' onClick={handleClick}>
                                Projects
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/experience' activeClassName='active' className='nav-links' onClick={handleClick}>
                                Experience
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/contact' activeClassName='active' className='nav-links' onClick={handleClick}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className='nav-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faEllipsisV} />
                    </div>
                </div>  
            </div>  
        </>
    )
}

export default Navbar
