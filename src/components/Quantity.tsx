import React, { useState } from 'react'


interface IProps {
    qty: number;
    increment: () => void;
    decrement: () => void;
}
const Quantity = (props: IProps) => {
    const { decrement, increment, qty } = props
    return (
        <div className='col-span-full sm:col-span-3  p-3 rounded-full flex justify-center bg-gray-200 '>
            <div onClick={decrement} className='hover:cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className='mx-5 sm:mx-7'>{qty}</div>
            <div onClick={increment} className='hover:cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    )
}

export default Quantity