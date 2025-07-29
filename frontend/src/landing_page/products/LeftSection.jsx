import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescripton,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Left Image */}
                <div className="col-12 col-md-6 p-4 text-center">
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>

                {/* Right Content */}
                <div className="col-12 col-md-6 p-4">
                    <h1 className="mb-3">{productName}</h1>
                    <p className="text-muted">{productDescripton}</p>

                    {/* Demo and Learn More links */}
                    <div className="mt-4">
                        <a href={tryDemo} className="btn btn-link text-decoration-none me-4">
                            Try Demo <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={learnMore} className="btn btn-link text-decoration-none">
                            Learn More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    {/* App badges */}
                    <div className="mt-4 d-flex flex-wrap align-items-center">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" alt="Get it on Google Play" className="img-fluid me-3" style={{ maxWidth: "160px" }} />
                        </a>
                        <a href={appStore}>
                            <img src="media/images/appstoreBadge.svg" alt="Download on the App Store" className="img-fluid" style={{ maxWidth: "160px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
