import React from 'react';

function Hero() {
    return (
        <section className='container-fluid pt-2' id='supportHero'>
            <div className='pt-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='' style={{ color: "white",marginRight:"140px" }}>Track Tickets</a>
            </div>

            <div className='row p-3 m-5'>
                <div className='col-5 p-3'>
                    <h4 className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                    <div class="input-group input-group-lg mb-2">
                        <input type="text" placeholder="Eg.how do i activate F&Q,why is my order getting reject ..." class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                    </div>
                        <a href='' style={{marginRight:"12px"}}>Track account opening </a> 
                        <a href='' style={{marginRight:"12px"}}>Track segment activation </a>
                        <a href='' style={{marginRight:"12px"}}>Intraday margins </a> 
                        <a href=''>Kite user manual</a> 
                </div>
                <div className='col-2'></div>
                <div className='col-5 p-3' style={{marginLeft:"0px"}}>
                    <h4 className='mb-4'>Featured</h4>
                    <h4 className='fw-light' style={{fontSize:"18px"}}>Funds addition is blocked for the equity segment from 8 PM to 12 midnight due to the upcoming quarterly settlement. Read more.</h4>
                </div>

            </div>
        </section>
    );
}

export default Hero;