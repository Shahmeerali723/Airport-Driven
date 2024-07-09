"use client"
import React, { useState } from 'react'
import InputComp from '../shared/InputComp';
import { Button } from '../ui/button';



interface FormData {
    pickUp: string;
    via: string;
    dropoff: string;
    date: string;
    time: string;
    noOfPerson: string;
    items: string;
    journey: string;
}

const Booking = () => {

    const [formData, setFormData] = useState<FormData>({
        pickUp: "",
        via: "",
        dropoff: "",
        date: "",
        time: "",
        noOfPerson: "",
        items: "",
        journey: "",
    });
    return (
        <form className='grid grid-flow-row gap-5'>
            <InputComp
                placeholder="Pickup"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg" }}
                name={"pickUp"}
                value={formData.pickUp}

            />
            <InputComp
                placeholder="Via "
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg" }}
                name={"via"}
                value={formData.via}

            />
            <InputComp
                placeholder="Drop Off"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg" }}
                name={"dropoff"}
                value={formData.dropoff}

            />
            <InputComp
                placeholder="No Of Person"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg" }}
                name={"noOfPerson"}
                value={formData.noOfPerson}

            />
            <InputComp
                placeholder="Add Items"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg" }}
                name={"items"}
                value={formData.items}

            />
            <InputComp
                placeholder="Journey"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg" }}
                name={"journey"}
                value={formData.journey}

            />
            <div className='flex w-full'>
            <InputComp
                placeholder="dd/mm/yy"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4]  w-full" }}
                name={"date"}
                type={"date"}
                value={formData.date}
                

            />
            <InputComp
                placeholder="Journey"
                type={"time"}
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4]  w-full" }}
                name={"time"}
                value={formData.time}

            />
            
            </div>
            <div className='flex justify-center items-center'>

            <Button className='w-fit  shadow-primary'>Book Now</Button>
            </div>
        </form>
    )
}

export default Booking