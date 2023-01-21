import React from 'react'
import { useAppDispatch } from '../hooks/redux-hook';
import { IProduct } from '../services/api/productService';
import { imageBaseUrl } from '../services/common';
import { decrementQty, incrementQty, removeFromCarts } from '../services/slices/cartSlice';

interface IProps {
    product: IProduct,
    total: number,
    qty: number
}
const CartItem = (props: IProps) => {
    const { product, qty, total } = props
    const dispatch = useAppDispatch()


    const quantity = (
        <div className='flex px-3 py-1 justify-around bg-gray-200  ' >
            <button onClick={() => dispatch(decrementQty(product.id))} className='outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <div className='mx-2'>{qty}</div>
            <button onClick={() => dispatch(incrementQty(product.id))} className='outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div >
    );

    return (
        <div className='grid grid-cols-6 gap-1 '>
            <div className="col-span-2">
                <img className='h-32  w-full object-cover object-top  ' src={`${imageBaseUrl}${product.images[0]}`} />
            </div>
            <div className='col-span-3 space-y-1 flex flex-col h-32  w-full'>
                <div className='capitalize text-lg font-light line-clamp-2   '>{product.name}</div>
                <div className='font-semibold'>{product.price}</div>
                <div className=''>{"Sub Total - " + total}</div>

                <div className='grow' />
                {quantity}
            </div>
            <div className='col-span-1 flex justify-center items-start '>
                <button type='button' onClick={() => dispatch(removeFromCarts(product.id))} className='outline-nones'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CartItem