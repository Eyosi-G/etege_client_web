import React, { useState } from 'react'
import Description from './Description'
import SizeAndFit from './SizeAndFit'

const ProductDetail = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className='mt-10 '>
            <div className='relative'>
                <div className='flex space-x-4 tracking-widest'>
                    <div onClick={() => setIndex(0)} className={` border-black pb-2 hover:cursor-pointer ${index === 0 && "border-b-8"}`}>DESCRIPTION</div>
                    <div onClick={() => setIndex(1)} className={` border-black pb-2 hover:cursor-pointer ${index === 1 && "border-b-8"}`}>SIZE & FIT</div>
                </div>
                <div className='absolute border-b border-black w-full bottom-1'></div>
            </div>

            <div className="mt-2 ">
                {index === 0 && <Description />}
                {index === 1 && <SizeAndFit />}
            </div>
        </div>
    )
}

export default ProductDetail