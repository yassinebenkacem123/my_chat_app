import React from 'react'
import { friendsRequests } from '@/lib/inedx'
import Image from 'next/image'
import { IoMdCheckmarkCircleOutline,IoIosCloseCircleOutline } from "react-icons/io";

const FriendsRequests = () => {
  return (
    <div className='w-full p-3 rounded-md box-shadow flex flex-col gap-3'>
       <div className='w-full flex justify-between items-center'>
         <p className='font-medium text-md text-gray-100 not-dark:text-gray-800'>Friends Requests</p>
         <button type='button' className='text-md text-gray-100 not-dark:text-gray-500 cursor-pointer'>
            see all
         </button>
       </div>
       {
        friendsRequests.map((request, index)=>(
          <div key={index} className='flex  justify-between w-full items-center'>
            <div className='flex items-center gap-2'>
                <Image 
                  src={request.userImage}
                  alt='friend-image'
                  width={40}
                  height={40}
                  className='w-10 h-10 rounded-full object-cover'
                />
                <h3 className='text-sm'>{request.name}</h3>
            </div>
            <div className='flex items-center gap-2'>
                <button title="accept" type='button' className='cursor-pointer text-green-500 text-lg'>
                    <IoMdCheckmarkCircleOutline />
                </button>
                <button title="decline" type='button' className='cursor-pointer text-red-500 text-lg'>
                    <IoIosCloseCircleOutline />
                </button>
            </div>
          </div>
        ))
       }
    </div>
  )
}

export default FriendsRequests