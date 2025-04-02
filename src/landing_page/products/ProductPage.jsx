import React from 'react';
import LeftSection from './LeftSection';
import RightPage from './RightPage';
import Universe from './Universe';
import Hero from './Hero';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection  imageURL="media/images/kite.png" productName="Kite" productDescripton="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
        <RightPage/>
        <Universe/>
        
        </>
     );
}

export default ProductPage;