import React from "react";
import { FaBuilding, FaCarAlt } from "react-icons/fa";
import { ImMeter } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { GiCaptainHatProfile } from "react-icons/gi";

const OurExpertise = () => {
  return (
    <div className="w-full flex  items-center">
      <div className="container ">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-8 md:gap-4 p-4 ">
          <div className="flex flex-col justify-center items-center ">
            <div className="bg-white shadow-md w-fit p-2 text-5xl mb-2 rounded-lg text-primary">
              <FaCarAlt />
            </div>
            <h3 className="text-sm md:text-xl text-center">Complete Booking</h3>
            <p className="text-black  mt-2 font-bold text-3xl"> 4212+</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white shadow-md w-fit p-2 text-5xl mb-2 rounded-lg text-primary">
              <ImMeter />
            </div>
            <h3 className="text-sm md:text-xl text-center">Kilometers Driven</h3>
            <p className="text-black  mt-2 font-bold text-3xl">513413+</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white shadow-md w-fit p-2 text-5xl mb-2 rounded-lg text-primary">
              <HiUsers />
            </div>
            <h3 className="text-sm md:text-xl text-center">Happy Clients</h3>
            <p className="text-black  mt-2 font-bold text-3xl">96%</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white shadow-md w-fit p-2 mb-2 text-5xl rounded-lg text-primary">
              <FaBuilding />
            </div>
            <h3 className="text-sm md:text-xl text-center">Affiliate Companies</h3>
            <p className="text-black  mt-2 font-bold text-3xl">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
