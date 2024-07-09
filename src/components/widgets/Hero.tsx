import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import HeroImage from "@/assets/herobg.png"
import InputComp from "../shared/InputComp";
import Booking from "../forms/Booking";

const Hero = () => {
  return (
    <div className="relative w-full">
      <Image src={HeroImage} className="w-full" alt="Hero Background" />
      <div className="absolute inset-y-0 left-0 flex items-center justify-between  p-12 bg-black bg-opacity-40 ">
        <div className="text-left w-[50%] flex flex-col gap-3">
          <h1 className="text-5xl bg-gradient-custom-primary inline-block text-transparent bg-clip-text font-plus-jakarta font-extrabold">
            CLICK ONCE <br />
            AND YOU’RE ON YOUR WAY
          </h1>
          <p className="text-textprimary-light font-plus-jakarta">
            Welcome to Cabbx, your trusted companion in navigating the bustling
            streets of the UK. With just a click, embark on seamless journeys
            that redefine convenience and comfort.
          </p>
          <Button className="bg-orange text-white w-fit">Book now</Button>
        </div>
        <div className="bg-white p-3 rounded-lg">
            <Booking/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
