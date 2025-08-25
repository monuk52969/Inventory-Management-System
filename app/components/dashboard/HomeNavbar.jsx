'use client'
import { Building2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { href } from 'react-router-dom'
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
        <div className="flex space-x-3">
            <div className="flex w-12 h-12 bg-zinc-900 items-center justify-center rounded-lg ">
                <Building2 className='p-text '/>
            </div>
            <div className="flex flex-col">
                <p className='p-text text font-montserrat font-semibold'>Hello, MONU KUMAR</p>
                <span className='p-text  text-sm'>India</span>
            </div>
        </div>
        <nav className='p-text sticky mt-6 text-[#FEFEFE] flex space-x-4'>
            {navLinks.map((item, i)=>{
                return(
                    <Link
                    key={i}
                    href={item.href}
                    className={`${pathname===item.href ?
                        "py-1 border-b-2 border-[#B9FF66]" : ""
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