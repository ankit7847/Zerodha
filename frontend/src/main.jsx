import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
import Signup from './landing_page/signup/Signup'
import Login from './landing_page/login/Login'; 
import Support from './landing_page/support/Support'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import './index.css'
import NotFound from './landing_page/NotFound'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>} ></Route>
    <Route path='/signup' element={<Signup/>} ></Route>
    <Route path='/login' element={<Login />} />
    <Route path='/About' element={<AboutPage/>} ></Route>
    <Route path='/pricing' element={<PricingPage />} />
    <Route path='/Product' element={<ProductPage/>} ></Route>
    <Route path='/Support' element={<Support/>} ></Route>
    <Route path='/*' element={<NotFound/>} ></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
