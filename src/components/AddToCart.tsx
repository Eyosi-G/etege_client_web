import React, { useState } from 'react'
import AddToCartButton from './AddToCartButton'
import ProductDetail from './ProductDetail'
import Quantity from './Quantity'
import SizeButton from './SizeButton'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom'

const AddToCart = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const images = [
        "https://cdn.shopify.com/s/files/1/0564/3337/7459/products/TRIXIEJACKET_1_1280x.jpg?v=1672120388",
        "https://cdn.shopify.com/s/files/1/0564/3337/7459/products/TRIXIEJACKET_2_1280x.jpg?v=1672120388",
        "https://cdn.shopify.com/s/files/1/0564/3337/7459/products/TRIXIEJACKET_3_1280x.jpg?v=1672120388",
    ]
    const sizes = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ]

    return (
        <div className='grid grid-cols-11 gap-3'>
            <div className='col-span-full md:col-span-1 h-14 sm:h-24 order-2 sm:order-1 flex sm:block  justify-center'>
                {images.map((image, index) => {
                    return (
                        <div onClick={() => setSelectedIndex(index)} className={`mr-2 sm:mr-0 mb-2 flex justify-center p-1  border ${selectedIndex === index ? "border-gray-700" : "border-white"}`} >
                            <img src={image} className="h-full" />
                        </div>
                    );
                })}
            </div>
            <div className='col-span-full md:col-span-4 order-1 sm:order-2 '>
                <InnerImageZoom
                    src={images[selectedIndex]}
                    zoomSrc={images[selectedIndex]}
                    zoomType="hover"
                    zoomScale={1}
                />
            </div>
            <div className='col-span-full md:col-span-6 h-20 order-3 pb-10'>
                <div className=' tracking-wider text-2xl'>ROYCE GREEN MULTI FLORAL SLIT BODYCON MIDI DRESS</div>
                <div className='flex space-x-2  mt-2'>
                    <span className='line-through text-red-500 decoration-red-500'>3000 ETB</span>
                    <span>2500 ETB</span>
                </div>
                <div className='flex mt-5 space-x-4 justify-center sm:justify-start'>
                    {sizes.map((size, index) => {
                        return <SizeButton isSelected={index == 0} size={size} />
                    })}
                </div>
                <div className='grid grid-cols-8 mt-5 gap-2'>
                    <Quantity />
                    <AddToCartButton />
                </div>
                <ProductDetail />
                <div className='h-10'></div>
            </div>
        </div>
    )
}

export default AddToCart