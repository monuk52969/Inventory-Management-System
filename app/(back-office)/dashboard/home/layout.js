import HomeNavbar from '@/app/components/dashboard/HomeNavbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className=''>
        <HomeNavbar />
        {children}
    </div>
  )
}

export default layout