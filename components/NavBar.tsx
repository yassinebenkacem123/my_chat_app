import React from 'react'
import Link from 'next/link'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'

const NavBar = () => {
  return (
    <nav className='bg-background/90 top-0 supports-[backdrop-filter]:bg-background/60 z-50'>
        <div className='w-full px-3 md:px-5 lg:px-8 mx-auto'>
            <div className='flex w-full items-center justify-between h-16'>
                <Link href='/' className='text-lg font-bold'>
                 <span>{'('}</span>YB<span>{')'}</span>
                </Link>

                <DesktopNavBar />
                {/* <MobileNavBar /> */}
            </div>
        </div>
    </nav>
  )
}

export default NavBar