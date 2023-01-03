import React from 'react'
import Product from './Product'

const FreshArrival = () => {
    return (
        <div className='mx-10 mt-36'>
            <div className='uppercase text-3xl text-center relative'>
                Fresh Arrivals
            </div>
            <div className='flex justify-center  mt-5 font-mono hover:cursor-pointer'>
                <div className='px-3 py-1 rounded-full border font-extralight text-sm'>VIEW ALL</div>
            </div>
            <div className='grid grid-cols-4 mt-10 gap-2'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default FreshArrival