import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const cars = [
  {
    image: '/car1.png', // Replace with your image paths
    person: 4,
    briefcase:2,
    luggage : 2,
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    image: '/car1.png', // Replace with your image paths
    person: 6,
    briefcase:3,
    luggage : 5,
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    image: '/car1.png', // Replace with your image paths
    person: 4,
    briefcase:2,
    luggage : 2,
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },

  // Add more cars as needed
];

export default function CarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cars.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cars.length - 1 ? 0 : prevIndex + 1));
  };

  const { image, person,luggage,briefcase, details } = cars[currentIndex];

  return (
    <div className="max-w-lg mx-auto bg-white p-5 px-8 rounded-xl shadow-lg text-center">
      <div>
        <Image src={image} width={500} height={200} alt="Car" className="w-full h-auto" />
      </div>
      <div className='w-full flex items-center mt-[-50px]'>
        <div className='w-3 h-3 bg-primary-dark rounded-full'></div>
        <div className='w-full h-0.5 bg-primary-dark'></div>
        <div className='w-3 h-3 bg-primary-dark rounded-full'></div>
      </div>
      <div className="mt-4 text-start">
        <p className="text-xl font-semibold"><span className='mr-1'>{person}</span>Person</p>
        <p className="text-xl font-semibold"><span className='mr-1'>{luggage}</span>Luggage</p>
        <p className="text-xl font-semibold"><span className='mr-1'>{briefcase}</span>Briefcase</p>
        <p className="mt-2 text-gray-600">{details}</p>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button 
          onClick={handlePrevious} 
          className="p-2  text-primary-dark border-primary-dark border rounded-full"
        >
          <FaArrowLeftLong/>
        </button>
        <button 
          onClick={handleNext} 
          className="p-2 bg-primary-dark text-white rounded-full"
        >
          <FaArrowRight/>
          
        </button>
      </div>
    </div>
  );
}
