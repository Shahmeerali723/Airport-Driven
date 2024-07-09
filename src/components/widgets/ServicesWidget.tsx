import React from 'react'
import ServiceCard from '../shared/ServiceCard'



const data = [
    {
        title: "lorem ipsum",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        image: "/service1.png"
    },
    {
        title: "lorem ipsum",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        image: "/service2.png"
    },
    {
        title: "lorem ipsum",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        image: "/service3.png"
    },
    {
        title: "lorem ipsum",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        image: "/service1.png"
    },
    {
        title: "lorem ipsum",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        image: "/service2.png"
    },
    {
        title: "lorem ipsum",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        image: "/service3.png"
    },
]

const ServicesWidget = () => {
    return (
        <div className='w-full bg-custom-radial'>

            <div className='container py-5'>

                <h2 className='uppercase text-5xl font-rockstar font-extrabold text-center mb-6 text-white'>
                    our services
                </h2>

                <div className='grid grid-cols-3 gap-5'>
                    {
                        data.map((item , index)=>{
                            return (
                                <ServiceCard key={index} data={item}/>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default ServicesWidget