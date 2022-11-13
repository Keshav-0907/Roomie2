import React from 'react'
import "./Navbar.css"
import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='logo'>
                <h3> Roomie </h3>
            </div>

            <div className='menu-link'>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='#services'>What we do ?? </Link></li>
                <li><Link to='/Contact'>Contact Us</Link></li>
                <li><Link to='/Main'>Find your Roomate </Link></li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Navbar