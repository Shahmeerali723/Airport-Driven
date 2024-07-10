import React from "react";
import NavDropDown from "../shared/NavDropDown";
import { Button } from "../ui/button";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsTrainFrontFill } from "react-icons/bs";
import { RiShip2Fill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { CgRing } from "react-icons/cg";
import { FaCar } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const data = {
    airportRuns: {
      title: "Airport Runs",
      runs: [
        {name:"Gatwick Airport",icon:<BsFillAirplaneFill/>},
        {name:"Heathrow Airport",icon:<BsFillAirplaneFill/>},
        {name:"London City Airport",icon:<BsFillAirplaneFill/>},
        {name:"Luton Airport",icon:<BsFillAirplaneFill/>},
      ],
    },
    stationRuns: {
      title: "Station Runs",
      runs: [
        {name:"Paddington Station",icon:<BsTrainFrontFill/>},
        {name:"Euston Station",icon:<BsTrainFrontFill/>},
        {name:"Victoria Station",icon:<BsTrainFrontFill/>},
        {name:"Waterloo Station",icon:<BsTrainFrontFill/>},
        {name:"King's Cross Station",icon:<BsTrainFrontFill/>},
      ],
    },
    cruiseRuns: {
      title: "Cruise Runs",
      runs: [
        {name:"Harwich seaport",icon:<RiShip2Fill/>},
        {name:"Dover seaport",icon:<RiShip2Fill/>},
        {name:"Portsmouth seaport",icon:<RiShip2Fill/>},
        {name:"Southampton seaport",icon:<RiShip2Fill/>},
        {name:"Port of London",icon:<RiShip2Fill/>},
        {name:"Tilbury seaport",icon:<RiShip2Fill/>},
        
      ],
    },
    specialOffers: {
      title: "Special Offers",
      runs: [
        { name: "Corporate Events", icon: <FaBookOpen/> },
        { name: "Chauffeur Services", icon: <FaUniversity/> },
        { name: "Corporate Clients", icon: <CgRing/> },
        { name: "Executive Service", icon: <FaCar/> },
        { name: "Meet & Greet", icon: <FaRoad/> },
        { name: "London Tours", icon: "" },
        { name: "Hotel Transfers", icon: "" },
      ],
    },
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center p-3">
        <div>
          <Image src={'/LOGO.png'} alt="" width={140} height={100} />
        </div>
        <div>
          <ul className="flex items-center gap-6">
            <li>Home</li>
            <li>
              <NavDropDown data={data.airportRuns} />
            </li>
            <li>
              <NavDropDown data={data.stationRuns} />
            </li>
            <li>
              <NavDropDown data={data.cruiseRuns} />
            </li>
            <li>
              <NavDropDown data={data.specialOffers} />
            </li>
            <li>Cover Areas</li>
            <li>Blog</li>
            <Button className="bg-primary text-white">Signup</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
