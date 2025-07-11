import React from 'react';

function Pricing() {
    return ( 
        <div className="container p-5">
            <div className="row p-3">
                <div className="col-4">
                    <h1 className='mb-5'>
                    Unbeatable pricing</h1>
                    <p className='mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{textDecoration:"none"}}>See pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery  and <br />
                            direct mutual funds</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
                {/* <div className="col-6">
                <div className="pricing" style={{display:"flex"}}>
                <div className="pricing-box d-flex align-items-center">
                    <img src="media/images/pricing-eq 2.svg" alt="pricing" style={{width:"60%"}} />
                    <p className='' style={{fontSize:"12px"}}> Free account opening
                   </p>
                    </div> */}
                    {/* <div className="pricing-box d-flex align-items-center">
                    <img src="media/images/pricing-eq 2.svg" alt="pricing" style={{width:"60%"}} />
                    <p className='' style={{fontSize:"12px"}}> Free equity delivery  and
                   direct mutual funds</p>
                    </div>
                    <div className="pricing-box d-flex align-items-center">
                    <img src="media/images/pricing-eq 3.svg" alt="pricing" style={{width:"60%"}} />
                    <p className='' style={{fontSize:"12px"}}>Intraday and
                    <br />
                    F&O</p>
                    </div> */}
                {/* </div>
                </div> */}
            </div>
        </div>
     );
}

export default Pricing;