import React from 'react'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'

const CollapsibleLinks = ({href, title}) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between w-full py-2 px-2 hover:bg-[#2a2a2a] rounded-md transition group"
    >
      <span className="text-sm montserrat text-[#eaeaea] group-hover:text-white">
        {title}
      </span>
      <PlusCircle className="w-5 h-5 text-[#aaa] group-hover:text-white" />
    </Link>
  )
}

export default CollapsibleLinks