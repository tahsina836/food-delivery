import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'


const App = () => {
  return (

    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' elements={<Home />} />
        <Route path='/cart' elements={<Cart />} />
        <Route path='/order' elements={<PlaceOrder />} />
      </Routes>
      <Home />

    </div>
  )
}

export default App
