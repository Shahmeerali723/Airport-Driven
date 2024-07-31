import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";

const cars = [
  {
    title: "Saloon",
    image: "/saloonCar.svg", // Replace with your image paths
    person: 4,
    luggage: {
      briefcase: 2,
      suitcases: 2,
    },
    details:
      "Ideal for individual travelers or small families, our Saloon offers a stylish and comfortable ride. Enjoy ample space for your luggage and a smooth drive to your destination.",
  },
  {
    title: "Estate",
    image: "/Estate.svg", // Replace with your image paths
    person: 4,
    luggage: {
      briefcase: 2,
      suitcases: 2,
    },
    details:
      "Our Estate vehicles provide additional space, perfect for those needing a bit more room for luggage. It’s an excellent choice for longer trips or when traveling with more baggage.",
  },
  {
    title: "MPV",
    image: "/MPV.svg", // Replace with your image paths
    person: 4,
    luggage: {
      briefcase: 2,
      suitcases: 2,
    },
    details:
      "For families or small groups, the MPV offers generous space and comfort. Enjoy the versatility and ample luggage capacity for a stress-free transfer.",
  },
  {
    title: "Transporter",
    image: "/Transporter.svg", // Replace with your image paths
    person: 8,
    luggage: {
      briefcase: 6,
      suitcases: 5,
    },
    details:
      "The Transporter is perfect for larger groups, offering extensive seating and luggage capacity. Travel together in comfort and convenience with this spacious option.",
  },
  {
    title: "Executive",
    image: "/Executive.svg", // Replace with your image paths
    person: 4,
    luggage: {
      briefcase: 2,
      suitcases: 1,
    },
    details:
      "Experience luxury with our Executive cars. Designed for business travelers or those seeking a premium experience, these vehicles provide top-notch comfort and style.",
  },
  {
    title: "Executive Transporter",
    image: "/Executivetransporter.svg", // Replace with your image paths
    person: 8,
    luggage: {
      briefcase: 6,
      suitcases: 5,
    },
    details:
      "Combine luxury with capacity in our Executive Transporter. This vehicle is ideal for large groups wanting to travel in style and comfort, with plenty of space for everyone’s belongings.",
  },
];

export default function CarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { title, image, person, luggage, details } = cars[currentIndex];

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg text-center">
      <div>
        <Image
          src={image}
          width={500}
          height={300}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <h2 className="mt-4 text-2xl font-bold text-gray-800">{title}</h2>
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-3 h-3 bg-primary-dark rounded-full"></div>
        <div className="w-full h-0.5 bg-primary-dark mx-2"></div>
        <div className="w-3 h-3 bg-primary-dark rounded-full"></div>
      </div>
      <div className="mt-4 text-left space-y-2">
        <p className="text-lg font-semibold text-gray-700">
          <span className="mr-1">{person}</span> Person
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <span className="mr-1">{luggage.briefcase}</span> Briefcase
        <p className="text-lg font-semibold text-gray-700">

          <span className="mr-1">{luggage.suitcases}</span> Suitcases
          </p>
        </p>
        <p className="mt-2 text-gray-600">{details}</p>
      </div>
      <div className="flex justify-end gap-1 mt-4">
        <button
          onClick={handlePrevious}
          className="p-2 text-primary-dark border-primary-dark border rounded-full"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-primary-dark text-white rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
