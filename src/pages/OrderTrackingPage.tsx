import React from 'react'
import NavBar from '../components/NavBar'
import OrderItem from '../components/OrderItem'
import OrderProgressBar from '../components/OrderProgressBar'

const OrderTrackingPage = () => {
    return (
        <div className='relative'>
            <NavBar />
            <div className='mt-28'>
                <div className='flex justify-center'>
                    <div className='flex space-x-2 items-center border border-black p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" placeholder='Order Id' className='outline-none p-1' />
                    </div>
                    <button className='outline-none bg-black tracking-widest px-2 py-1 md:px-5 md:py-3 uppercase  text-white '>
                        Search
                    </button>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[80%]'>
                        <OrderProgressBar />
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderTrackingPage