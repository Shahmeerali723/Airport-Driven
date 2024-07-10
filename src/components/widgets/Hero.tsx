import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import HeroImage from "@/assets/herobg.png";
import InputComp from "../shared/InputComp";
import Booking from "../forms/Booking";
import { TiTick } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="relative w-full">
      <Image src={HeroImage} className="w-full object-cover" alt="Hero Background" />
      <div className="absolute inset-y-0 left-0 flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 bg-black bg-opacity-40 w-full">
        <div className="text-left w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-9">
          <h1 className="font-rockstar text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-custom-primary inline-block text-white font-extrabold uppercase">
            quick, reliable, stress free
          </h1>
          <div className="flex items-center gap-4 md:gap-7">
            <div className="bg-primary w-fit p-1 rounded-full text-white">
              <TiTick />
            </div>
            <div>
              <h3 className="capitalize text-md sm:text-lg md:text-2xl text-white font-poppins font-semibold">
                airport transfers
              </h3>
              <h3 className="capitalize text-xs md:text-sm text-white font-poppins">
                cheaper than black cabs
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-7">
            <div className="bg-primary w-fit p-1 rounded-full text-white">
              <TiTick />
            </div>
            <div>
              <h3 className="capitalize text-md sm:text-lg md:text-2xl text-white font-poppins font-semibold">
                cruise & railway transfer
              </h3>
              <h3 className="capitalize text-xs md:text-sm text-white font-poppins">
                exceptional value
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-7">
            <div className="bg-primary w-fit p-1 rounded-full text-white">
              <TiTick />
            </div>
            <div>
              <h3 className="capitalize text-md sm:text-lg md:text-2xl text-white font-poppins font-semibold">
                meet & greet
              </h3>
              <h3 className="capitalize text-xs md:text-sm text-white font-poppins">
                bespoke service to fit around you
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white w-full lg:w-[400px] xl:w-[500px] p-6 md:p-8 xl:p-12 mt-6 lg:mt-0 rounded-lg hidden lg:block">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Hero;
