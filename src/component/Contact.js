import React from 'react'
import {Link} from "react-router-dom"

const Contact = () => {
  return (

    <><nav className='main-nav'>
      <div className='logo'>
        <h2>Roomie</h2>
      </div>

      <div className='menu-link'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>What we do ?? </Link></li>
          <li><Link to='/Contact'>Contact Us</Link></li>
          <li><Link to='/Main'>Find your Roomate </Link></li>
        </ul>

      </div>

      {/* signup-login */}
      <div className='reg-bt'>
        <button className='bt-1'>Sign up</button>
        <button className='bt-1'>Log In</button>

      </div>
    </nav><h1>Contact</h1></>

  )
}

export default Contact