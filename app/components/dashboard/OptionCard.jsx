'use client'
import { Plus } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const OptionCard = ({ OptionData }) => {
  const { title, description, link, linkTitle, enabled, icon } = OptionData;

  return (
    <div className="shadow-xl bg-[#1F1F1F] rounded-xl p-6 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
      <h2 className="text-white text-lg font-semibold">{title}</h2>

      <div>
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>

      <p className="text-gray-300 text-sm">{description}</p>

      {enabled ? (
        <Link
          href={link}
          className="relative inline-flex items-center justify-center gap-2 w-40 h-10 text-sm font-medium rounded
            overflow-hidden bg-gradient-to-r from-[#C5E1A5] to-[#A1D78F] text-black transition-all duration-500 group"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-[#A1D78F] to-[#6FB96F] 
              -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
          ></span>

          <Plus className="w-3 h-3 relative z-10" />
          <span className="relative z-10">{linkTitle}</span>
        </Link>
      ) : (
        <button
          disabled
          className="py-2 px-4 rounded bg-gray-600 text-white opacity-50 cursor-not-allowed"
        >
          Disabled
        </button>
      )}
    </div>
  );
};

export default OptionCard;
