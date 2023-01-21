import React, { useState } from 'react'
import AddToCartButton from './AddToCartButton'
import ProductDetail from './ProductDetail'
import Quantity from './Quantity'
import SizeButton from './SizeButton'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom'
import { IProduct } from '../services/api/productService'
import { imageBaseUrl } from '../services/common'
import { useAppDispatch } from '../hooks/redux-hook'
import { addToCart } from '../services/slices/cartSlice'
interface IProps {
    product: IProduct
}
const AddToCart = (props: IProps) => {
    const { product } = props
    const dispatch = useAppDispatch()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        setQuantity(quantity === 1 ? 1 : quantity - 1)
    }
    return (
        <div className='grid grid-cols-11 gap-3 '>
            <div className='col-span-full md:col-span-1   order-2 sm:order-1 flex sm:flex-col flex-row justify-center'>
                {product.images.map((image, index) => {
                    return (
                        <div onClick={() => setSelectedIndex(index)} className={`mr-2 sm:mr-0 mb-2 flex h-14 sm:h-fit justify-center p-1  border ${selectedIndex === index ? "border-gray-700" : "border-white"}`} >
                            <img src={`${imageBaseUrl}${image}`} className="h-full" />
                        </div>
                    );
                })}
            </div>
            <div className='col-span-full md:col-span-4 order-1 sm:order-2'>
                <InnerImageZoom
                    className=''
                    src={`${imageBaseUrl}${product.images[selectedIndex]}`}
                    zoomSrc={`${imageBaseUrl}${product.images[selectedIndex]}`}
                    zoomType="hover"
                    zoomScale={1}
                />
            </div>
            <div className='col-span-full md:col-span-6  order-3 pb-10'>
                <div className=' tracking-wider text-2xl'>ROYCE GREEN MULTI FLORAL SLIT BODYCON MIDI DRESS</div>
                <div className='flex space-x-2  mt-2'>
                    {product.compareAtPrice && <span className='line-through text-red-500 decoration-red-500'>{`${product.compareAtPrice} ETB`}</span>}
                    <span>{`${product.price} ETB`}</span>
                </div>

                <div className='space-y-2 mt-5'>
                    <div className='flex'>
                        <Quantity qty={quantity} increment={increment} decrement={decrement} />
                    </div>
                    <AddToCartButton addToCartHandler={() => { dispatch(addToCart({ product, quantity })) }} />
                </div>
                <ProductDetail description={product.description} />
                <div className='h-10'></div>
            </div>
        </div>
    )
}

export default AddToCart