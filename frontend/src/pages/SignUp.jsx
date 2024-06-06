import React from 'react'
import Navbar from '../components/Navbar'
import PasswordInput from '../components/PasswordInput'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center mt-32'>
        <div className='border-[1.5px] rounded px-8 py-11 w-96 shadow'>
          <form onSubmit={() => { }} >
            <h1 className='text-2xl font-medium'>SignUp</h1>

            <div className='flex flex-col mt-8'>
              <input type="text" placeholder='Name' className='input-box focus:outline-none' />
              <input type="email" placeholder='Email' className='input-box focus:outline-none mt-5' />
              <PasswordInput placeholder={'Password'} type={'password'} />
              <button className='bg-primary text-white text-lg px-3 py-1 mt-5 rounded-sm'>Sign Up</button>
            </div>

            <div className='flex gap-x-2 mt-5'>
              <p>Already have an account? </p>
              <Link to='/login' className='font-medium text-primary underline'>Login</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp