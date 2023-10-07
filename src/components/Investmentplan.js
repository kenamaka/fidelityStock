import axios from 'axios'
import React, { useEffect } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { NavLink } from 'react-router-dom'
import Pagination from './Pagination'



const Investmentplan = ({login}) => {


  return (
    <>
   
      <>
     
   <div id="fh5co-pricing" className="fh5co-bg-section">
				  <div className="container-fluid p-2">
    <AnimationOnScroll animateIn='animate__fadeIn' duration={3} animateOut='animate_fadeOut' >
					  
			<div className="row animate-box">
				<div className="col-md-12 col-md-offset-3 text-center pt-5 fh5co-heading">
					
<h1 className="site-heading site-animate"> <strong className="d-block">Investment <span className="text-default">Plan</span>.</strong></h1>
                
					<p className='text-dark'>You are just a step away. You can start earning immediately. Choose a prefered plan and fund your account.</p>
              </div>
            
						  </div>
						  </AnimationOnScroll>
			<div className="row">
				<div className="pricing pricing--rabten">
					<div className="col-md-3 animate-box">
						<div className="pricing__item">
							<div className="wrap-price">
								 <div className="icon icon-user2"></div> 
	                     <h3 className="pricing__title">Classic</h3>
	                     <p className="pricing__sentence">Crypto storage</p>
							</div>
                     <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
								<span className="pricing__currency">$</span>300
								
                        </span>
                        <span className="pricing__anim pricing__anim--2">
								<span className="pricing__period">to $49k</span>
                        </span>
									  </div>
    <AnimationOnScroll animateIn='animate__bounceInUp' duration={3}  >
									  
                     <div className="wrap-price">
                     	<ul className="pricing__feature-list">
	                        <li className="pricing__feature">10% Weekly Returns</li>
	                        <li className="pricing__feature">24hrs Trading</li>
	                        <li className="pricing__feature">Platform Security</li>
	                        <li className="pricing__feature">1 Extra gift card</li>
	                        <li className="pricing__feature">No Extra Funding</li>
	                        <li className="pricing__feature">1 Extra Coupon</li>
	                         <li className="pricing__feature">Limited Transactions</li>
	                     </ul>
						 <NavLink className=" btn btn-success p-3" to="#" onClick = {login}>Choose plan</NavLink>

										  </div>
										  </AnimationOnScroll>
                  </div>
					</div>
					<div className="col-md-3 animate-box">
						<div className="pricing__item">
							<div className="wrap-price">
								<div className="icon icon-store"></div> 
	                     <h3 className="pricing__title">Platinum</h3>
	                      <p className="pricing__sentence">Advanced Crypto storage</p> 
							</div>
                     <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
								<span className="pricing__currency">$</span>50k
                        </span>
                        <span className="pricing__anim pricing__anim--2">
								<span className="pricing__period">to $99k</span>
                        </span>
									  </div>
    <AnimationOnScroll animateIn='animate__bounceInUp' duration={3}  >
									  
                     <div className="wrap-price">
                     	<ul className="pricing__feature-list">
	                        <li className="pricing__feature">14% Weekly Returns</li>
							<li className="pricing__feature">24hrs Trading</li>
	                        <li className="pricing__feature">Platform Security</li>
	                        <li className="pricing__feature">3 Extra gift card</li>
	                        <li className="pricing__feature">1 Extra Funding</li>
	                        <li className="pricing__feature">2 Extra Coupon</li>
	                         <li className="pricing__feature">Unlimited Transactions</li>
	                     </ul>
						 <NavLink className=" btn btn-success p-3" to="#" onClick = {login}>Choose plan</NavLink>


										  </div>
										  </AnimationOnScroll>
                 </div>
					</div>
					<div className="col-md-3 animate-box">
                  <div className="pricing__item">
                  	<div className="wrap-price">
                  		<div className="icon icon-home2"></div> 
	                     <h3 className="pricing__title">Gold</h3>
	                     <p className="pricing__sentence">Advanced Crypto Storage</p>
							</div>
                     <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
								<span className="pricing__currency">$</span>100k
                        </span>
                        <span className="pricing__anim pricing__anim--2">
								<span className="pricing__period">to $900k</span>
                        </span>
									  </div>
    <AnimationOnScroll animateIn='animate__bounceInUp' duration={3}  >
									  
                     <div className="wrap-price">
                     	<ul className="pricing__feature-list">
	                        <li className="pricing__feature">16% Weekly Returns</li>
							<li className="pricing__feature">24hrs Trading</li>
	                        <li className="pricing__feature">Platform Security</li>
	                        <li className="pricing__feature">4 Extra gift card</li>
	                        <li className="pricing__feature">4 Extra Funding</li>
	                        <li className="pricing__feature">4 Extra Coupon</li>
	                         <li className="pricing__feature">Unlimited Transactions</li>
	                                  </ul>
									  <NavLink className=" btn btn-success p-3" to="#" onClick = {login}>Choose plan</NavLink>

										  </div>
										  </AnimationOnScroll>
                  </div>
							  </div>
							  <div className="col-md-3 animate-box">
						<div className="pricing__item">
							<div className="wrap-price">
								 <div className="icon icon-user2"></div> 
	                     <h3 className="pricing__title">Diamond</h3>
	                     <p className="pricing__sentence">Unlimited Insurance</p>
							</div>
                     <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
								<span className="pricing__currency">$</span>1m
                        </span>
                        <span className="pricing__anim pricing__anim--2">
								<span className="pricing__period">$50m</span>
                        </span>
									  </div>
    <AnimationOnScroll animateIn='animate__bounceInUp' duration={3}  >
									  
                     <div className="wrap-price">
                     	<ul className="pricing__feature-list">
	                        <li className="pricing__feature">18% Weekly Returns</li>
							<li className="pricing__feature">24hrs Trading</li>
	                        <li className="pricing__feature">Platform Security</li>
	                        <li className="pricing__feature">8 Extra gift card</li>
	                        <li className="pricing__feature">6 Extra Funding</li>
	                        <li className="pricing__feature">6 Extra Coupon</li>
	                         <li className="pricing__feature">Unlimited Transactions</li>
	                     </ul>
						 <NavLink className=" btn btn-success p-3" to="#" onClick = {login}>Choose plan</NavLink>
										  </div>
										  </AnimationOnScroll>
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