import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Home from './components/Home'
import Slider from './components/Slider'

function App() {


  return (
    <>
    <Navbar  />
    
      <Routes>
        
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
