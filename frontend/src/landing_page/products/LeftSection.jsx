import React from 'react';

function LeftSection({imageURL,productName,productDescripton,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL} />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescripton}</p>
                    <div>
                    <a href  ={tryDemo}> Try Demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore } style={{marginLeft:"50px"}}>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3 p-2'>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="google play" /></a>
                    <a href={appStore} style={{marginLeft:"50px"}} ><img src="media/images/appstoreBadge.svg" alt="app store" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;