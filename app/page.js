import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <h2 className='text-3xl text-zinc-800'>Inventory Management System</h2>

      {/* Agar tumhara route sirf dashboard hai */}
      <Link href="/dashboard/home/overview" className='text-blue-600 underline'>
        View Dashboard
      </Link>

      <Link href="/dashboard/home/announcements" className='text-blue-600 underline'>
        Announcements
      </Link>

      <Link href="/dashboard/home/gettingstarted" className='text-blue-600 underline'>
        Getting Stated
      </Link>

      <Link href="/dashboard/home/updates" className='text-blue-600 underline'>
        Updates
      </Link>
      
    </div>
  )
}

export default Page
