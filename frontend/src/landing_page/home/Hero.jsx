import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <img
                        src="media/images/homeHero.png"
                        alt="Home page"
                        className="img-fluid mb-4"
                        style={{ maxHeight: '350px', objectFit: 'contain' }}
                    />
                    <h1 className="mt-4 fw-bold">Invest in everything</h1>
                    <p className="lead">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <Link
                        to="/signup"
                        className="btn btn-primary fs-5 px-4 py-2 mt-3"
                    >
                        Sign up for free
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
