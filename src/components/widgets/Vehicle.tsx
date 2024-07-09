import React from 'react'
import { Button } from '../ui/button'
import CarCarousel from '../shared/CarCarousel'

const Vehicle = () => {
    return (

        <div className='w-full bg-custom-radial font-poppins'>
            <div className='container grid grid-cols-2 items-center py-3'>

                <div className='p-3 flex flex-col gap-6'>
                    <h3 className='uppercase font-rockstar font-extrabold text-4xl text-white'>
                        our fleet
                    </h3>
                    <p className='text-xl font-medium text-white'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <Button className='uppercase w-fit font-semibold bg-white text-primary'>
                        Book NOW
                    </Button>
                </div>
                <div>
                    <CarCarousel/>
                </div>

            </div>
        </div>
    )
}

export default Vehicle