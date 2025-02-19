import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' elements={<Home />} />
          <Route path='/cart' elements={<Cart />} />
          <Route path='/order' elements={<PlaceOrder />} />
        </Routes>
        <Home />

      </div>

      <Footer />

    </>


  )
}

export default App
