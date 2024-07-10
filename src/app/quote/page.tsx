"use client"
import CarCard from '@/components/shared/CarCard';
import FilterComponent from '@/components/shared/FilterComp'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import React, { useState } from 'react'






const page = () => {



    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };


    const carData = [
        { title: 'Boss', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        { title: 'Estate', price: '200' },
        // Add more car data here...
    ];

    const totalPages = Math.ceil(carData.length / itemsPerPage);

    const paginatedCars = carData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );







    return (
        <div className='w-full'>

            <div className='w-full bg-primary'>
                <div className='container'>
                    <FilterComponent />
                </div>
            </div>
            <div className='py-9'>
                <div>
                    <h2 className='text-6xl text-primary font-rockstar font-extrabold text-center uppercase'>
                        grabs the best ride for you
                    </h2>
                    <p className='text-xl text-primary font-poppins font-semibold text-center'>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.
                    </p>
                </div>
                <div className='grid grid-cols-4 mt-10 gap-5  px-7'>
                    {paginatedCars.map((car, index) => (
                        <CarCard key={index} data={car} />
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                            {Array.from({ length: totalPages }, (_, i) => (
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        isActive={currentPage === i + 1}
                                        onClick={() => handlePageChange(i + 1)}
                                    >
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>


        </div>
    )
}

export default page