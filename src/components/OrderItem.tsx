import React from 'react'

const OrderItem = () => {
    return (
        <div className='flex my-5 space-x-2 '>
            <div className='w-[40%] bg-red-200'>
                <img className='h-full w-full object-cover object-top' src="https://cdn.shopify.com/s/files/1/0564/3337/7459/products/YUMIDRESS_1_1280x.jpg?v=1672120192" />
            </div>
            <div className='w-[60%] text-sm p-2'>
                <div className='text-lg line-clamp-2 '>Cloth And Stone Satin Tie Back Blouse</div>
                <div className='text-gray-500 mt-4' >
                    <div>Qty:  2</div>
                    <div>Size: S</div>
                    <div>Price: 1200 ETB</div>
                </div>
                <div className='flex mt-4'>
                    <div className='bg-black text-white font-bold uppercase flex items-center  space-x-2 px-3 py-2 rounded-full'>
                        <span className='p-1 bg-white rounded-full'></span>
                        <span className='text-sm md:text-base'>Out of Stock</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem