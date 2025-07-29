import React from 'react';

function Brokerage() {
    return (
        <div className="container mt-3 p-3">
            <div className="row border-top py-5">
                {/* Left Column */}
                <div className="col-12 col-md-8 px-4">
                    <h3 className="mb-4" style={{ color: "#387ed1" }}>Brokerage</h3>
                    <ul style={{ lineHeight: "2", fontSize: "14px" }}>
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹250 + GST per order.
                        </li>
                        <li>
                            Digital contract notes will be sent via e-mail.
                        </li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be charged ₹240 per executed order instead of ₹200.
                        </li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="col-12 col-md-4 px-4 mt-4 mt-md-0">
                    <h4 style={{ color: "#387ed1" }}>List of charges</h4>
                    {/* You can add a styled table or list here later */}
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
