import React from "react";
import Slider from "react-slick";
import ServiceCard from "../shared/ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        title: "Airport Transfer",
        desc: "Seamless and reliable transfers to and from airports in London.",
        image: "/images/airport-transfer.jpg"
    },
    {
        title: "Railway Transfer",
        desc: "Efficient transfers to major railway stations in London.",
        image: "/images/railway-transfer.jpg"
    },
    {
        title: "Cruise Transfer",
        desc: "Timely pickups and drop-offs at all major cruise terminals.",
        image: "/images/cruise-transfer.jpg"
    },
    {
        title: "Meet and Greet",
        desc: "Personalized service with assistance at arrival points.",
        image: "/images/meet-and-greet.jpg"
    },
    {
        title: "Corporate Events",
        desc: "Reliable transport for business meetings and conferences.",
        image: "/images/corporate-events.jpg"
    },
    {
        title: "Chauffeur Service",
        desc: "Luxurious and personalized travel experience.",
        image: "/images/chauffeur-service.jpg"
    },
    {
        title: "Corporate Clients",
        desc: "Tailored transportation solutions for businesses.",
        image: "/images/corporate-clients.jpg"
    },
    {
        title: "Executive Service",
        desc: "Premium vehicles and service for business travelers.",
        image: "/images/executive-service.jpg"
    },
    {
        title: "Hotel Transfer",
        desc: "Stylish and timely transfers to hotels in London.",
        image: "/images/hotel-transfer.jpg"
    },
    {
        title: "London Tour",
        desc: "Customized tours with knowledgeable drivers.",
        image: "/images/london-tour.jpg"
    },
    {
        title: "School Transfers",
        desc: "Safe and reliable transportation for students to and from school.",
        image: "/images/school-transfers.jpg"
    },
    {
        title: "Airport Car Parking",
        desc: "Convenient and secure parking solutions at major London airports.",
        image: "/images/airport-car-parking.jpg"
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
