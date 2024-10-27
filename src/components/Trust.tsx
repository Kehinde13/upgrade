import React from "react";
import phone from "@/app/assets/Group 469291.png";
import Image from "next/image";
import fire from "@/app/assets/fi_10760660.png";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

function Trust() {
  return (
    <div className="bg-[#003B47] p-5 md:p-20 lg:flex justify-between gap-20 text-white">
      <Image src={phone} alt="phone and card" />
      <div className="mt-20">
        <div className="p-1 px-2 rounded-2xl bg-[#003B47] flex items-center gap-1 text-sm mt-5 lg:mt-0 w-[40%] md:w-[18%]">
          <Image src={fire} alt="fireIcon" />
          TRUSTWORTHINESS
        </div>
        <h1 className="md:text-5xl font-bold my-6 capitalize">
          WE VALUE YOUR TRUST AND SECURITY
        </h1>
        <p className="w-[80%]">
          Our mission is to make finance more accessible, transparent, and
          secure for everyone. With cutting.
        </p>
        <div className="flex my-10">
          <Button className="bg-[#00B512] rounded-3xl">Get Started</Button>
          <button className="bg-white rounded-full ml-[-12px] px-2">
            <MoveUpRight className="text-xs text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trust;
