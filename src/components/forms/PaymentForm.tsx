// components/BookingForm.js
import React, { useState } from 'react';
import { BsCreditCard2BackFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import InputComp from '../shared/InputComp';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        pickUp: '',
        via: '',
        dropOff: '',
        date: '',
        time: '',
        flightNumber: '',
        vehicle: '',
        numberOfPersons: '',
        items: '',
        customerName: '',
        customerEmail: '',
        customerMobileNumber: '',
        message: '',
        paymentMethod: '',
        totalCharges: 200,
    });

    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    const PaymentProgress = [
        {
            name: "Journey Details",
            icon: TiTick
        },
        {
            name: "Vehicle Details",
            icon: TiTick
        },
        {
            name: "Customer Details",
            icon: TiTick
        },
        {
            name: "Payment Details",
            icon: TiTick
        }
    ]

    return (
        <div className='flex flex-col gap-4 font-poppins mb-20'>
            <div className='flex flex-col gap-4 bg-custom-radial py-8 px-4'>

                <div className='mt-10'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl  font-rockstar font-extrabold text-center uppercase text-white '>
                        UPDATE YOUR QUOTES HERE
                    </h2>

                </div>
                <div className='container rounded-lg bg-white'>
                    <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2'>
                        {
                            PaymentProgress.map((item: any, index: any) => {
                                return (
                                    <li key={index} className={`flex flex-col items-center ${index == currentStep ? "" : "opacity-30"}`}>
                                        <div className={`w-fit p-1 rounded-full text-center bg-primary `}>
                                            <TiTick className='text-white' />
                                        </div>
                                        {item?.name || "Journey Details"}
                                    </li>
                                )
                            })
                        }


                    </ul>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 container">
                {currentStep === 0 && (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-extrabold font-rockstar  text-primary text-center uppercase ">Journey Details</h3>
                            <hr className='mt-3' />
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                <div>
                                    <label htmlFor="">Pick Up</label>
                                    <InputComp
                                        label="Pick Up"
                                        name="pickUp"
                                        value={formData.pickUp}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>

                                <div>

                                    <label htmlFor="">Via</label>
                                    <InputComp
                                        label="Via"
                                        name="via"
                                        value={formData.via}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                                <div>

                                    <label htmlFor="">Drop Off</label>
                                    <InputComp
                                        label="Drop Off"
                                        name="dropOff"

                                        value={formData.dropOff}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Date</label>

                                    <InputComp
                                        label="Date"
                                        name="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Time</label>
                                    <InputComp
                                        label="Time"
                                        name="time"
                                        type="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Flight Number</label>

                                    <InputComp
                                        label="Flight Number"
                                        name="flightNumber"
                                        value={formData.flightNumber}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="ml-3 inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 1 && (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-extrabold font-rockstar  text-primary text-center uppercase ">Vehicle Details</h3>
                            <hr className='mt-3' />
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                <div>
                                    <label htmlFor="">Vehicle</label>
                                    <InputComp
                                        label="Vehicle"
                                        name="vehicle"
                                        value={formData.vehicle}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Num Of Person</label>
                                    <InputComp
                                        label="Number of Persons"
                                        name="numberOfPersons"
                                        value={formData.numberOfPersons}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Items</label>
                                    <InputComp
                                        label="Items"
                                        name="items"
                                        value={formData.items}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 2 && (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-extrabold font-rockstar  text-primary text-center uppercase ">Customer Details</h3>
                            <hr className='mt-3' />
                            <div className="mt-6 flex flex-col gap-2">
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                    <div>
                                        <label htmlFor="">Customer Name</label>
                                        <InputComp
                                            label="Customer Name"
                                            name="customerName"
                                            value={formData.customerName}
                                            onChange={handleChange}
                                            classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="">Customer Email</label>
                                        <InputComp
                                            label="Customer Email"
                                            name="customerEmail"
                                            value={formData.customerEmail}
                                            onChange={handleChange}
                                            classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="">Customer Mobile Number</label>
                                        <InputComp
                                            label="Customer Mobile Number"
                                            name="customerMobileNumber"
                                            value={formData.customerMobileNumber}
                                            onChange={handleChange}
                                            classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Message</label>
                                    <InputComp
                                        label="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        classes={{ div: "border-[#999999] bg-[#F6F6F6] rounded-lg" }}
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary "
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 3 && (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-extrabold font-rockstar  text-primary text-center uppercase ">Payment Details</h3>
                            <hr className='mt-3' />
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                                        Choose Payment Method
                                    </label>
                                    <div className='flex items-center bg-[#F6F6F6] rounded-md p-1'>
                                        <div className='bg-primary p-3 rounded-lg'>
                                            {formData.paymentMethod == "Card" ? <BsCreditCard2BackFill className='text-xl text-white' /> :
                                                <BsCashCoin className='text-xl text-white' />}
                                            {/* BsCashCoin */}

                                        </div>
                                        <select
                                            name="paymentMethod"
                                            id="paymentMethod"
                                            value={formData.paymentMethod}
                                            onChange={handleChange}
                                            className="mt-1 block sm:text-sm w-full h-full p-3 focus:outline-none bg-[#F6F6F6]  border-gray-300 rounded-md"
                                        >
                                            <option value="">Seclect</option>
                                            <option value="Card">Card</option>
                                            <option value="Cash">Cash</option>
                                        </select>

                                    </div>

                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="totalCharges" className="block text-sm font-medium text-gray-700">
                                        Total Charges
                                    </label>
                                    <div className='flex items-center bg-[#F6F6F6] rounded-md p-1 '>
                                        <input
                                            type="number"
                                            name="totalCharges"
                                            id="totalCharges"
                                            value={formData.totalCharges}
                                            onChange={handleChange}
                                            className="mt-1 block w-full shadow-sm sm:text-sm p-3 bg-[#F6F6F6] border-gray-300 rounded-md"
                                            readOnly
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary "
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>

    );
};

export default PaymentForm;
