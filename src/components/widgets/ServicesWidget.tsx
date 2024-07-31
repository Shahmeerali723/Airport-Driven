import React from "react";
import Slider from "react-slick";
import ServiceCard from "../shared/ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        title: "Airport Transfer",
        desc: "Seamless and reliable transfers to and from airports in London.",
        image: "/ourServicesCrousel/AirportTransfer.jpeg"
    },
    {
        title: "Railway Transfer",
        desc: "Efficient transfers to major railway stations in London.",
        image: "/ourServicesCrousel/RailwayTransfer.jpeg"
    },
    {
        title: "Cruise Transfer",
        desc: "Timely pickups and drop-offs at all major cruise terminals.",
        image: "/ourServicesCrousel/CruiseTransfer.jpeg"
    },
    {
        title: "Meet and Greet",
        desc: "Personalized service with assistance at arrival points.",
        image: "/ourServicesCrousel/MeetandGreet.jpeg"
    },
    {
        title: "Corporate Events",
        desc: "Reliable transport for business meetings and conferences.",
        image: "/ourServicesCrousel/CorporateEvents.jpeg"
    },
    {
        title: "Chauffeur Service",
        desc: "Luxurious and personalized travel experience.",
        image: "/ourServicesCrousel/ChauffeurService.jpeg"
    },
    {
        title: "Corporate Clients",
        desc: "Tailored transportation solutions for businesses.",
        image: "/ourServicesCrousel/CorporateClients.jpeg"
    },
    {
        title: "Executive Service",
        desc: "Premium vehicles and service for business travelers.",
        image: "/ourServicesCrousel/ExecutiveService.jpeg"
    },
    {
        title: "Hotel Transfer",
        desc: "Stylish and timely transfers to hotels in London.",
        image: "/ourServicesCrousel/HotelTransfer.jpeg"
    },
    {
        title: "London Tour",
        desc: "Customized tours with knowledgeable drivers.",
        image: "/ourServicesCrousel/LondonTour.jpeg"
    },
    {
        title: "School Transfers",
        desc: "Safe and reliable transportation for students to and from school.",
        image: "/ourServicesCrousel/SchoolTransfers.jpeg"
    },
    {
        title: "Airport Car Parking",
        desc: "Convenient and secure parking solutions at major London airports.",
        image: "/ourServicesCrousel/AirportCarParking.jpeg"
    }
];


const ServicesWidget = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-custom-radial py-12 px-4">
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-4xl md:text-5xl font-rockstar font-extrabold text-center mb-12 text-white">
          our services
        </h2>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-2">
              <ServiceCard data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesWidget;
