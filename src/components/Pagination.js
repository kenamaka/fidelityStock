import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import './App.css'
import { FaBars, FaEnvelope, FaGlobeEurope, FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Investmentplan from "./Investmentplan";
import logo from './assets/favis.png'
import "animate.css/animate.min.css"
import {AnimationOnScroll} from 'react-animation-on-scroll'
import Register from "./Register";
import Login from "./Login";
import axios from "axios";
import Success from "../components/Success"




const Pagination = () => {
  const location = useLocation()
  const user_id = location.pathname.split("/")[2]
  const navigate = useNavigate()

  // SPA navigation znd other states
  const [home, setHome] = useState( true)
  const [about, setAbout] = useState( false)
  const [investment, setInvestment] = useState( false)
  const [services, setService] = useState(false)
  const [click, setClick] = useState(false)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [success, setSuccess] = useState(false)
  const [referal, setReferal] = useState('')


// handle SPA routing
  
  const handleHome = () => {
      setService(false)
      setInvestment(false)
      setAbout(false)
    setHome(true)
    setClick(false)
    setLogin(false)
    setRegister(false)

  }
  const handleAbout = () => {
      setAbout(true)
      setHome(false)
      setSuccess(false)
      setInvestment(false)
    setService(false)
    setClick(false)
    setLogin(false)
    setRegister(false)

  }
  const handleServices = () => {
      setAbout(false)
      setHome(false)
      setService(true)
    setInvestment(false)
    setClick(false)
    setLogin(false)
    setSuccess(false)
    setRegister(false)
  }
  const handleInvestment = () => {
    
    setAbout(false)
    setHome(false)
    setInvestment(true)
    setService(false)
    setClick(false)
    setRegister(false)
    setLogin(false)
    setSuccess(false)


  
  }
  const handleRegister = () => {
    
    setAbout(false)
    setHome(false)
    setInvestment(false)
    setService(false)
    setClick(false)
    setRegister(true)
    setLogin(false)
    setSuccess(false)

  
  }
  const handleSuccess = () => {
    setSuccess(true)
    setAbout(false)
    setHome(false)
    setInvestment(false)
    setService(false)
    setClick(false)
    setLogin(false)
    setRegister(false)
  }
  const handleLogin = () => {
    
    setAbout(false)
    setHome(false)
    setInvestment(false)
    setService(false)
    setClick(false)
    setLogin(true)
    setSuccess(false)
    setRegister(false)

  
  }

  
  const handleClick = () => {
      return setClick(!click)
  
    }

    useEffect(() => { 
      const res = axios.get(`https://server.fidelitystock.us/api/refer/${user_id}`).then((response) => {
        
        setReferal(response.data[0].username)
      })
    },[]
    )

  return (
      
    <>
      
  <nav className="header">
    
          <div className="container">
            
            <h1><NavLink className="text-black h2 mb-0" style={{ fontWeight: 700 }} to="#" onClick={handleHome}><img src={logo}  className="logo"/><span className="text-light site-logo">Fidelity</span><span className="text-success">.</span> </NavLink></h1>
    <ul className={click ? 'navbar active' : 'navbar'}>
             
            <li className="nav-item"><NavLink className="nav-link text-light" style={{ fontWeight: 500 }} to="#" onClick={handleHome}>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" style={{ fontWeight: 500 }} to = "#" onClick={handleAbout}>About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" style={{ fontWeight: 500 }} to="#" onClick={handleServices}>Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" style={{ fontWeight: 500 }} to="#" onClick={handleInvestment}>Investment Plan</NavLink></li>
            <li className="nav-item"><button className="  btn btn-info px-4 py-2 btn-sm smoothscroll"><NavLink className="btncolor" to="#" onClick={handleRegister}>Register</NavLink></button></li> &nbsp; &nbsp;
            <li className="nav-item"><button className="  btn btn-success px-4 py-2 btn-sm smoothscroll"><NavLink className="btncolor" to="#" onClick={handleLogin}>Login</NavLink></button></li> &nbsp; &nbsp;
         
             </ul>
          
        
        <div className="dropdown" onClick={handleClick} >
            {click ? (<FaTimes size={30} style={{ color: '#fff' }} />) : (< FaBars size={30} style={{ color: '#fff' }} />)} 
            
          </div>
        
        
        </div>
  </nav>

      
      
      {/* contents and navigaition go here */}

      {home && <Home plan={handleInvestment} register= {handleRegister} />}
        {about && <About about={ handleAbout} />}
      {services && <Services/>}
      {investment && <Investmentplan login={handleLogin} />}
      {register && <Register referal_link={user_id} login={handleLogin} home={handleHome} success={ handleSuccess} />}
      {login && <Login register={handleRegister} home={handleHome} />}
      {success && <Success login={handleLogin} home={handleHome} />}
      

      
        <AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
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
                <li><NavLink to="#" className="text-success" onClick={handleInvestment}>Investment Plan</NavLink></li>
                <li><NavLink to="#" onClick={handleServices} className="text-success">Our Services</NavLink></li>
                <li><NavLink to="#" onClick={handleAbout} className="text-success">About Us</NavLink></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h2 class="footer-heading mb-4 text-white">Account</h2>
                <li><NavLink to="#" className="text-success" onClick={handleRegister}>Create an Account</NavLink></li>
                <li><NavLink to="#" onClick={handleLogin} className="text-success">Account Login</NavLink></li>
                <li><NavLink to="/login/forgot" className="text-success">Account Recovery</NavLink></li>
                
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h2 className="footer-heading mb-4 text-white">Location</h2>
              <li><FaLocationArrow/><span> Address:</span> 200 Seaport Blvd, Boston, MA, 0210, USA.</li>
              <li><FaEnvelope/> <span> Email:</span><a href="mailto:someone@yoursite.com" className="text-success"> support@fidelitystock.com</a></li>
              <li><FaGlobeEurope/> <span> Website:</span> <a href="#" className="text-success">www.fidelity.us</a></li>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
       </div>
      </div>
      <div className="col-md-12">
          <div className="credit pt-5">
          <p className='text-success'>
          
          Copyright &copy;2022 All rights reserved 
         
          </p>
          </div>
        </div>
          </footer>
          </AnimationOnScroll>
 



      </>
  
  )
}

export default Pagination