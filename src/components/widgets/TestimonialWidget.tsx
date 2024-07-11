import React from 'react'
import Testimonial from '../shared/testimonial';

const TestimonialWidget = () => {
    const testimonialsData = [
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png",
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png",
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png",
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png",
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png",
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png",
            rating: 3,
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
