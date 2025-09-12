import React from 'react'
import Link from 'next/link'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'
import ModeToggle from './ui/ModeToggle'

const NavBar = () => {
  return (
    <nav className='w-full relative flex shadow-white/15 not-dark:shadow-black/10 justify-between z-100 top-0 px-10 py-4 shadow-sm'>
      <Link href='/' className='text-4xl  text-amber-300 font-bold '>
        Y
      </Link>
      <div className='flex items-center gap-6'>
        <div  className='border border-white/30 px-5 py-2 not-dark:border-black/20 rounded-md'>
          <input  type="text" placeholder='Search...' className='outline-none bg-transparent w-full' />
        </div>
        <ModeToggle />
        <DesktopNavBar />
        <MobileNavBar />
      </div>
    </nav>
  )
}

export default NavBar