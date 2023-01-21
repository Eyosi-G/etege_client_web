import React from 'react'
import ReactDOM from 'react-dom'
import Footer from '../components/Footer'
import FreshArrival from '../components/FreshArrival'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

const HomePage = () => {

    return (
        <div className='relative'>
            <NavBar />
            <Hero />
            <FreshArrival />
            <Footer />
        </div>
    )
}

export default HomePage