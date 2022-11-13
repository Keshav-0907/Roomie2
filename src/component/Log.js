import React from 'react'
import { Link } from 'react-router-dom'

const signup = () => {
  return (
    <><nav className='main-nav'>
      <div className='logo'>
        <h2>Roomie</h2>
      </div>

      <div className='menu-link'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='#services'>What we do ?? </Link></li>
          <li><Link to='/Contact'>Contact Us</Link></li>
          <li><Link to='/Main'>Find your Roomate </Link></li>
        </ul>
      </div>

      

      <div className='reg-bt'>
        <Link to='/Signup' className='reg-bt'> <button className='bt-1'> Sign Up </button>  </Link>
        <Link to='/Log' className='reg-bt'> <button className='bt-1'> Log In </button>  </Link>
      </div>
    </nav>

    {/* signup-login */}
    
    <div className='main-container'>     

      <div  className='input-1'>
        <h1> Log In </h1>
        <div>
            <input  className='inp' type="text" placeholder='Enter User ID'/>
          </div>   

          <div>
            <input  className='inp' type="password" placeholder='Enter Password'/>
          </div>

          <Link to='/' > <button className='bt-1'> Log In </button>  </Link> 
          <div className='if-reg'>
             Not Registered ??  <Link to='/Signup' > Sign Up </Link>
          </div>
      </div>

    </div>

      
      
      </>
  )
}

export default signup