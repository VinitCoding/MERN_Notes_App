import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PasswordInput from '../components/PasswordInput'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center mt-32'>
        <div className='border-[1.5px] rounded px-8 py-11 w-96 shadow'>
          <form onSubmit={handleLogin} >
          <h1 className='text-2xl font-medium'>Login</h1>

          <div className='flex flex-col mt-8'>
            <input type="email" placeholder='Email' className='input-box focus:outline-none' value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <PasswordInput placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='bg-primary text-white text-lg px-3 py-1 mt-5 rounded-sm'>Login</button>
          </div>

          <div className='flex gap-x-2 mt-5'>
            <p>Not registered yet?</p>
            <Link to='/signUp' className='font-medium text-primary underline'>Create an account</Link>
          </div>
        </form>

        </div>
      </div>
    </>
  )
}

export default Login