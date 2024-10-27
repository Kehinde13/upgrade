import React from "react";
import fire from "@/app/assets/fi_10760660.png";
import phones from '@/app/assets/Group 469289.png'
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

function Featured() {
  return (
    <div className="lg:flex justify-between lg:p-20 md:p-10 p-5 space-y-10 ">
      <div className="space-y-5 mt-5">
        <div className="p-1 px-2 rounded-2xl bg-[#EDEDED] flex items-center gap-1 text-sm mt-5 lg:mt-0 w-[40%] md:w-[20%]">
          <Image src={fire} alt="fireIcon" />
          FEATURED
        </div>
        <h1 className="text-4xl font-bold md:w-[80%] my-4">ALL THE FEATURES IN ONE APP</h1>
        <ul className="space-y-5 list-disc px-2 text-sm md:w-[70%] ">
            <li>Get 3% cash back on everyday purchases, 2% on everything else4</li>
            <li>Extra Spending Power when you have Rewards Checking through Upgrade6</li>
        </ul>
        <div className="flex">
         <Button className="border-[#00B512] bg-white border text-black rounded-3xl">Get Started</Button> 
         <button className="bg-[#00B512] rounded-full ml-[-12px] text-white px-2"><MoveUpRight /></button>  
        </div>
      </div>

      <div className="rounded-2xl bg-[#EDEDED] p-5">
         <Image src={phones} alt="two phones"/>
      </div>
    </div>
  );
}

export default Featured;
