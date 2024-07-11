import React from 'react'
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { MdLuggage } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from '../ui/button';
import Image from 'next/image';

const CarCard = ({...props}:any) => {
    return (
        <div>
            <div className='bg-[#FFFDF2] flex items-center p-2 justify-center'>

                <Image src={"/carcard.png"} alt='' height={300} width={400} />

            </div>
            <div className='bg-custom-radial px-6 py-8 rounded-t-3xl mt-[-25px]'>
                <div className='grid grid-flow-col items-center sm:px-2'>
                    <div className='text-white text-4xl font-poppins font-semibold'>
                        <h4>$200</h4>
                    </div>
                    <div className='flex justify-between text-lg rounded-lg py-1 px-3 text-primary bg-white text-center'>
                        <div>

                            <div className='border-b-2 border-b-primary '><IoBagRemoveSharp /></div>
                            <span>1</span>
                        </div>
                        <div>

                            <div className='border-b-2 border-b-primary '><FaUsers /></div>
                            <span>1</span>
                        </div>
                        <div>

                            <div className='border-b-2 border-b-primary '><MdOutlineAirlineSeatReclineExtra /></div>
                            <span>1</span>
                        </div>
                        <div>

                            <div className='border-b-2 border-b-primary '><MdLuggage /></div>
                            <span>1</span>
                        </div>
                    </div>
                </div>
                <div className='text-white w-fit mx-auto sm:px-7 py-2'>
                    <div className='flex gap-9'>
                        <h6 className='text-xl font-poppins font-semibold'>Estate</h6>
                        <div className='flex gap-1 items-center'>
                            <FaStar />
                            <span>5.0</span>
                        </div>
                    </div>
                    <div className='flex gap-7'>
                        <h6>1 x Estate</h6>
                        <div className='flex gap-1 items-center'>
                            <FaLocationDot />
                            <span>Lorem,US</span>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>
                    <Button className='bg-white hover:bg-[#e6e5e5]  text-primary font-poppins font-semibold text-center w-full'>
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CarCard