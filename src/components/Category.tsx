import React, { useState } from 'react'
import NavItem from './NavItem'

const Category = () => {
    const [isHover, setHover] = useState(false)
    return (
        <div>
            <div
                onMouseLeave={(e) => {
                    setHover(false)
                }}
                onMouseEnter={(e) => {
                    setHover(true)
                }}>
                <NavItem name='CATEGORY' />
            </div>
            {
                isHover && <div className='w-full left-0 right-0 h-96 mt-5 bg-white absolute z-10'>
                </div>
            }
        </div>
    )
}

export default Category