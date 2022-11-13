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
      
        
        
              <div className='hero-section'>

                  <div className='img-1'>
                    <img className='img' src="https://cdn-icons-png.flaticon.com/512/2247/2247877.png" alt="err"></img>
                  </div>

              <div className='text'>
                  <h3> Find <mark>  Like-Minded  </mark> Roommates </h3>
                  <Link to='/Main' className='reg-bt4'><button className='bt-2'> Get Started </button></Link>
                  
              </div>

              </div>

              <div className='choose-head'>
                  <h1 className='choose-head'> Why to choose Roomie ??</h1>
              </div>


              <div className='why-use'>


                  <div className='verified'>
                      <img className="choose-img" src="https://cdn-icons-png.flaticon.com/512/3912/3912007.png" alt="err"></img>
                      <h3 className='choose-1'> Verified Profiles </h3>
                      <p className='choose-text'>
                          We only allow users on this platform after proper verification of their profiles.
                      </p>
                  </div>

                  <div className='verified'>
                      <img className="choose-img" src="https://cdn-icons-png.flaticon.com/512/508/508250.png" alt="err"></img>
                      <h3 className='choose-1'> Find Roommate Match! </h3>
                      <p className='choose-text'>
                      Create your personal Roomie profile. Get started in a minute! Get specific with the criteria you desire such as personality, pets, neighboorhood, room details, and much more
                      </p>
                  </div>

                  <div className='verified'>
                      <img className="choose-img" src="https://cdn-icons-png.flaticon.com/512/5650/5650867.png" alt="err"></img>
                      <h3 className='choose-1'> Easy to use </h3>
                      <p className='choose-text'>
                          A very beginer friendly and easy user interface for ease of operation.
                      </p>
                  </div>
                  
              </div>

              <div className='why-use1'>


                <div className='verified'>
                    <img className="choose-img" src="https://cdn-icons-png.flaticon.com/512/3912/3912007.png" alt="err"></img>
                    <h3 className='choose-1'> Verified Profiles </h3>
                    <p className='choose-text'>
                        We only allow users on this platform after proper verification of their profiles.
                    </p>
                </div>

                <div className='verified'>
                    <img className="choose-img" src="https://cdn-icons-png.flaticon.com/512/508/508250.png" alt="err"></img>
                    <h3 className='choose-1'> Find Roommate Match! </h3>
                    <p className='choose-text'>
                    Create your personal Roomie profile. Get started in a minute! Get specific with the criteria you desire such as personality, pets, neighboorhood, room details, and much more
                    </p>
                </div>

                <div className='verified'>
                    <img className="choose-img" src="https://cdn-icons-png.flaticon.com/512/5650/5650867.png" alt="err"></img>
                    <h3 className='choose-1'> Easy to use </h3>
                    <p className='choose-text'>
                        A very beginer friendly and easy user interface for ease of operation.
                    </p>
                </div>

                </div>

               
                    <h1 className='choose-head'> What Roomie Do ?? </h1> 
           

              <div className='services'>
                 

                  <div className='services-text'>
                  <p>

                  FindMyRoom Helps People To Find A Roommate, Flatmate, Rent A Room Or Apartment, PG In Top Cities Of India. FindMyRoom Makes A Direct Connection Between Roommates Or Landlords With The Seekers.<br/>
                  <br></br>
                  We Want To Make Sure That You Have Complete Access To Everything We Have To Offer Without Those Annoying Upgrades. We Know Your Experience Will Be So Awesome That You Will Share Us And Recommend Us To Everyone You Know As We Grow. We Believe That Once You Use Findmyroom.In You'll Agree That It's The Best Roommate Finding Experience There Is. 
                  </p>
                  </div>

                    <img className='services-img' src='https://cdn-icons-png.flaticon.com/512/2247/2247877.png' alt='err'></img>
              </div>

              
          
          </>
  )
}

export default home