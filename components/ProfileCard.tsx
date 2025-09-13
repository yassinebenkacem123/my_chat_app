import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

function AvatarDemo() {
  return (      
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
 
  )
}

const ProfileCard = () => {
  return (
    <div className='p-3 rounded-lg  relative box-shadow flex flex-col gap-3 not-dark:bg-white'>
      <div className='relative w-full '>
        <Image 
          src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww"
          alt="background-image"
          width={100}
          height={100}
          className='w-full h-25 rounded-lg'
        />
        <Image 
          src="https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg"
          alt="profile-image"
          width={30}
          height={30}
          className='w-20 h-20 rounded-full  border-4 z-100 border-white absolute left-1/2 -bottom-12 -translate-x-1/2'
        />
      </div>
      <h1 className='text-lg font-semibold w-full text-center mt-10'>Yassine Ben Kacem</h1>
      <div className='flex items-center justify-center gap-2'>
        <AvatarDemo /><p className='text-sm font-normal '>500 followers</p>
      </div>
      <Button>
        My Profile
      </Button>
    </div>
  )
}

export default ProfileCard
