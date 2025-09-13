import LeftMenu from '@/components/LeftMenu'
import Posts from '@/components/Posts'
import ProfileDetails from '@/components/ProfileDetails'
import RightMenu from '@/components/RightMenu'
import React from 'react'

const Profile = () => {
  return (
    <div className="flex gap-8 min-h-screen">
      <div className="w-[20%]">
        <LeftMenu type='profile'/>
      </div>
      <div className="w-[50%] flex flex-col gap-5">
        <ProfileDetails />
        <Posts />
      </div>
      <div className="w-[30%]">
        <RightMenu userId="test" />
      </div>
   </div>
  )
}

export default Profile