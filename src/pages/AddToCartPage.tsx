import { skipToken } from '@reduxjs/toolkit/dist/query'
import React from 'react'
import { useParams } from 'react-router-dom'
import AddToCart from '../components/AddToCart'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Product from '../components/Product'
import {  useFetchProductsQuery, useGetProductQuery } from '../services/api/productService'

const AddToCartPage = () => {
    const { id } = useParams()
    const { data, isSuccess } = useGetProductQuery(id ? id : skipToken)
    const { data: relatedProducts } = useFetchProductsQuery(data ? {
        page: 0,
        limit: 4,
        categories: data.categories.map(category => category.id)
    } : skipToken)

    return (
        <div>
            <NavBar />
            <div className='px-10 mt-5' >
                {isSuccess && <AddToCart product={data} />}
                <div className='uppercase text-3xl font-bold my-5 text-center'>YOU MAY ALSO LIKE</div>
                <div className='grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-2 '>
                    {isSuccess && relatedProducts?.products.map(product => {
                        if (product.id !== data.id) {
                            return <Product product={product} />
                        }
                    })}
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default AddToCartPage