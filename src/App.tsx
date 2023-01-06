import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import AllProductsPage from './pages/AllProductsPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <div className='relative'>
        <NavBar />
        <AllProductsPage />
        <Footer />
      </div>
    </div>
  )
}

export default App