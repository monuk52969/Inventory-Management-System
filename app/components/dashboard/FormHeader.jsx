import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const FormHeader = ({title, href}) => {
  return (
    <div className="flex items-center justify-between py-3 px-8 montserrat bg-[#1F1F1F] rounded-xl">
        <h2 className='text-xl font-semibold'>{title}</h2>
        <Link href={href}>
          <X />
        </Link>
      </div>
  )
}

export default FormHeader