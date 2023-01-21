import React from 'react'
import { useAppSelector } from '../hooks/redux-hook'
import { imageBaseUrl } from '../services/common'

const OrderSummary = () => {
    const { products } = useAppSelector(state => state.cart)
    const total = Object.values(products).map(product => product.total).reduce((prev, current) => prev + current, 0)
    return (
        <div className='bg-gray-50 px-10 py-5  '>
            <div className='tracking-widest text-xl border-b border-b-black pb-5'>ORDER SUMMARY</div>
            {
                Object.values(products).map(({ product, quantity }) => {
                    return (
                        <div className='flex my-5 space-x-2 '>
                            <img className='h-32 w-[30%] object-cover object-top' src={`${imageBaseUrl}${product.images[0]}`} />
                            <div className='w-[60%] text-sm'>
                                <div className='text-lg'>{product.name}</div>
                                <div>{`Qty: ${quantity}`}</div>
                                <div>{`Price: ${product.price} ETB`}</div>
                            </div>
                        </div>
                    )
                })
            }

            <div className='mt-5 grow tracking-widest uppercase'>

                <div className='font-bold flex justify-between mt-4  text-xl'>
                    <div className='tracking-widest'>total</div>
                    <div>{`${total} ETB`}</div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary