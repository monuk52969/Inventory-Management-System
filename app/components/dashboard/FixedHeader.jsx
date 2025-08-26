import { HelpCircle, Layout, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const FixedHeader = ({newLink}) => {
  return (
    <div className="flex justify-between items-center bg-[#1F1F1F] shadow-md rounded-xl py-4 px-6 ">
      {/* Left: Title */}
      <button className="text-lg font-semibold montserrat text-white tracking-wide hover:text-[#C5E1A5] transition-colors">
        All Items
      </button>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* New Button */}
        <Link
          href={newLink}
          className="text-xl w-20 h-8 rounded bg-gradient-to-r from-[#C5E1A5] to-[#A1D78F] text-[#000000] relative overflow-hidden group z-10 hover:text-white duration-1000 flex items-center justify-center gap-2 font-medium"
        >
          {/* Background circles for animation */}
          <span className="absolute bg-[#C5E1A5]/30 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-[#A1D78F]/30 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>

          {/* Icon + text */}
          <Plus className="w-3 h-3" />
          <span className="text-sm">New</span>
        </Link>

        {/* Layout / List */}
        <div className="flex items-center rounded-md overflow-hidden gap-1">
          {/* Active Button */}
          <button className="p-2 rounded-lg bg-[#C5E1A5] border border-zinc-900 text-zinc-950 cursor-default">
            <List className="w-4 h-4" />
          </button>

          {/* Inactive Button */}
          <button className="p-2 rounded-lg  hover:bg-[#C5E1A5] active:scale-95 transition-all duration-150 group">
            <Layout className="w-4 h-4 text-white group-hover:text-[#000000]" />
          </button>
        </div>

        {/* More */}
        <button className="p-2 rounded-lg  hover:bg-[#C5E1A5] active:scale-95 transition-all duration-150 group">
          <MoreHorizontal className="w-4 h-4 text-white group-hover:text-[#000000]" />
        </button>

        {/* Help */}
        <button className="p-2 rounded-lg  bg-orange-400 
        hover:bg-orange-600 active:scale-95 transition-all duration-150 group">
  <HelpCircle className="w-5 h-5 text-white group-hover:text-[#000000]" />
</button>
      </div>
    </div>
  );
};

export default FixedHeader;
