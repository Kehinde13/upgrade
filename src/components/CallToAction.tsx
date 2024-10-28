import React from "react";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";
import phones from '@/app/assets/Group 469293.png'
import Image from "next/image";

function CallToAction() {
  return (
    <div className="w-full text-white">
      <div className="bg-[#003B47] w-[80%] mx-auto my-20 px-10 pt-10 rounded-xl md:flex background-with-spots">
        <div className="lg:p-10 self-center mb-10">
          <h1 className="lg:text-5xl text-3xl font-bold">ARE YOU READY TO START?</h1>
          <p className="my-5">
            Personalize your settings, follow your progress, archive your
            highlights and notes automatically Glose is the ultimate reading
          </p>
          <div className="flex">
            <Button className="bg-[#00B512] rounded-3xl">Get Started</Button>
            <button className="bg-white rounded-full ml-[-12px] px-2">
              <MoveUpRight className="text-black" />
            </button>
          </div>
        </div>
        <Image src={phones} alt="phones" />
      </div>
    </div>
  );
}

export default CallToAction;
