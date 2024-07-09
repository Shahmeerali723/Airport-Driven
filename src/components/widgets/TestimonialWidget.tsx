import React from 'react'
import Testimonial from '../shared/testimonial';

const TestimonialWidget = () => {

    const testimonialsData = [
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png", // Replace with your image paths
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png", // Replace with your image paths
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png", // Replace with your image paths
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png", // Replace with your image paths
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png", // Replace with your image paths
            rating: 3,
        },
        {
            quote: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
            name: "Lorem Ipsum",
            title: "Is Simply Dummy Text",
            image: "/user1.png", // Replace with your image paths
            rating: 3,
        },
        // Add more testimonials as needed
    ];

    let temArry: any = []



    return (
        <div className='w-full'>

            <div className='container grid grid-cols-2 gap-10 items-center'>
                <div>
                    <div>
                        <h3 className='text-5xl uppercase font-rockstar font-extrabold text-primary'>
                            our happy client
                        </h3>
                        <p className='font-poppins '>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-52'>

                        {testimonialsData.map((item, index) => {

                            if (index < 2) {
                                return (
                                    <div className={`${index % 2 === 0 ? "mt-[0]" : "mt-[-100px]"}`}>

                                        <Testimonial testimonial={item} />
                                    </div>
                                )
                            } else {
                                temArry.push(item)
                            }

                        })}


                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-36'>
                    {temArry.map((item:any, index:any)=>{
                        return(
                            <div className={`${index % 2 === 0 ? "mt-[0]" : "mt-[-100px]"}`}>
                            <Testimonial testimonial={item}/>
                            </div>
                        )
                    })}
                </div>



            </div>

        </div>
    )
}

export default TestimonialWidget

