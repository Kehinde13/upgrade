import React from "react";
import frame1 from "@/app/assets/Frame 1000011516.png";
import frame2 from "@/app/assets/Frame 1000011496.png";
import frame3 from "@/app/assets/Frame 1000011498.png";
import frame4 from "@/app/assets/Frame 1000011514.png";
import frame5 from "@/app/assets/Frame 1000011447.png";
import frame6 from "@/app/assets/Frame 1000011455.png";
import fire from "@/app/assets/fi_10760660.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

function Services() {
  return (
    <div className="my-10">
      <div className="p-1 px-2 rounded-2xl mx-auto bg-[#EDEDED] flex items-center gap-1 text-sm mt-5 lg:mt-0 w-[36%] md:w-[14%] lg:w-[8%]">
        <Image src={fire} alt="fireIcon" />
        SERVICES
      </div>
      <h1 className="md:text-5xl font-bold text-center mx-auto lg:w-[60%] my-5">
        CAN HELP YOU ACHIEVE FINANCIAL SUCCESS
      </h1>
      <div className="grid grid-cols-6 mx-auto md:gap-4 gap-2 w-[80%]">
        <div className="col-span-6 mx-auto">
          <Image
            src={frame1}
            alt="Transfer across the globe for free"
            priority
          />
        </div>
        <div className="col-span-3">
          <Image
            src={frame2}
            alt="Create a card that is unique and customized"
          />
        </div>
        <div className="col-span-3">
          <Image src={frame3} alt="Personalized insights and financial goals" />
        </div>
        <div className="col-span-2">
          <Image src={frame4} alt="Transfer across the globe for free" />
        </div>
        <div className="col-span-2">
          <Image src={frame5} alt="Transfer across the globe for free" />
        </div>
        <div className="col-span-2">
          <Image src={frame6} alt="Transfer across the globe for free" />
        </div>
      </div>

      <div className="flex my-10 justify-center">
        <Button className="border-[#00B512] bg-white border text-black rounded-3xl">
          View More
        </Button>
        <button className="bg-[#00B512] rounded-full ml-[-12px] text-white px-2">
          <MoveUpRight />
        </button>
      </div>
    </div>
  );
}

export default Services;
