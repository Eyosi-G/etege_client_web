import React, { useState } from 'react'
import CategoryList from './CategoryList'
import Modal from './Modal'

const FilterMenus = () => {
    const [openFilterMenu, setOpenFilterMenu] = useState(false)

    return (
        <>
            <div className='pb-2 uppercase border-b border-b-gray-300  flex justify-between mb-2 tracking-widest'>
                <div>Filter By</div>
                <button onClick={()=> setOpenFilterMenu(true)} className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>


            <Modal open={openFilterMenu}>
                <div className=' bg-white fixed top-0 left-0 right-0 bottom-0 z-50 p-4 overflow-auto'>
                    <div className='flex justify-between mb-5 uppercase border-b border-b-gray-300 pb-2 tracking-widest'>
                        <div>Filter By</div>
                        <button onClick={()=> setOpenFilterMenu(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <CategoryList />
                </div>
            </Modal>
            <div className='hidden md:block'>
                <div className='my-2'>Category</div>
                <CategoryList />
            </div>
        </>
    )

}

export default FilterMenus