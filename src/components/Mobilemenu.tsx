import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { SquareMenu } from "lucide-react";
import { Button } from "./ui/button";

function Mobilemenu() {
  return (
    <Drawer>
      <DrawerTrigger className="lg:hidden">
        <SquareMenu />
      </DrawerTrigger>
      <DrawerContent className="bg-[#003B47] pb-5 text-white border-0">
        <ul className="space-y-5 mx-auto w-full text-center py-5">
          <li>Personal Loan</li>
          <li>One Card</li>
          <li>Savings</li>
          <li>Checkings</li>
          <li>Help</li>
        </ul>

        <Button className="mt-3 bg-[#003B47] w-[50%] mx-auto border border-white">
          Sign In
        </Button>
      </DrawerContent>
    </Drawer>
  );
}

export default Mobilemenu;
