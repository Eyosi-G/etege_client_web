import React from 'react'

const Subtotal = () => {
    return (
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
                <div className='tracking-widest'>subtotal</div>
                <div>3000 ETB</div>
            </div>
            <div className='font-bold  flex justify-center items-center  text-white bg-black p-3 mt-3 text-lg '>
                proceed to checkout
            </div>

        </div>
    )
}

export default Subtotal