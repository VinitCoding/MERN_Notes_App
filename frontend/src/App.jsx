import React from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/dashboard' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App