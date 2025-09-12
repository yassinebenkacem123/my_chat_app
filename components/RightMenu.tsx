import React from 'react'
import FriendsRequests from './FriendsRequests'
import Birthdays from './Birthdays'
import Ads from './Ads'
const RightMenu = ({userId}:{userId:string}) => {
  return (
    <div className='flex flex-col gap-4'>
      <FriendsRequests />
      <Birthdays />
      <Ads />
    </div>
  )
}

export default RightMenu