import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Home from './components/Home'
import Slider from './components/Slider'
import AddPhoto from './components/AddPhoto'
import ParentCard from './components/Cards'
import AnnouncementDetails from './components/AnnouncementDetails'
import AddAnnouncement from './components/AddAnnouncement'

function App() {


  return (
    <>
    <Navbar  />
    
      <Routes>
          <Route path='/addannonce' element={<AddPhoto />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/"  element={<ParentCard/>} />
          <Route path="/addcard"  element={<AddAnnouncement/>} />
            <Route path="/details/:id" element={<AnnouncementDetails />} />
      </Routes>
    </>
  )
}

export default App
