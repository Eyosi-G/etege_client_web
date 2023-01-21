import { skipToken } from '@reduxjs/toolkit/dist/query'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hook'
import { useFetchCategoriesQuery } from '../services/api/categoryService'
import { toggleCategory } from '../services/slices/categorySlice'

const CategoryList = () => {
    const { data: initalData } = useFetchCategoriesQuery({})
    const { data } = useFetchCategoriesQuery(initalData ? { limit: initalData.total, page: 0 } : skipToken)

    const { categories } = useAppSelector(state => state.category)
    const dispatch = useAppDispatch()


    return (
        <>
            <div className=''>
                {
                    data?.categories.map(category => {
                        const isSelected = categories.includes(category.id)
                        return (
                            <div className='flex space-x-2 items-center'>
                                <input type="checkbox" onChange={(e) => dispatch(toggleCategory(category.id))} capture={isSelected} />
                                <p className='capitalize'>{category.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CategoryList