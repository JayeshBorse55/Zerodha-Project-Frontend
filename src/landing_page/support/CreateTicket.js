import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5 p-5'>
                <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
                <div className='col-4 mt-2 mb-2 p-5'>
                    <h4><i class="fa-solid fa-circle-plus" style={{ fontSize: "23px", marginRight: "5px",marginBottom:"10px" }}></i>Account Opening</h4>
                    <h4 className='fs-6'>
                        <a href='' className='pricing'>Getting started</a><br/>
                        <a href='' className='pricing'>Online</a><br/>
                        <a href='' className='pricing'>Offline</a><br/>
                        <a href='' className='pricing'>Charges</a><br/>
                        <a href='' className='pricing'>Company, Partnership and HUF</a><br/>
                        <a href='' className='pricing'>Non Resident Indian (NRI)</a><br/>
                    </h4>
                </div>

                <div className='col-4 mt-2 mb-2 p-5'>
                    <h4><i class="fa-regular fa-user" style={{ fontSize: "23px", marginRight: "5px",marginBottom:"10px"}}></i>Your Zerodha Account</h4>
                    <h4 className='fs-6'>
                        <a href='' className='pricing'>Login credentials</a><br/>
                        <a href='' className='pricing'>Your Profile</a><br/>
                        <a href='' className='pricing'>Account modification and segment addition</a><br/>
                        <a href='' className='pricing'>CMR & DP ID</a><br/>
                        <a href='' className='pricing'>Nomination</a><br/>
                        <a href='' className='pricing'>Transfer and conversion of shares</a><br/>
                    </h4>
                </div>

                <div className='col-4 mt-2 mb-2 p-5' style={{}}>
                    <h4><i class="fa-solid fa-chart-simple" style={{ fontSize: "23px", marginRight: "5px" }}></i>Trading and Markets</h4>
                    <h4 className='fs-6'>
                        <a href='' className='pricing'>Trading FAQs</a><br/>
                        <a href='' className='pricing'>Kite</a><br/>
                        <a href='' className='pricing'>Margins</a><br/>
                        <a href='' className='pricing'>Product and order types</a><br/>
                        <a href='' className='pricing'>Corporate actions</a><br/>
                        <a href='' className='pricing'>Kite features</a><br/>
                    </h4>
                </div>

                <div className='col-4 mt-2 mb-2 p-5'>
                    <h4><i class="fa-solid fa-wallet" style={{ fontSize: "23px", marginRight: "5px" }}></i>Funds</h4>
                    <h4 className='fs-6'>
                        <a href='' className='pricing'>Fund withdrawal</a><br/>
                        <a href='' className='pricing'>Adding funds</a><br/>
                        <a href='' className='pricing'>Adding bank accounts</a><br/>
                        <a href='' className='pricing'>eMandates</a><br/>
                    </h4>
                </div>

                <div className='col-4 mt-2 mb-2 p-5'>
                    <h4><i class="fa-regular fa-circle-dot" style={{ fontSize: "23px", marginRight: "5px" }}></i>Console</h4>
                    <h4 className='fs-6'>
                        <a href='' className='pricing'>IPO</a><br/>
                        <a href='' className='pricing'>Portfolio</a><br/>
                        <a href='' className='pricing'>Funds statement</a><br/>
                        <a href='' className='pricing'>Profile</a><br/>
                        <a href='' className='pricing'>Reports</a><br/>
                        <a href='' className='pricing'>Referral program</a><br/>
                    </h4>
                </div>

                <div className='col-4 mt-2 mb-2 p-5'>
                    <h4><i class="fa-brands fa-sketch" style={{ fontSize: "23px", marginRight: "5px" }}></i>Coin</h4>
                    <h4 className='fs-6'>
                        <a href='' className='pricing'>Understanding mutual funds and Coin</a><br/>
                        <a href='' className='pricing'>Coin app</a><br/>
                        <a href='' className='pricing'>Coin web</a><br/>
                        <a href='' className='pricing'>Transactions and reports</a><br/>
                        <a href='' className='pricing'>National Pension Scheme (NPS)</a><br/>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;