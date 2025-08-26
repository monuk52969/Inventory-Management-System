"use client";
import { motion } from "framer-motion";
import { CheckCircle2, PackageCheck, ShoppingBag, Truck, Info } from "lucide-react";
import React from "react";

const salesActivity = [
  {
    title: "To be Packed",
    number: 51,
    icon: <CheckCircle2 className="text-blue-600 w-6 h-6" />,
    color: "bg-[#E2D7FF]",
    numberColor: "text-blue-600",
  },
  {
    title: "To be Shipped",
    number: 40,
    icon: <PackageCheck className="text-red-500 w-6 h-6" />,
    color: "bg-[#BFF0D2]",
    numberColor: "text-red-500",
  },
  {
    title: "To be Delivered",
    number: 52,
    icon: <ShoppingBag className="text-green-600 w-6 h-6" />,
    color: "bg-[#EABFAE]",
    numberColor: "text-green-600",
  },
  {
    title: "To be Invoiced",
    number: 97,
    icon: <Truck className="text-yellow-500 w-6 h-6" />,
    color: "bg-[#BED3FF]",
    numberColor: "text-yellow-500",
  },
];

const SalesActivityCard = () => {
  return (
    <div className="col-span-8">
      <h2 className="mb-6 text-xl montserrat font-semibold">Sales Activity</h2>
      <div className="grid grid-cols-4 gap-6">
        {salesActivity.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={`relative montserrat rounded-2xl ${item.color} p-5 flex flex-col justify-between h-36 shadow-sm`}
          >
            <div className="flex justify-between items-start">
              {item.icon}
              <button className="bg-white/60 rounded-full p-1 hover:bg-white">
                <Info className="w-4 h-4 text-gray-700" />
              </button>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-gray-700">{item.title}</span>
              <h4 className={`text-2xl montserrat font-bold ${item.numberColor}`}>{item.number}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SalesActivityCard;
