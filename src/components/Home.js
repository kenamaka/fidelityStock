
import background from './assets/header3.jpg'
import { NavLink } from 'react-router-dom'



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


import { FaLandmark, FaUserLock, FaHandHoldingUsd, FaUmbrella, FaCheck } from 'react-icons/fa'


const Home = ({plan}) => {



 
    return (
        <>
      
    <section className="site-hero" style={{ backgroundImage: `url(${background})`  }} >
    <div className="container">
        <div className="row intro-text align-items-center justify-content-center">
            <div className="col-md-10 text-center pt-5">

                <h1 className="site-heading site-animate">Welcome to <strong className="d-block">Fidelity <span className="text-default">Stock</span>.</strong></h1>
          <strong className="d-block text-white text-uppercase letter-spacing" style={{ color:"whitesmoke", fontWeight: 600 }}><p>Our team of experienced traders are happy to aid you conduct all research and trading for all ours members with our winning business models to skyrocket earnings</p></strong>
          <br/>
          <div style={{ marginTop:15 }}>

          <button className='btn btn-primary px-4 py-2 btn-sm smoothscroll'><NavLink className='btncolor' onClick={plan} to="register" class="  btn btn-primary px-4 py-2 btn-sm smoothscroll">Open a Free Account</NavLink></button>
                
          </div>
        </div>
    
        </div>
    </div>
    </section>
            <section className='site-section'>
                <div className='container'>
                <div className="row">
				<div className="section-heading text-center col-md-12">
                            <h2><strong><span className='text-default'>About</span> Fidelity Stock Trade</strong></h2>
                            <p className="lead">An epicenter traditional financial institution is not. We set out to give investors better,<br/> simpler and more profitable ways to become financially <br/>successful and secure. </p>				</div>
                    </div>
                    <div className="row">

<div className="col-md-12 mb-md-5 mb-0 col-lg-4 ">
    <div className='head'>
      <h1><strong>We have been known to give investors the better choice.</strong></h1>
     
    </div>
  </div>
<div className="col-md-12 mb-md-5 mb-0 col-lg-8 ">
  
    <div>
          <p className="lead">With over 153,000 investments under our management, $5 billion+ in assets under our administration, over 11 industry awards, we have made Global Crypto Expert the safe haven for investors who want to trust
                    their financial partner to be capable of helping them reach their financial goals, and in due time, without the fear of disappointments.</p>
           <p className="lead">Our investors are confident in our ability to make a promise and fulfill that promise. We go beyond our promise to put smiles on the faces of our clients. We have investors from all over the world, who have been with us for over seven years now and counting.</p>
    </div>
    </div>
</div>
          </div> 
          <div className="container">
            <div className="row services">
              <div className='col-md-12 col-lg-3 along'>
                <div className='icons' style={{ backgroundColor:' #007bff' }}>
                  <FaLandmark className='ico' />
                </div>
                <div className='servicetext'>
                  <h5>We Trade<br />Forex</h5>
                  </div>

              </div>
              <div className='col-md-12 col-lg-3 along'>
                <div className='icons' style={{ backgroundColor:'#dc3545' }}>
                  <FaUserLock className='ico' />
                </div>
                <div className='servicetext'>
                  <h5>Cryptocurrency<br />investment</h5>
                  </div>

              </div>
              <div className='col-md-12 col-lg-3 along'>
                <div className='icons' style={{ backgroundColor:'#28a745' }}>
                  <FaHandHoldingUsd className='ico' />
                </div>
                <div className='servicetext'>
                  <h5>We Trade on<br />Stock</h5>
                  </div>

              </div>
              <div className='col-md-12 col-lg-3 along'>
                <div className='icons' style={{ backgroundColor:'#6c757d' }}>
                  <FaUmbrella className='ico' />
                </div>
                <div className='servicetext'>
                  <h5>Gold<br />investment</h5>
                  </div>

              </div>



              </div>
            </div>          
        </section>
      <section className="site-section" >
		<div className="container ">
			<div className="row mb-5 align-items-center">
			
				<div className="col-lg-5 pl-lg-5">
					<div className="section-heading">
						<h2><strong>You can trust us to help make your financial dream come true</strong></h2>
					</div>
					<p className="lead">We are your trustworthy financial partner. We're trusted by over 1,000 successful investors from across the world. We want you to be on that list.</p>

              </div>
              <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
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
                  <h2><strong><span className='text-default'> Our</span> Services</strong></h2>
                </div>
              </div>
            </div>
            
            <div className='row'>
              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={tools} />
                </span>
                
                    <h3 className="mb-4">Trading Tools</h3>
                    <p className="lead">Plan your trades effectively with our wide range of free trading tools</p>
                 </div>
              </div>
              
          
              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={chart} />
                </span>
                
                    <h3 class="mb-4">Accounts</h3>
                  <p class="lead">
                    Complexity flexibility for investors of all risk properties and trading volumes</p>
                </div>

                </div>
                

                <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={piechart} />
                </span>
                
                    <h3 className="mb-4">Investment Products</h3>
                  <p className="lead">
                    All the best opportunity to diversify your trading portfolio</p>
                </div>

              </div>
              

              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={platform} />
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
                    <img width="100px" src={mortar} />
                </span>
                
                    <h3 className="mb-4">Educational</h3>
                  <p className="lead">
                    Our invaluable Educational resources provide the ultimate trading guide</p>
                </div>

              </div>

              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={credit} />
                </span>
                
                    <h3 className="mb-4">Free Funding</h3>
                  <p className="lead">
                    Fund your account for free with these quick, easy and secure methods</p>
                </div>

              </div>

             

              
            </div>
          </div>
        </section>
        <section className='site-section bg-black pb-0' style={{ marginBottom:20 }}>
          <div className='container'>
            <div className='row mb-4'>
            <div class="col-lg-6 pr-lg-5 mb-5 mb-lg-0  ">
                  
                <div className="mb-3">
                    <h3 className="text-4xl font-semibold text-white"><span className='text-default'>Profit Calculation</span> of your investment</h3>
                </div>
                <div>
                  <div className="table ">
                    <tr>
                      <th><h5> Choice Sectors </h5></th>
                    </tr>
                    <tr>
                      <td><b><h6>Investment</h6></b></td>
                    </tr>
                  </div>
                  <div className="table ">
                    <tr>
                      <td><h5 className='btncolor'>Estimated Amount</h5>  </td>
                    </tr>
                    <tr >
                      <td colspan="2"><div className=" col-lg-12 flex items-center rounded-md border border-red-300 bg-gray-100 px-2">
                        <p className="font-bold text-gray-500">USD</p>
                        </div></td>
                    </tr>
                </div>
                                 
                </div>
              </div>
              <div className="col-lg-6 pr-lg-5 mb-5 mb-lg-0">
                          
                <div>
                    <h1 className="text-2xl text-white">Our Investment Plans</h1>
                    <p className="leading-5 mt-2 text-secondary ">Our goal is to maximize investor's return 
                        and maximize any potential loss by applying some principles in a disciplined and pragmatic process.
                         We rely on facts, not speculations to purchase high return, predictable investments at significant discount
                          on intrinsic values.</p>
                
                </div>
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
                    <img width="97px" src={spread} />
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
                    <img width="87px" src={bonus} />
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
                    <img width="140px" src={handshake} />
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
                    <NavLink to="/support"><img width="100px" src={support} /></NavLink>
                </span>
                
                <h4 className=""><b>24/7 Support</b></h4>
                    <p className="lead">Need help? We're ready around the clock to solve your problem. Click below to reach out</p>
                 </div>
              </div>
              <div className='col-md-6 col-lg-6 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
              <NavLink to="/community"><img width="100px" src={community} /></NavLink>
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