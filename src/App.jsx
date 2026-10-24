import { useState } from 'react'

import './App.css'
import {Routes, Route} from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import RestaurantDetails from './pages/RestaurantDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='bg-red-400'>this is food restaurant app</h1> */}
     <Routes>
      <Route path='/' element={<MainLayout/>}/>
      <Route index element= {<Home />}/>
      <Route path='/restaurant/:id'  element={<RestaurantDetails />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout />}/>
       // not found route
      <Route path='*' element= {<NotFound/>}/>
      <Route />
     </Routes>
     

    </>
  )
}

export default App
