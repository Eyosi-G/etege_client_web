import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hook'
import { setProduct } from '../services/slices/productSlice'
import Cart from './Cart'
import CartList from './CartList'

import NavItem from './NavItem'
import PopUpAddToCart from './PopUpAddToCart'
import Search from './Search'

const NavBar = () => {
  const [openCartList, setOpenCartList] = useState(false)
  const dispatch = useAppDispatch()
  const { product } = useAppSelector(state => state.product)
  const navigate = useNavigate()

  return (
    <div>
      {openCartList && <CartList open={openCartList} closeCartList={() => setOpenCartList(false)} />}
      {product && <PopUpAddToCart closePopup={() => dispatch(setProduct(null))} open={Boolean(product)} product={product} />}
      <h1 className='px-10 font-bold text-3xl tracking-widest uppercase mt-9 mb-3'>
        <span className='p-2 '>Everything</span>
        <span className='p-2 bg-black text-white'>Addis</span>
      </h1>
      <div className=' grid grid-cols-2 items-center  px-5 md:px-10   z-20 pb-3 bg-white border-b border-b-gray-200 '>
        <div className='space-x-5 text-sm font-light hidden md:flex '>
          <NavItem onClick={() => navigate("/all")} name='NEW' />
          <NavItem onClick={() => navigate("/all")} name='VIEW ALL' />
        </div>
        <div className='md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

        <div className='flex space-x-5 justify-end '>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <Cart openCartList={() => setOpenCartList(true)} />
        </div>
      </div>
    </div>
  )
}

export default NavBar