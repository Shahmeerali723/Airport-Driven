import Image from 'next/image'
import React from 'react'
import Contact from '../forms/Contact'

const ContactSection = () => {
  return (
    <div className='w-full py-5'>

        <div className='w-[80%] mx-auto text-center p-2'>
            <h2 className='text-5xl uppercase text-primary font-extrabold font-rockstar'>
                contact us
            </h2>
            <p className=''>
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, 
            </p>
        </div>

        <div className='relative'>
        <Image alt='' src={"/map.png"} className='h-[700px]' width={2000} height={100} />

        <div className='absolute top-24 left-24'>
            <Contact/>
        </div>
        </div>


    </div>
  )
}

export default ContactSection