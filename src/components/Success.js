import React from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import SecFooter from './controls/SecFooter'

function Success({message,login,home}) {
  return (
      <>
          

        <div id="layoutAuthentication"> <br/><br/><br/><br/>
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                      <div class="card-header"><h3 class="text-center font-weight-light my-4">{message }</h3></div>
                                    <div class="card-body align-item-center">
                                        <div class="small mb-3 text-muted">Click login, enter your valid user details, select your prefered plan and start Trading.</div>
                                        <form>
                                           
                                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                               
                                            <button className="btn btn-info px-4 py-2 btn-sm smoothscroll"><NavLink to="#" onClick={login} className='btncolor'>Login</NavLink> </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center">
                                        <div class="small"><NavLink to="#" onClick={home}> Back to  <FaHome size="20"/></NavLink></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
              </div>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        
      </>
  )
}

export default Success