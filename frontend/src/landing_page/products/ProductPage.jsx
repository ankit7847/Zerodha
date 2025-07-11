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
        <RightPage productName="Console" productDescripton="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" imageURL= "media/images/console.png"     />
        <LeftSection  imageURL="media/images/coin.png" productName="Coin" productDescripton="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.." tryDemo="" learnMore="" googlePlay="" appStore="" />
        <RightPage productName="Kite Connect API" productDescripton="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" imageURL= "media/images/kiteconnect.png" />
        <LeftSection  imageURL="media/images/varsity.png" productName="Varsity mobile" productDescripton="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore="" />
        <h4 className='text-center text-muted'>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech blog.</a></h4>
        <Universe/>
        
        </>
     );
}

export default ProductPage;