function Signup() {
    return ( 
        <div className='container' style={{marginTop:"8rem"}}>
            <div className='row text-center'>
                <div className='col'>
                    <h1 className='mb-5'>Signup feature Comming soon!!!</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/signup.png' style={{width:"503px",height:"334px",marginLeft:"130px"}}/>
                </div>
                
                <div className='col'>
                    <form style={{marginLeft:"130px"}}>
                    <h3>Signup Now</h3>
                    <p>Or track your existing application.</p>
                    <input class="form-control signupInput" type="text" placeholder="Enter email" aria-label=".form-control-lg example"></input>
                    <input class="form-control signupInput" type="text" placeholder="Enter username" aria-label=".form-control-lg example"></input>
                    <input class="form-control signupInput mb-4" type="password" placeholder="Enter password" aria-label=".form-control-lg example"></input>
                    <button className='btn btn-primary' style={{marginBottom:"8rem",width:"130px"}}>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;