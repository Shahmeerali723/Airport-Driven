import React from 'react';
import ReviewCard from '../shared/ReviewCard';

const ServicesReview = () => {
    return (
        <div className='container mx-auto px-4'>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <ReviewCard data={{
                    title: "Lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "Lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "Lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
                <ReviewCard data={{
                    title: "Lorem",
                    desc: "Is Simply Dummy Text Of The Printing And Typesetting Industry.",
                    rating: 2
                }} />
            </div>

        </div>
    )
}

export default ServicesReview;
