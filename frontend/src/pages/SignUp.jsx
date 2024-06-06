import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import PasswordInput from '../components/PasswordInput'
import { Link } from 'react-router-dom'
import { emailValidator } from '../utils/email_validator'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      setError('All fields are required')
      return
    }
    if (!emailValidator(email)) {
      setError('Please enter valid email address')
      return
    }
    setError('')

    // SignUp API call
  }
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center mt-32'>
        <div className='border-[1.5px] rounded px-8 py-11 w-96 shadow'>
          <form onSubmit={handleSignUp} >
            <h1 className='text-2xl font-medium'>SignUp</h1>

            <div className='flex flex-col mt-8'>
              <input type="text" placeholder='Name' className='input-box focus:outline-none' onChange={(e) => setName(e.target.value)}/>
              <input type="email" placeholder='Email' className='mt-5 input-box focus:outline-none' onChange={(e) => setEmail(e.target.value)}/>
              <PasswordInput placeholder={'Password'} type={'password'} onChange={(e) => setPassword(e.target.value)} />
              {error && <p className='mt-2 text-red-500'>{error}</p>}
              <button className='px-3 py-1 mt-5 text-lg text-white rounded-sm bg-primary'>Sign Up</button>
            </div>

            <div className='flex mt-5 gap-x-2'>
              <p>Already have an account? </p>
              <Link to='/login' className='font-medium underline text-primary'>Login</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp