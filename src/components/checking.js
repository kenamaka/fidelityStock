import React from 'react'
import { FaTimes, FaBars,FaTachometerAlt,FaColumns, FaUser, } from 'react-icons/fa'
import { NavLink,Outlet } from 'react-router-dom'
import { useState } from 'react'
import wallet from "../assets/svg/wallet.svg"




const User = ({username}) => {
  const [click, setClick] = useState(false)
  
  const handleClick = () => {
    return setClick(!click)
  }
  return (
    <>
      <div className='sb-nav-fixed bg-gray' >
      <nav className="header bg-gray ">
      

      <div className="container">
       
      
                      <h2 className="text-blue dash-info" style={{ fontWeight: 700 }}> <span className="text-success">Welcome</span> <span><b>Kendo550{ username }</b></span></h2>
                      <ul className={click ? 'navb active' : 'navb inactive'}>
                  <li className="nav-item"><NavLink className="nav-link text-light" to="/">Home</NavLink></li>
                  <li className="nav-item"> <span className="nav-link text-light">Welcome </span></li>
         
                
                </ul>
                
                         
          <div className="drop" onClick={handleClick}>
                  {click ? (<FaTimes size={30} style={{ color: '#333'  }} />) : (< FaBars size={30} style={{ color: '#333'  }} />)} 
                </div>
                
        
      </div>
      </nav>
              <Outlet />
              <br /><br />
              
        <div id="layoutSidenav_content">
        <main>
                      <div className="container-fluid">
                       
                <h1 className="mt-4 text-blue"> <b>Dashboard</b></h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item text-dark active">Your balance is 0 click here to add balance, then click and select your prefered plan.</li>
                </ol>
                <div className="row">
                              <div class="col-lg-4"><div class="card"><div class="card-body wallet" >
                                  <div class="row px-2">
                                      <div class="col-8">
                                          <p class="text-muted mb-1 small text-uppercase">Account Number</p>
                                          <h6 class="mb-0 text-blue font-weight-bolder">5500000742</h6>
                                      </div>
                                      <div class="col-4 icon">
                                          <img src={wallet} />
                                      </div>
                                  </div>
                                  <div class="row bottom px-2">
                                      <div class="col-12">
                                          <p class="text-muted mb-1 small text-uppercase">Account Balance</p>
                                      </div>
                                      <div class="col-12 ">
                                          <h3 class="mb-0 text-new-blue float-left">₦ 0.00</h3>
                                          <button type="button" data-testid="apply-btn" class="btn px-4 text-white btn-new-blue btn-floating text-center btn btn-primary float-right btn btn-primary"> + Fund Account</button></div></div></div
                              ></div></div>
                              <div className="col-xl-4 col-md-6">
                        <div className="card bg-white text-dark radius  mb-4">
                                      <div className="card-body">
                                
                                          <h3 className="small text-dark text-uppercase ">Account ID</h3>
                                          <h3 className="small text-dark " href="#"><b>5500000456</b></h3>
                                          <br/><br/>
                                          <h3 className="small text-dark " href="#"><b>5500000456</b></h3>
                                          <h3 className="small text-dark " href="#"><b>5500000456</b></h3>
                                          <p className='dash-info'>Account ID</p>
                                      </div>
                                
                        </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                        <div className="card bg-white text-dark radius  mb-4">
                                      <div className="card-body">
                                
                                          <h3 className="small text-dark text-uppercase ">Security</h3>
                                          <h3 className="small text-dark " href="#"><b>5500000456</b></h3>
                                          <br/><br/>
                                          <h3 className="small text-dark " href="#"><b>5500000456</b></h3>
                                          <h3 className="small text-dark " href="#"><b>5500000456</b></h3>
                                          <p className='dash-info'>Account ID</p>
                                      </div>
                                
                        </div>
                    </div>
                   </div>

                <div className="card mb-4">
                    <div className="card-header">
                         You are just a step away. You can start earning immediately. Choose a prefered plan and fund your account.
                    </div>
                              <div className="card-body">
                              <span><span><strong>Elon Musk Said:</strong></span>
<strong>The best thing that you can do with bitcoin is start bitcoin mining instead of holding bitcoin. &nbsp;<br/>
on this way you will have more bitcoin every day.</strong></span><br/>
<br/>
<strong><span>You can have the fastest bitcoin miner in 5 minutes:&nbsp;</span><br/>
<br/>
<span>1- </span>Choose one of the below miners<br/>
<span>2-</span> Click on "<span>Start mining</span>" button and pay the miner price<br/>
<span>3-</span> Your miner is launched and adds bitcoin to your balance every second (until 1 year)<br/>
<span>4-</span> you can withdrawal every day</strong><br/>

                              </div>
                              </div>

    
                          
                          </div>
        </main>
        <footer className="py-4 bg-dark mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Your Website 2022</div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        &middot;
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        </div>
    </>
  )
}




import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import SecFooter from './SecFooter'
import chart from '../assets/chart.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Fund = () => {

  const [message, setMessage] = useState("")
  
  const handleMessage = () => {
    setMessage('Copied to Clipboard !!')
  }
  return (

      <>
             <div className='sb-nav-fixed bg-gray' >
      <Header/>
              
        <div id="layoutSidenav_content">
        <main>
             <div className="container">
                       
                <h1 className="mt-4 text-blue"> <b>Dashboard</b></h1>
             
          
       <div class="row px-3">
          
       <button className='btn btn-info  btn-sm smoothscroll'><NavLink className='btncolor'  to="/dashboard" class="  btn btn-info btn-sm smoothscroll"><FaArrowLeft/> Back</NavLink></button>
   
  </div><br/>

<div class="card mb-3"><div class="card-body">

<div class="col-md-12 text-center"><br/>
    <span className='text-dark'><strong><span >Discount until </span><span className='text-danger' >03/July/2022</span>: Every&nbsp;<span >payment more than&nbsp;</span><span className='info'>0.1 BTC</span>, get <span >balance</span> <span className='text-danger'>bonuses 30%</span></strong></span><br />
    <p className='text-dark'><span className='text-dark'><strong>Minimum&nbsp;amount:</strong><span className='text-danger' ><strong> 0.0003</strong> </span></span><br/>
<strong>If you do not have bitcoin, you can buy it<span > <a className='text-info' href="https://localbitcoins.com/guides/how-to-buy-bitcoins" target="_blank">Click here <FaArrowAltCircleRight className='text-info'/></a></span></strong></p>

&nbsp;</div>


              </div>
              </div>
              <br />

<div class="card mb-3">

    <div class="card-body">
                            <div class="row">
                <div class="col-md-12">
                                   
                                          
                        <center>
                            <div class="form-group">
                                <label>Transfer bitcoin (BTC) address</label>
                                <div id="btc_qr_code">
                                                      <img margin="center" src={ chart} />
                                    <center><p id="webSocket"></p>  </center>
                                          <div class="input-group">
                              <input
                                id="myInput"
                                type="text"
                                class="form-control"
                                readonly="readonly"
                                value="3FpV5dTQLEWbYMmTia62LJiHzyLdPGaQcv"
                              />
                              <CopyToClipboard text={'Text will be copied'}>
                                <button
                                  class="btn btn-primary"
                                  id="copy-button"
                                  title="Copy to Clipboard"
                                  onClick={handleMessage}
                                >
                                  Copy
                                </button>
                              
                              </CopyToClipboard>
                            
                            </div>
                  <div className=' text-info col-md-3 p-2'>{ message }</div>
                     <center>
                         <a href="bitcoin:3FpV5dTQLEWbYMmTia62LJiHzyLdPGaQcv" class="btn btn-primary btn-block">Pay by BTC wallet app</a> </center>

                                </div>

                        </div></center>
                                  </div>
                  </div>
              </div>
                          </div>
                      </div>
                  </main>
                  <SecFooter />
              </div>
              </div>
          

    </>
  )
}

export default Fund