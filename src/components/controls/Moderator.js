import React, { useEffect } from 'react'
import { FaTimes, FaBars, FaUser, FaEye, FaPencilAlt, FaPersonBooth, } from 'react-icons/fa'
import {BsPersonXFill} from 'react-icons/bs'
import { NavLink, Outlet } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import { useState } from 'react'
import ActiveUsers from './tables/ActiveUsers'
import Usertables from './tables/Usertables'
import axios, { Axios } from 'axios'
import Contact from './tables/Contact'




const Moderator = ({username}) => {
  const [click, setClick] = useState(false)
  
  const handleClick = () => {
    return setClick(!click)
    }

// SPA navigation states
    const [reguser, setReguser] = useState( true)
    const [activeuser, setActiveuser] = useState( false)
    const [contact, setContact] = useState(false)
    
// handle SPA routing
    
    const handleRegusers = () => {
        setActiveuser(false)
        setContact(false)
      setReguser(true)
      setClick(false)

    }
    const handleActive = () => {
        setActiveuser(true)
        setReguser(false)
        setContact(false)
        setClick(false)

    }
 
    const handleContact = () => {
        setActiveuser(false)

        setClick(false)
        setReguser(false)
        setContact(true)
    }
    
    
  return (
    <>
      <div className='sb-nav-fixed' >
      <nav className="header bg-dark">
      

      <div className="container">
       
      
          <h1 className="site-logo"><NavLink  className="text-black h2 mb-0" style={{ fontWeight: 700 }} to ="/dashboard"><span className="text-default">Admin</span>Panel </NavLink></h1>
                      <ul className={click ? 'navbar active' : 'navbar'}>
                  <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="#" onClick={handleRegusers} >Registered Users</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="#" onClick ={handleActive}>Active Users</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="#" onClick={handleContact}>Messages</NavLink></li>
                  <li className="nav-item"> <span className="nav-link">Welcome <span className="text-info "><b>{ username }</b></span></span></li>
         
                
                </ul>
                
                         
          <div className="dropdown" onClick={handleClick}>
                  {click ? (<FaTimes size={30} style={{ color: '#333'  }} />) : (< FaBars size={30} style={{ color: '#333'  }} />)} 
                </div>
                
        
      </div>
      </nav>
              <Outlet />
              <br/><br/>
              <br/><br/>
<div className="container ">

<div className="row">

  <div className="col-lg-3">

    <h1 className="my-4">Dashboard</h1>
    <div className="list-group  ">
      <NavLink to="#" className="list-group-item" onClick={handleRegusers}>Registered Users</NavLink>
      <NavLink to="#" className="list-group-item" onClick={handleActive}>Active Users</NavLink>
      <NavLink to="#" className="list-group-item" onClick={handleContact}>Messages</NavLink>
    </div>
                          <br/>

  </div>
  <div class="col-lg-9 col-md-6 mb-4">       
                          {/* pages come here */}
                          <>
                        
                              {activeuser && <ActiveUsers/>}
                              {contact && <Contact/>}
                              {reguser && <Usertables />}
                          </>
                          
                  </div>
                  </div>
        </div>
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
        
    </>
  )
}

export default Moderator