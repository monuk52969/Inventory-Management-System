'use client'
import FixedHeader from "@/app/components/dashboard/FixedHeader";
import OptionCard from "@/app/components/dashboard/OptionCard";
import React from "react";
import Image from "next/image";

const Page = () => {

  const optionCards = [
    {
      title: "Item Groups",
      description: "Create multiple variants of the same item using Item Groups",
      link: "/new",
      linkTitle: "New Item Group",
      enabled: true,
      icon: "/image/groupicon.svg",
    },
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: "/image/itemicon.svg",
    },
    {
      title: "Composite Items",
      description: "Bundle different items together and sell them as kits",
      link: "/new",
      linkTitle: "New Composite Item",
      enabled: false,
      icon: "/image/composite.svg",
    },
    {
      title: "Price Lists",
      description: "Tweak your item prices for specific contacts or transactions",
      link: "/new",
      linkTitle: "New Price List",
      enabled: true,
      icon: "/image/pricelist.svg",
    },
  ];

  return (
    <div className="montserrat">
      <FixedHeader newLink="/dashboard/inventory/items/new"/>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 px-6 md:px-16">
        {optionCards.map((card, i) => (
          <OptionCard key={i} OptionData={card} />
        ))}
      </div>
    </div>
  );
};

export default Page;
