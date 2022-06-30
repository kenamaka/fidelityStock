import {  NavLink } from "react-router-dom";
import './App.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Investmentplan from "./Investmentplan";




const Pagination = () => {


  // SPA navigation znd other states
  const [home, setHome] = useState( true)
  const [about, setAbout] = useState( false)
  const [investment, setInvestment] = useState( false)
  const [services, setService] = useState(false)
  const [click, setClick] = useState(false)


  
// handle SPA routing
  
  const handleHome = () => {
      setService(false)
      setInvestment(false)
      setAbout(false)
    setHome(true)
    setClick(false)

  }
  const handleAbout = () => {
      setAbout(true)
      setHome(false)
      setInvestment(false)
    setService(false)
    setClick(false)

  }
  const handleServices = () => {
      setAbout(false)
      setHome(false)
      setService(true)
    setInvestment(false)
    setClick(false)
  }
  const handleInvestment = () => {
    
    setAbout(false)
    setHome(false)
    setInvestment(true)
    setService(false)
    setClick(false)

  
  }

  
  const handleClick = () => {
      return setClick(!click)
  
    }

  



  
    return (
      <>
  <nav className="header">
          <div className="container ">
            
  <h1 className="site-logo"><NavLink className="text-black h2 mb-0" style={{ fontWeight: 700 }} to="/" onClick={handleHome }><span className="text-success">Fidelity</span><span className="text-dark">.</span> </NavLink></h1>
    <ul className={click ? 'navbar active' : 'navbar'}>
             
            <li className="nav-item"><NavLink className="nav-link text-dark" style={{ fontWeight: 500 }} to="/" onClick={handleHome}>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-dark" style={{ fontWeight: 500 }} to = "#" onClick={handleAbout}>About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-dark" style={{ fontWeight: 500 }} to="#" onClick={handleServices}>Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-dark" style={{ fontWeight: 500 }} to="#" onClick={handleInvestment}>Investment Plan</NavLink></li>
            <li className="nav-item"><button className="  btn btn-info px-4 py-2 btn-sm smoothscroll"><NavLink className="btncolor" to="/register">Register</NavLink></button></li> &nbsp; &nbsp;
            <li className="nav-item"><button className="  btn btn-success px-4 py-2 btn-sm smoothscroll"><NavLink className="btncolor" to="/dashboard">Login</NavLink></button></li> &nbsp; &nbsp;
         
             </ul>
          
        
        <div className="dropdown" onClick={handleClick} >
            {click ? (<FaTimes size={30} style={{ color: '#333' }} />) : (< FaBars size={30} style={{ color: '#333' }} />)} 
            
          </div>
        
        
        </div>
  </nav>

      
      
      {/* contents and navigaition go here */}

      {home && <Home plan={handleInvestment}/>}
      {about && <About/>}
      {services && <Services/>}
      {investment && <Investmentplan/>}
      

      <footer className="site-footer ">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-5">
              <h2 className="footer-heading mb-4 text-white">About Us</h2>
      <p className='text-secondary'> We provide an unparalleled variety of account options
          that clients can select to enjoy a tailored investment experience that perfectly suits their needs. Coupled with superior trading conditions and
        lightning fast execution.</p>
    </div>
    <div class="col-md-3 ml-auto">
              <h2 class="footer-heading mb-4 text-white">Features</h2>
              <ul class="list-unstyled">
                <li><NavLink to="#" onClick={handleInvestment}>Investment Plan</NavLink></li>
                <li><NavLink to="#" onClick={handleServices}>Our Services</NavLink></li>
                <li><NavLink to="#" onClick={handleAbout}>About Us</NavLink></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h2 class="footer-heading mb-4 text-white">Account</h2>
                <li><NavLink to="/register">Create an Account</NavLink></li>
                <li><NavLink to="/login">Account Login</NavLink></li>
                <li><NavLink to="/login/forgot">Account Recovery</NavLink></li>
                
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h2 className="footer-heading mb-4 text-white">Subscribe Newsletter</h2>
          <form action="#" method="post">
            <div className="input-group mb-3">
              <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-danger text-white" type="button" id="button-addon2">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
       </div>
      </div>
      <div className="col-md-12">
          <div className="credit pt-5">
          <p className='text-secondary'>
          
          Copyright &copy;2022 All rights reserved 
         
          </p>
          </div>
        </div>
      </footer>



      </>
  
  )
}

export default Pagination