import React from 'react';
import { Button } from '../ui/button';
import CarCarousel from '../shared/CarCarousel';

const Vehicle = () => {
    return (
        <div className='w-full bg-custom-radial font-poppins'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-12 px-4 lg:px-0'>
                <div className='p-3 flex flex-col gap-6'>
                    <h3 className='uppercase font-rockstar font-extrabold text-3xl md:text-4xl text-white'>
                    Our Fleet
                    </h3>
                    <p className='text-base md:text-xl font-medium text-white'>
                        {"Discover the perfect vehicle for your airport transfer needs with our diverse and modern fleet. Whether you’re traveling alone or with a group, we have the ideal car to ensure a comfortable and smooth journey."}
                    </p>
                    <Button className='uppercase w-fit font-semibold bg-white text-primary'>
                        Book NOW
                    </Button>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <CarCarousel />
                </div>
            </div>
        </div>
    );
}

export default Vehicle;
