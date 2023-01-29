import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavBar />
            <div className='text-center my-10'>
                <h1 className='text-4xl'>404 Page Not Found</h1>
                <div className='mt-5'>The page you requested does not exist.</div>
                <div  className='flex justify-center mt-7'>
                    <div onClick={()=> navigate("/") }  className='px-4 py-3 border border-black font-light uppercase text-sm hover:cursor-pointer'>Return Home</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFoundPage