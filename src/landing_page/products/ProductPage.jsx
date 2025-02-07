import React from 'react';
import LeftSection from './LeftSection';
import RightPage from './RightPage';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
function ProductPage() {
    return ( 
        <>
        <Navbar/>
        <LeftSection/>
        <RightPage/>
        <Hero/>
        <Universe/>
        <Footer/>
        </>
     );
}

export default ProductPage;