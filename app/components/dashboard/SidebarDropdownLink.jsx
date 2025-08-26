'use client'
import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/components/ui/collapsible";
import { BaggageClaim, ChevronRight } from 'lucide-react';
import CollapsibleLinks from './CollapsibleLinks'; // make sure you imported it

const SidebarDropdownLink = ({ title, items, icon:Icon }) => {
    // const Icon = icon
  return (
    <Collapsible>
              <CollapsibleTrigger className=" p-2 w-full flex justify-between items-center text-left hover:bg-[#222] rounded-md transition">
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                <span className="montserrat font-medium">{title}</span>
                </div>
                <ChevronRight className='w-4 h-4'/>
              </CollapsibleTrigger>

              <CollapsibleContent className="pl-6 pt-2 space-y-2">
                {items.map((item, i) => {
                  return <CollapsibleLinks 
                  key={i}
                  href={item.href} title={item.title} />;
                })}
              </CollapsibleContent>
            </Collapsible>
  )
}

export default SidebarDropdownLink
