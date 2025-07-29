import React from 'react';

function Hero() {
    return (
        <div className="container border-bottom text-center mt-4 mb-5 py-5">
            <h1>Zerodha Products</h1>
            <h3 className="text-muted mt-3">
                Sleek, modern, and intuitive trading platforms
            </h3>
            <p className="mt-4 mb-2 fs-5">
                Check out our&nbsp;
                <a href="#" className="text-decoration-none text-primary">
                    investment offerings&nbsp;
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
            </p>
        </div>
    );
}

export default Hero;
