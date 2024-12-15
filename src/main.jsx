import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import PricePage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
import Signup from './landing_page/signup/Signup'
import Support from './landing_page/support/Support'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <HomePage/>
    {/* <AboutPage/>
    <PricePage/>
    <ProductPage/>
    <Signup/>
    <Support/> */}
    </div>
  </React.StrictMode>,
)
