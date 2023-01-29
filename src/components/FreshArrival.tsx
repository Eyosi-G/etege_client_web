import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hook'
import { useFetchProductsQuery } from '../services/api/productService'
import { setProduct } from '../services/slices/productSlice'
import AddToCart from './AddToCart'
import Modal from './Modal'
import PopUpAddToCart from './PopUpAddToCart'
import Product from './Product'

const FreshArrival = () => {
    const navigte = useNavigate()
    const { data, isLoading, isSuccess } = useFetchProductsQuery({ page: 0, limit: 4, isNew: true })

    return (
        <div className='mx-10 mt-10'>
            <div className='uppercase text-3xl text-center relative'>
                Fresh Arrivals
            </div>
            <div className='flex justify-center  mt-5 font-mono hover:cursor-pointer'>
                <div onClick={()=> navigte("/new")}  className='px-3 py-1 rounded-full border font-extralight text-sm'>VIEW ALL</div>
            </div>
            <div className='grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 gap-2'>
                {data?.products.map(product => {
                    return <Product product={product} />
                })}
            </div>
        </div>
    )
}

export default FreshArrival