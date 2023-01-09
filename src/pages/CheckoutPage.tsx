import React, { useState } from 'react'
import InputField from '../components/InputField'
import OrderCompleted from '../components/OrderCompleted'
import OrderSummary from '../components/OrderSummary'

const CheckoutPage = () => {
    const [openOrderSummary, setOpenOrderSummary] = useState(true)
    const toggleOrderSummary = () => {
        setOpenOrderSummary(!openOrderSummary)
    }
    return (
        <div>
            {/* <OrderCompleted /> */}
            <div className='flex justify-center'>
                <div className='w-[87%] '>
                    <div className='md:hidden justify-center py-2 flex'>
                        <h1 className='text-5xl text-center relative w-fit my-2'>
                            etege
                            <div className='absolute -bottom-2 flex space-x-2 ml-2'>
                                <div className='h-1 w-2 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                                <div className='h-1 w-10 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                            </div>
                        </h1>
                    </div>
                    <div className='lg:hidden mt-5 '>
                        <div className='flex justify-between bg-black text-white p-3'>
                            <button onClick={toggleOrderSummary} className='outline-none flex space-x-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <p>Show Order Summary</p>
                                {openOrderSummary ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }
                            </button>
                            <div>2000 ETB</div>
                        </div>
                        {openOrderSummary && <OrderSummary />}
                    </div>
                    <div className='grid grid-cols-7 gap-2'>
                        <div className='col-span-full  lg:col-span-4  p-2 space-y-5'>
                            <div className='md:flex justify-center pb-4 hidden'>
                                <h1 className='text-5xl text-center relative w-fit my-2'>
                                    etege
                                    <div className='absolute -bottom-2 flex space-x-2 ml-2'>
                                        <div className='h-1 w-2 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                                        <div className='h-1 w-10 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                                    </div>
                                </h1>
                            </div>
                            <InputField title='Email' isRequired={true} />
                            <div className='grid grid-cols-2 gap-2' >
                                <InputField title='First Name' isRequired={true} />
                                <InputField title='Last Name' isRequired={true} />
                            </div>
                            <InputField title='Shipping Address' isRequired={true} />
                            <InputField title='City' isRequired={true} />
                            <InputField title='Apartment,Suite, etc (Optional)' />
                            <InputField title='Phone Number' isRequired={true} />
                            <div className='mt-3 pb-10 flex justify-between items-center text-sm md:text-base'>
                                <button className='outline-none flex space-x-1 md:space-x-2 items-center justify-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                    <span className='text-gray-400 tracking-widest '>RETURN TO CART</span>
                                </button>
                                <button className='outline-none bg-black tracking-widest px-2 py-1 md:px-5 md:py-3 uppercase  text-white rounded-sm'>
                                    Continue To Shipping
                                </button>
                            </div>
                        </div>
                        <div className='col-span-full hidden lg:block lg:col-span-3  '>
                            <div className='mt-9'>
                                <OrderSummary />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage