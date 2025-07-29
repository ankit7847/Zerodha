import React from 'react';

function Stats() {
    return (
        <div className="container my-5 py-4">
            <div className="row align-items-center g-4">
                {/* Left Content */}
                <div className="col-12 col-md-6 px-4">
                    <h2 className="mb-4">Trust with confidence</h2>

                    <div className="mb-4">
                        <h5>Customer-first always</h5>
                        <p className="text-muted">
                            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments
                            and contribute to 15% of daily retail exchange volumes in India.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h5>No spam or gimmicks</h5>
                        <p className="text-muted">
                            No gimmicks, spam, "gamification", or annoying push notifications.
                            High quality apps that you use at your pace, the way you like.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h5>The Zerodha universe</h5>
                        <p className="text-muted">
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups
                            offer you tailored services specific to your needs.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h5>Do better with money</h5>
                        <p className="text-muted">
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
                            but actively help you do better with your money.
                        </p>
                    </div>
                </div>

                {/* Right Image + Links */}
                <div className="col-12 col-md-6 px-4 text-center">
                    <img
                        src="media/images/ecosystem.png"
                        alt="ecosystem"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "100%" }}
                    />
                    <div className="d-flex justify-content-center gap-4 flex-wrap">
                        <a href="#" className="text-decoration-none text-primary">
                            Explore our products <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="text-decoration-none text-primary">
                            Try Kite demo <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
