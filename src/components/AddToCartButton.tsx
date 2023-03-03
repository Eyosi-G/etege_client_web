import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'

interface IProps {
  isDisabled?: boolean;
  text?: string;
  addToCartHandler: () => void;
}
const AddToCartButton = (props: IProps) => {
  const { addToCartHandler, isDisabled, text } = props

  return (
    <div onClick={isDisabled ? undefined : addToCartHandler} className={`${isDisabled ? "bg-gray-200 text-gray-600" : "hover:cursor-pointer hover:bg-black hover:text-white  border-black"} p-3 uppercase border col-span-full sm:col-span-5 flex items-center justify-center  grow font-bold tracking-widest  px-5 py-2 rounded-full space-x-2 `}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </span>
      <span>{text ? text : "Add To Cart"}</span>
    </div>
  )
}

export default AddToCartButton