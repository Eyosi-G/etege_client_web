import React from 'react'

interface IProps {
  addToCartHandler: ()=> void;
}
const AddToCartButton = (props: IProps) => {
  const { addToCartHandler} = props
  return (
    <div onClick={addToCartHandler} className='hover:cursor-pointer hover:bg-black hover:text-white p-3 uppercase border col-span-full sm:col-span-5 flex justify-center items-center grow font-bold tracking-widest border-black font-mono px-5 py-2 rounded-full'>Add To Cart</div>
  )
}

export default AddToCartButton