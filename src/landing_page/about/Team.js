import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5 pt-5 border-top'>
                <h1 className='mt-5 text-center'>Developer</h1>
            </div>

            <div className='row mt-5 pb-5 text-body-secondary' style={{lineHeight:"1.8",fontSize:"1.1em"}}>
                <div className='col-6 p-3 text-center'>
                    <img src='media/images/new image.jpg' style={{width:"60%",borderRadius:"100%"}}/>
                    <h4 className='mt-5'>Jayesh Borse</h4>
                    <h6>Developer of this website</h6>
                </div>

                <div className='col-6 mt-5 p-5'>
                    <p>Hello viewers,My name is Jayesh Borse.</p>
                    <p>I am 20 years old.I have completed my Full Stack Web Development course at Apna College which was led by Shraddha Khapra mam.</p>
                    <p>My motive is to implement my knowledge which I have studied in my course to build websites.</p>
                    <p>Connect on <a href=' https://www.instagram.com/_jayesh_borse_34?igsh=MTM3b2I0bHUzdXlpMg==' className='text-body-secondary bio'><i class="fa-brands fa-instagram"></i></a> <a href=' https://www.facebook.com/share/LruwRmNR94kbWZNC/?mibextid=qi2Omg ' className='text-body-secondary bio'><i class="fa-brands fa-square-facebook"></i></a> <a href='https://x.com/JayeshB79143649?t=qwrdWOjJTFEWtQwc24SOsw&s=09' className='text-body-secondary bio'><i class="fa-brands fa-x-twitter"></i></a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;