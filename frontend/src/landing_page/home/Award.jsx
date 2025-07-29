import React from 'react';

function Awards() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Left Image */}
                <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                    <img
                        src="media/images/largestBroker.svg"
                        alt="Broker"
                        className="img-fluid"
                        style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                </div>

                {/* Right Text + List + Press Logos */}
                <div className="col-12 col-md-6">
                    <h2 className="fw-bold">Largest stock broker in India</h2>
                    <p>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in
                    </p>

                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <img
                            src="media/images/pressLogos.png"
                            alt="Press Logos"
                            className="img-fluid"
                            style={{ maxWidth: "90%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
