import React from 'react'
import { useAppSelector } from '../hooks/redux-hook'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'

const CartItemList = () => {
    const { products } = useAppSelector(state => state.cart)

    return (
        <div className='overflow-y-auto space-y-2 h-[60%]'>
            {Object.values(products).map(item => {
                return <CartItem key={item.product.id} product={item.product} qty={item.quantity} total={item.total} />
            })}
            {Object.values(products).length == 0 && <EmptyCart />}
        </div>
    )
}

export default CartItemList