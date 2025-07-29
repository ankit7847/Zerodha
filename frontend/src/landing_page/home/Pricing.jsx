import React from 'react';

function Pricing() {
    return (
        <div className="container my-5 px-4">
            <div className="row g-4 align-items-center">
                {/* Left section */}
                <div className="col-12 col-md-6">
                    <h1 className="mb-4 fw-bold">Unbeatable pricing</h1>
                    <p className="mb-3">
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-primary text-decoration-none">
                        See pricing <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                </div>

                {/* Right section */}
                <div className="col-12 col-md-6">
                    <div className="row text-center g-3">
                        <div className="col-6">
                            <div className="border p-4 h-100 rounded shadow-sm">
                                <h2 className="mb-2">₹0</h2>
                                <p className="mb-0">
                                    Free equity delivery<br />and direct mutual funds
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="border p-4 h-100 rounded shadow-sm">
                                <h2 className="mb-2">₹20</h2>
                                <p className="mb-0">
                                    Intraday and F&O
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;

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
            