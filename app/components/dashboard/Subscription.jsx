import Link from 'next/link'
import React from 'react'

const Subscription = () => {
  return (
    <div className="px-1 py-3">
        <div className='p-3  rounded-xl bg-zinc-950'>
        <div className="border-b-[0.5px] border-zinc-800 pb-2">
            <p className='text-[#ffffff] text-sm border-l-2 border-[#d5f371] pl-2'>Your Premiere plan's trial expires in 
                {" "}
            <span className="text-[#B9FF66] text-xs ml-1">
                15 Days.
            </span>
             </p>
        </div>
        <div className="flex text-sm">
            <button className='p-1 border-r border-zinc-800'>Chnage Plan</button>
            <Link className='p-1' href="#">Upgrade</Link>
        </div>
    </div>
    </div>
  )
}

export default Subscription