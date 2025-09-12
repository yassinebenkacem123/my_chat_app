import React from 'react'
import { posts } from '@/lib/inedx'
import PostCard from './PostCard'
const Posts = () => {
  return (
    <div className='flex flex-col gap-8 rounded-md p-3 shadow-white/20 not-dark:shadow-black/20 shadow-[0_1px_7px_0px]'>
        {
          posts.map((post,index)=>(
            <PostCard key={index} post={post} />
          ))
        }
    </div>
  )
}

export default Posts