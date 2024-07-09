import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import HeroImage from "@/assets/herobg.png"
import InputComp from "../shared/InputComp";
import Booking from "../forms/Booking";
import { TiTick } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="relative w-full ">
      <Image src={HeroImage} className="w-full " alt="Hero Background" />
      <div className="absolute inset-y-0 left-0 flex items-center justify-between  p-16 bg-black bg-opacity-40 w-full">
        <div className="text-left w-[50%] flex flex-col gap-9">
          <h1 className="font-rockstar text-6xl bg-gradient-custom-primary inline-block text-white  font-extrabold uppercase">
            quick , reliable ,
            stress free
          </h1>
          <div className="flex items-center gap-7">
            <div className="bg-primary w-fit p-1 rounded-full text-white">

              <TiTick />
            </div>
            <div>
              <h3 className="capitalize  text-2xl text-white font-poppins font-semibold">
              airport transfers
              </h3>
              <h3 className="capitalize  text-sm text-white font-poppins ">
              cheaper than black cabs
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="bg-primary w-fit p-1 rounded-full text-white">

              <TiTick />
            </div>
            <div>
              <h3 className="capitalize  text-2xl text-white font-poppins font-semibold">
              cruise & railway transfer
              </h3>
              <h3 className="capitalize  text-sm text-white font-poppins ">
              exceptional value
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="bg-primary w-fit p-1 rounded-full text-white">

              <TiTick />
            </div>
            <div>
              <h3 className="capitalize  text-2xl text-white font-poppins font-semibold">
              meet & greet
              </h3>
              <h3 className="capitalize  text-sm text-white font-poppins ">
              bespoke service to fit around you
              </h3>
            </div>
          </div>

        </div>
        <div className="bg-white w-[500px] p-12  rounded-lg">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Hero;
