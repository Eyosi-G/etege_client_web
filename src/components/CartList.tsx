import React from 'react'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import Modal from './Modal'
import Subtotal from './Subtotal'

const CartList = () => {
  // const backdrop = <div className='fixed bg-black bg-opacity-75 top-0 right-0 left-0 bottom-0 z-40' />
  return (
    <Modal open={true}  >
      <div className='h-screen flex flex-col bg-white fixed top-0 right-0 bottom-0  md:w-7/12 lg:w-4/12 z-50 p-4 overflow-auto'>
        <CartHeader />
        <div className='overflow-y-auto space-y-2 h-[60%]'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <Subtotal />
      </div>
    </Modal>
  )
}

export default CartList