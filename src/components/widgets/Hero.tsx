import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import HeroImage from "@/assets/herobg.png";
import InputComp from "../shared/InputComp";
import Booking from "../forms/Booking";
import { TiTick } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full">
      <Image src={HeroImage} className="w-full object-cover" alt="Hero Background" />
      <div className="">
        <div className="absolute  inset-y-0 left-0 flex flex-col lg:flex-row items-center justify-between p-1  md:p-3 lg:p-12 bg-black bg-opacity-40 w-full">

          <div className="flex flex-col lg:flex-row items-center justify-between p-3 sm:p-6 md:p-10 container">
            <div className="text-left w-full lg:w-1/2 flex flex-col gap-2 sm:gap-6 md:gap-9">
              <h1 className="font-rockstar text-sm min-[380px]:text-xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-custom-primary inline-block text-white font-extrabold uppercase">
                quick, reliable, stress free
              </h1>
              <div className="flex items-center gap-4 md:gap-7">
                <div className="bg-primary w-fit sm:p-1 p-0.5 rounded-full text-white">
                  <TiTick className="sm:text-sm text-xs"/>
                </div>
                <div>
                  <h3 className="capitalize text-xs min-[380px]:text-sm sm:text-lg md:text-2xl text-white font-poppins font-semibold">
                    airport transfers
                  </h3>
                  <h3 className="capitalize text-xs md:text-sm text-white font-poppins">
                    cheaper than black cabs
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-7">
                <div className="bg-primary w-fit sm:p-1 p-0.5 rounded-full text-white">
                  <TiTick className="sm:text-sm text-xs"/>
                </div>
                <div>
                  <h3 className="capitalize text-xs min-[380px]:text-sm sm:text-lg md:text-2xl text-white font-poppins font-semibold">
                    cruise & railway transfer
                  </h3>
                  <h3 className="capitalize text-xs md:text-sm text-white font-poppins">
                    exceptional value
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-7">
                <div className="bg-primary w-fit sm:p-1 p-0.5  rounded-full text-white">
                  <TiTick className="sm:text-sm text-xs"/>
                </div>
                <div>
                  <h3 className="capitalize text-xs min-[380px]:text-sm sm:text-lg md:text-2xl text-white font-poppins font-semibold">
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
        
      </div>
      

      <div className="absolute right-0 top-14 md:top-24 flex flex-col gap-4 text-white w-fit">

        <div  className="pr-4 p-2 text-sm md:text-xl rounded-l-3xl bg-[#14BE1B] text-left">
          <FaWhatsapp/>
        </div>
        <div className="pr-4 p-2 text-sm md:text-xl rounded-l-3xl bg-[#DD950A] text-left">
          <FaPhoneAlt/>
        </div>

      </div>

    </div>
  );
};

export default Hero;
