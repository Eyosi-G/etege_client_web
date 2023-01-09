import React from 'react'
import Logo from './Logo'
import Modal from './Modal'

const OrderCompleted = () => {
    return (
        <Modal open={true}>
            <div className=' bg-white fixed top-14 left-5 right-5 bottom-14 md:top-10 md:left-24 md:right-24 md:bottom-10  z-50 p-10 overflow-auto'>
                <div className='pb-5 uppercase border-b border-b-gray-300  flex justify-between mb-2 tracking-widest'>
                    <div></div>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='flex justify-center mt-10'>
                    <img src="/icons/clap.svg" className='w-20' />
                </div>
                <div className='text-center capitalize text-2xl tracking-wider mt-5 md:mt-0'>Thanks for your order</div>
                <div className='text-center capitalize mt-2'>Thanks for placing order <span className='underline font-bold'>EPS129032970</span>! </div>
                <div className='text-center capitalize mt-2'>If you have any questions or queries then feel free to get in contact us.</div>
                <div className='flex justify-center mt-5'>
                    <Logo />
                </div>
                <div className='flex justify-center my-10'>
                    <button className='bg-black tracking-widest px-5 uppercase py-3 text-white rounded-sm'>
                        Check Status
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default OrderCompleted