import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  
  return (
    <>
    <footer class="site-footer ">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-5">
              <h2 class="footer-heading mb-4 text-white">About Us</h2>
      <p className='text-secondary'> We provide an unparalleled variety of account options
          that clients can select to enjoy a tailored investment experience that perfectly suits their needs. Coupled with superior trading conditions and
        lightning fast execution.</p>
    </div>
            <div class="col-md-3 ml-auto">
              <h2 class="footer-heading mb-4 text-white">Features</h2>
              <ul class="list-unstyled">
                <li><NavLink to="#" onClick='handle'>Investment Plan</NavLink></li>
                <li><NavLink to="#">Our Services</NavLink></li>
                <li><NavLink to="#">About Us</NavLink></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h2 class="footer-heading mb-4 text-white">Your Account</h2>
                <li><NavLink to="/register">Create an Account</NavLink></li>
                <li><NavLink to="/login">Account Login</NavLink></li>
                <li><NavLink to="/login/forgot">Account Recovery</NavLink></li>
                
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <h2 class="footer-heading mb-4 text-white">Contact Us</h2>
         
        </div>
      </div>
      <div class="row pt-5 mt-5 text-center">
       </div>
      </div>
      <div class="col-md-12">
          <div class="credit pt-5">
          <p className='text-secondary'>
          
          Copyright &copy;2022 All rights reserved 
         
          </p>
          </div>
        </div>
      </footer>
      </>
  )
}

export default Footer