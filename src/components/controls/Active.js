import React, { useEffect, useState } from 'react'
import loan from "../assets/svg/loan.svg"
import paylink from "../assets/svg/paybill.svg"
import refer from "../assets/svg/credit-card.svg"
import airtime from "../assets/svg/airtime.svg"
import {Circles } from  'react-loader-spinner'
import '../Payment/Popup.css'
import { FaTimes } from 'react-icons/fa'
import  Axios  from 'axios'
import Affiliate from '../Payment/Affiliate'
import Support from './Support'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Invite from '../Payment/Invite'


const Active = ({balance, plan, id,coin, firstname,username}) => {

    const [withdraw, setWithdraw] = useState(false)
    const [support, setSupport] = useState(false)
  const [message, setMessage] = useState("")
  const [invite,setInvite] = useState(false)
  const [withdrawal,setWithdrawal] = useState(0)
  const [address,setAddress] = useState('')
  const [invites,setInvites] = useState(username)


    const handleWithdraw = () => {
      setWithdraw(true)
    
    }   
    const handleSupport = () => {
        setSupport(true)
    }
    
    const handleClose = () => {
        setWithdraw(false)
        setMessage("")
        setSupport(false)
  }
  
    const handlePayment = (e) => {
      e.preventDefault()
      Axios.put('https://server.fidelitystock.us/api/payment', {
        withdrawal,
        firstname,
        address,
        balance
      }).then((response) => {
        console.log(response)
        setMessage(response.data.message)
      })
      
        
       
    }
console.log(invites)
    

    if (withdraw) 
      
      return (
          <AnimationOnScroll animateIn='animate__fadeIn'>
          <>
            
                <div className=' popup text-center p-3'>
                    <div className=' popup text-center p-3'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={handleClose}> <FaTimes /></button>
            
          <div class="modal-body">
            <h4 class="modal-title" id="myModalLabel">The request for Withdrawal is automatic and immediate. Sometimes it may take a few hours because of Crypto network latency.

</h4>
          <p class="modal-desc text-danger">Minimum amount: 0.0001 { coin}</p>
            
          </div>
          <p id="blockoPaySection">
          </p>
          <div className='text-dark text-left'>To Wallet address </div>
          <form action="#" className="  text-left" onSubmit={handlePayment}>
              
             
            <div className="row form-group text-left">
                                
              <div className="col-md-12 ">
                <input
                  type="text"
                          className="form-control  text-left text-info" name='address' value={address}
                          onChange={(e) => { setAddress(e.target.value) }}
                required                            
                /><br />
                <div className='text-dark'>Amount </div>
                

                <input
                  type="number"
                  className=" text-info text-left form-control"
                  name='withdrawal'
                          value={withdrawal}
                          onChange={(e) => { setWithdrawal(e.target.value) }}
                          
                  required
                        
                />
                <input
                  className="btn mt-2 btn-info"
                   type="submit"                         
              value='Submit'                    
                />
                
              </div>

            <div className=' text-primary col-md-12 text-center p-2'>{message }</div>
              
            </div>

                     
          </form>
                     
          <div>
            <div className='text-dark'>
              <span className=''>
              </span>Account Balance:  {balance} <span className='text-info'>{coin}</span>  <span className='text-success'></span>
            </div>
          </div>
              
                   
        </div>
      </div>
                </div>
                
            </>
            </AnimationOnScroll>
        )
        if (support) 
      
        return (
          <>
            <AnimationOnScroll animateIn='animate__fadeIn'>
              <Support setSupport={setSupport} />
              </AnimationOnScroll>
            </>

        )

  
        if (invite) 
      
        return (
          <>
            <AnimationOnScroll animateIn='animate__fadeIn'>
              <Invite setInvite={setInvite} username = {username} />
              </AnimationOnScroll>
            </>

        )

  return (
      <>
        <div className="row px-2 ">
                              <div class="col-lg-4 mb-4">
                                  <div class="card">
                                      <div class="card-body wallet " >
                                  <div class="row ">
                                      <div class="col-8">
                                  <p class="text-muted mb-1 small text-uppercase">Account ID</p>
                                 
                                  <h6 class="mb-0 text-blue font-weight-bolder">5500000{ id }</h6>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={loan} alt="pics" />
                                      </div>
                                  </div>
                                  <div class="row bottom ">
                                      <div class="col-12">
                                  <p class="text-muted mb-1 small text-uppercase float-left">Account Balance</p>
                                  <p class="text-muted mb-1 small float-right ">Trading in Progress</p>
                                      </div>
                                      <div class="col-12 ">
                                  <h3 class="mb-0 text-blue float-left" style={{ fontWeight: 500 }}>{
                                    balance
                                      
                                  }</h3>
                                  <div  className="  float-right ">
                                  <Circles
                                     
                                             height="50"
                                             width="100"
                                             color="green"
                                             ariaLabel='loading'
                                      />
                                      </div>
                                      </div>
                                  </div>
                              </div>
                              </div>
                              </div>
                              <div class="col-lg-4 mb-4"><div class="card wallet"><div class="card-body" >
                                  <div class="row ">
                                      <div class="col-8">
                          <h4 class="text-muted mb-1 dash-info " style={{ fontWeight: 700 }}>Your current plan is the <span className='text-success'>{ plan } </span>plan</h4>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={airtime} alt="pics" />
                                      </div>
                                  </div>
                                  <div class="row bottom ">
                                      <div class="col-12">
                                          <p class="text-muted mb-1 small ">You would be credited once the payment period is due.

                                            </p>
                                      </div>
                                      <div class="col-12 ">
                                          <button className=" btn-info text-center btn  float-right " onClick={handleWithdraw}> + Withdraw</button>
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
                                          <p class="text-muted mb-1 small" >You can always get in touch with us. Want to update account info,view account details, or contact our support team.</p>
                                      </div>
                                      <div class="col-12 ">
                                          <button className=" text-white text-center btn btn-danger float-right " onClick={handleSupport}>+ Get Started</button>
                                      </div>
                                  </div>
                              </div>
                              </div>
        </div>
        <Affiliate setInvite={ setInvite} />

        <div class="col-lg-8 mb-4">
          <div class="card">
          <div class="card-body " >
                                  <div class="row ">
                                      <div class="col-8">
                                          <h4 class="text-muted mb-1 dash-info text-uppercase" style={{ fontWeight:700 }}>Referals </h4>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={refer} width="80" />
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-12">
                  <p class="text-muted mb-1 small" >Once your numbers of referals is 10+ users, your earning increases by 4% and more. Keep inviting and keep earning</p>
                  
                  <div class="table-responsive">

<table class="table bg-white text-secondary">
  <thead>
    <tr>  

      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
</div>
                                      </div>
                                  </div>
                              </div>
                              </div>
        </div>
             
                       </div>
  
    </>
  )
}

export default Active