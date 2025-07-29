import React from 'react';

function RightPage({ productName, productDescripton, learnMore, imageURL }) {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-12 col-md-6 p-4 order-2 order-md-1">
                    <h1 className="mb-3">{productName}</h1>
                    <p className="text-muted">{productDescripton}</p>
                    <a href={learnMore} className="btn btn-link text-decoration-none mt-3">
                        Learn more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                {/* Image Section */}
                <div className="col-12 col-md-6 text-center p-4 order-1 order-md-2">
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default RightPage;
