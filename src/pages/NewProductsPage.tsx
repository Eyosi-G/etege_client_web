import React from 'react'
import FilterMenus from '../components/FilterMenus'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NewProducts from '../components/NewProducts'

const NewProductsPage = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-12 p-10 mb-28 gap-5'>
                <div className='col-span-full md:col-span-2 '>
                    <FilterMenus />
                </div>
                <div className='col-span-full md:col-span-10'>
                    <NewProducts />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewProductsPage