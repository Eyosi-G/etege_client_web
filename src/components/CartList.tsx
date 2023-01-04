import React from 'react'
import Modal from './Modal'

const CartList = () => {
  const backdrop = <div className='fixed bg-black bg-opacity-75 top-0 right-0 left-0 bottom-0 z-40' />
  return (
    <Modal open={true} backdrop={backdrop} >
      <div className=' bg-white fixed top-0 right-0 bottom-0 w-3/12 z-50 p-4 overflow-auto'>
      </div>
    </Modal>
  )
}

export default CartList