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
    <div onClick={isDisabled ? undefined : addToCartHandler} className={`${isDisabled ? "bg-gray-200 text-gray-600" : "hover:cursor-pointer hover:bg-black hover:text-white  border-black"} p-3 uppercase border col-span-full sm:col-span-5 flex justify-center items-center grow font-bold tracking-widest font-mono px-5 py-2 rounded-full`}>{text ? text : "Add To Cart"}</div>
  )
}

export default AddToCartButton