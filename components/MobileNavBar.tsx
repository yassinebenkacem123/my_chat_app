import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { HomeIcon, BellIcon, UserIcon,Users, MessageCircle, LogIn } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { Button } from './ui/button'
const MobileNavBar = async () => {
  const user = await currentUser();
  return (
    <div className='md:hidden px-3  right-0  py-10  border-l min-h-screen not-dark:border-l-gray-500/30 shadow-sm shadow-white/40 border-l-gray-300/30 z-200 items-center top-18.5  absolute  flex flex-col gap-10'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className='flex w-full flex-col items-center gap-4'>
          <Link href='/' title="home" className='p-2 hover:bg-gray-300/20 not-dark:hover:bg-gray-400/20 rounded-md duration-150 ease-in transition-all flex flex-col items-center gap-1'>
            <HomeIcon/>
          </Link>
          {
            user ? (
             <> <Link href='/messages' title="messages" className='p-2 hover:bg-gray-300/20 not-dark:hover:bg-gray-400/20 rounded-md duration-150 ease-in transition-all flex flex-col items-center gap-1'>
                <MessageCircle />
              </Link>
              <Link href='/notifications' title="notifications" className='p-2 hover:bg-gray-300/20 not-dark:hover:bg-gray-400/20 rounded-md duration-150 ease-in transition-all flex flex-col items-center gap-1'>
                <BellIcon />
              </Link>
              <Link href="/friends" title="friends" className='p-2 hover:bg-gray-300/20 not-dark:hover:bg-gray-400/20 rounded-md duration-150 ease-in transition-all flex flex-col items-center gap-1'>
                <Users />
              </Link>
              <Link href={`/profile/${user.username}`} title="profile" className='p-2 hover:bg-gray-300/20 not-dark:hover:bg-gray-400/20 rounded-md duration-150 ease-in transition-all flex flex-col items-center gap-1'>
                <UserIcon />
              </Link>
            </>
            ) : (
              <SignedOut>
                <SignInButton mode='modal'>
                <button type='button' className='p-2 hover:bg-gray-300/20 not-dark:hover:bg-gray-400/20 rounded-md duration-150 ease-in transition-all flex flex-col items-center gap-1'>
                  <LogIn />
                  <span className='text-xs'>Sign In</span>
                </button>
                </SignInButton>
              </SignedOut>
            )
          }
        </div>
    </div>
  )
}

export default MobileNavBar