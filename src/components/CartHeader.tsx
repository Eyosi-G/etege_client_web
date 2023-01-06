import React from 'react'

const CartHeader = () => {
    return (
        <div>
            <div className='flex justify-between items-center mt-5'>
                <div className='uppercase text-gray-600 text-xl'>SHOPPING CART</div>
                <button className='text-gray-600 outline-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className='border-b border-b-gray-300 my-5'/>
        </div>
    )
}

export default CartHeader