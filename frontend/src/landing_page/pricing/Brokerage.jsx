import React from 'react';
 function Brokerage () {
    return ( 
       <div className="container mt-3 p-5">
        <div className="row border-top p-5">
            <div className="col-8 p-5">
                <h3 className='mb-5' style={{color:"#387ed1"}}>Brokerage</h3>
                <ul className='' style={{lineHeight:"2.5" ,fontSize:"12px"}}>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST per order.
                    </li>
                    <li>Digital contract notes will be sent via e-mail.
                    </li>
                    <li>Physical copies of contract notes, if required, shall be charged 20 per contract note. Courier charges apply.
                    </li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                    </li>
                    <li>For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).
                    </li>
                    <li>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order</li>
                </ul>
            </div>
            
            <div className="col-4 p-5">
               <h4 className='' style={{color:"#387ed1"}}> List of charges</h4>
               
            </div>
        </div>
       </div>
     );
 }
 
 export default Brokerage;