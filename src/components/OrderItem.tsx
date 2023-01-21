import React from 'react'
import { IOrderDetail } from '../services/api/orderService'
import { imageBaseUrl } from '../services/common'

interface IProps {
    orderDetail: IOrderDetail
}
const OrderItem = (props: IProps) => {
    const { orderDetail } = props;
    return (
        <div className='flex my-5 space-x-2 '>
            <div className='w-[40%] bg-red-200'>
                <img className='h-full w-full object-cover object-top' src={`${imageBaseUrl}${orderDetail.productImages[0]}`} />
            </div>
            <div className='w-[60%] text-sm p-2'>
                <div className='text-lg line-clamp-2 '>{orderDetail.productName}</div>
                <div className='text-gray-500 mt-4' >
                    <div>{`Qty: ${orderDetail.quantity}`}</div>
                    <div>{`Unit Price: ${orderDetail.price} ETB`}</div>
                </div>
                <div className='flex mt-4'>
                    <div className='bg-black text-white font-bold uppercase flex items-center  space-x-2 px-3 py-2 rounded-full'>
                        <span className='p-1 bg-white rounded-full'></span>
                        <span className='text-sm md:text-base'>{orderDetail.status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem