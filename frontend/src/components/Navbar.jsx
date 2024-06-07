import React, { useState } from 'react'
import ProfileInfo from './cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
    const [querySearch, setQuerySearch] = useState('')
    const navigate = useNavigate
    const onLogout = () => {
        navigate('/login')
    }
    const handleSearch = () => {

    }
    const clearSearch = () => {
        setQuerySearch('')
    }

    return (
        <div className='flex items-center justify-between px-6 py-3 bg-white drop-shadow'>
            <h2 className='py-2 text-xl font-medium text-black'>Notes</h2>
            <SearchBar value={querySearch} onChange={({ target }) => { setQuerySearch(target.value) }} onClearSearch={clearSearch} handleSearch={handleSearch}/>
            <ProfileInfo onLogout={onLogout}/>
        </div>
    )
}

export default Navbar