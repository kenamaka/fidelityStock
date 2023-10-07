import React, { useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import Usertables from './tables/Usertables'
import Contact from './tables/Contact'
import Payment from './tables/Payment'
import Mining from './tables/Mining'
import { AnimationOnScroll } from 'react-animation-on-scroll'





const Moderator = ({username}) => {
  const [click, setClick] = useState(false)
  const [payment,setPayment] = useState(false)
  const [data,setData] = useState(false)
// SPA navigation states
    const [reguser, setReguser] = useState( true)
    const [contact, setContact] = useState(false)
    const [mine, setMine] = useState(false)
    
// handle SPA routing
const handleClick = () => {
  return setClick(!click)
  }
  
    const handleRegusers = () => {
        setContact(false)
      setReguser(true)
      setClick(false)

    }
 
 
    const handleContact = () => {

        setClick(false)
        setReguser(false)
        setContact(true)
    }
    
  const handlePayment = (userid) => {
    return function() {
      console.log(userid)
      console.log('i was clicked')
      setPayment(true)
      setData(userid)
     } 
  }
  const handleMine = (user) => {
    return function() {
      console.log(user)
      console.log('i was clicked')
      setMine(true)
      setData(user)
     } 
  }
  


  if (payment) 
    return (
      

        <Payment setPopup={setPayment} details={data} />
      
        
    )
    if (mine) 
      return (
    
          <Mining setPopup={setMine} details={data} />
          
    )
  return (
    <>
      <div className='sb-nav-fixed' >
      <nav className="header bg-dark">
      

      <div className="container ">
       
      
          <h1 className="site-logo"><NavLink  className="text-black h2 mb-0" style={{ fontWeight: 700 }} to ="/dashboard"><span className="text-default">Admin</span>Panel </NavLink></h1>
                      <ul className={click ? 'navbar active' : 'navbar'}>
                  <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="#" onClick={handleRegusers} >Registered Users</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="#" onClick={handleContact}>Messages</NavLink></li>
                  <li className="nav-item"> <span className="nav-link">Welcome <span className="text-info " style={{ fontWeight: 700 }}><b>{ username }</b></span></span></li>
         
                
                </ul>
                
                         
          <div className="dropdown" onClick={handleClick}>
                  {click ? (<FaTimes size={25} style={{ color: '#fff'  }} />) : (< FaBars size={25} style={{ color: '#fff'  }} />)} 
                </div>
                
        
      </div>
      </nav>
              <Outlet />

              
<div className="container-fluid pt-5 bg-dark ">

<div className="row">

  <div className="col-lg-3  pt-3">

    <h1 className="my-4 text-white " style={{ fontWeight: 700 }}>Dashboard</h1>
    <div className="list-group  ">
      <NavLink to="#" className="list-group-item" onClick={handleRegusers}>Registered Users</NavLink>
      <NavLink to="#" className="list-group-item" onClick={handleContact}>Messages</NavLink>
    </div>
                        

  </div>
  <div class=" col-md-12 col-xl-9 mb-4 pt-5">       
                          {/* pages come here */}
                          <>
                        
                              {contact && <Contact/>}
                {reguser && <Usertables handlePayment={ handlePayment} handleMine={handleMine} />}
                          </>
                          
                  </div>
                  </div>
        </div>
        <footer className="py-4 bg-dark mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                                <NavLink to="/">Fidelity Stock</NavLink>
          
                    <div className="text-muted"> Copyright &copy;{new Date().getUTCFullYear()} All rights reserved </div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        &middot;
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        
    </>
  )
}

export default Moderator