import { userMedia } from '@/lib/inedx'
import React from 'react'
import Image from 'next/image'
const UserMediaCard = ({userId}:{userId: string}) => {
  return (
    <div className='p-3 rounded-lg box-shadow flex flex-col gap-5 not-dark:bg-white'>
        {/* Header */}
      <div className='w-full flex justify-between items-center pb-2 border-b border-gray-700 not-dark:border-gray-200'>
        <p className='font-semibold text-lg text-gray-100 not-dark:text-gray-800'>User Information</p>
        <button type='button' className='text-sm font-medium text-gray-400 not-dark:text-gray-700 cursor-pointer'>
          See all
        </button>
      </div>
      <div className='flex flex-wrap gap-2'>
        {userMedia.map((media,index)=>
          <Image 
           key={index}
           src={media.url}
           width={50}
           height={50}
           className='w-25 h-25 rounded-lg object-cover'
           alt='user-media-image'
          />
        )}
      </div>

    </div>
  )
}

export default UserMediaCard