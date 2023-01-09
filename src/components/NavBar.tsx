import React from 'react'
import Cart from './Cart'
import CartList from './CartList'

import NavItem from './NavItem'
import Search from './Search'

const NavBar = () => {
  return (
    <div className=' grid grid-cols-3 items-center  px-5 md:px-10 py-5 fixed z-20 bg-white left-0 right-0 top-0'>
      {/* <CartList /> */}
      {/* <Search /> */}
      <div className='space-x-5 text-sm font-light hidden md:flex '>
        <NavItem name='NEW IN' />
        <NavItem name='VIEW ALL' />
        <NavItem name='TRACK ORDER' />
      </div>
      <div className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className='flex justify-center pb-4'>
        <h1 className='text-3xl md:text-5xl text-center relative w-fit'>
          etege
          <div className='absolute -bottom-2 flex space-x-2 ml-2'>
            <div className='h-1 w-2 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
            <div className='h-1 w-10 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
          </div>
        </h1>
      </div>
      {/* icons */}
      <div className='flex space-x-5 justify-end py-2'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <Cart />
      </div>
    </div>
  )
}

export default NavBar