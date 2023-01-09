import React from 'react'

const CartItem = () => {
    const quantity = (
        <div className='flex px-3 py-1 justify-around bg-gray-200 ' >
            <button className='outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <div className='mx-2'>1</div>
            <button className='outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div >
    );

    return (
        <div className='grid grid-cols-6 gap-1 '>
            <div className="col-span-2">
                <img className='h-32  w-full object-cover object-top  ' src="https://cdn.shopify.com/s/files/1/0564/3337/7459/products/MillaPants_3_medium.jpg?v=1672120622" />
            </div>
            <div className='col-span-3 space-y-2 flex flex-col h-32  w-full'>
                <div className='capitalize text-lg font-light line-clamp-2   '>Minimal Milla Pant Kawung Geo Minimal Milla Pant Kawung Geo Minimal Milla Pant Kawung Geo</div>
                <div className='font-bold '>3000 ETB</div>
                {quantity}
            </div>
            <div className='col-span-1 flex justify-center items-start '>
                <button className='outline-nones'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CartItem