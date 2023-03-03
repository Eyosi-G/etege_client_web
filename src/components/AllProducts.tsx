import { skipToken } from '@reduxjs/toolkit/dist/query'
import React, { useState } from 'react'
import { useAppSelector } from '../hooks/redux-hook'
import { useFetchProductsQuery } from '../services/api/productService'
import Footer from './Footer'
import NotFoundCollection from './NotFoundCollection'
import Paginator from './Paginator'
import Product from './Product'

const AllProducts = () => {
    const [page, setPage] = useState(0)
    const limit = 10;
    const { categories } = useAppSelector(state => state.category)

    const { isSuccess, data } = useFetchProductsQuery({ limit, page, categories: categories ? categories : undefined })
    return (
        <div>
            <div className='mb-5 font-bold text-lg tracking-widest'>All Products</div>
            <div className='mb-5 text-center lowercase text-gray-500'>{`${data?.total} Products`}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {data?.products.map(product => {
                    return <Product product={product} />
                })}
            </div>
            {isSuccess && data.products.length > 0 && <Paginator limit={limit} page={page} total={data?.total} updatePage={(newPage) => setPage(newPage)} />}
            {isSuccess && data?.products.length === 0 && <NotFoundCollection message='Product Not Found' />}        </div>
    )
}

export default AllProducts