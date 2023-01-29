import { skipToken } from '@reduxjs/toolkit/dist/query';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hook';
import { useFetchCategoriesQuery } from '../services/api/categoryService';
import { useFetchProductsQuery } from '../services/api/productService';
import { toggleCategory } from "../services/slices/categorySlice"
interface IProps {
    closeSearchHandler: () => void;
}
const SearchList = (props: IProps) => {
    const { closeSearchHandler } = props;
    const [search, setSearch] = useState("")
    const { data } = useFetchProductsQuery(search ? { name: search } : skipToken)
    const { data: categoryData } = useFetchCategoriesQuery(search ? { name: search } : skipToken)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    

    return (
        <div className='p-5'>
            <div>
                <div className='flex justify-end items-center mt-5'>
                    <button onClick={closeSearchHandler} className='text-gray-600 outline-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='flex mt-2 border-b-2 border-black pb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='ml-2 grow outline-none' type="text" placeholder='What are you looking for ?' />
                {search && <button className='text-sm font-thin' onClick={() => { setSearch("") }}>clear</button>}
            </div>

            <div className='mt-10'>
                {data?.products.map(product => {
                    return (
                        <div onClick={() => navigate(`/products/${product.slug}`)} className='flex justify-between my-2 hover:cursor-pointer'>
                            <div className='capitalize'>{product.name}</div>
                            <div className='capitalize'>{`${product.price} ETB`}</div>
                        </div>
                    )
                })}
            </div>

            {categoryData && categoryData.categories.length > 0 && <div className='mt-10  '>
                <div className='mb-2 pb-2 border-b text-gray-400 border-gray-400'>Categories</div>
                {categoryData?.categories.map(category => {
                    return (
                        <div onClick={() => {
                            
                            dispatch(toggleCategory(category.id))
                            closeSearchHandler()
                            navigate("/all")
                        }} className='flex justify-between my-2 hover:cursor-pointer'>
                            <div className='capitalize'>{`#${category.name}`}</div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default SearchList