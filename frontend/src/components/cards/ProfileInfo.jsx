import React from 'react'
import { initialName } from '../../utils/helper.js'

const ProfileInfo = ({onLogout}) => {
    return (
        <div className='flex items-center gap-x-3'>
            <div className='flex items-center justify-center w-12 h-12 font-medium rounded-full text-slate-950 bg-slate-100'>{initialName("John Williams")}</div>

            <div>
                <p className='text-sm font-medium'>William</p>
                <button className='text-sm underline text-slate-700'>Logout</button>
            </div>
        </div>
    )
}

export default ProfileInfo