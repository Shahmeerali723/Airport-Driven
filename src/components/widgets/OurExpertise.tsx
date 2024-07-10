import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { ImMeter } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { GiCaptainHatProfile } from "react-icons/gi";

const OurExpertise = () => {
  return (
    <div className='w-full h-48 flex items-center'>

        <div className='container '>

            <div className='flex justify-between p-4'>

                <div className='flex flex-col justify-center items-center '>
                    <div className='bg-white shadow-md w-fit p-2 text-5xl rounded-lg text-primary'>
                        <FaCarAlt/>
                    </div>
                    <h3>
                    Lorem Ipsum 
                    </h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-white shadow-md w-fit p-2 text-5xl rounded-lg text-primary'>
                        <ImMeter/>
                    </div>
                    <h3>
                    Lorem Ipsum 
                    </h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-white shadow-md w-fit p-2 text-5xl rounded-lg text-primary'>
                        <HiUsers/>
                    </div>
                    <h3>
                    Lorem Ipsum 
                    </h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-white shadow-md w-fit p-2 text-5xl rounded-lg text-primary'>
                        <GiCaptainHatProfile/>
                    </div>
                    <h3>
                    Lorem Ipsum 
                    </h3>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default OurExpertise