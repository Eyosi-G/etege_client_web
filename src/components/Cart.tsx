import React from 'react'
import { useAppSelector } from '../hooks/redux-hook';

interface IProps {
    openCartList: () => void;
}
const Cart = (props: IProps) => {
    const { openCartList } = props
    const { products } = useAppSelector(state => state.cart)
    const count = Object.keys(products).length
    return (
        <div className='hover:cursor-pointer' onClick={()=> {
            console.log('open cart please')
            openCartList()
        }}>
            <div className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <div className='absolute bg-black rounded-full w-4 h-4 flex justify-center items-center p-0.5 -top-1 -right-1 text-sm text-white font-semibold'>{count}</div>
            </div>
        </div>
    )
}

export default Cart