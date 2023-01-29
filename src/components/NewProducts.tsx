import React, { useState } from 'react'
import { useAppSelector } from '../hooks/redux-hook';
import { useFetchProductsQuery } from '../services/api/productService';
import Paginator from './Paginator';
import Product from './Product';

const NewProducts = () => {
    const [page, setPage] = useState(0)
    const limit = 10;
    const { categories } = useAppSelector(state => state.category)

    const { isSuccess, data } = useFetchProductsQuery({ limit, page, categories: categories ? categories : undefined, isNew: true })
    return (
        <div>
            <div className='mb-5 font-bold text-lg tracking-widest'>New Products</div>
            <div className='mb-5 text-center lowercase text-gray-500'>{`${data?.total} Products`}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {data?.products.map(product => {
                    return <Product product={product} />
                })}
            </div>
            {isSuccess && <Paginator limit={limit} page={page} total={data?.total} updatePage={(newPage) => setPage(newPage)} />}
        </div>
    )
}

export default NewProducts