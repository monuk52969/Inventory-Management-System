import React from "react";
import {
  History,
  Plus,
  Users2,
  Bell,
  Settings,
  ChevronDown,
  LayoutGrid,
} from "lucide-react";

import Image from "next/image";
import SearchInput from "@/app/components/dashboard/Searchinput";


const Header = () => {
  return (
    <div className="bg-[#1F1F1F] text-[#FEFEFE] h-14 flex items-center justify-between px-8 border-b-[1px] border-[#1f1f1e] ">
      {/* Left section: History + Search */}
      <div className="flex gap-5 items-center">
        {/* Recent activities */}
        <button className="p-2 hover:bg-white/10 rounded-full transition">
          <History className="w-6 h-6 text-[#FEFEFE]" />
        </button>

        {/* Search */}
        <SearchInput />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Plus Button with Tooltip */}
        <section className="relative flex justify-center items-center pr-4 border-r border-zinc-800">
          <div className="group flex justify-center items-center rounded-full bg-[#C5E1A5] p-2 cursor-pointer relative transition-transform duration-200 ease-in-out hover:scale-105">
            <Plus className="w-4 h-4 text-zinc-800" />

            {/* Tooltip */}
            <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 duration-300 text-xs text-white bg-zinc-900 px-2 py-1 rounded-md shadow-md text-nowrap">
              Quick Create
            </span>
          </div>
        </section>

        {/* Icons */}
        <div className="flex items-center space-x-2 pr-4 border-r border-zinc-800">
          {/* Users Icon */}
          <div className="group flex justify-center items-center transition-transform duration-200 ease-in-out hover:scale-105 rounded-full p-2 text-white cursor-pointer relative">
            <Users2 className="w-5 h-5 text-[#FEFEFE]" />
            <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 duration-300 text-xs text-white bg-zinc-900 px-2 py-1 rounded-md shadow-md text-nowrap">
              Users
            </span>
          </div>

          {/* Bell Icon */}
          <div className="group flex justify-center items-center transition-transform duration-200 ease-in-out hover:scale-105 rounded-full p-2 text-white cursor-pointer relative">
            <Bell className="w-5 h-5 text-[#FEFEFE]" />
            <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 duration-300 text-xs text-white bg-zinc-900 px-2 py-1 rounded-md shadow-md text-nowrap">
              Notifications
            </span>
          </div>

          {/* Settings Icon */}
          <div className="group flex justify-center items-center transition-transform duration-200 ease-in-out hover:scale-105 rounded-full p-2 text-white cursor-pointer relative">
            <Settings className="w-5 h-5 text-[#FEFEFE]" />
            <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 duration-300 text-xs text-white bg-zinc-900 px-2 py-1 rounded-md shadow-md text-nowrap">
              Settings
            </span>
          </div>
        </div>

        {/* Monu + Avatar */}
        <div className="flex items-center gap-3 pl-4 ">
          <button className="flex items-center gap-1">
            <span className="text-sm montserrat">Monu</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button>
            <Image
              src="/user.jpg"
              alt="user image"
              width={96}
              height={96}
              className="rounded-full  border w-8 h-8 border-zinc-600"
            />
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-[#FEFEFE]"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
