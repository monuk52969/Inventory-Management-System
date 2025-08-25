"use client"
import { Search } from "lucide-react";
import React, { useState } from "react";

const Searchinput = () => {
  const [query, setQuery] = useState("");

  return (
    <form className="w-full max-w-md mx-auto">
      <div className="relative">
        {/* Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-[#C5E1A5]" />
        </div>

        {/* Input */}
        <input
          type="search"
          id="default-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full rounded-full border-[1px] border-zinc-700 bg-transparent 
                     py-2 pl-10 pr-24 text-sm text-[#101010] 
                     focus:border-[#C5E1A5] focus:ring-[#C5E1A5] focus:ring-[0.2] focus:outline-none"
          placeholder="Search in Customers..."
          required
        />

        {/* Button */}
        {/* <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full 
                     bg-gradient-to-r from-[#D6F956] to-[#D6F956] 
                     px-4 py-1.5 text-xs font-medium text-zinc-900
                     shadow-md hover:from-[#c6e946] hover:to-[#c6e946] 
                     focus:outline-none focus:ring-2 focus:ring-[#D6F956] 
                     focus:ring-offset-1 transition-all duration-300"
        >
          Search
        </button> */}
      </div>
    </form>
  );
};

export default Searchinput;
