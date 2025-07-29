import React from 'react';

function CreateTicket() {
    return (
        <div className="container my-5">
            <h1 className="fs-2 text-center mb-5">To create a ticket, select a relevant topic</h1>

            {/* First row */}
            <div className="row g-4 mb-5">
                <div className="col-12 col-md-4">
                    <h4>
                        <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                        Account Opening
                    </h4>
                    <div className="d-flex flex-column mt-2">
                        <a href="#" className="text-decoration-none mb-1">Resident individual</a>
                        <a href="#" className="text-decoration-none mb-1">Minor</a>
                        <a href="#" className="text-decoration-none mb-1">Non Resident Indian (NRI)</a>
                        <a href="#" className="text-decoration-none mb-1">Company, Partnership, HUF and LLP</a>
                        <a href="#" className="text-decoration-none mb-1">Glossary</a>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <h4>
                        <i className="fa fa-user me-2" aria-hidden="true"></i>
                        Your Zerodha Account
                    </h4>
                    <div className="d-flex flex-column mt-2">
                        <a href="#" className="text-decoration-none mb-1">Your Profile</a>
                        <a href="#" className="text-decoration-none mb-1">Account modification</a>
                        <a href="#" className="text-decoration-none mb-1">Client Master Report (CMR) and DP</a>
                        <a href="#" className="text-decoration-none mb-1">Nomination</a>
                        <a href="#" className="text-decoration-none mb-1">Transfer and conversion of securities</a>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <h4>
                        <i className="fa fa-bar-chart me-2" aria-hidden="true"></i>
                        Kite
                    </h4>
                    <div className="d-flex flex-column mt-2">
                        <a href="#" className="text-decoration-none mb-1">IPO</a>
                        <a href="#" className="text-decoration-none mb-1">Trading FAQs</a>
                        <a href="#" className="text-decoration-none mb-1">Margin Trading Facility (MTF) and Margins</a>
                        <a href="#" className="text-decoration-none mb-1">Charts and orders</a>
                        <a href="#" className="text-decoration-none mb-1">Alerts and Nudges</a>
                        <a href="#" className="text-decoration-none mb-1">General</a>
                    </div>
                </div>
            </div>

            {/* Second row */}
            <div className="row g-4">
                <div className="col-12 col-md-4">
                    <h4>
                        <i className="fa fa-credit-card me-2" aria-hidden="true"></i>
                        Funds
                    </h4>
                    <div className="d-flex flex-column mt-2">
                        <a href="#" className="text-decoration-none mb-1">Add money</a>
                        <a href="#" className="text-decoration-none mb-1">Withdraw money</a>
                        <a href="#" className="text-decoration-none mb-1">Add bank accounts</a>
                        <a href="#" className="text-decoration-none mb-1">eMandates</a>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <h4>
                        <i className="fa fa-codiepie me-2" aria-hidden="true"></i>
                        Console
                    </h4>
                    <div className="d-flex flex-column mt-2">
                        <a href="#" className="text-decoration-none mb-1">Portfolio</a>
                        <a href="#" className="text-decoration-none mb-1">Corporate actions</a>
                        <a href="#" className="text-decoration-none mb-1">Funds statement</a>
                        <a href="#" className="text-decoration-none mb-1">Reports</a>
                        <a href="#" className="text-decoration-none mb-1">Profile</a>
                        <a href="#" className="text-decoration-none mb-1">Segments</a>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <h4>
                        <i className="fa fa-eercast me-2" aria-hidden="true"></i>
                        Coin
                    </h4>
                    <div className="d-flex flex-column mt-2">
                        <a href="#" className="text-decoration-none mb-1">Understanding mutual funds and Coin</a>
                        <a href="#" className="text-decoration-none mb-1">Coin app</a>
                        <a href="#" className="text-decoration-none mb-1">Coin web</a>
                        <a href="#" className="text-decoration-none mb-1">Charts and orders</a>
                        <a href="#" className="text-decoration-none mb-1">Transactions and reports</a>
                        <a href="#" className="text-decoration-none mb-1">National Pension Scheme (NPS)</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
