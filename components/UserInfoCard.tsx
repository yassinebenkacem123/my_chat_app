import React from 'react'
import { Button } from './ui/button'
import { IoLocationSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const UserInfoCard = ({userId}:{userId: string}) => {
  return (
    <div className='p-3 rounded-lg box-shadow flex flex-col gap-5 not-dark:bg-white'>
      {/* Header */}
      <div className='w-full flex justify-between items-center pb-2 border-b border-gray-700 not-dark:border-gray-200'>
        <p className='font-semibold text-lg text-gray-100 not-dark:text-gray-800'>User Information</p>
        <button type='button' className='text-sm font-medium text-gray-400 not-dark:text-gray-700 cursor-pointer'>
          See all
        </button>
      </div>
      
      {/* Name and username */}
      <div className='flex flex-col gap-1'>
        <h3 className='text-2xl font-bold text-gray-100 not-dark:text-gray-800'>
          Yassine Ben
        </h3>
        <p className='text-md text-gray-300 not-dark:text-gray-500'>
          @benkacem
        </p>
      </div>
      
      {/* Bio */}
      <p className='text-md text-gray-300 not-dark:text-gray-600 leading-relaxed'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis,
        debitis quis ducimus quae sint nam? Assumenda, earum.
        Voluptatum tempore est suscipit quos minima magnam beatae maxime nobis ex quibusdam.
      </p>
      
      {/* Details section */}
      <div className='space-y-4 pt-2'>
        <div className='flex items-center gap-3'>
          <IoLocationSharp className='text-gray-400 not-dark:text-gray-500 text-lg' />
          <span className='text-gray-400 not-dark:text-gray-600 text-sm'>Lives in</span>
          <span className='text-gray-100 not-dark:text-gray-800 font-medium'>Casablanca, Morocco</span>
        </div>
        
        <div className='flex items-center gap-3'>
          <FaSchool className='text-gray-400 not-dark:text-gray-500 text-lg' />
          <span className='text-gray-400 not-dark:text-gray-600 text-sm'>Went to</span>
          <span className='text-gray-100 not-dark:text-gray-800 font-medium'>ENSAF</span>
        </div>
        
        <div className='flex items-center gap-3'>
          <MdOutlineWork className='text-gray-400 not-dark:text-gray-500 text-lg' />
          <span className='text-gray-400 not-dark:text-gray-600 text-sm'>Work at</span>
          <span className='text-gray-100 not-dark:text-gray-800 font-medium'>Web dev</span>
        </div>
        
        <div className='flex items-center gap-3 pt-2'>
          <a className='font-medium text-sky-400   hover:text-sky-500 transition-colors cursor-pointer'>
            benkacem.com
          </a>
          <span className='text-gray-400 not-dark:text-gray-500 text-sm'>Joined December 2025</span>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className='flex gap-3 pt-4'>
        <Button className='flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors'>
          Following
        </Button>
        <button className='flex-1 bg-red-500 hover:bg-red-400 not-dark:bg-red-500 not-dark:hover:bg-red-400 text-gray-100 not-dark:text-white py-2 px-4 rounded-md transition-colors'>
          Block user
        </button>
      </div>
    </div>
  )
}

export default UserInfoCard