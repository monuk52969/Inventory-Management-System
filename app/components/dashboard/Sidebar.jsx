import {
  BaggageClaim,
  BarChart4,
  Blocks,
  ChevronLeft,
  CreditCard,
  Files,
  Home,
  IndianRupee,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Subscription from "./Subscription";

const Sidebar = () => {
  return (
    <div>
      <div className="w-56 min-h-[96vh] bg-[#000000] text-[#FEFEFE]   rounded-r-2xl rounded-b-r-2xl justify-between ">
        {/* Top Part */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="bg-zinc-950 flex space-x-3 p-3 items-center rounded-t-xl">
            <ShoppingCart className="w-8 h-8 text-[#B9FF66]" />
            <span className=" text-md font-semibold panchang uppercase">
              {" "}
              Inventory
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3 px-3 py-6">
            <Link
              href="/"
              className="flex  items-center space-x-2 bg-[#B9FF66] text-zinc-950 p-2 rounded-md"
            >
              <Home className="w-4 h-4" />
              <span className="font-montserrat">Home</span>
            </Link>

            <button className="flex  items-center space-x-2 p-2">
              <BaggageClaim className="w-4 h-4" />
              <span className="font-montserrat">Inventory</span>
            </button>

            <button className="flex  items-center space-x-2 p-2">
              <IndianRupee className="w-4 h-4" />
              <span className="font-montserrat">Sales</span>
            </button>

            <button className="flex  items-center space-x-2 p-2">
              <CreditCard className="w-4 h-4" />
              <span className="font-montserrat">Purchases</span>
            </button>

            <Link href="/" className="flex  items-center space-x-2 p-2">
              <Blocks className="w-4 h-4" />
              <span className="font-montserrat">Integrations</span>
            </Link>

            <Link href="/" className=" p-2 flex  items-center space-x-2">
              <BarChart4 className="w-4 h-4" />
              <span className="font-montserrat">Reports</span>
            </Link>

            <Link href="/" className=" p-2 flex  items-center space-x-2">
              <Files className="w-4 h-4" />
              <span className="font-montserrat">Documents</span>
            </Link>
          </nav>
          <Subscription />
        </div>

        {/* Bottom */}

        <div className="flex flex-col">
  <div className="bg-zinc-950 flex space-x-3 p-3 items-center justify-center rounded-t-xl">
    <button
      className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
      title="Go Back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className="stroke-[#B9FF66]" 
        fill="none"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M11 6L5 12M5 12L11 18M5 12H19"
        />
      </svg>
    </button>
  </div>
</div>

        {/* Subscription Card */}
        {/* Footer Icon */}
      </div>
    </div>
  );
};

export default Sidebar;
