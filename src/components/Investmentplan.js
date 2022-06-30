import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Pagination from './Pagination'



const Investmentplan = () => {


  return (
    <>
   
      <>
     
   <div id="fh5co-pricing" className="fh5co-bg-section">
		<div className="container-fluid p-2">
			<div className="row animate-box">
				<div className="col-md-12 col-md-offset-3 text-center pt-5 fh5co-heading">
<h1 className="site-heading site-animate"> <strong className="d-block">Investment <span className="text-default">Plan</span>.</strong></h1>
                
					<p className='text-dark'>You are just a step away. You can start earning immediately. Choose a prefered plan and fund your account.</p>
              </div>
            
			</div>
			<div className="row">
				<div className="pricing pricing--rabten">
					<div className="col-md-3 animate-box">
						<div className="pricing__item">
							<div className="wrap-price">
								 <div className="icon icon-user2"></div> 
	                     <h3 className="pricing__title">Classic</h3>
	                     <p className="pricing__sentence">Single user license</p>
							</div>
                     <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
								<span className="pricing__currency">$</span>300
								
                        </span>
                        <span className="pricing__anim pricing__anim--2">
								<span className="pricing__period">to $49k</span>
                        </span>
                     </div>
                     <div className="wrap-price">
                     	<ul className="pricing__feature-list">
	                        <li className="pricing__feature">One Day Trial</li>
	                        <li className="pricing__feature">Limited Courses</li>
	                        <li className="pricing__feature">Free 3 Lessons</li>
	                        <li className="pricing__feature">No Supporter</li>
	                        <li className="pricing__feature">No Tutorial</li>
	                        <li className="pricing__feature">No Ebook</li>
	                         <li className="pricing__feature">Limited Registered User</li>
	                     </ul>
						 <NavLink className=" btn btn-success p-3" to="/login">Choose plan</NavLink>

                     </div>
                  </div>
					</div>
					<div className="col-md-3 animate-box">
						<div className="pricing__item">
							<div className="wrap-price">
								<div className="icon icon-store"></div> 
	                     <h3 className="pricing__title">Platinum</h3>
	                      <p className="pricing__sentence">Up to 5 users</p> 
							</div>
                     <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
								<span className="pricing__currency">$</span>50k
                        </span>
                        <span className="pricing__anim pricing__anim--2">
								<span className="pricing__period">to $99k</span>
                        </span>
                     </div>
                     <div className="wrap-price">
                     	<ul className="pricing__feature-list">
	                        <li className="pricing__feature">One Year Standard Access</li>
	                        <li className="pricing__feature">Limited Courses</li>
	                        <li className="pricing__feature">300+ Lessons</li>
	                        <li className="pricing__feature">Random Supporter</li>
	                        <li className="pricing__feature">View Only Ebook</li>
	                        <li className="pricing__feature">Standard Tutorials</li>
	                         <li className="pricing__feature">Unlimited Registered User</li>
	                     </ul>
						 <NavLink className=" btn btn-success p-3" to="/login">Choose plan</NavLink>

                     </div>
                 </div>
					</div>
					<div className="col-md-3 animate-box">
                  <div className="pricing__item">
                  	<div className="wrap-price">
                  		<div className="icon icon-home2"></div> 
	                     <h3 className="pricing__title">Gold</h3>
	                     <p className="pricing__sentence">Unlimited users</p>
							</div>
                     <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
								<span className="pricing__currency">$</span>100k
                        </span>
                        <span className="pricing__anim pricing__anim--2">
								<span className="pricing__period">to $900k</span>
                        </span>
                     </div>
                     <div className="wrap-price">
                     	<ul className="pricing__feature-list">
	                        <li className="pricing__feature">Life Time Access</li>
	                        <li className="pricing__feature">Unlimited All Courses</li>
	                        <li className="pricing__feature">7000+ Lessons &amp; Growing</li>
	                        <li className="pricing__feature">Free Supporter</li>
	                        <li className="pricing__feature">Free Ebook Downloads</li>
	                        <li className="pricing__feature">Premium Tutorials</li>
	                         <li className="pricing__feature">Unlimited Registered User</li>
	                     </ul>
	                     <NavLink className=" btn btn-success p-3" to="/login">Choose plan</NavLink>
                     </div>
                  </div>
							  </div>
							  <div className="col-md-3 animate-box">
						<div className="pricing__item">
							<div className="wrap-price">
								 <div className="icon icon-user2"></div> 
	                     <h3 className="pricing__title">Diamond</h3>
	                     <p className="pricing__sentence">Single user license</p>
							</div>
                     <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
								<span className="pricing__currency">$</span>1m
                        </span>
                        <span className="pricing__anim pricing__anim--2">
								<span className="pricing__period">$50m</span>
                        </span>
                     </div>
                     <div className="wrap-price">
                     	<ul className="pricing__feature-list">
	                        <li className="pricing__feature">One Day Trial</li>
	                        <li className="pricing__feature">Limited Courses</li>
	                        <li className="pricing__feature">Free 3 Lessons</li>
	                        <li className="pricing__feature">No Supporter</li>
	                        <li className="pricing__feature">No Tutorial</li>
	                        <li className="pricing__feature">No Ebook</li>
	                         <li className="pricing__feature">Unlimited Registered User</li>
	                     </ul>
						 <NavLink className=" btn btn-success p-3" to="/login">Choose plan</NavLink>

                     </div>
                  </div>
					</div>
		
            </div>
			</div>
		</div>
	</div>
      </>
    </>
  )
}

export default Investmentplan