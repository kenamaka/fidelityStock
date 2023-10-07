import React from 'react'
import send from "../assets/svg/send.svg"


const Affiliate = ({setInvite}) => {

    const handleAffiliate = () => {
        setInvite(true)
    }
  return (
      <>
            <div class="col-lg-4 mb-4"><div class="card"><div class="card-body " >
                                  <div class="row ">
                                      <div class="col-8">
                                          <h4 class="text-muted mb-1 dash-info text-uppercase" style={{ fontWeight:700 }}>Our Affiliate Program </h4>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={send}/>
                                      </div>
                                  </div>
                                  <div class="row bottom ">
                                      <div class="col-12">
                          <p class="text-muted mb-1 small" >
                          The affiliate program consists of 5 levels which means you'll be able to get higher affiliate
              commission for referring more.   
                          </p>
                                      </div>
                                      <div class="col-12 ">
                                          <button className=" text-white text-center btn btn-primary float-right " onClick={handleAffiliate}>+ Invite</button>
                                      </div>
                                  </div>
                              </div>
                              </div>
                              </div>
    </>
  )
}

export default Affiliate