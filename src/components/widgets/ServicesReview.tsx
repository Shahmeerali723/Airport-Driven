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
                    title: "Pickup Service",
                    desc: "Timely and reliable pickups ensuring you reach your destination on schedule.",
                    image: "/car-service.png",
                }} />
                <ReviewCard data={{
                    title: "Easy Bookings",
                    desc: "Quick and hassle-free booking with our user-friendly online system.",
                    image:"/booking.png"
                }} />
                <ReviewCard data={{
                    title: "24/7 Customer Care",
                    desc: "Round-the-clock customer support to assist you anytime.",
                    image:"/customer-support.png"
                }} />
                <ReviewCard data={{
                    title: "Best Price Guaranteed",
                    desc: "Competitive rates offering the best value for airport transfers in London.",
                    image:"/reward.png"
                }} />
            </div>

        </div>
    )
}

export default ServicesReview;
