import React from 'react'
import Footer from '../components/Footer'
import FreshArrival from '../components/FreshArrival'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <FreshArrival />
            <Footer />
        </div>
    )
}

export default HomePage