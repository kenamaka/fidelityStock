import Axios  from 'axios'
import React, { useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'



function Forgot() {

    const [email, setData] = useState('')
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;

    const handleRecovery = (e) => {
        e.preventDefault()
        Axios.post('https://server.fidelitystock.us/api/recovery',
            {email: email}
        ).then((response) => {
            if (response.data.message) {
                setMessage(response.data.message)
                return false;
            }
            else {
                navigate(`/recovery/${email}`)
            }
        })
    }

    
    return (
      
      <>
          

        
                    
                <section className='site-section'>
                            <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 col-md-12">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Account Recovery</h3></div>
                                    <div class="card-body">
                                    <div className="mb-3 text-center text-muted">Enter your email address and we will send you a link to reset your password.</div>
                                        <form onSubmit={handleRecovery}>
                                        <div className="row form-group  ">
                                                <div className=' text-red  text-center col-md-12'>
                                                    {message}
                                                </div>
                                                 </div>

                                        <div className="form-group">
                                        <label className=" mb-1" for="inputEmailAddress">Email</label>
                                                <input className="form-control  py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" onChange={(e) => { setData(e.target.value); }}/>
                                            </div>
                                           <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                          <input type="submit" value="Recover Account" className="btn btn-info btn-md text-white" />

                                        </div><br/>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small"><NavLink to="/register"> Need an account? Sign up!</NavLink></div>
                                    </div>
                                </div>
                            </div>
                                </div>
                </div>
                </section>
             
        
      </>
  )
}

export default Forgot