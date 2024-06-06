import React, { useState } from 'react'
import { BiShowAlt } from "react-icons/bi";
import { GoEyeClosed } from "react-icons/go";

const PasswordInput = ({value ,onChange, placeholder}) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    const togglePassword = () => {
        setIsShowPassword(!isShowPassword)
    }
    return (
        <div className='flex items-center gap-x-2 justify-center border-[1.5px] pr-5 rounded mt-5'>

            <input value={value} type={isShowPassword ? 'text' : 'password'} placeholder={placeholder || 'Password'} className='w-full px-4 py-2 focus:outline-none' onChange={onChange}/>
            {
                isShowPassword ? (<BiShowAlt className='text-3xl text-primary cursor-pointer' onClick={() => togglePassword()} />) : (<GoEyeClosed className='text-2xl text-primary font-medium cursor-pointer' onClick={() => togglePassword()} />)
            }
        </div>
    )
}

export default PasswordInput