import React from 'react';
import ReviewCard from '../shared/ReviewCard';
import Booking from '../forms/Booking';

const ServicesReview = () => {
    return (
        <div className='sm:container'>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className='block  sm:col-span-2 md:col-span-3 lg:hidden'>

                    <div className='w-full md:w-[70%] mx-auto shadow-lg p-4 rounded-xl'>
                        <Booking />

                    </div>

                </div>

                <ReviewCard data={{
                    title: "Lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "Lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "Lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "Lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
            </div>

        </div>
    )
}

export default ServicesReview;
