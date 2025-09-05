import NavBar from '@/components/NavBar'
import React from 'react'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <NavBar />
        <main className='py-6 px-3 md:py-8 md:px-5 '>
           {children}
        </main>
    </div>
  )
}

export default layout