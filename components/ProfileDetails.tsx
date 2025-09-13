import React from 'react'
import Image from 'next/image'
const ProfileDetails = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div className='relative w-full'>
            <Image 
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww"
              alt="background-image"
              width={100}
              height={100}
              className='w-full h-80 rounded-lg'
            />
            <Image 
              src="https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg"
              alt="profile-image"
              width={30}
              height={30}
              className='w-30 h-30 object-cover  rounded-full  border-4 z-100 border-white absolute left-1/2 -bottom-12 -translate-x-1/2'
            />

        </div>
        <div className='w-full flex-col items-center gap-3 mt-10 flex'>
            <h1 className='text-lg  font-medium'>
                Yassine Ben Kacem
            </h1>
            <div className='w-full flex items-center justify-center gap-8 text-center'>
                <div className='flex flex-col items-center gap-1'>
                    <p>Posts</p>
                    <span>123</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <p>Followers</p>
                    <span>1.2K</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <p>Following</p>
                    <span>456</span>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default ProfileDetails