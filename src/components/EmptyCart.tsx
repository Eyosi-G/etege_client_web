import React from 'react'

const EmptyCart = () => {
    return (
        <div className='h-full flex justify-center items-center'>
            <div>
                <h1 className='text-xl text-center'>Your cart is empty</h1>
                <div className='mt-2 text-center'>There are no items in your cart</div>
            </div>
        </div>
    )
}

export default EmptyCart