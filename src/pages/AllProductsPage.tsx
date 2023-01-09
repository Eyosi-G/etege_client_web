import React from 'react'
import AllProducts from '../components/AllProducts'
import FilterMenus from '../components/FilterMenus'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const AllProductsPage = () => {
    return (
        <div className='relative'>
            <NavBar/>
            <div className='relative top-28 grid grid-cols-12 p-10 mb-28 gap-5'>
                <div className='col-span-full md:col-span-2 '>
                    <FilterMenus />
                </div>
                <div className='col-span-full md:col-span-10'>
                    <AllProducts />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllProductsPage