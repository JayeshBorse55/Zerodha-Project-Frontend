import React from 'react';

function RightSection({imageURl,productName,productDescription,learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5' style={{marginTop:"10rem"}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
  
                </div>

                <div className='col-6 p-5'>
                    <img src={imageURl}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;