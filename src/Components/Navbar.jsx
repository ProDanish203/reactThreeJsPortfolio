import React from 'react'
import searchIcon from "../img/search.png"
import Logo from "../img/logo.png"


export const Navbar = () => {
  return (
    <header className='header'>

        <nav className='navbar'>
            <div className="left">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <ul className="nav-list">
                    <li className='nav-list-item'>Home</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Works</li>
                    <li className='nav-list-item'>Contacts</li>
                </ul>
            </div>

            <div className="right">
                <img src={searchIcon} alt="" className='searchIcon'/>
                <button className='btn'>Hire Now</button>
            </div>

        </nav>

    </header>
  )
}
