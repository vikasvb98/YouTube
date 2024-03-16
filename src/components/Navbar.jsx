import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between px-6 h-14 items-center bg-[#212121] opacity-95 sticky'>
      <div className='flex gap-8 items-center text-2xl text-white '>
        <div className='w-8 h-8 flex items-center justify-center
           ml-2 rounded-full cursor-pointer hover:bg-white'>
          <RxHamburgerMenu className='hover:text-black'/>
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <FaYoutube className='text-3xl text-red-600'/>
          <span className='text-xl font-medium '>YouTube</span>
        </div>
      </div>
      <div>
        <div className='flex items-center'>
          <input type="text" placeholder='Search'
          className='w-96 h-7 rounded-l-lg px-5 py-4'/>
          <button className='h-8 px-2 py-2 bg-slate-200 rounded-r-lg'>
            <FaSearch className='text-xl'/>
          </button> 
          <div className='w-8 h-8 flex items-center justify-center
           ml-2 bg-white rounded-full cursor-pointer'>
          <MdKeyboardVoice className='text-2xl cursor'/>
          </div>     
        </div>
      </div>
      <div className='flex justify-between items-center gap-6'>
        <div className='w-8 h-8 flex items-center justify-center
         rounded-full cursor-pointer hover:bg-white'>
        <BiVideoPlus className='text-2xl text-white hover:text-black'/>
        </div>
        <div className='w-8 h-8 relative flex items-center justify-center
        rounded-full cursor-pointer hover:bg-white'>
        <IoMdNotificationsOutline className='text-2xl text-white hover:text-black'/>
        <span className='absolute bottom-5 left-4 text-xs bg-red-600 rounded-full px-1'>9+</span>
        </div>
        <div className='w-8 h-8 flex items-center justify-center
         rounded-full cursor-pointer hover:bg-white'>
        <FaRegUser className='text-2xl text-white hover:text-black'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar