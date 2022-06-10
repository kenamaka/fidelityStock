import React from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
// import SecFooter from './SecFooter'


function Forgot() {
  return (
      <>
          

        <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
                <main>
                    
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Account Recovery</h3></div>
                                    <div class="card-body">
                                        <div class="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                                        <form>
                                        <div class="form-group">
                                        <label class="small mb-1" for="inputEmailAddress">Email</label>
                                            <input class="form-control  py-4" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                            </div>
                                           <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                          <NavLink class="small" to = "/login">Return to login</NavLink>
                                                <NavLink className="btn btn-primary" to="/">Reset Password</NavLink>
                                        </div><br/>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center">
                                        <div class="small"><NavLink to="/register"> Need an account? Sign up!</NavLink></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </main>
            </div>
        
            </div>
        
      </>
  )
}

export default Forgot