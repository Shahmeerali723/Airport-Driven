"use client"
import React, { useState } from "react";
import Image from "next/image";
import NavDropDown from "../shared/NavDropDown";
import { Button } from "../ui/button";
import { BsFillAirplaneFill, BsTrainFrontFill } from "react-icons/bs";
import { RiShip2Fill } from "react-icons/ri";
import { FaBookOpen, FaUniversity, FaCar, FaRoad } from "react-icons/fa";
import { CgRing } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    airportRuns: {
      title: "Airport Runs",
      runs: [
        { name: "Gatwick Airport", icon: <BsFillAirplaneFill /> },
        { name: "Heathrow Airport", icon: <BsFillAirplaneFill /> },
        { name: "London City Airport", icon: <BsFillAirplaneFill /> },
        { name: "Luton Airport", icon: <BsFillAirplaneFill /> },
      ],
    },
    stationRuns: {
      title: "Station Runs",
      runs: [
        { name: "Paddington Station", icon: <BsTrainFrontFill /> },
        { name: "Euston Station", icon: <BsTrainFrontFill /> },
        { name: "Victoria Station", icon: <BsTrainFrontFill /> },
        { name: "Waterloo Station", icon: <BsTrainFrontFill /> },
        { name: "King's Cross Station", icon: <BsTrainFrontFill /> },
      ],
    },
    cruiseRuns: {
      title: "Cruise Runs",
      runs: [
        { name: "Harwich seaport", icon: <RiShip2Fill /> },
        { name: "Dover seaport", icon: <RiShip2Fill /> },
        { name: "Portsmouth seaport", icon: <RiShip2Fill /> },
        { name: "Southampton seaport", icon: <RiShip2Fill /> },
        { name: "Port of London", icon: <RiShip2Fill /> },
        { name: "Tilbury seaport", icon: <RiShip2Fill /> },
      ],
    },
    specialOffers: {
      title: "Special Offers",
      runs: [
        { name: "Corporate Events", icon: <FaBookOpen /> },
        { name: "Chauffeur Services", icon: <FaUniversity /> },
        { name: "Corporate Clients", icon: <CgRing /> },
        { name: "Executive Service", icon: <FaCar /> },
        { name: "Meet & Greet", icon: <FaRoad /> },
        { name: "London Tours", icon: "" },
        { name: "Hotel Transfers", icon: "" },
      ],
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div>
            <Image src={"/LOGO.png"} alt="Logo" width={140} height={100} />
          </div>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="lg:hidden">
          <div className="bg-primary p-2 flex rounded-md flex-col gap-2" onClick={toggleMenu}>
              <div className="w-10 h-1 rounded-md bg-white"></div>
              <div className="w-10 h-1 rounded-md bg-white"></div>
              <div className="w-10 h-1 rounded-md bg-white"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              <li className="text-gray-800 hover:text-primary transition duration-300">
                Home
              </li>
              <NavDropDown data={data.airportRuns} />
              <NavDropDown data={data.stationRuns} />
              <NavDropDown data={data.cruiseRuns} />
              <NavDropDown data={data.specialOffers} />
              <li className="text-gray-800 hover:text-primary transition duration-300">
                Cover Areas
              </li>
              <li className="text-gray-800 hover:text-primary transition duration-300">
                Blog
              </li>
            </ul>
            <Button className="bg-primary text-white">Signup</Button>
          </nav>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="bg-white shadow-md mt-2 py-3 rounded-md">
              <ul className="flex flex-col items-center space-y-3">
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  Home
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <NavDropDown data={data.airportRuns} />
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <NavDropDown data={data.stationRuns} />
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <NavDropDown data={data.cruiseRuns} />
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <NavDropDown data={data.specialOffers} />
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  Cover Areas
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  Blog
                </li>
                <li>
                  <Button className="bg-primary text-white">Signup</Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
