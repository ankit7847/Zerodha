import React from 'react';
function Universe() {
    return ( 
        <div className="container p-3"> {/* Reduced padding */}
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 mt-3">
                    <img style={{ height: "20%" }} src="media/images/zerodhaFundhouse.png" alt="" />
                    <p className='text-small text-muted mt-2 mb-2'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>     
                </div>
                <div className="col-4 mt-3">
                    <img style={{ height: "20%" }} src="media/images/goldenpiLogo.png" alt="" />
                    <p className='text-small text-muted mt-2 mb-2'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
                <div className="col-4 mt-3">
                    <img style={{ height: "20%" }} src="media/images/dittoLogo.png" alt="" />
                    <p className='text-small text-muted mt-2 mb-2'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>

                <div className="col-4 mt-3">
                    <img src="media/images/smallcaseLogo.png" alt="" />
                    <p className='text-small text-muted mt-2 mb-2'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>     
                </div>
                <div className="col-4 mt-3">
                    <img style={{ height: "10%" }} src="media/images/sensibullLogo.svg" alt="" />
                    <p className='text-small text-muted mt-2 mb-2'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 mt-3">
                    <img style={{ height: "15%" }} src="media/images/streakLogo.png" alt="" />
                    <p className='text-small text-muted mt-2 mb-2'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
            </div>

            {/* Button placed outside row */}
            <div className="text-center mb-5">
                <button className='p-2 btn btn-primary fs-5' 
                    style={{ width: "20%", margin: "0 auto", marginTop: "-20px" }}>
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default Universe;
