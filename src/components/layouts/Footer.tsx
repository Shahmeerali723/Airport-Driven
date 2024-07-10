// components/Footer.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaStar } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#1E1E1E] text-white py-10">

            <h2 className='uppercase text-5xl text-white text-center mb-10 font-rockstar font-extrabold'>
                get in touch with us
            </h2>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold">LOGO</h2>
                    <p className="mt-2 text-center md:text-left">
                        Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.
                    </p>
                    <div className="flex mt-4 space-x-3">
                    <div className='w-fit p-1 bg-primary rounded-full'>
                        <FaFacebookF className="cursor-pointer" />
                        </div>
                        <div className='w-fit p-1 bg-primary rounded-full'>
                        <FaTwitter className="cursor-pointer" />
                        </div>
                        <div className='w-fit p-1 bg-primary rounded-full'>
                        <FaInstagram className="cursor-pointer" />
                        </div>
                        <div className='w-fit p-1 bg-primary rounded-full'>
                        <FaYoutube className="cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-xl mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">Airport Runs</li>
                        <li className="hover:underline cursor-pointer">Station Runs</li>
                        <li className="hover:underline cursor-pointer">Cruise</li>
                        <li className="hover:underline cursor-pointer">Special Offers</li>
                        <li className="hover:underline cursor-pointer">Blog</li>
                        <li className="hover:underline cursor-pointer">Driver Login</li>
                    </ul>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-xl mb-4">CONTACT DETAILS</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <div className='w-fit p-1 bg-primary rounded-full'>

                                <FaPhoneAlt />
                            </div>
                            <span>+44 2080 504 099</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <div className='w-fit p-1 bg-primary rounded-full'>
                                <FiMapPin />
                            </div>
                            <span>Bath Road Hayes London United Kingdom UB3</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <div className='w-fit p-1 bg-primary rounded-full'>
                                <FaEnvelope /></div>
                            <span>Hello@Airportdriven.Com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>Review On</span>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span>(30 Reviews)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>Review On</span>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span>(45 Reviews)</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-xl mb-4">NEWS LETTER</h3>
                    <p className="mb-4 text-center md:text-left">
                        Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Type Here"
                            className="p-2 rounded-l-lg text-black"
                        />
                        <button className="bg-primary p-2 rounded-r-lg hover:bg-primary-light">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 text-center md:text-left">
                <p>© 2024 Copyright Airport Driven. All Rights Reserved</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}