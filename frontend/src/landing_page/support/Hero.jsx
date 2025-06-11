import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid  " id="supportHero">
            <div className="p-3 " id="supportwrapper">
                <h3>Support Portal</h3>
                <a href="">Track Ticket</a>
            </div>
            <div className="row p-2 m-2  " >
                <div className="col-6 p-5  " >
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-2' type="" placeholder='Eg:how do i activate F&O,why is my order getting rejected... ' /><br />
                    <a href="">Track account opening</a>
                    <a href="">rack segment activation</a>
                    <a href="">Intraday margins</a><br />
                    <a href="">Kite user manual</a>
                    
                </div>
                <div className="col-6 p-2 " id='FeaturedSection'>
                    <h1 className="fs-3">
                        Featured
                    </h1>
                    <ol>
                        <a href=""><li>Latest Intraday leverages and Square-off timings</li></a>
                       <a href=""> <li>Offer for sale (OFS) – May 2025</li></a>
                       
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero; 