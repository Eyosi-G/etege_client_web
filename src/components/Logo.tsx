import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate()
    return (
        <h1 onClick={() => navigate("/")} className='px-4 text-center md:text-start md:px-9 font-bold text-lg md:text-3xl tracking-widest uppercase mt-9 mb-3 hover:cursor-pointer'>
            <span className='p-2 '>Everything</span>
            <span className='p-2 bg-black text-white'>Addis</span>
        </h1>
    )
}

export default Logo