import React from 'react'
import { HomeIcon, BellIcon, UserIcon } from 'lucide-react'
import ModeToggle from './ui/ModeToggle'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'
const DesktopNavBar = async () => {
    const user = await currentUser();
  return (
    <div className='flex items-center gap-6'>
        <ModeToggle/>
        <div className='flex items-center gap-7'>
            <Link href="/" className='flex items-center gap-2'>
             <HomeIcon/> Home 
            </Link>
            {
                user ? (
                    <div className='flex items-center gap-7'>
                        <Link  className='flex items-center gap-4' href = '/notfication' >
                            <BellIcon/> Notfication
                        </Link>
                        <Link className='flex items-center gap-4' href = {`/profile/${user.id}`}>
                            <UserIcon/> Profile
                        </Link>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div> 
                ):(
                    <div>
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
  )
}

export default DesktopNavBar