"use client";
import React from "react";
import { motion } from "framer-motion";

const InventorySummeryCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`rounded-2xl ${item.color} px-6 py-5 text-black montserrat flex justify-between items-center shadow-sm h-16`}
    >
      <span className="text-gray-700 text-sm font-medium">{item.title}</span>
      <h4 className="font-bold montserrat text-xl text-gray-800">{item.number}</h4>
    </motion.div>
  );
};

export default InventorySummeryCard;
