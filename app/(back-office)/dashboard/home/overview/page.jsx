import DashboardBanner from '@/app/components/dashboard/DashboardBanner'
import SalesOverview from '@/app/components/dashboard/SalesOverview'
import React from 'react'

const page = () => {
  return (
    <div className='py-2 px-10'>
      <DashboardBanner/>
      <SalesOverview />
       </div>
  )
}

export default page