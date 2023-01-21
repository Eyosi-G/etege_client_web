import React from 'react'
import ProgressCircle from './ProgressCircle'

const OrderProgressBar = () => {
    return (
        <div className="flex justify-between items-center relative my-10">
            <ProgressCircle order={1} title="Pending" />
            <ProgressCircle order={2} title="Processing" />
            <ProgressCircle order={3} title="Delivered" />
            <div className='border-b border-b-black absolute top-5 md:top-7 w-full'></div>
        </div>

    )
}

export default OrderProgressBar