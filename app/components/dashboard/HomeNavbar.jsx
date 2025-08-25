'use client'
import { Building2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HomeNavbar = () => {
  const pathname = usePathname()
  console.log(pathname)

  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/overview"
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/gettingstarted"
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates"
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcements"
    },
  ]

  return (
    <div className='h-32 text-[#FEFEFE] font-montserrat p-5 header-bg bg-[#1F1F1F] shadow-[0_4px_10px_rgba(255,255,255,0.1)]'> 
      {/* Left Profile */}
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 bg-zinc-900 items-center justify-center rounded-lg ">
          <Building2 className='p-text'/>
        </div>
        <div className="flex flex-col">
          <p className='p-text font-montserrat font-semibold'>Hello, MONU KUMAR</p>
          <span className='p-text text-sm'>India</span>
        </div>
      </div>

      {/* Navbar Links */}
      <nav className='p-text sticky mt-6 text-[#FEFEFE] flex space-x-6'>
        {navLinks.map((item, i) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={i}
              href={item.href}
              className={`py-1 transition-colors duration-200 ${
                isActive
                  ? "border-b-2 border-[#C5E1A5] text-[#C5E1A5] font-semibold"
                  : "text-[#FEFEFE] hover:text-[#C5E1A5]"
              }`}
            >
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default HomeNavbar
