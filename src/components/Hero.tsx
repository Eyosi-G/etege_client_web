import React, { useEffect, useRef, useState } from 'react'
import ShowOne from './slideshows/ShowOne';
import ShowThree from './slideshows/ShowThree';
import ShowTwo from './slideshows/ShowTwo';

const Hero = () => {
    const slides = [
        <ShowOne />,
        <ShowTwo />,
        <ShowThree />
    ];

    const [currentIndex, setCurrentIndex] = useState(2);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const isLastSlide = prev === slides.length - 1;
            const newIndex = isLastSlide ? 0 : prev + 1;
            return newIndex;
        });
    };


    useEffect(() => {
        // const id = setInterval(nextSlide, 3000)
        // return () => {
        //     clearInterval(id)
        // }
    }, [])
    return (
        <div className=''>
            <div className='tracking-wider font-mono bg-black capitalize selection:bg-white selection:text-black w-full p-2 text-white text-center font-light text-sm'>
                Free Shipping For all Addis Ababa orders over 3000 ETB
            </div>
            <div className='h-[780px] w-full m-auto  relative group'>
                <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                    {slides[currentIndex]}
                </div>
            </div>
        </div>

    );
}

export default Hero