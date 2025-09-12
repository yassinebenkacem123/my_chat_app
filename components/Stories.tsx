import React from 'react'
import Image from 'next/image'
import { stories } from '@/lib/inedx'
import { Plus } from 'lucide-react'
import motion from 'framer-motion'
const Stories = () => {
  
  return (
    <div className='w-full scroll-auto hide-scrollbar   overflow-hidden  rounded-md overflow-x-auto  p-3'>
        <div className='flex w-max  items-center gap-3'>
            <div className='w-20 h-20 rounded-full overflow-hidden  border border-amber-400 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center'>
                <Plus size={40} />
            </div>
        {
                stories.map((story,index)=>(
                    <div key={index} className='w-20 h-20 rounded-full overflow-hidden p-[2px] bg-amber-300  cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
                        <Image src={story} alt='story' width={80} height={80} className='w-full bg-cover h-full rounded-full'/>
                    </div>
                ))
                }
        </div>
       

    </div>
  )
}

export default Stories