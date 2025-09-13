import React from 'react'
import FriendsRequests from './FriendsRequests'
import Birthdays from './Birthdays'
import Ads from './Ads'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
const RightMenu = ({userId}:{userId:string}) => {
  return (
    <div className='flex flex-col gap-4'>
      {userId && <>
        <UserInfoCard userId={userId}/>
        <UserMediaCard userId={userId} />
      </>}
      <FriendsRequests />
      <Birthdays />
      <Ads />
    </div>
  )
}

export default RightMenu