"use client";
import React, { useState } from 'react'
import { Post } from '@/lib/types'
import Image from 'next/image'
import { AiFillLike } from "react-icons/ai";
import { Ellipsis, Forward,SmilePlusIcon, MessageCircleMore} from 'lucide-react'
import CommentCard from './CommentCard';

const PostCard = ({post}: {post: Post}) => {
  const [showOtherComments, setShowOtherComments] = useState(false);
  const commentToShow = showOtherComments ? post.comments : post.comments.slice(0,2);
  return (
    <div className='w-full p-3 flex flex-col gap-3'>
        <div className='flex justify-between w-full items-center'>
            <div className='flex  gap-3'>
                <Image 
                 width={48}
                 height={48}
                 src={post.userImage}
                 alt='user-image'
                 className='w-12 h-12 rounded-full object-cover'
                />
                <h3 className='text-lg font-medium'>{post.username}</h3>
            </div>
            <div className='cursor-pointer not-dark:hover:bg-gray-400/10 not-dark:text-gray-600 hover:bg-gray-200/20 p-2 rounded-full transition-all duration-300 ease-in-out'>
                <Ellipsis />
            </div>
        </div>
        <div className='w-full flex flex-col gap-3'>
            <p className='text-sm text-gray-300 not-dark:text-gray-600'>{post.postDescription}</p>
            <Image 
            width={600}
            height={400}
            src={post.postImage} alt='post-image' className='w-full h-auto object-cover rounded-lg' />
        </div>
        <div className='flex px-3 py-2 rounded-lg w-full items-center justify-between text-lg'> 
            <button type="button" className='flex  text-gray-50 not-dark:text-gray-600 cursor-pointer  items-center gap-2'>
                <AiFillLike size={24} />
                <span>{post.likes} likes</span>
            </button>
            <button type="button" className='flex  text-gray-50 not-dark:text-gray-600 cursor-pointer items-center gap-2'>
                <MessageCircleMore />
                <span>{post.nbrComments} comments</span>
            </button>
            <button type="button" className='flex  text-gray-50 not-dark:text-gray-600 cursor-pointer items-center gap-2'>
                <Forward />
                <span>{post.shares} shares</span>
            </button>
        </div>
        <div className='flex gap-2 w-full items-center'>
            <Image 
                width={48}
                height={48}
                src={post.userImage}
                alt='user-image'
                className='w-8 h-8 rounded-full object-cover'
            />
            <div className='flex w-[1000%] bg-gray-300/12 not-dark:bg-gray-300/25 rounded-full  px-4 py-2  '>
              <input type='text' placeholder='write your comment' 
              className='outline-none w-[100%] resize-none'/>
              <SmilePlusIcon className='text-gray-400 not-dark:hover:text-gray-800 hover:text-gray-100 cursor-pointer duration-150 ease-in-out transition-all' />
            </div>
        </div>
        <div className='w-full mt-2 px-10 flex flex-col gap-3'> 
            {commentToShow.map((comment,index)=>(
                <CommentCard comment={comment} key={index}/>
            ))}
            <div className='w-full flex justify-center'>
                {post.comments.length > 2 && (
                    <button type="button" onClick={()=>setShowOtherComments(!showOtherComments)} className='text-sm cursor-pointer text-gray-600 dark:text-gray-200 font-medium hover:underline'>
                        {showOtherComments ? 'Hide comments' : `View all ${post.comments.length} comments`}
                    </button>
                )}
            </div>
        </div>
    </div>
  )
}

export default PostCard