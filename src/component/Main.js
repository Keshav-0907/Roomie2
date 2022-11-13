import React from 'react'
import { Link } from "react-router-dom"
import Log from './Log'


const home = () => {
  return (

    <>
    <nav className='main-nav'>
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

          {/* signup-login */}
          <div className='reg-bt'>
              <Link to='/Signup' className='reg-bt' ><button className='bt-1'> Sign up</button></Link>
              <Link to='/Log' className='reg-bt'><button className='bt-1'> Log In</button></Link>
              
          </div>
    </nav>

        <div className='main-cont'>
        <h1> Please fill up this short form </h1>
            <div className='box'>
                
                <form>

                    <h3> 1. Your prefered gender(s) is   </h3>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1"> Male </label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                        <label for="vehicle2"> Female </label><br/>

                    <h3> 2. You will prefer a   </h3>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html"> Student </label><br/>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                        <label for="css"> Job Employee </label><br/>
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                        <label for="javascript"> Any </label>

                        
                    <h3> 3. Select your preferances :    </h3>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1"> Early Bird </label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                        <label for="vehicle2"> Smoker </label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                        <label for="vehicle2"> Non-Smoker </label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                        <label for="vehicle2"> Vegetarian </label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                        <label for="vehicle2"> Non-Vegetarian </label><br/>

                    <h3> 4. Enter your university name </h3> 
                    <input type='text' className='inp' placeholder='College name'></input>

                    <div className='bt-main'>
                    <Link to='/Signup' className='reg-bt2' ><button className='bt-1'> Submit </button></Link>
                    </div>                    

                </form>
                </div>
            </div>  
    </>
  )
}

export default home