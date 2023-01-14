import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { Home } from './Components/Home/index'
import Product from './Components/Product/index'
import ProductDetails from './Components/ProductsDetails'

function App () {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productDetails' element={<ProductDetails />} />

          {/* El * significa para todas las rutas */}
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
