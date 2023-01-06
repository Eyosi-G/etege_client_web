import React from 'react'
import AllProducts from '../components/AllProducts'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const AllProductsPage = () => {
    return (
        <div className='relative top-28 grid grid-cols-12 p-10 mb-28 gap-x-7'>
            <div className='col-span-2 '>
                <div className='pb-2 uppercase border-b border-b-gray-300'>Filter By</div>
                <div>
                    <div className='my-2'>Category</div>
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
                </div>
            </div>
            <div className='col-span-10'>
                <AllProducts />
            </div>

        </div>
    )
}

export default AllProductsPage