import React from 'react';

function Team() {
    return ( 
        <div className='container py-5'>

            {/* Heading */}
            <div className="row">
                <div className="col text-center">
                    <h1 className='mb-4'>People</h1>
                </div>
            </div>

            {/* Profile Section */}
            <div className="row align-items-center text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                
                {/* Image Column */}
                <div className="col-12 col-md-6 text-center p-4">
                    <img 
                        src="media/images/nithinKamath.jpg" 
                        alt="Nithin Kamath" 
                        className="img-fluid rounded-circle" 
                        style={{ maxWidth: "250px" }} 
                    />
                    <h3 className='mt-4'>Nithin Kamath</h3>
                    <h6>Founder, CEO</h6>
                </div>

                {/* Description Column */}
                <div className="col-12 col-md-6 fs-5 p-4">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on&nbsp;
                        <a href="#" style={{ textDecoration: "none" }}>Homepage</a> /&nbsp;
                        <a href="#" style={{ textDecoration: "none" }}>TradingQnA</a> /&nbsp;
                        <a href="#" style={{ textDecoration: "none" }}>Twitter</a>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Team;
