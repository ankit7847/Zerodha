import React from 'react';

function Education() {
    return ( 
      <div className="container mt-3">
        <div className="row">
            <div className="col-6 p-5">
                <img src="media/images/education.svg" alt="educations"/>
            </div>
            <div className="col-6 p-5">
                <h2 className='mt-5'>Free and open market education</h2>
                <p className='fs-6  mt-3 mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="#" style={{textDecoration:"none"}}>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <p className='fs-6'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="#" style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
     );
}

export default Education;