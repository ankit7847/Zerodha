import React from 'react';

function Universe() {
    return (
        <div className="container py-5">
            {/* Heading Section */}
            <div className="text-center mb-5">
                <h1>The Zerodha Universe</h1>
                <p className="text-muted">
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            {/* Logos + Descriptions */}
            <div className="row text-center g-4">
                <div className="col-12 col-md-4">
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                    <p className="text-muted small">
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <img src="media/images/goldenpiLogo.png" alt="GoldenPi" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                    <p className="text-muted small">
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <img src="media/images/dittoLogo.png" alt="Ditto" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                    <p className="text-muted small">
                        Personalized advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <img src="media/images/smallcaseLogo.png" alt="Smallcase" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                    <p className="text-muted small">
                        Thematic portfolios of stocks and ETFs that make investing simple and goal-based.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <img src="media/images/sensibullLogo.svg" alt="Sensibull" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                    <p className="text-muted small">
                        Options trading platform to create strategies, analyze positions, and visualize open interest and market sentiment.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <img src="media/images/streakLogo.png" alt="Streak" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                    <p className="text-muted small">
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-5">
                <button className="btn btn-primary px-4 py-2 fs-5">
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default Universe;
