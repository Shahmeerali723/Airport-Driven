"use client"
import React, { useState } from 'react'
import InputComp from '../shared/InputComp';



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
        <form >
            <InputComp
                placeholder="Pickup"
                classes={{ icon: "bg-black text-white", div: "border-black" }}
                name={"pickUp"}
                value={formData.pickUp}

            />
            <InputComp
                placeholder="Via "
                classes={{ icon: "bg-black text-white", div: "border-black" }}
                name={"via"}
                value={formData.via}

            />
            <InputComp
                placeholder="Drop Off"
                classes={{ icon: "bg-black text-white", div: "border-black" }}
                name={"dropoff"}
                value={formData.dropoff}

            />
            <InputComp
                placeholder="No Of Person"
                classes={{ icon: "bg-black text-white", div: "border-black" }}
                name={"noOfPerson"}
                value={formData.noOfPerson}

            />
            <InputComp
                placeholder="Add Items"
                classes={{ icon: "bg-black text-white", div: "border-black" }}
                name={"items"}
                value={formData.items}

            />
            <InputComp
                placeholder="Journey"
                classes={{ icon: "bg-black text-white", div: "border-black" }}
                name={"journey"}
                value={formData.journey}

            />
            <div className='flex'>
            <InputComp
                placeholder="dd/mm/yy"
                classes={{ icon: "bg-black text-white", div: "border-black" }}
                name={"date"}
                type={"date"}
                value={formData.date}

            />
            <InputComp
                placeholder="Journey"
                type={"time"}
                classes={{ icon: "bg-black text-white", div: "border-black" }}
                name={"time"}
                value={formData.time}

            />
            </div>
        </form>
    )
}

export default Booking