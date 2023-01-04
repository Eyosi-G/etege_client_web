import React, { useState } from 'react'

const Product = () => {
    const images = [
        "https://cdn.shopify.com/s/files/1/0564/3337/7459/products/YUMIDRESS_1_1280x.jpg?v=1672120192",
        "https://cdn.shopify.com/s/files/1/0564/3337/7459/products/YUMIDRESS_2_1280x.jpg?v=1672120192"
    ];
    const [selectedIndex, setSelectedIndex] = useState(0)
    const onHover = (e: React.MouseEvent) => {
        setSelectedIndex(selectedIndex === 0 ? 1 : 0)
    }
    return (
        <div onMouseEnter={onHover} onMouseLeave={onHover} className="group">
            <div className="h-96 w-full relative">
                <img src={images[selectedIndex]} className="h-full w-full object-cover" />
                <div className='hover:cursor-pointer hidden group-hover:block text-center text-sm font-light bg-black absolute bottom-2 right-2 left-2 p-2 text-white'>Add to cart</div>
            </div>
            <div className='text-center mt-4 text-sm'>Minimal Yumi Dress Navy Blue</div>
            <div className='flex justify-center space-x-2'>
                <div className='text-xs mt-1 text-red-700 line-through decoration-red-700'>3200 ETB</div>
                <div className='text-xs mt-1 text-gray-700'>3200 ETB</div>
            </div>
        </div>
    )
}

export default Product