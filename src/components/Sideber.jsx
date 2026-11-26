import React from 'react'
import Image from './Image'
import ProfileImg from '../assets/profile.jpg'
import { LiaHomeSolid } from "react-icons/lia";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";


const sidebar = () => {
  return (


    <div className='flex flex-col justify-around items-center w-[85%] h-[93vh] mt-8 rounded-[20px] mx-auto bg-[#5F35F5]  rounded-20px' >
      
      <div className='w-23 h-23 rounded-full' > 
                <Image className='rounded-full'  src={ProfileImg} />

      </div>

      <div className='flex flex-col gap-y-12' >
        <LiaHomeSolid className='text-5xl text-white' />
        <AiFillMessage className='text-5xl text-white' />
        <IoMdNotificationsOutline className='text-5xl text-white' />
        <MdOutlineSettings className='text-5xl text-white' />


      </div>
      <LuLogOut className='text-5xl text-white' />



    </div>
  )
}

export default sidebar