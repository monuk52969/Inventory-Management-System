'use client'
import {
  BaggageClaim,
  BarChart4,
  Blocks,
  ChevronLeft,
  CreditCard,
  Files,
  Home,
  IndianRupee,
  PlusCircle,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Subscription from "./Subscription";
 
import { href } from "react-router-dom";
import SidebarDropdownLink from "./SidebarDropdownLink";

const Sidebar = () => {
  const inventoryLinks = [
    {
      title: "Items",
      href: "/dashboard/inventory/items/new",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory/categories/new",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory/brands/new",
    },
    {
      title: "Units",
      href: "/dashboard/inventory/units/new",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/warehouse/new",
    },
    {
      title: "Inventory Adjustments",
      href: "/dashboard/inventory",
    },
  ];
   const salesLinks = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Orders",
      href: "#",
    },
    {
      title: "Packages",
      href: "#",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Sales Receipts",
      href: "#",
    },
    {
      title: "Payment Received",
      href: "#",
    },
    {
      title: "Sales returns",
      href: "#",
    },
    {
      title: "Credit Notes",
      href: "#",
    },
  ];
  return (
    <div>
      <div className="w-60 min-h-screen bg-[#111111] text-[#FEFEFE] sticky    justify-between ">
        {/* Top Part */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="bg-zinc-950 flex space-x-3 p-3 items-center rounded-t-xl">
            <ShoppingCart className="w-8 h-8 text-[#C5E1A5]" />
            <span className=" text-md font-semibold uppercase"> Inventory</span>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3 px-3 py-6">
            <Link
              href="/"
              className="flex items-center bg-[#C5E1A5] text-zinc-950 p-2 rounded-md space-x-3"
            >
              <Home className="w-4 h-4" />
              <span className="montserrat">Home</span>
            </Link>




            <SidebarDropdownLink 
            items={inventoryLinks}
            title="Inventory"
            icon={BaggageClaim}
            />

            <SidebarDropdownLink 
            items={salesLinks}
            title="Sales"
            icon={ShoppingBasket}
            />

            

            <button className="flex  items-center space-x-2 p-2">
              <CreditCard className="w-4 h-4" />
              <span className="montserrat">Purchases</span>
            </button>

            <Link href="/" className="flex  items-center space-x-2 p-2">
              <Blocks className="w-4 h-4" />
              <span className="montserrat">Integrations</span>
            </Link>

            <Link href="/" className=" p-2 flex  items-center space-x-2">
              <BarChart4 className="w-4 h-4" />
              <span className="montserrat">Reports</span>
            </Link>

            <Link href="/" className=" p-2 flex  items-center space-x-2">
              <Files className="w-4 h-4" />
              <span className="montserrat">Documents</span>
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
                className="stroke-[#C5E1A5]"
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
