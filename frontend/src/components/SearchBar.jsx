import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {
  return (
      <div className='flex items-center px-4 mt-2 rounded-md w-96 bg-slate-100 '>
          <input type="text" placeholder='Search Notes' className='w-full text-sm bg-transparent py-[11px] outline-none' value={value} onChange={onChange} />

          {
              value && <IoMdClose className='mr-3 text-xl cursor-pointer text-slate-500 hover:text-black' onClick={onClearSearch} />
          }
          <FaMagnifyingGlass className='transition-all duration-75 ease-linear cursor-pointer text-slate-400 hover:text-slate-700' onClick={handleSearch} />
    </div>
  )
}

export default SearchBar