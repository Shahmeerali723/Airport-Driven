import React from 'react'
import ReviewCard from '../shared/ReviewCard'

const ServicesReview = () => {
    return (
        <div className='container'>

            <div className='grid grid-cols-4 gap-1'>
                <ReviewCard data={{
                    title: "lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
            </div>

        </div>
    )
}

export default ServicesReview