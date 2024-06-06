import React from 'react'
import ProfileInfo from './cards/ProfileInfo'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-6 py-2 bg-white drop-shadow'>
            <h2 className='py-2 text-xl font-medium text-black'>Notes</h2>

            <ProfileInfo />
        </div>
    )
}

export default Navbar