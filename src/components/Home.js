import { NavLink } from 'react-router-dom'

import image from './assets/image.png'
import  head from './assets/image2.webp'

import laptop from './assets/laptop.png'
import back from './assets/header.jpg'
import tools from './assets/svg/tools.svg'
import chart from './assets/svg/chart.svg'
import piechart from './assets/svg/pie-chart.svg'
import platform from './assets/svg/platforms.svg'
import mortar from './assets/svg/mortarboard.svg'
import credit from './assets/svg/credit-card.svg'

import handshake from './assets/svg/handshake.svg'
import bonus from './assets/svg/bonus.svg'
import spread from './assets/svg/spread.svg'
import winner from './assets/svg/winner.svg'

import support from './assets/support.png'
import community from './assets/community.png'


import { FaCheck } from 'react-icons/fa'
import Featured from './Featured'


const Home = ({plan}) => {



 
    return (
        <>
      
        <section className="site-hero"  >
          <div className='container'>
    
        <div className="row intro-text align-items-center justify-content-center">
            <div className="col-md-6  pt-5">

                <h1 className="site-heading text-dark site-animate">Welcome to <strong className="d-block">Fidelity <span className="text-success">Stock</span>.</strong></h1>
                <strong className="d-block text-dark text-uppercase letter-spacing" style={{ color: "whitesmoke", fontWeight: 600 }}>
                  <p className='text-dark'>Our team of experienced traders are happy to aid conduct all research and trading for all ours members with our winning business models to skyrocket earnings</p></strong>
          <br/>
          <div style={{ marginTop:15 }}>

          <button className='btn btn-success px-4 py-2 btn-sm smoothscroll'><NavLink className='btncolor' onClick={plan} to="register" class="  btn btn-primary px-4 py-2 btn-sm smoothscroll">Open a Free Account</NavLink></button>
                
          </div>
              </div>
              <div className="col-md-6 hidden">
                
                    <img src={head} alt="" width="600px"/>
                
            </div>
    
            </div>
            </div>
    
    </section>
         <Featured/>
      <section className="site-section" >
		<div className="container ">
			<div className="row mb-5 align-items-center">
			
				<div className="col-lg-5">
					<div className="section-heading">
						<h2><strong>You can trust us to help make your financial dream come true</strong></h2>
					</div>
					<p className="lead">We are your trustworthy financial partner. We're trusted by over 1,000 successful investors from across the world. We want you to be on that list.</p>

              </div>
              <div className="col-lg-7">
					<img src={laptop} alt="Image placeholder" className="img-fluid" />
				</div>
			</div>


		</div>
        </section>
        <section className="back" style={{ backgroundImage:`url(${back})` }}>
    <div className="container ">
        <div class=" row mb-5 align-items-center">
              <div class="col-lg-6 pr-lg-5 mb-5 mb-lg-0  ">
                
                
                
              </div>
              <div className="col-lg-6 pr-lg-5 mb-5 mb-lg-0">
                          
                <div>
                    <h1 className="text-2xl text-dark">Our Investment Principle</h1>
                    <p className="leading-5 mt-2 text-secondary font-thin">Our goal is to maximize investor's return 
                        and maximize any potential loss by applying some principles in a disciplined and pragmatic process.
                         We rely on facts, not speculations to purchase high return, predictable investments at significant discount
                          on intrinsic values.</p>
                
                </div>
                
                    <p classname=" leading-5 mt-2 text-secondary font-thin">The benefits of investing with us includes
                         the ability to gain exposure to different asset classes and market sectors.</p>
                <div className="mt-3 text-gray-100">
                        <ul className=" text-gray-100">
                            <li className='list-disc'>Diversification</li>
                            <li className='list-disc'>Potential wealth generation</li>
                            <li className='list-disc'>Cost-effective investment</li>
                            <li className='list-disc'>Access to a range of assets</li>
                            <li className='list-disc'>Geared exposure</li>
                            <li className='list-disc'>Well managed funds</li>
                            <li className='list-disc'>Money back guarantee</li>
                        </ul>
                </div>
                <div className="mt-10">
                        <button className="btn btn-info px-4 py-2 btn-sm smoothscroll"><NavLink to="/register" className='btncolor'>Register Today</NavLink> </button>
                    </div>
        </div>
    </div>
        </div>
        
        </section>
 
    
     
        <section className='site-section pb-0'>
          <div className='container'>
            <div className='row mb-4'>
              <div className='col-md-12'>
                <div className='section-heading text-center'>
                  <h2><strong><span className='text-success'> Our</span> Advantage</strong></h2>
                </div>
              </div>
            </div>
            
            <div className='row'>
              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={tools} alt ="" />
                </span>
                
                    <h3 className="mb-4">Trading Tools</h3>
                    <p className="lead">Plan your trades effectively with our wide range of free trading tools</p>
                 </div>
              </div>
              
          
              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={chart}  alt =""/>
                </span>
                
                    <h3 class="mb-4">Accounts</h3>
                  <p class="lead">
                    Complexity flexibility for investors of all risk properties and trading volumes</p>
                </div>

                </div>
                

                <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={piechart} alt ="" />
                </span>
                
                    <h3 className="mb-4">Investment Products</h3>
                  <p className="lead">
                    All the best opportunity to diversify your trading portfolio</p>
                </div>

              </div>
              

              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={platform} alt =""/>
                </span>
                  <h3 className="mb-4">Trading Platform</h3>
                  <p className="lead">
                    Powerful Platform to suit all trading styles and needs and any device
                  </p>
                </div>

              </div>

              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={mortar} alt ="" />
                </span>
                
                    <h3 className="mb-4">Educational</h3>
                  <p className="lead">
                    Our invaluable Educational resources provide the ultimate trading guide</p>
                </div>

              </div>

              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={credit} alt =""/>
                </span>
                
                    <h3 className="mb-4">Free Funding</h3>
                  <p className="lead">
                    Fund your account for free with these quick, easy and secure methods</p>
                </div>

              </div>

             

              
            </div>
          </div>
        </section>
        <section className='site-cont bg-black pb-0' style={{ marginBottom:20 }}>
          <div className='container'>
            <div className='row align-items-center justify-content-center mb-4'>
         
              <div className="col-lg-6">
                          
                <div>
                    <h1 className="text-2xl text-white">Our Investment Plans</h1>
                    <p className="leading-5 mt-2 text-secondary ">Our goal is to maximize investor's return 
                        and maximize any potential loss by applying some principles in a disciplined and pragmatic process.
                         We rely on facts, not speculations to purchase high return, predictable investments at significant discount
                          on intrinsic values.</p><br/><br/>
                          <NavLink to="#" onClick={plan} className="btn btn-success">Investment Plan</NavLink>
                
                </div>
                </div>
                <div className="col-md-6 hidden">
                
                <img src={image} alt="" width="600px"/>
            
        </div>

            </div>

          </div>
          <br/><br/><br/>
        </section>
        <section className='site-section add'>
          <div className='container'>
            <div className='row'>
        <div className="col-md-12 col-lg-3">
            
                <div className="flex justify-center h-40 py-5 mb-2 border-b ">
                  <img width="103px" src={winner }  alt="" />
                </div>
                
                    <h4 className="text-gray-600 font-bold"><b>Our Advantages</b></h4>
                    <ul className="list-unstyled ul-check primary">
                      <li><p><FaCheck className='addicon' size={20}/>Free Funding</p></li>
                      <li><p><FaCheck className='addicon' size={20}/>Muliple investment accounts</p></li>
                      <li><p><FaCheck className='addicon' size={20}/>Insurance for clients funds</p></li>
                    </ul>
                
            </div>
            <div className=" col-md-12 col-lg-3 ">
                <div className="flex justify-center h-40 py-5 mb-2 border-b ">
                    <img width="97px" src={spread}  alt = ""/>
                </div>
                
                    <h4 className="text-gray-600 font-bold"><b>Zero Spread Account</b></h4>
                    <ul className="list-unstyled ul-check primary">
                      <li><p><FaCheck className='addicon' size={20}/>Raw spread with 0 markups</p></li>
                      <li><p><FaCheck className='addicon' size={20}/>Low Commissions</p></li>
                      <li><p><FaCheck className='addicon' size={20}/>Low Cost Investment</p></li>
                    </ul>
          
            </div>
            <div className=" col-md-12 col-lg-3">
                <div className="flex justify-center h-40 py-5 mb-2 border-b ">
                    <img width="87px" src={bonus}  alt = ""/>
                </div>
                 <h4 className="text-gray-600 font-bold"><b>Bonus Offerings</b></h4>
                 <ul className="list-unstyled ul-check primary">
                      <li><p><FaCheck className='addicon' size={20}/>100% Supercharged Bonus</p></li>
                      <li><p><FaCheck className='addicon' size={20}/>100% Credit Bonus</p></li>
                      <li><p><FaCheck className='addicon' size={20}/>30% Rescue Bonus</p></li>
                    </ul>
                
              </div>
              
            <div class="col-md-6 col-lg-3">
                       <div className="flex justify-center py-5 h-40 mb-2 border-b">
                    <img width="140px" src={handshake}alt = "" />
                </div>
                <h4 className=""><b>Become an Affiliate</b></h4>
             <ul className="list-unstyled ul-check primary">
               <li><p><FaCheck className='addicon'size={20}/>Earn upto 15% per referral</p></li>
               <li><p><FaCheck className='addicon' size={20} />Auto Rebase System</p></li>
              <li><p><FaCheck className='addicon' size={20}/>Free Marketing Tools</p></li>
              </ul>
          </div>
           
        </div>
    </div>

        </section>
        <section className='site-section w-full bg-white py-14'>
          <div className='container'>
            <div className='row'>
            
    
        <div className="col-md-12 section-heading">
          <h2 className=" text-center mb-2 "> <strong>Help Center</strong></h2><div class="line  mx-auto"></div>
              </div>
              
        
              <div className='col-md-6 col-lg-6 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <NavLink to="/support"><img width="100px" alt = "" src={support} /></NavLink>
                </span>
                
                <h4 className=""><b>24/7 Support</b></h4>
                    <p className="lead">Need help? We're ready around the clock to solve your problem. Click below to reach out</p>
                 </div>
              </div>
              <div className='col-md-6 col-lg-6 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
              <NavLink to="/community"><img width="100px"  alt = "" src={community} /></NavLink>
                </span>
                
                <h4 className=""><b>Community</b></h4>
                    <p className="lead">Join the conversation in one of our global communities online and get instant help from customers.</p>
                 </div>
              </div>
        </div>
       </div>
      
        </section>
               
            
            </>            
  )
}

export default Home;