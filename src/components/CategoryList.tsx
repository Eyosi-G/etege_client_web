import React from 'react'

const CategoryList = () => {
    return (
        <>
            <div className='flex space-x-2 items-center'>
                <input type="checkbox" />
                <p>Mens</p>
            </div>
            <div className='pl-10'>
                <div className='flex space-x-2 items-center'>
                    <input type="checkbox" />
                    <p>Tops</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <input type="checkbox" />
                    <p>Sweaters</p>
                </div>
            </div>
        </>
    )
}

export default CategoryList