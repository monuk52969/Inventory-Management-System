'use client'
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const DashboardBanner = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "relative grid grid-cols-12 items-center gap-6 py-6 px-6 bg-[#1F1F1F] rounded-[2vw] border border-zinc-800/50 shadow-md"
      }`}
    >
      {/* Left: Icon */}
      <div className="col-span-1 flex justify-center">
        <Image
          src="/image/payment.gif"
          width={64}
          height={64}
          alt="payment"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Middle: Text */}
      <div className="col-span-7">
        <h2 className="text-xl font-bold text-[#B9FF66]">
          Start accepting online payments
        </h2>
        <p className="text-sm text-zinc-400 mt-1 leading-relaxed max-w-xl">
          Businesses are moving towards online payments as they&apos;re easy,
          secure, and fast. Try them for your business today.
        </p>
      </div>

      {/* Right: Button */}
      <div className="col-span-4 flex justify-center md:justify-center">
        <button className="cursor-pointer group relative bg-white hover:bg-[#B9FF66] text-black font-semibold text-sm px-5 py-2 rounded-2xl transition-all duration-200 ease-in-out shadow hover:shadow-lg w-32 h-12">
          <div className="relative flex items-center justify-center gap-2">
            {/* Text hover animation */}
            <span className="relative inline-block overflow-hidden">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                Enable
              </span>
              <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                Now
              </span>
            </span>

            {/* Icon */}
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
              viewBox="0 0 24 24"
            >
              <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="white"
                d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setHidden(true)}
        className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default DashboardBanner;
