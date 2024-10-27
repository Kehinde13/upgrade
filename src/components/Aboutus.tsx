"use client";
import Image from "next/image";
import React, { useState } from "react";
import barchart from "@/app/assets/Frame 1000011464.png";
import fire from "@/app/assets/fi_10760660.png";

function Aboutus() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const sections = [
    "Expense Tracker",
    "Crypto Connection",
    "Automated Invoicing",
  ];

  const descriptions = [
    "Our comprehensive selection of medications, supplements, and healthcare products.",
    "From advanced imaging technology such as MRI and CT scanners to precision surgical tools.",
    "We're committed to leveraging the latest innovations in medical technology.",
  ];
  return (
    <div className="lg:flex lg:p-20 md:p-10 p-5 justify-between gap-32">
      <div className="bg-[#EDEDED] rounded-2xl p-10 self-center">
        <Image src={barchart} alt="bar chart" />
      </div>

      <div>
        <div className="p-1 px-2 rounded-2xl bg-[#EDEDED] flex items-center gap-1 text-sm mt-5 lg:mt-0 w-[40%] md:w-[18%]">
          <Image src={fire} alt="fireIcon" />
          ABOUT US
        </div>

        <h1 className="font-bold text-2xl md:text-4xl md:w-[60%] my-5">
          ALL YOUR MONEY NEEDS IN ONE APP
        </h1>

        <div className="flex lg:w-[60%]">
          {/* Left-side indicator bar */}
          <div className="w-2 bg-gray-300 relative rounded-full">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`absolute left-0 w-full transition-colors duration-300 rounded-full ${
                  selectedIndex === index ? "bg-[#04684C]" : "bg-gray-300"
                }`}
                style={{
                  top: `${(index / sections.length) * 100}%`,
                  height: `${100 / sections.length}%`,
                }}
              />
            ))}
          </div>

          {/* Scrollable content */}
          <div className="flex flex-col gap-5 w-full h-full overflow-y-auto  ml-2">
            {sections.map((title, index) => (
              <div
                key={index}
                className={`bg-[#EDEDED] rounded-xl p-3 space-y-2 cursor-pointer ${
                  selectedIndex === index ? "bg-green-100" : ""
                }`}
                onClick={() => handleSelect(index)}
              >
                <h1 className="font-bold">{title}</h1>
                <p>{descriptions[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
