import { Comment } from '@/lib/types'
import React from 'react'
import Image from 'next/image'
import {Ellipsis} from 'lucide-react'
import { AiFillLike } from "react-icons/ai";

const CommentCard = ({comment}:{comment:Comment}) => {
  return (
   <div  className='flex  items-start gap-3 mt-3'>
        <Image
            width={48}
            height={48}
            src={comment.userImage}
            alt='user-image'
            className='w-8 h-8 rounded-full object-cover'
        />
        <div className='w-full flex  flex-col'>
            <div className='flex  w-full justify-between items-center'>
                <h3 className='text-md font-medium text-gray-600/80 dark:text-gray-300'>{comment.username}</h3> 
                <button title="dots" type="button" className='cursor-pointer hover:text-gray-400 not-dark:hover:text-gray-400  transition-all duration-300 ease-in-out'>
                    <Ellipsis />
                </button>
            </div>
            <p className='text-sm not-dark:text-gray-600 text-gray-200'>{comment.text}</p>
            <div className='flex gap-10 mt-3'>
                <button type="button" className='flex  text-gray-50 not-dark:text-gray-600 cursor-pointer  items-center gap-2 text-sm mt-1'>
                    <AiFillLike size={16} />
                    <span>{comment.likes} likes</span>
                </button>
                <button type="button" className='flex  text-gray-50 not-dark:text-gray-600 cursor-pointer  items-center gap-2 text-sm mt-1'>
                    reply
                </button>
            </div>
        </div>
    </div>
  )
}

export default CommentCard