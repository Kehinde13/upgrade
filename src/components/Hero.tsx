import Image from "next/image";
import React from "react";
import heroImg from '@/app/assets/Group 469294.png'
import fire from '@/app/assets/fi_10760660.png'
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

function Hero() {
  return (
    <div className="md:flex justify-between md:px-10 lg:px-20 py-10 px-5 bg-[#003B47] text-white">
      <div className="md:mt-20 mt-5 md:w-[50%] flex flex-col gap-5">
        <div className="flex rounded-xl items-center text-sm gap-2">
            <Image src={fire} alt="fire icon" />
            100% TRUSTED PLATFORM
        </div>
        <h1 className="font-bold text-4xl md:text-6xl">FINANCE WITH SECURITY AND <span className="text-[#E2FF54]">FLEXIBILITY</span></h1>
        <p className="md:w-[70%]">
          no-fee checking account with cash back rewards. Enjoy fee-free banking
          and earn cash back on your everyday purchases.
        </p>

        <div className="flex">
         <Button className="bg-[#00B512] rounded-3xl">Open Account</Button> 
         <button className="bg-white rounded-full ml-[-12px] px-2"><MoveUpRight className="text-black" /></button>  
        </div>
        
      </div>
      <div className="mt-5">
        <Image src={heroImg} alt='heroImg' />
      </div>
    </div>
  );
}

export default Hero;
