import React from 'react'
import { IoMdHome, IoIosArrowForward} from "react-icons/io";
import { MdOutlineSubscriptions, MdOutlineWatchLater, MdOutlineVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts,SiYoutubemusic } from "react-icons/si";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuHistory } from "react-icons/lu";
import { TbUserSquare } from "react-icons/tb";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { BiLike } from "react-icons/bi";

const Sidebar = () => {
    const mainLinks = [
        {
            icon: <IoMdHome/>,
            name: 'Home'
        },
        {
            icon: <SiYoutubeshorts/>,
            name: 'Shorts'
        },
        {
            icon: <MdOutlineSubscriptions/>,
            name: 'Subscription'
        },
        {
            icon: <SiYoutubemusic/>,
            name: 'YoutubeMusic'
        },
        {
            icon: <MdOutlineVideoLibrary/>,
            name: 'You'
        },
        {
            icon: <LiaDownloadSolid/>,
            name: 'Downloads'
        }
    ]
    const userLinks = [
        {
            icon: <TbUserSquare/>,
            name: 'Your channel'
        },
        {
            icon: <LuHistory/>,
            name: 'History'
        },
        {
            icon: <AiOutlinePlaySquare/>,
            name: 'Your videos'
        },
        {
            icon: <MdOutlineWatchLater/>,
            name: 'Watch later'
        },
        {
            icon: <LiaDownloadSolid/>,
            name: 'Downloads'
        },
        {
            icon: <BiLike/>,
            name: 'Liked videos'
        }
    ]
  return (
    // <div className='w-1/12 h-screen bg-[#212121] opacity-95 pr-5 overflow-auto pb-8'>
    //     <ul className='flex flex-col border-b-1'>
    //     {mainLinks.map((link, index) => (
    //                 <div key={index} className={'py-3 h-20 text-white flex flex-col items-center'}>
    //                     <div className='flex flex-col h-20 w-20 rounded-md items-center justify-between hover:bg-gray-800 py-4'>
    //                         <span className='text-3xl'>{link.icon}</span>
    //                         <span className='text-xs font-light'>{link.name}</span>
    //                     </div>
    //                 </div>
    //             ))}
    //     </ul>
    // </div>
    <div className='w-2/12 h-screen bg-[#212121] opacity-95 pr-5 overflow-auto pb-8'>
        <ul className=' p-4 flex flex-col border-b'>
            {mainLinks.map ( (link,index) => (
                <li key={index} className=' mt-4 h-10 px-4 flex items-center gap-8 text-white rounded-md hover:bg-gray-800'>
                    <p className='text-2xl'>{link.icon}</p>
                    <p className=' text-xs font-light subpixel-antialiased'> {link.name}</p>
                </li>
            ))}
        </ul>
        <p className='flex items-center gap-2 h-10 rounded-md mt-2 text-white pl-8 hover:bg-gray-800'> You <span><IoIosArrowForward /></span>
        </p>
        <ul className=' p-4 flex flex-col border-b'>
            {userLinks.map ( (link,index) => (
                <li key={index} className=' mt-3 h-10 px-4 flex items-center gap-8 text-white rounded-md hover:bg-gray-800' >
                    <p className='text-2xl'>{link.icon}</p>
                    <p className='text-xs font-light subpixel-antialiased'>{link.name}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar