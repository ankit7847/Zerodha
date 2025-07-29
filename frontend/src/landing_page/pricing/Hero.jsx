import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            {/* Header Section */}
            <div className="row p-5 mt-5 text-center border-bottom">
                <div className="col-12">
                    <h1>Pricing</h1>
                    <h3 className='text-muted mt-3 fs-4'>
                        Free equity investment and flat ₹20 intraday and F&O trades
                    </h3>
                </div>
            </div>

            {/* Pricing Cards Section */}
            <div className="row text-center mt-3 p-3">
                <div className="col-12 col-md-4 p-4">
                    <img src="media/images/pricingEquity.svg" alt="Free equity" className="img-fluid mb-3" />
                    <h1 className='fs-4'>Free equity delivery</h1>
                    <p className='text-muted'>
                        All equity delivery investments (NSE, BSE),<br />
                        are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className="col-12 col-md-4 p-4">
                    <img src="media/images/intradayTrades.svg" alt="Intraday trades" className="img-fluid mb-3" />
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>
                        Flat ₹20 or 0.03% (whichever is lower) per <br />
                        executed order on intraday trades across <br />
                        equity, currency, and commodity trades. Flat <br />
                        ₹20 on all option trades.
                    </p>
                </div>

                <div className="col-12 col-md-4 p-4">
                    <img src="media/images/pricingEquity.svg" alt="Mutual funds" className="img-fluid mb-3" />
                    <h1 className='fs-4'>Free direct MF</h1>
                    <p className='text-muted'>
                        All direct mutual fund investments are <br />
                        absolutely free — ₹ 0 commissions & DP <br />
                        charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
