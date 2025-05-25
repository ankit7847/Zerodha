import React from 'react';

function CreateTicket() {
    return (  
        <div className='container'>
        <div className="row p-4 mb-5 mt-5">
            <h1 className='fs-2 p-4 mb-5 mt-5'>To create a ticket, select a relevant topic</h1>
            <div className="col-4">
                <h4 className=''> <i class="fa fa-plus-circle" aria-hidden="true">Account Opening</i> </h4>
                <a  style={{textDecoration:"none", lineHeight:"2"}}  href="">Resident individual</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Minor</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Non Resident Indian (NRI)</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Company, Partnership, HUF and LLP</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Glossary</a><br />
            </div>
            <div className="col-4">
                <h4 className=''> <i class="fa fa-user" aria-hidden="true">Your Zerodha Account</i> </h4>
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Your Profile</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Account modification</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Client Master Report (CMR) and Depository Participant (DP)</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Nomination</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Transfer and conversion of securities</a> <br /> 
            </div>
            <div className="col-4">
                <h4 className=''> <i class="fa fa-bar-chart" aria-hidden="true">Kite</i> </h4>
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">IPO</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Trading FAQs</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Margin Trading Facility (MTF) and Margins</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Charts and orders</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Alerts and Nudges</a> <br />
                 <a style={{textDecoration:"none", lineHeight:"2"}} href="">General</a> <br />
                
            </div>
        </div>

         <div className="row p-4 mb-5 mt-5">
           
            <div className="col-4">
                <h4 className=''> <i class="fa fa-credit-card" aria-hidden="true"> Funds</i> </h4>
                <a  style={{textDecoration:"none", lineHeight:"2"}}  href="">Add money</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Withdraw money</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Add bank accounts</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">eMandates</a><br />
               
            </div>
            <div className="col-4">
                <h4 className=''> <i class="fa fa-codiepie" aria-hidden="true">Console</i> </h4>
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Portfolio</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Corporate actions</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Funds statement</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Reports</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Profile</a> <br /> 
                 <a style={{textDecoration:"none", lineHeight:"2"}} href="">Segments</a> <br /> 
            </div>
            <div className="col-4">
                <h4 className=''> <i class="fa fa-eercast" aria-hidden="true"> Coin</i> </h4>
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Understanding mutual funds and Coin</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Coin app</a><br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Coin web</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Charts and orders</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">Transactions and reports</a> <br />
                <a style={{textDecoration:"none", lineHeight:"2"}} href="">National Pension Scheme (NPS)</a> <br />
                
            </div>
        </div>

        </div>
     );
}

export default CreateTicket;