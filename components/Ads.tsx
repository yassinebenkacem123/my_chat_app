import React from 'react'
import {Ellipsis} from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
const Ads = () => {
  return (
    <div className='w-full p-3 box-shadow flex flex-col gap-3 rounded-md'>
      <div className='flex justify-between items-center'>
        <h2 className='font-medium text-md text-gray-100 not-dark:text-gray-800'>Sponsored Ads</h2>
        <button type="button" title='dots' className='cursor-pointer not-dark:hover:bg-gray-400/10 not-dark:text-gray-600 hover:bg-gray-200/20 p-2 rounded-full transition-all duration-300 ease-in-out'>
          <Ellipsis />
        </button>
      </div>
      <Image 
        width={300}
        height={250}
        className='w-full h-auto object-cover rounded-md'
        src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww"
        alt="ad-image"
      />
      <div className='flex gap-2 items-center'>
        <Image 
        width={10}
        height={10}
        className='w-10 h-10 object-cover rounded-full'
        src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww"
        alt="ad-image"
        />
        <h4 className='text-sm text-gray-100 not-dark:text-gray-800'> bigChefLongue </h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Natus possimus inventore omnis eveniet laborum.
        Ipsam inventore, ut fugiat delectus quidem unde cumque deleni.
      </p>
      <Button>
        Learn More
      </Button>
    </div>
  )
}

export default Ads