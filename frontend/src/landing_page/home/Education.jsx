import React from 'react';

function Education() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Image section */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="media/images/education.svg"
                        alt="Education"
                        className="img-fluid"
                        style={{ maxHeight: '350px', objectFit: 'contain' }}
                    />
                </div>

                {/* Text section */}
                <div className="col-12 col-md-6">
                    <h2 className="fw-bold mb-3">Free and open market education</h2>
                    <p className="fs-6">
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a
                        href="#"
                        style={{ textDecoration: 'none' }}
                        className="d-block mb-4 text-primary"
                    >
                        Varsity <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                    <p className="fs-6">
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a
                        href="#"
                        style={{ textDecoration: 'none' }}
                        className="text-primary"
                    >
                        TradingQ&A <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
