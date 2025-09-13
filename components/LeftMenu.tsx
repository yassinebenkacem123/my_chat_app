import React from 'react'
import ProfileCard from './ProfileCard'
import Image from 'next/image';
import Ads from './Ads';
const LeftMenu = ({type}:{type:"profile" | "home"}) => {
  const userMenu: { name: string; iconPath:string; }[] = [
    {
      name:"Posts",
      iconPath:"/post.png"
    },
    {
      name:"Activity",
      iconPath:"/activity.png"
    },
    {
      name:"Marketplace",
      iconPath:"/marketplace.png"
    },
    {
      name:"Events",
      iconPath:"/events.png"
    },
    {
      name:"Albums",
      iconPath:"/Albums.png"
    },
    {
      name:"Videos",
      iconPath:"/add-movie.png"
    },
    {
      name:"News",
      iconPath:"/news.png"
    },
    {
      name:"Courses",
      iconPath:"/courses.png"
    },
    {
      name:"Lists",
      iconPath:"/list.png"
    },
    {
      name:"Settings",
      iconPath:"/settings.png"
    }
  ];
  return (
    <div className='flex flex-col gap-4 w-full'>
      {type === 'home' && (
        <ProfileCard />
      )}
      <div className='p-3 rounded-lg box-shadow flex flex-col gap-5 not-dark:bg-white'>
        {
          userMenu.map((menu,index)=>
            <div key={index} className='flex items-center gap-3 rounded-md py-1.5 px-3 hover:bg-gray-300/20 not-dark:hover:bg-gray-400/15  cursor-pointer duration-150 transition-all'>
              <Image 
                src={menu.iconPath}
                alt={menu.name}
                width={50}
                height={50}
                className='w-7 h-7'
              />
              <h4 className='font-mono not-dark:text-gray-500 text-md text-gray-300'>{menu.name}</h4>
            </div>
          )
        }
      </div>
      <Ads />
    </div>
  )
}

export default LeftMenu