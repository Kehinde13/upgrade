import Image from "next/image";
import React from "react";
import fire from "@/app/assets/fi_10760660.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import quote from "@/app/assets/fi_1155679 (1).png";
import mike from "@/app/assets/Ellipse 12.jpg";
import richard from "@/app/assets/Ellipse 12.png";
import thomas from "@/app/assets/Ellipse 12 (1).png";
import stars from "@/app/assets/image 20.png";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

function Testimonial() {
  const testimonials = [
    {
      name: "Mike Torello",
      role: "CEO of Initech",
      pic: mike,
      desc: "I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product",
    },
    {
      name: "Richard Hawkins",
      role: "Marketing Manager of Upnow",
      pic: richard,
      desc: "We have successfully sold digital product and have happy with the results & look forward to using it again this.",
    },
    {
      name: "Thomas Magnow",
      role: "Barellon NSW",
      pic: thomas,
      desc: "Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible ..",
    },
  ];
  return (
    <div className="bg-[#EDEDED] p-10">
      <div className="p-1 px-2 mt-10 rounded-2xl mx-auto bg-[#EDEDED] border border-gray-400 flex items-center gap-1 text-sm lg:mt-0 w-[41%] md:w-[20%] lg:w-[11%]">
        <Image src={fire} alt="fireIcon" />
        TESTIMONIALS
      </div>
      <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center mx-auto lg:w-[60%] my-5">
        GET TO KNOW OUR CLIENTS
      </h1>
      <div className="lg:flex space-y-3 md:p-5 lg:p-0 lg:space-y-0 justify-around gap-3 md:w-[80%] mx-auto my-20">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={index === 1 ? "bg-[#004852]" : "bg-white"}
          >
            <CardHeader>
              <Image src={quote} alt="quote" />
            </CardHeader>
            <CardContent className="text-sm">
              <p className={index === 1 ? "text-white" : "text-[#004852]"}>
                {testimonial.desc}
              </p>
            </CardContent>
            <CardFooter>
              <Image src={testimonial.pic} alt="user picture" />
              <div
                className={`ml-3 text-xs space-y-1 ${
                  index === 1 ? "text-white" : "text-[#004852]"
                }`}
              >
                <Image src={stars} alt="stars" />
                <p>{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
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

export default Testimonial;
