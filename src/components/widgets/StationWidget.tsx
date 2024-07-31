// pages/index.js
import { useState } from "react";
import Image from "next/image";
import StationCard from "../shared/StationCard";


const railwayStations = [
  {
    name: "Paddington",
    image: "/railway1.png",
    description: "Punctual transfers to Paddington Station, ensuring you never miss your train with our reliable service.",
  },
  {
    name: "Euston",
    image: "/railway2.png",
    description: "Reliable transfers to Euston Station, prioritizing your schedule for stress-free travel across London.",
  },
  {
    name: "Waterloo",
    image: "/railway3.png",
    description: "Hassle-free transfers to Waterloo Station, navigating London's traffic to ensure timely arrivals and departures.",
  },
  {
    name: "London Bridge",
    image: "/railway4.png",
    description: "Efficient transfers to London Bridge Station, providing prompt and comfortable travel for your journey.",
  },
  {
    name: "Victoria",
    image: "/railway5.png",
    description: "Reliable transfers to Victoria Station, offering comfortable and punctual journeys for both arrivals and departures.",
  },
  // Add more railway stations as needed
];

const cruiseStations = [
  {
    name: "Harwich",
    image: "/station/harwich.webp",
    description: "Smooth transfers to Harwich Port, ensuring a relaxed start to your cruise with punctual service.",
  },
  {
    name: "Dover",
    image: "/station/dover.webp",
    description: "Efficient transfers to Dover Port, guaranteeing timely arrivals and stress-free journeys to or from the port.",
  },
  {
    name: "Portsmouth",
    image: "/station/portsmouth.webp",
    description: "Seamless transfers to Portsmouth Port, providing comfortable travel for a smooth start to your cruise.",
  },
  {
    name: "Southampton",
    image: "/station/southampton.jpg",
    description: "Punctual transfers to Southampton Port, ensuring you arrive on time and ready for your maritime adventure.",
  },
  {
    name: "Port of London",
    image: "/station/port-of-london.jpeg",
    description: "Efficient transfers to the Port of London, navigating busy routes for stress-free travel to or from the port.",
  },
  {
    name: "Tilbury",
    image: "/station/tibulary.jpeg",
    description: "Reliable transfers to Tilbury Port, ensuring punctual arrivals and a seamless beginning to your cruise experience."
  },
  // Add more cruise stations as needed
];
const airports = [
  {
    name: "Heathrow",
    image: "/station/hethrow.webp",
    description: "Seamless transfers to and from Heathrow Airport with punctual service, ensuring you arrive on time for business or leisure",
  },
  {
    name: "Gatwick",
    image: "/station/gatwick.png",
    description: "Stress-free travel to Gatwick Airport with reliable transfers, guaranteeing a smooth journey for arrivals and departures.",
  },
  {
    name: "London Bridge",
    image: "/station/london-bridge.jpg",
    description: "Efficient transfers to London City Airport, ensuring a seamless and comfortable start or end to your trip",
  },
  {
    name: "Luton",
    image: "/station/luton.png",
    description: "Efficient transfers to Luton Airport, providing timely and comfortable travel for both business and leisure trips.",
  },

  // Add more cruise stations as needed
];

export default function StationSection() {
  const [selectedStationType, setSelectedStationType] = useState("airport");
  const [selectedStation, setSelectedStation] = useState(airports[0]);
  const [customArray, setCustomArray] = useState<any>([]);
  let temp: any[] = [];
  const stations = selectedStationType === "railway" ? railwayStations : selectedStationType === "airport" ? airports : cruiseStations;

  return (
    <div className="w-full">

      <div className="container py-8">

        <div className="flex flex-col items-center justify-center font-plus-jakarta ">
          <div className="w-full flex flex-col gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-center mb-1 font-rockstar uppercase text-primary">Station Services</h3>
            </div>
            <div className="flex justify-center  w-fit mx-auto  rounded-2xl font-poppins">
              <button
                className={`px-2 sm:px-6   py-2  rounded-lg ${selectedStationType === "airport" ? "bg-primary text-white relative   border-white " : " text-black border border-primary"}`}
                onClick={() => {
                  setSelectedStationType("airport");
                  setSelectedStation(airports[0]);
                }}
              >
                Airports
              </button>
              <button
                className={`px-2 sm:px-6 ml-2  py-2  rounded-lg ${selectedStationType === "railway" ? "bg-primary text-white relative   border-white " : " text-black border border-primary"}`}
                onClick={() => {
                  setSelectedStationType("railway");
                  setSelectedStation(railwayStations[0]);
                }}
              >
                Railway
              </button>
              <button
                className={`px-3 sm:px-6   ml-2 py-2 rounded-lg  ${selectedStationType === "cruise" ? "bg-primary text-white relative   border-white " : " text-black border  border-primary "}`}
                onClick={() => {
                  setSelectedStationType("cruise");
                  setSelectedStation(cruiseStations[0]);
                }}
              >
                Cruise
              </button>
            </div>
            <div className={`mb-2 grid ${selectedStationType === "railway" ? "grid-cols-1" : "md:grid-cols-5"} gap-4`}>
              <div className={`border-4 border-primary rounded-2xl ${selectedStationType === "railway" ? "col-span-1" : "col-span-4"}`}>
                <StationCard station={selectedStation} />
              </div>
              <div className="md:flex hidden">

                <div className={`${selectedStationType === "railway" ? "col-span-1" : ""} grid ${selectedStationType === "railway" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" : "grid-cols-1 "} gap-4`}>
                  {stations.map((station, index) => {
                    if (selectedStationType !== "railway") {
                      if (index < 3) {
                        return (
                          <button
                            key={index}
                            className={`p-2 rounded-2xl  relative  ${selectedStation.name === station.name ? "border-4 border-primary bg-primary" : "border-[3px] border-gray-300 bg-gray-300"}`}
                            onClick={() => setSelectedStation(station)}
                          >
                            <div className={`absolute bottom-0 left-0 right-0  bg-black bg-opacity-30 ${selectedStation.name === station.name ? "rounded-xl" : "rounded-xl "}`}>
                            </div>
                            <Image
                              src={station.image}
                              alt={station.name}
                              className="w-full h-full object-cover rounded-xl"
                              width={120}
                              height={100}
                            />
                            <div className="absolute bottom-0 p-1 left-0 flex flex-col">

                              <span className=" text-center w-full text-white font-semibold">{station.name}</span>
                              <span className="  text-center w-full text-[9px] text-white font-semibold">{station.description}</span>
                            </div>
                          </button>
                        );
                      } else {
                        temp.push(station);
                      }
                    } else {
                      return (
                        <button
                          key={index}
                          className={`rounded-xl relative  ${selectedStation.name === station.name ? "border-4 border-primary bg-primary" : "border-4 border-gray-300 bg-gray-300"}`}
                          onClick={() => setSelectedStation(station)}
                        >
                          <div className={`absolute bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 ${selectedStation.name === station.name ? "rounded-xl" : "rounded-xl "}`}>
                          </div>
                          <Image
                            src={station.image}
                            alt={station.name}
                            className="w-full rounded-xl h-32  object-cover"
                            width={150}
                            height={100}
                          />
                          <div className="absolute bottom-0 p-1 left-0 flex flex-col">

                            <span className=" text-center w-full text-white font-semibold">{station.name}</span>
                            <span className="  text-center w-full text-[9px] text-white font-semibold">{station.description}</span>
                          </div>
                        </button>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <div className="hidden md:block">

              <div className="grid grid-cols-5 gap-5 mt-[-25px] ">
                {temp.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`rounded-2xl  relative  ${selectedStation.name === item.name ? "border-4 border-primary bg-primary" : "border-4 border-gray-300 bg-gray-300"}`}
                      onClick={() => setSelectedStation(item)}
                    >
                      <div className={`absolute bottom-0 left-0 right-0 h-full bg-opacity-30 ${selectedStation.name === item.name ? "rounded-xl" : "rounded-xl "}`}>
                      </div>
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-xl object-cover"
                        width={120}
                        height={100}
                      />
                      <span className="absolute bottom-4 left-0 text-center w-full text-white font-semibold">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={`md:hidden block`}>

              <div className="grid grid-cols-3 gap-2">

                {stations.map((station: any, index: any) => {

                  return (
                    <button
                      key={index}
                      className={`rounded-2xl  relative  ${selectedStation.name === station.name ? "border-4 border-primary bg-primary" : "border-4 border-gray-300 bg-gray-300"}`}
                      onClick={() => setSelectedStation(station)}
                    >
                      <div className={`absolute bottom-0 left-0 right-0  bg-black bg-opacity-30 ${selectedStation.name === station.name ? "rounded-xl" : "rounded-xl "}`}>
                      </div>
                      <Image
                        src={station.image}
                        alt={station.name}
                        className="w-full h-full object-cover rounded-xl"
                        width={120}
                        height={100}
                      />
                      <div className="absolute bottom-0 p-1 left-0 flex flex-col">

                        <span className=" text-center w-full text-white font-semibold">{station.name}</span>
                        <span className="  text-center w-full text-[9px] text-white font-semibold hidden sm:block">{station.description}</span>
                      </div>
                    </button>
                  )

                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
