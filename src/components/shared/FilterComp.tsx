import Image from 'next/image';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const FilterComponent = () => {
    const [classFilter, setClassFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    const handleSelectChange = (event: any, setFilter: any) => {
        setFilter(event.target.value);
    };

    return (
        <div className="p-3  rounded-md font-plus-jakarta">
            <div className='flex bg-white rounded-lg px-4 my-2 justify-between items-center py-3'>
                <h3 className='font-bold'>
                    Filter By
                </h3>
                <div className='text-primary'>

                <FaSearch/>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white rounded-lg p-4">
                <div className="w-full">
                    <div className='flex bg-gray-200 rounded-md p-2'>
                        
                        <select
                            id="class"
                            value={classFilter}
                            onChange={(e) => handleSelectChange(e, setClassFilter)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-200 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value="">Select Class</option>
                            <option value="standard">Standard</option>
                            <option value="executive">Executive</option>
                            <option value="luxury">Luxury</option>
                            <option value="chauffeur">Chauffeur</option>
                        </select>
                    </div>
                </div>

                <div className="w-full">

                    <div className='flex bg-gray-200 rounded-md p-2'>
                        
                        <select
                            id="type"
                            value={typeFilter}
                            onChange={(e) => handleSelectChange(e, setTypeFilter)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-200 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value=""> Select Type</option>
                            <option value="saloon">Saloon</option>
                            <option value="estate">Estate</option>
                            <option value="mpv">MPV</option>
                            <option value="minibus">Minibus</option>
                        </select>
                    </div>

                </div>

                <div className="w-full">
                    <div className='flex bg-gray-200 rounded-md p-2'>
                        
                        <select
                            id="rating"
                            value={ratingFilter}
                            onChange={(e) => handleSelectChange(e, setRatingFilter)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-200  border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option className='' value="">Select Rating</option>
                            <option className='text-orange' value="5">★★★★★</option>
                            <option className='text-orange' value="4">★★★★</option>
                            <option className='text-orange' value="3">★★★</option>
                            <option className='text-orange' value="2">★★</option>
                            <option className='text-orange' value="1">★</option>
                        </select>
                    </div>
                </div>

                <div className="w-full">
                    <div className='flex bg-gray-200 rounded-md p-2'>
                        
                        <select
                            id="price"
                            value={priceFilter}
                            onChange={(e) => handleSelectChange(e, setPriceFilter)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-200 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value="">Select Price</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
