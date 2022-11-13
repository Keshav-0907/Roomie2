import React, { useState } from 'react'
import Navbar from './component/Navbar'
import {Route, Routes} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import Home from './component/home'
import Log from './component/Log'
import Contact from './component/Contact'
import Main from './component/Main'
import Signup from './component/Signup'
import Result from './component/Result'
import { getAuth, createUserWithEmailAndPassword, app } from "firebase/auth";


function App () {

  return (
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Log/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Main" element={<Main/>}/>
        <Route path='/Log' element={<Log/>}/>
        <Route path='/Result' element={<Result/>}/>

      </Routes>
      </BrowserRouter>
  )
}

export default App