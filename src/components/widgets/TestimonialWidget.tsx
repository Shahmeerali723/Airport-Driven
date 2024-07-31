import React from 'react'
import Testimonial from '../shared/testimonial';

const TestimonialWidget = () => {
    const testimonialsData = [
        {
            quote: "I booked a saloon for my trip to Heathrow, and the service was impeccable. The car was clean, and the driver was professional and courteous. The journey was smooth, and I reached the airport well ahead of time.",
            name: "John M.",
            title: "Saloon - Excellent Service",
            image: "/user1.png",
            rating: 5,
        },
        {
            quote: "Traveling with extra luggage was a breeze with the estate vehicle. The extra space was perfect for all our bags, and the ride was incredibly comfortable. Highly recommend this service for anyone with more luggage.",
            name: "Emma R.",
            title: "Estate - Spacious and Comfortable",
            image: "/user1.png",
            rating: 5,
        },
        {
            quote: "We used the MPV for our family vacation, and it was the best choice we made. The car was spacious enough for all of us, and the driver was very patient with our kids. We had a fantastic experience.",
            name: "Liam T.",
            title: "MPV - Great for Families",
            image: "/user1.png",
            rating: 5,
        },
        {
            quote: "Booked a transporter for a group trip, and it was excellent. The vehicle was spacious, and we had plenty of room for our luggage. The driver was friendly and knew the best routes, making our trip very enjoyable.",
            name: "Sophia W.",
            title: "Transporter - Ideal for Group Travel",
            image: "/user1.png",
            rating: 5,
        },
        {
            quote: "The executive car was perfect for my business trip. It was luxurious and had all the amenities I needed. The driver was punctual and very professional. It was an efficient and pleasant ride to the airport.",
            name: "Oliver H.",
            title: "Executive - Luxurious and Efficient",
            image: "/user1.png",
            rating: 5,
        },
        {
            quote: "We used the executive transporter for a corporate event, and it was outstanding. The vehicle was luxurious, and there was ample space for everyone and their luggage. The service was top-notch from start to finish.",
            name: "Isabella P.",
            title: "Executive Transporter - Top-Notch Service for Large Groups",
            image: "/user1.png",
            rating: 5,
        },
    ];
    

    const topTestimonials = testimonialsData.slice(0, 2);
    const bottomTestimonials = testimonialsData.slice(2);

    return (
        <div className='w-full font-poppins py-3 sm:py-12'>
            <div className='container mx-auto px-4'>
                <div className='text-center md:mb-8'>
                    <h3 className='text-4xl md:text-5xl uppercase font-rockstar font-extrabold text-primary'>
                        Our Happy Clients
                    </h3>
                    <p className='mt-4 text-base md:text-lg '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='grid gap-10 items-center lg:grid-cols-2'>
                    <div>
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 mt-4 sm:mt-8 md:mt-0 md:pt-20 '>
                            {topTestimonials.map((item, index) => (
                                <div key={index} className={`${index % 2 === 0 ? 'mt-0' : 'md:mt-[-100px]'}`}>
                                    <Testimonial testimonial={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:mt-20 '>
                        {bottomTestimonials.map((item, index) => (
                            <div key={index} className={`${index % 2 === 0 ? 'mt-0' : 'md:mt-[-100px]'}`}>
                                <Testimonial testimonial={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialWidget;
