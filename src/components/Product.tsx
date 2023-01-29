import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux-hook';
import { IProduct } from '../services/api/productService';
import { imageBaseUrl } from '../services/common';
import { setProduct } from '../services/slices/productSlice';
import PopUpAddToCart from './PopUpAddToCart';

interface IProps {
    product: IProduct
}
const Product = (props: IProps) => {
    const navigate = useNavigate()
    const { product } = props;
    // const images = [
    //     "https://cdn.shopify.com/s/files/1/0564/3337/7459/products/YUMIDRESS_1_1280x.jpg?v=1672120192",
    //     "https://cdn.shopify.com/s/files/1/0564/3337/7459/products/YUMIDRESS_2_1280x.jpg?v=1672120192"
    // ];
    const [selectedIndex, setSelectedIndex] = useState(0)
    const onHover = (e: React.MouseEvent) => {
        setSelectedIndex(selectedIndex === 0 ? 1 : 0)
    }
    // const [addToCartOpen, setAddToCartOpen] = useState(false)
    const dispatch = useAppDispatch()

    return (
        <div onMouseEnter={onHover} onMouseLeave={onHover} className="group">
            <div className="h-96 w-full relative" >
                <img onClick={() => navigate(`/products/${product.slug}`)} src={`${imageBaseUrl}${product.images[selectedIndex]}`} className="h-full w-full object-cover" />
                <div onClick={() => dispatch(setProduct(product))} className='hover:cursor-pointer hidden group-hover:block text-center text-sm font-light bg-black absolute bottom-2 right-2 left-2 p-2 text-white'>Add to cart</div>
                {product.isNew && !product.isSoldOut && <div className='absolute top-2 right-2 bg-green-300  text-sm rounded-lg px-2 py-1 font-bold uppercase'>New</div>}
                {product.isSoldOut && <div className='absolute top-2 left-2  text-white text-sm  px-2 py-1 uppercase bg-gray-700'>Sold Out</div>}

            </div>
            <div className='text-center mt-4 text-sm'>{product.name}</div>
            <div className='flex justify-center space-x-2'>
                {product.compareAtPrice && <div className='text-xs mt-1 text-red-700 line-through decoration-red-700'>{`${product.compareAtPrice} ETB`}</div>}
                <div className='text-xs mt-1 text-gray-700'>{`${product.price} ETB`}</div>
            </div>
        </div>
    )
}

export default Product