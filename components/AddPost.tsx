import React from 'react'
import Image from "next/image";
import path from 'path';
import { SmilePlus } from 'lucide-react';
const AddPost = () => {
    const options = [
        {name:'photo', path:'/photo-gallery.png'},
        {name:'video', path:'/add-movie.png'},
        {name:'events', path:'/planner.png'},
        {name:'poll', path:'/polling.png'}, 

    ]
  return (
    <div className='w-full flex-col  my-6 p-4 shadow-white/20 not-dark:shadow-black/20 shadow-[0_1px_7px_0px]  rounded-md'>
        <div className='flex relative w-full items-start gap-4 mb-4'>
            {/* avatar */}
            <div className='w-15 h-15 rounded-full overflow-hidden  border border-amber-400 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
                <Image src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww' alt="Avatar" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            {/* text area */}
            <div className='w-[90%]'>
                <textarea className='w-full bg-gray-300/12 not-dark:bg-gray-300/27 outline-none rounded-sm  p-3 resize-none' placeholder='What is on your mind ?'></textarea>
            </div>
            <button type="button" title="add emojis" className='relative top-8 cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out'>
                <SmilePlus  size={30}/> 
            </button>
        </div>
        {/* option */}
        <div className='flex w-full justify-center gap-7 items-center'>
            {
            options.map((option,index)=>(
                <div key={index} className='flex items-center gap-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
                    <Image src={option.path} alt={option.name} width={20} height={20} />
                    <span className='capitalize text-gray-300 not-dark:text-gray-500 text-sm'>{option.name}</span>
                </div>
                ))
            }
        </div>

    </div>
  )
}

export default AddPost