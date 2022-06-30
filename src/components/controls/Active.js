import React from 'react'
import loan from "../assets/svg/loan.svg"
import paylink from "../assets/svg/paybill.svg"
import airtime from "../assets/svg/airtime.svg"

const Active = ({ fund, withdraw, support }) => {
    
  return (
      <>
        <div className="row px-2 ">
                              <div class="col-lg-4 mb-4">
                                  <div class="card">
                                      <div class="card-body wallet " >
                                  <div class="row ">
                                      <div class="col-8">
                                          <p class="text-muted mb-1 small text-uppercase">Account ID</p>
                                          <h6 class="mb-0 text-blue font-weight-bolder">5500000742</h6>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={loan} alt="pics" />
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
                              <div class="col-lg-4 mb-4"><div class="card wallet"><div class="card-body" >
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
                                          <button className=" text-white btn-primary text-center btn btn-success float-right " onClick={withdraw}> + Withdraw</button>
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
                                          <p class="text-muted mb-1 small" >What to update account info, contact our support team.</p>
                                      </div>
                                      <div class="col-12 ">
                                          <button className=" text-white text-center btn btn-danger float-right " onClick={support}>+ Get Started</button>
                                      </div>
                                  </div>
                              </div>
                              </div>
              </div>

              <a href="https://nowpayments.io/donation?api_key=4RTP718-3TR4MMX-KMSM1T5-AKHN2XP" target="_blank">
                  <img src="https://nowpayments.io/images/embeds/donation-button-black.svg" alt="Crypto donation button by NOWPayments" />
              </a>
                       </div>
  
    </>
  )
}

export default Active