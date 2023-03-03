import React from 'react'
import { useAppSelector } from '../hooks/redux-hook'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import CartItemList from './CartItemList'
import Modal from './Modal'
import Subtotal from './Subtotal'

interface IProps {
  open: boolean;
  closeCartList: () => void;
}
const CartList = (props: IProps) => {
  const { open, closeCartList } = props
  return (
    <Modal open={open}  >
      <div className='h-screen flex flex-col bg-white fixed top-0 left-0 right-0 bottom-0  md:left-auto md:w-7/12 lg:w-4/12 z-50 p-4 overflow-auto'>
        <CartHeader closeCart={closeCartList} />
        <CartItemList />
        <Subtotal />
      </div>
    </Modal>
  )
}

export default CartList