import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { Home } from './Components/Home/index'
import Product from './Components/Product/index'
import ProductDetails from './Components/ProductsDetails'
// eslint-disable-next-line
import { LocalStorageProvider } from './Components/Context/localStorageContext'

const App = () => {
  return (
    <>
      <HashRouter>
        <LocalStorageProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:productID' element={<ProductDetails />} />

            {/* El * significa para todas las rutas */}
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </LocalStorageProvider>
      </HashRouter>
    </>
  )
}

export default App
