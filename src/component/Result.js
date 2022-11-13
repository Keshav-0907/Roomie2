import React from 'react'
import { Link } from 'react-router-dom'

const Result = () => {
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

          {/* signup-login */}
          <div className='reg-bt'>
              <Link to='/Signup' className='reg-bt'><button className='bt-1'> Sign up</button></Link>
              <Link to='/Log' className='reg-bt'><button className='bt-1'> Log In</button></Link>

          </div>
      </nav>

      <div className='result-main'>
        <div className='result-box'>
        <div className='result-cont'>
                <img className='result-img' src='https://cdn-icons-png.flaticon.com/512/3135/3135768.png' alt='err' />
                <h3 className='result-op'> Name : <span className='result-op2'>Sumit Sharma</span> </h3>
                <h3 className='result-op'>Phone number : <span className='result-op2'>+91 1122334455</span> </h3>
                <h3 className='result-op'>Prefered Gender : <span className='result-op2'> Any </span> </h3>
                <h3 className='result-op'> Prefered Occupation : <span className='result-op2'> Student </span> </h3>
                <h3 className='result-op'>Other preferances : <span className='result-op2'> Vegetarian </span></h3>
                <h3 className='result-op'> College : ABESIT, <span className='result-op2'> AKG, Ghaziabad </span> </h3>
            </div>

            <div className='result-cont'>
                <img className='result-img' src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='err' />
                <h3 className='result-op'> Name : <span className='result-op2'>Rahul Singh</span> </h3>
                <h3 className='result-op'>Phone number : <span className='result-op2'>+91 9988776655</span> </h3>
                <h3 className='result-op'>Prefered Gender : <span className='result-op2'> Any </span> </h3>
                <h3 className='result-op'> Prefered Occupation : <span className='result-op2'> Student </span> </h3>
                <h3 className='result-op'>Other preferances : <span className='result-op2'> Non-Smoker </span></h3>
                <h3 className='result-op'> College : ABESIT, <span className='result-op2'>ABESIT, Ghaziabad</span> </h3>
            </div>

            <div className='result-cont'>
                <img className='result-img' src='https://cdn-icons-png.flaticon.com/512/708/708885.png' alt='err' />
                <h3 className='result-op'> Name :<span className='result-op2'> Shruti Malik</span>  </h3>
                <h3 className='result-op'>Phone number : <span className='result-op2'>+91 9988778899</span> </h3>
                <h3 className='result-op'>Prefered Gender : <span className='result-op2'>Male</span> </h3>
                <h3 className='result-op'> Prefered Occupation : <span className='result-op2'>Student</span> </h3>
                <h3 className='result-op'>Other preferances : <span className='result-op2'>Early Bird </span></h3>
                <h3 className='result-op'> College : ABESIT, <span className='result-op2'>IIT Delhi</span> </h3>
            </div>

            <div className='result-cont'>
                <img className='result-img' src='https://cdn-icons-png.flaticon.com/512/4140/4140047.png' alt='err' />
                <h3 className='result-op'> Name : <span className='result-op2'>Yana</span> </h3>
                <h3 className='result-op'>Phone number : <span className='result-op2'>+91 1144345554</span> </h3>
                <h3 className='result-op'>Prefered Gender : <span className='result-op2'> Male </span> </h3>
                <h3 className='result-op'> Prefered Occupation : <span className='result-op2'> Student </span> </h3>
                <h3 className='result-op'>Other preferances : <span className='result-op2'> Vegetarian </span></h3>
                <h3 className='result-op'> College : ABESIT, <span className='result-op2'> IMS, Ghaziabad </span> </h3>
            </div>

        </div>

        <Link to='/Log' className='reg-bt1'> <button className='bt-1'> Next ... </button></Link>
      </div>
      
      
      </>
  )
}

export default Result