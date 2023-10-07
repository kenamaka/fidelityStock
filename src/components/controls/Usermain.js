import React, { useState } from 'react'
import loan from "../assets/svg/loan.svg"
import paylink from "../assets/svg/paybill.svg"
import airtime from "../assets/svg/airtime.svg"
import Affiliate from '../Payment/Affiliate'
import { FaTimes } from 'react-icons/fa'
import Support from './Support'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Invite from '../Payment/Invite'

const Usermain = ({ fund, id,username }) => {
    const [support, setSupport] = useState(false)
    const [invite,setInvite] = useState(false)
    

    const handleSupport = () => {
        setSupport(true)
    }

      
    if (support) 
      
        return (
            <AnimationOnScroll animateIn='animate__fadeIn'  duration={1}>
                <Support setSupport={setSupport} />
            </AnimationOnScroll>
                

        )
    
        if (invite) 
      
        return (
            <AnimationOnScroll animateIn='animate__fadeIn'  duration={1}>
                <Invite setInvite={setInvite} username={username} />
            </AnimationOnScroll>
                

        )

    
  return (
      <>
          
          <div className="row p-2 ">
              
                              <div class="col-lg-4 mb-4">
                                  <div class="card">
                                      <div class="card-body wallet " >
                                  <div class="row ">
                                      <div class="col-8">
                                          <p class="text-muted mb-1 small text-uppercase">Account ID</p>
                                          <h6 class="mb-0 text-blue font-weight-bolder">5500000{ id }</h6>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={loan} alt="pics" width='100px' />
                                      </div>
                                  </div>
                                  <div class="row bottom ">
                                      <div class="col-12">
                                          <p class="text-muted mb-1 small text-uppercase">Account Balance</p>
                                      </div>
                                      <div class="col-12 ">
                                          <h3 class="mb-0 text-blue float-left" style={{ fontWeight:500 }}> 0.00000</h3>
                                          <button className=" text-white btn-primary text-center btn btn-blue float-right " onClick={fund}> + Fund Account</button>
                                      </div>
                                  </div>
                              </div>
                              </div>
                  </div>
                  
              <div class="col-lg-4 mb-4">
                  <div class="card wallet">
                      <div class="card-body" >
                                  <div class="row ">
                                      <div class="col-8">
                                          <h4 class="text-muted mb-1 dash-info "style={{ fontWeight:700 }}>No Balance Available</h4>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={airtime} alt="pics" />
                                      </div>
                                  </div>
                                  <div class="row bottom ">
                                      <div class="col-12">
                                          <p class="text-muted mb-1 small ">You currently do not have an active Plan.

                                                Active plan details will be displayed here.</p>
                                      </div>
                                      <div class="col-12 ">
                                      <button className=" btn-info text-center btn  float-right " disabled > + Withdraw</button>
                                      </div>
                                  </div>
                              </div>
                              </div>
                  </div>
                  
                              <div class="col-lg-4 mb-4"><div class="card"><div class="card-body " >
                                  <div class="row ">
                                      <div class="col-8">
                                          <h4 class="text-muted mb-1 dash-info text-uppercase" style={{ fontWeight:700 }}>24/7 support </h4>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={paylink} />
                                      </div>
                                  </div>
                                  <div class="row bottom ">
                                      <div class="col-12">
                          <p class="text-muted mb-1 small" >
                          You can always get in touch with us. Want to update account info,view account details, or contact our support team.    
                          </p>
                                      </div>
                                      <div class="col-12 ">
                                          <button className=" text-white text-center btn btn-danger float-right " onClick={handleSupport}>+ Get Started</button>
                                      </div>
                                  </div>
                              </div>
                              </div>
                  </div>
                  
              <Affiliate setInvite={ setInvite} />

                            
                   </div>
  
    </>
  )
}

export default Usermain