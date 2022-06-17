import React from 'react'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Productsdetails from './Productsdetails'
import Error from './Error'
const Allroutes = () => {
  return (
    <div>
        <Routes>
             <Route path = "/" element={<Home/>}></Route>
             <Route path = "/products" element={<Products/>}></Route>
             <Route path = "/products/:id" element={<Productsdetails/>}></Route>
             <Route path = "*" element={<Error/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes