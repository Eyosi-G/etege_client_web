import React from 'react'
import { IProduct } from '../services/api/productService';
import AddToCart from './AddToCart'
import Modal from './Modal'

interface IProps {
    open: boolean;
    closePopup: () => void;
    product: IProduct
}
const PopUpAddToCart = (props: IProps) => {
    const { open, closePopup, product } = props
    return (
        <Modal open={open}>
            <div className=' bg-white fixed top-5 left-5 right-5 bottom-5 md:top-10 md:left-10 md:right-10 md:bottom-10 z-50 p-4 overflow-auto'>
                <div onClick={closePopup} className='hover:cursor-pointer flex space-x-2 px-7 py-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <div>Back to shop</div>
                </div>
                <div className='px-7'>
                    <AddToCart product={product} />
                </div>
            </div>
        </Modal>

    )
}

export default PopUpAddToCart