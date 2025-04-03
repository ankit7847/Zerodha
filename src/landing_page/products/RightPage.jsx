import React from 'react';

function RightPage({productName,productDescripton,learnMore,imageURL}) {
    return ( 
      <div className="container">
        <div className="row">
            <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
             <p>{productDescripton}</p>
             <a href  ={learnMore}> Learn more<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="col-6  ">
            <img src={imageURL} />
            </div>
        </div>
        
      </div>
     );

     
}

export default RightPage;