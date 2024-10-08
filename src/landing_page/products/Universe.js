import React from 'react';

function Universe() {
    return (
        <div className='container' style={{marginTop:"95px"}}>
            <div className='row text-center'>
                <h1 className='fs-2 text-body-secondary'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{ width: "13rem", height: "3rem",marginBottom:"11px"}} />
                    <p className='text-body-secondary'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' style={{ width: "13rem", height: "3rem",marginBottom:"11px" }}/>
                    <p className='text-body-secondary'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/tijori.svg' style={{ width: "13rem", height: "3rem",marginBottom:"11px" }}/>
                    <p className='text-body-secondary'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.

                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' style={{ width: "13rem", height: "3rem",marginBottom:"11px" }} />
                    <p className='text-body-secondary'>Systematic trading platform
that allows you to create and backtest
strategies without coding.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png' style={{ width: "13rem", height: "3rem",marginBottom:"11px" }}/>
                    <p className='text-body-secondary'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.

                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{ width: "13rem", height: "3rem",marginBottom:"11px" }}/>
                    <p className='text-body-secondary'>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free

                    </p>
                </div>
            </div>
        </div>
    );
}

export default Universe;