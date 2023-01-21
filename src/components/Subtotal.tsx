import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux-hook'

const Subtotal = () => {
    const navigate = useNavigate()
    const { products } = useAppSelector(state => state.cart)
    const total = Object.values(products).map(product => product.total).reduce((prev, current) => prev + current, 0)
    return (
        <div className='mt-5 grow tracking-widest uppercase'>


            <div className='font-bold flex justify-between mt-4  text-xl'>
                <div className='tracking-widest'>Total</div>
                <div>{`${total} ETB`}</div>
            </div>
            <div onClick={()=> navigate("/checkout")} className='hover:cursor-pointer font-bold  flex justify-center items-center  text-white bg-black p-3 mt-3 text-lg '>
                proceed to checkout
            </div>

        </div>
    )
}

export default Subtotal