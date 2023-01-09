import React from 'react'
import Footer from './Footer'
import Paginator from './Paginator'
import Product from './Product'

const AllProducts = () => {
    return (
        <div>
            <div className='mb-5 text-center lowercase text-gray-500'>804 Products</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <Paginator />
        </div>
    )
}

export default AllProducts