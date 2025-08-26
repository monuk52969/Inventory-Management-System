"use client";
import React from "react";
import SalesActivityCard from "@/app/components/dashboard/SalesActivityCard";
import InventorySummeryCard from "./InventorySummeryCard";

const inventorySummary = [
  {
    title: "Quantity in Hand",
    number: "12,746",
    color: "bg-[#FDF7C3]",
  },
  {
    title: "Quantity to be Received",
    number: "62",
    color: "bg-[#FFD6E0]",
  },
];

const SalesOverview = () => {
  return (
    <div className="border-b p-8 grid grid-cols-12 gap-8 bg-[#1F1F1F] rounded-[2vw] mt-2">
      {/* SALES ACTIVITY */}
      <SalesActivityCard />

      {/* INVENTORY SUMMARY */}
      <div className="col-span-4 flex flex-col">
        <h2 className="mb-6 text-xl montserrat font-semibold">Inventory Summary</h2>
        <div className="grid grid-cols-1 gap-4">
          {inventorySummary.map((item, index) => (
            <InventorySummeryCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
