import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hook'
import { setProduct } from '../services/slices/productSlice'
import Cart from './Cart'
import CartList from './CartList'
import Logo from './Logo'

import NavItem from './NavItem'
import PopUpAddToCart from './PopUpAddToCart'
import Search from './Search'

const NavBar = () => {
  const [openCartList, setOpenCartList] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const dispatch = useAppDispatch()
  const { product } = useAppSelector(state => state.product)
  const navigate = useNavigate()

  return (
    <div>
      {openCartList && <CartList open={openCartList} closeCartList={() => setOpenCartList(false)} />}
      {openSearch && <Search open={openSearch} closeSearchHandler={() => setOpenSearch(false)} />}

      {product && <PopUpAddToCart closePopup={() => dispatch(setProduct(null))} open={Boolean(product)} product={product} />}
      <Logo />
      <div className='mt-10 md:mt-0 grid grid-cols-2 items-center  px-5 md:px-10   z-20 pb-3 bg-white border-b border-b-gray-200 '>
        <div className='space-x-5 text-xs md:text-sm font-light flex'>
          <NavItem onClick={() => navigate("/new")} name='NEW' />
          <NavItem onClick={() => navigate("/all")} name='VIEW ALL' />
        </div>
        <div className='flex space-x-5 justify-end '>
          <button onClick={() => setOpenSearch(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <Cart openCartList={() => setOpenCartList(true)} />
        </div>
      </div>
    </div>
  )
}

export default NavBar