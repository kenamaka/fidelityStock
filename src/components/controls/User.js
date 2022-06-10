import React from 'react'
import { FaTimes, FaBars,FaTachometerAlt,FaColumns, FaUser, } from 'react-icons/fa'
import './css/styles.css'
import { NavLink,Outlet } from 'react-router-dom'
import { useState } from 'react'




const User = ({username}) => {
  const [click, setClick] = useState(false)
  
  const handleClick = () => {
    return setClick(!click)
  }
  return (
    <>
      <div className='sb-nav-fixed' >
      <nav className="header">
      

      <div className="container">
       
      
          <h1 className="site-logo text-black h2 mb-0" style={{ fontWeight: 700 }}> <span className="text-default">Bal:</span> 0.000000000 BTC</h1>
                      <ul className={click ? 'navbar active' : 'navbar'}>
                  <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                  <li className="nav-item"> <span className="nav-link">Welcome <span className="text-info "><b>{ username }</b></span></span></li>
         
                
                </ul>
                
                         
          <div className="dropdown" onClick={handleClick}>
                  {click ? (<FaTimes size={30} style={{ color: '#333'  }} />) : (< FaBars size={30} style={{ color: '#333'  }} />)} 
                </div>
                
        
      </div>
      </nav>
              <Outlet />
              <br/><br/>
        <div id="layoutSidenav_content">
        <main>
            <div className="container-fluid">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Your balance is 0 click here to add balance, then click and select your prefered plan.</li>
                </ol>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">Start Trading</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View More</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-warning text-white mb-4">
                            <div className="card-body">Deposit- Add Balance </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View More</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">Support</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View More</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-white mb-4">
                            <div className="card-body">Security</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View More</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
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

export default User