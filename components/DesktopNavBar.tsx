import React from 'react'
import { HomeIcon, BellIcon, UserIcon,Users, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'
const DesktopNavBar = async () => {
    const user = await currentUser();
  return (
    <div className='md:flex hidden  text-md items-center gap-22'>
    
      <div className='flex items-center gap-5'>
        <div className='flex   items-center gap-7'>
            <Link href="/" title='home' className='flex not-dark:hover:bg-gray-400/20 hover:bg-gray-300/20 p-2 rounded-md duration-150 ease-in transition-all items-center gap-2'>
             <HomeIcon/> Home 
            </Link>

            {
                user ? (
                    
                    <div className='flex items-center gap-7'>
                        <Link title='chat' className='flex not-dark:hover:bg-gray-400/20 hover:bg-gray-300/20 duration-150 ease-in transition-all p-2 rounded-md items-center gap-2' href = '/chat'>
                            <MessageCircle />
                        </Link>
                        <Link title="notification" className='flex not-dark:hover:bg-gray-400/20 hover:bg-gray-300/20 duration-150 ease-in transition-all p-2 rounded-md items-center gap-2' href = '/notfication' >
                            <BellIcon/> Notification
                        </Link>
                        <Link title="friends" className='flex not-dark:hover:bg-gray-400/20 hover:bg-gray-300/20 duration-150 ease-in transition-all p-2 rounded-md items-center gap-2' href = '/friends'>
                            <Users/> Friends
                        </Link>
                        <Link title="profile" className='flex not-dark:hover:bg-gray-400/20 hover:bg-gray-300/20 duration-150 ease-in transition-all p-2 rounded-md items-center gap-2' href = {`/profile/${user.id}`}>
                            <UserIcon/> Profile
                        </Link>
                        
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                         
    

                ):(
                    <div className='flex items-center gap-2'>
                        <SignedOut>
                           <SignInButton mode='modal'>
                            <Button variant='outline'>Sign In</Button>
                           </SignInButton>
                        </SignedOut>
                    </div>
                )
            }
        </div>
      </div>
    </div>
  )
}

export default DesktopNavBar