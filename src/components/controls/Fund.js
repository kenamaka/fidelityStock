import Axios from 'axios'
import React, {  useState } from 'react'
import { NavLink } from 'react-router-dom'
import Popup from '../Payment/Popup'
import { FaArrowCircleLeft } from 'react-icons/fa'
import btc from '../assets/BTC.png'
import eth from '../assets/ETH.png'
import usdt from '../assets/tether.png'


const Investmentplan = ({setFund}) => {
	const [pay, setPay] = useState(false)
	const [investmentplan, setInvestment] = useState({
		text: '',
		title: '',
		amount:0
	})

	const [plan,setPlan] = useState( [
        {id:1, icon : btc, name:'BTC',rate:20958,wallet:'14TEBnJrbwu8PuVNsuweVeqDBtxAWiUPZY',tag:'Bitcoin',code:""},
        {id:2, icon : eth, name:'ETH',rate:1205,wallet:'0xa73f224f97d9fda32df6b9fa2f03db19cbc88b0d',tag:'Ethereum',code:''},
        { id: 3, icon: usdt, name: 'USDT', rate: 1,wallet:'0xa73f224f97d9fda32df6b9fa2f03db19cbc88b0d',tag:'Tether',code:''},
	])
	
	Axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd")
	.then((response) => {
		console.log(response.data)
	
		setPlan([
			{id:1, icon : btc, name:'BTC',rate:(response.data.bitcoin.usd).toFixed(0),wallet:'14TEBnJrbwu8PuVNsuweVeqDBtxAWiUPZY',tag:'Bitcoin',code:""},
			{id:2, icon : eth, name:'ETH',rate:(response.data.ethereum.usd).toFixed(0),wallet:'0xa73f224f97d9fda32df6b9fa2f03db19cbc88b0d',tag:'Ethereum',code:''},
			{ id: 3, icon: usdt, name: 'USDT', rate:(response.data.tether.usd).toFixed(0),wallet:'0xa73f224f97d9fda32df6b9fa2f03db19cbc88b0d',tag:'Tether',code:''},
		])
	},[])
	const handleClassic = () => {
		setPay(true)
		setInvestment({
			text:"The Classic plan ranges from $300 - $49000",
			title:"Classic",
			amount:300

		})
		
	}
	const handlePlatinum = () => {
		setPay(true)
		setInvestment({
			text:"The platinum plan price, ranges from $50000 - $99000",
			title:"Platinum",
			amount:50000

		})
	}
	const handleGold = () => {
		setPay(true)
			setInvestment({
			text:"The Gold plan price, ranges from $100000 - $900000",
			title:"Gold",
			amount:100000

		})
	}

	const handleDiamond = () => {
		setPay(true)
		setInvestment({
			text:"The Diamond plan price, ranges from $1m to $50m",
			title:"Diamond",
			amount:1000000

		})
		
	}
	
  return (
    <>
   
      <>
			  <Popup
				  popup={pay}
				  setPopup={setPay}
				  investment={investmentplan}
				  userData={plan}
			  >
				
				</Popup>
   <div id="fh5co-pricing" className="fh5co-bg-section">
		<div className="container-fluid">
			<div className="row animate-box">
				<div className="col-md-12 col-md-offset-3 text-center  fh5co-heading">
                <h1 className="site-heading site-animate"> <strong className="d-block">Investment <span className="text-default">Plan</span>.</strong></h1>
					<p className='text-dark'>You are just a step away. You can start earning immediately. Choose a prefered plan and fund your account.</p>
                <br/>
			<NavLink className="nav-link text-dark" style={{ fontWeight: 500 }} to="#" onClick={() => setFund(false)} ><FaArrowCircleLeft/> Back</NavLink>
                
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
             {/* <a href="" class="blockoPayBtn" data-toggle="modal" data-uid="ac34dc5bfb4b48d5"><img width='160' src="https://www.blockonomics.co/img/pay_with_bitcoin_medium.png"/></a> */}
			 <button className=" btn btn-success p-3" to="#" onClick={handleClassic}>Choose plan</button>

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
             {/* <a href="" class="blockoPayBtn" data-toggle="modal" data-uid='303b398de9c84472'><img width='160' src="https://www.blockonomics.co/img/pay_with_bitcoin_medium.png"/></a>
				 */}
						 <button className=" btn btn-success p-3" to="#" onClick={handlePlatinum}>Choose plan</button>
										  

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
						 <button className=" btn btn-success p-3" to="#" onClick={handleGold}>Choose plan</button>
										 	  
                       {/* <a href="" class="blockoPayBtn" data-toggle="modal" data-uid='81d1df5c69fa44b4'><img width='160' src="https://www.blockonomics.co/img/pay_with_bitcoin_medium.png"/></a> */}
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
             {/* <a href="" class="blockoPayBtn" data-toggle="modal" data-uid='839be107ffb94c57'><img width='160' src="https://www.blockonomics.co/img/pay_with_bitcoin_medium.png"/></a>
                       */}
						 <button className=" btn btn-success p-3" to="#" onClick={handleDiamond}>Choose plan</button>
										  

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