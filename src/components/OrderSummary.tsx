import React from 'react'

const OrderSummary = () => {
    return (
        <div className='bg-gray-50 px-10 py-5  '>
            <div className='tracking-widest text-xl border-b border-b-black pb-5'>ORDER SUMMARY</div>
            <div className='flex my-5 space-x-2 '>
                <img src="https://d78fj94i6kg8.cloudfront.net/media/catalog/product/cache/f24b9123692e3a273eb0299cfdb30dd5/c/1/c1399-c01-302_1_1.jpg" />
                <div className='text-sm'>
                    <div className='text-lg'>Cloth And Stone Satin Tie Back Blouse</div>
                    <div>Qty:  2</div>
                    <div>Size: S</div>
                    <div>Price: 1200 ETB</div>
                </div>
            </div>
            <div className='flex my-5 space-x-2 '>
                <img src="https://d78fj94i6kg8.cloudfront.net/media/catalog/product/cache/f24b9123692e3a273eb0299cfdb30dd5/c/1/c1399-c01-302_1_1.jpg" />
                <div className='text-sm'>
                    <div className='text-lg'>Cloth And Stone Satin Tie Back Blouse</div>
                    <div>Qty:  2</div>
                    <div>Size: S</div>
                    <div>Price: 1200 ETB</div>
                </div>
            </div>
            <div className='mt-5 grow tracking-widest uppercase'>
                <div className=' flex justify-between text-gray-500 '>
                    <div className='tracking-widest'>total</div>
                    <div>3000 ETB</div>
                </div>
                <div className='flex justify-between  text-gray-500 '>
                    <div className='tracking-widest'>Chistmas Discount</div>
                    <div>-5%</div>
                </div>
                <div className='font-bold flex justify-between mt-4  text-xl'>
                    <div className='tracking-widest'>total</div>
                    <div>3000 ETB</div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary