import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PasswordInput from '../components/PasswordInput'
import { emailValidator } from '../utils/email_validator'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()

    if (!emailValidator(email)) {
      setError('Please enter a valid email address')
      return
    }
    if (!password) {
      setError('Please enter a password')
      return
    }

    setError('')
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-32'>
        <div className='border-[1.5px] rounded px-8 py-11 w-96 shadow'>
          <form onSubmit={handleLogin} >
            <h1 className='text-2xl font-medium'>Login</h1>

            <div className='flex flex-col mt-8'>
              <input type="email" placeholder='Email' className='input-box focus:outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />
              <PasswordInput placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} />
              
              {
                error && <p className='mt-2 text-red-500'>{error}</p>
              }

              <button className='px-3 py-1 mt-5 text-lg text-white rounded-sm bg-primary'>Login</button>
            </div>

            <div className='flex mt-5 gap-x-2'>
              <p>Not registered yet?</p>
              <Link to='/signUp' className='font-medium underline text-primary'>Create an account</Link>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login