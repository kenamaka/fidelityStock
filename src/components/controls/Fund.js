import Axios from 'axios'
import React, {  useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowCircleLeft, FaTimes } from 'react-icons/fa'
import btc from '../assets/BTC.png'
import eth from '../assets/ETH.png'
import usdt from '../assets/tether.png'
import '../Payment/Popup.css'
import Input from '../Payment/Input'
import "animate.css/animate.min.css"

import Cyptos  from '../Payment/Cyptos'
import axios from 'axios'
import Deposit from '../Payment/Deposit'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Investmentplan = ({setFund,firstname}) => {
	const [pay, setPay] = useState(false)
	
	const [investmentplan, setInvestment] = useState(
		{text:"", title:"",amount:0}
	)

	const [plan,setPlan] = useState( [
        {id:1, icon : btc, name:'BTC',rate:20958,wallet:'14TEBnJrbwu8PuVNsuweVeqDBtxAWiUPZY',tag:'Bitcoin',code:""},
        {id:2, icon : eth, name:'ETH',rate:1205,wallet:'0xa73f224f97d9fda32df6b9fa2f03db19cbc88b0d',tag:'Ethereum',code:''},
        { id: 3, icon: usdt, name: 'USDT', rate: 1,wallet:'0xa73f224f97d9fda32df6b9fa2f03db19cbc88b0d',tag:'Tether',code:''},
	])
	
	
	
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
	const [selected, setSelected] = useState(plan[0]);
    const [page, setPage] = useState(false);

    const { name, rate, icon,wallet,tag,code } = selected;
    const [details, setDetails] = useState([])

    
   const handleSelected = (data) => {
    setSelected(data)
    }
    const [figure, setFigure] = useState({
        money: 0,
        converted: 0
    })

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd"
	
	useEffect(() => {
		axios.get(url)
			.then((response) => {
				setPlan([
					{ id: 1, icon: btc, name: 'BTC', rate: (response.data.bitcoin.usd).toFixed(0), wallet: '14TEBnJrbwu8PuVNsuweVeqDBtxAWiUPZY', tag: 'Bitcoin', code: "" },
					{ id: 2, icon: eth, name: 'ETH', rate: (response.data.ethereum.usd).toFixed(0), wallet: '0xa73f224f97d9fda32df6b9fa2f03db19cbc88b0d', tag: 'Ethereum', code: '' },
					{ id: 3, icon: usdt, name: 'USDT', rate: (response.data.tether.usd).toFixed(0), wallet: '0xa73f224f97d9fda32df6b9fa2f03db19cbc88b0d', tag: 'Tether', code: '' },
				])
	
			})
	}, []) 
    useEffect(() => {
         setFigure({
            ...figure,
            converted: Number(figure.money/rate).toFixed(8)
        })
  
    },
        [name]
    )

	const handleChange = ({target   :{value,name}}) => {
        const val = Number(value.trim());
        const converted = (val / rate).toFixed(8);

        setFigure({
            [name]: val,
            converted
        })
        
    }

 
   
    
    const makePayment = useCallback((e) => {
        e.preventDefault()

        const transaction = {
            ...figure,
            name,icon,wallet,code,text:investmentplan.text, title:investmentplan.title, amount:investmentplan.amount
            
        }

        setDetails([...details, transaction])
        setPage(true)
    }, [figure, details]);
	if (pay) return (

		<>
			 
			<div className=' popup text-center p-3'>
				<Deposit
					paymentDetails={details}
						popup={page}
						setPopup={setPage}
						coinDetails={selected}
						planInfo={investmentplan}
					paymentInfo={figure}
					firstname={firstname}
					coin = {name}
					/>
					
				
				<div className='popup-inner'>
					<button className='close-btn' onClick={() => setPay(false)}> <FaTimes /></button>
					<h2 className='lead text-bold'>Select  your prefered Coin, Enter Amount. Then proceed to payment</h2>
					<br/>
				 
					<div className='text-center d-flex'>
						{plan.map((coin) => (
							<Cyptos
								key={coin.id}
								data={coin}
								onClick={handleSelected}
								selected={coin.id === selected.id}
							/>
						))}
					   
					</div>
					
			  <div class="modal-body">
						<h4 class="modal-title" id="myModalLabel">{ investmentplan.title}</h4>
						<p class="modal-desc text-dark">{ investmentplan.text}</p>
				
				  </div>
				 
						 <form action="" onSubmit={makePayment}  style={{display: 'block'} }>
				  <div class="form-group mb-3">
						<Input placeholder="$USD"  onChange={handleChange}  name="money" required/>
							<p className='small mt-2 text-success input-group-text '><img width ='20px'  src={ icon} />{name} {figure.converted} </p>
							
						</div>
	<br/>
						  <div class="form-group centered">
					  <button type="submit" class="btn btn-warning">Pay <span>{figure.converted} { name}</span></button>
						  </div>
				  </form>
					   
					   
				</div>
				</div>
			</>
	
			
			
	) 
	
	return (
	  <>

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
						 <button className=" btn btn-success p-3" to="#" onClick={handlePlatinum}>Choose plan</button>
										  

                     </div>
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
						 <button className=" btn btn-success p-3" to="#" onClick={handleDiamond}>Choose plan</button>
										  

                     </div>
                  </div>
					</div>
		
            </div>
			</div>
		</div>
	</div>
      </>
    
  )
}

export default Investmentplan