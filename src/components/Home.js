import { NavLink } from 'react-router-dom'

import image from './assets/image.png'
import  head from './assets/image2.webp'

import laptop from './assets/laptop.png'
import back from './assets/back.jpg'
import background from './assets/back2.jpg'


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
import affiliate from './assets/referal.png'
 

import { FaCheck } from 'react-icons/fa'
import Featured from './Featured'
import { AnimationOnScroll } from 'react-animation-on-scroll'


const Home = ({plan,register}) => {



 
    return (
        <>
             <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOut' duration={2}>
        <section className="site-hero pt-2"  style={{ backgroundImage: `url(${background})` }} >
          <div className='container'>

                        
              
    
        <div className="row align-items-center justify-content-center">
            <div className="col-md-12 col-lg-6 headcenter pt-5">

                <h1 className=" text-light site-animate">Welcome to <strong className="d-block">Fidelity <span className="text-success">Stock</span>.</strong></h1>
                <strong className="d-block text-light text-uppercase letter-spacing" style={{ color: "whitesmoke", fontWeight: 600 }}>
                  <p className='text-light' >Our team of experienced traders are happy to aid conduct all research and trading for all ours members with our winning business models to skyrocket earnings</p></strong>
          <br/>
          <div style={{ marginTop:15 }}>

          <button className='btn btn-success col-md-12 col-lg-6 py-3 px-2 text-center  smoothscroll'><NavLink className='text-light headertext' onClick={register} to="#" >Open a Free Account</NavLink></button>
                
          </div>
              </div>
              <div className="col-md-12 col-lg-6 hidden">
                
                    <img src={head} alt="" width="700px"/>
                
            </div>
              
            
              
        
              </div>
            </div>
    
        </section>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate__fadeOut' duration={2}>
          <Featured />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__flipInX' duration={2} animateOut='animate_fadeOut'>
      <section className="site-section" >
		<div className="container ">
			<div className="row mb-5 align-items-center">
			
				<div className="col-lg-5">
					<div className="section-heading">
						<h2><strong>You can trust us to help make your financial dream come true</strong></h2>
                  </div>
    <AnimationOnScroll animateIn='animate__bounceIn' duration={3} >
                  
					<p className="lead">We are your trustworthy financial partner. We're trusted by over 1,000 successful investors from across the world. We want you to be on that list.</p>
          </AnimationOnScroll>
              </div>
              <div className="col-lg-7">
					<img src={laptop} alt="Image placeholder" className="img-fluid" />
				</div>
			</div>


		</div>
          </section>
        </AnimationOnScroll>
    <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt'>
        <section className="back" style={{ backgroundImage:`url(${back})` }}>
    <div className="container ">
        <div class=" row mb-5 align-items-center">
        <div className="col-lg-6">
             </div> 
             
             
              <div className="col-lg-6">
                          
                <div>
                    <h1 className=" text-light">Our Investment Principle</h1>
                    <p className=" mt-2 text-light">Our goal is to maximize investor's return 
                        and maximize any potential loss by applying some principles in a disciplined and pragmatic process.
                         We rely on facts, not speculations to purchase high return, predictable investments at significant discount
                          on intrinsic values.</p>
                
                </div>
                
                    <p classname=" mt-2 text-light">The benefits of investing with us includes
                         the ability to gain exposure to different asset classes and market sectors.</p>
                <div className="mt-3 text-light">
                        <ul className=" text-light">
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
                        <button className="btn btn-info px-4 py-2 btn-sm smoothscroll"><NavLink to="#" className='btncolor' onClick={register}>Register Today</NavLink> </button>
                    </div>
        </div>
    </div>
        </div>
        
          </section>
          </AnimationOnScroll>
 
    
        <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={2}>
    
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
        <AnimationOnScroll animateIn='animate__flipInY' animateOut='animate_fadeOUt' duration={2}>

                      <p className="lead">Plan your trades effectively with our wide range of free trading tools</p>
             </AnimationOnScroll> 
                      
                 </div>
              </div>
          
              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={chart}  alt =""/>
                </span>
                
                    <h3 class="mb-4">Accounts</h3>
        <AnimationOnScroll animateIn='animate__flipInY' animateOut='animate_fadeOUt' duration={2}>

                    <p class="lead">
                      
                    Complexity flexibility for investors of all risk properties and trading volumes</p>
                 </AnimationOnScroll>  
                </div>

                  </div>
                

                <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={piechart} alt ="" />
                </span>
                
                    <h3 className="mb-4">Investment Products</h3>
        <AnimationOnScroll animateIn='animate__flipInY' animateOut='animate_fadeOUt' duration={2}>

                  <p className="lead">
                        All the best opportunity to diversify your trading portfolio</p>
                      </AnimationOnScroll>
                </div>

                  </div>
              

              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={platform} alt =""/>
                </span>
                    <h3 className="mb-4">Trading Platform</h3>
        <AnimationOnScroll animateIn='animate__flipInY' animateOut='animate_fadeOUt' duration={2}>
                    
                  <p className="lead">
                    Powerful Platform to suit all trading styles and needs and any device
                      </p>
                      </AnimationOnScroll>
                </div>

                  </div>

              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={mortar} alt ="" />
                </span>
                
                    <h3 className="mb-4">Educational</h3>
        <AnimationOnScroll animateIn='animate__flipInY' animateOut='animate_fadeOUt' duration={2}>

                  <p className="lead">
                        Our invaluable Educational resources provide the ultimate trading guide</p>
                      </AnimationOnScroll>
                </div>

                  </div>

              <div className='col-md-6 col-lg-4 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <img width="100px" src={credit} alt =""/>
                </span>
                
                    <h3 className="mb-4">Free Funding</h3>
        <AnimationOnScroll animateIn='animate__flipInY' animateOut='animate_fadeOUt' duration={2}>

                  <p className="lead">
                        Fund your account for free with these quick, easy and secure methods</p>
                      </AnimationOnScroll>
                </div>

                  </div>
                  

             

              
            </div>
          </div>
          </section>
    </AnimationOnScroll> 
        <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={2}>
          
        <section className='site-section bg-black pb-0' style={{ marginBottom:20 }}>
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
    </AnimationOnScroll> 
        <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={2}>
          
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
    </AnimationOnScroll>
          
    <AnimationOnScroll animateIn='animate__flipInX' animateOut='animate_fadeOUt' duration={2}>

        <section className='site-section  bg-success' style={{ marginBottom:20 }}>
          <div className='container'>
            <div className='row align-items-center justify-content-center mb-4'>
                    
        <div class="section_tittle text-center col-md-12">
			<h2 className='bold text-dark'>Affiliate Program</h2>
			<p class="d-none d-lg-block text-white">
              The affiliate program consists of 5 levels which means you'll be able to get higher affiliate
              commission for referring more sales.<br/>
                The referral commissions with 5 levels of 
                <b className='bold'> 8% -7% -4% -2% -1%</b> are applied to all plans.</p>
		</div>
			<div class="row align-items-center justify-content-between">
				<div class="col-md-12 col-lg-6 d-lg-block">
					<div class="learning_img">
						<img src={affiliate} className='affimg'/>
					</div>
				</div>
				<div class="col-md-12 col-lg-6">
					<div class="about_us_text">
						<p></p>
						<ul class="fa-ul lead">
							<h4 className='text-white'>
								Our affiliate program includes many benefits</h4>
							<li class="text-dark "><span className='fa-li' >
              <FaCheck/>
									
								</span>
								 You don`t even need to have your own deposit to enjoy benefits of affiliate program.</li>
							<li class="text-dark "><span className='fa-li' >
              <FaCheck/> 
									
								</span>
								You will be credited <b>
									1% - 7%</b>
								from each your referral purchased plan.</li>
								<li class=" text-dark "><span  className='fa-li'>
                <FaCheck/> 
								</span>
								We pay out the affiliate reward instantly in there choice currency. Commission is credited to the account balance.</li>
							<li class=" text-dark"><span className='fa-li'>
									<FaCheck/>
								</span>
								With unlimited referrals your earning potential is endless</li>
						</ul>
						<p></p>
					</div>
				</div>
			</div>
              </div>
            </div>
	</section>
        </AnimationOnScroll>
    <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={2}>
        
    
        <section className='site-section w-full bg-white py-14'>
          <div className='container'>
            <div className='row'>
            
    
        <div className="col-md-12 section-heading">
          <h2 className=" text-center mb-2 "> <strong>Help Center</strong></h2><div class="line  mx-auto"></div>
              </div>
              
        
              <div className='col-md-6 col-lg-6 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
                    <NavLink to="#"><img width="100px" alt = "" src={support} /></NavLink>
                </span>
                
                <h4 className=""><b>24/7 Support</b></h4>
                    <p className="lead">Need help? We're ready around the clock to solve your problem. Click below to reach out</p>
                 </div>
              </div>
              <div className='col-md-6 col-lg-6 text-center mb-5'>
                <div className='site-service-item site-animate'>
              <span className='icon'>
              <NavLink to="#"><img width="100px"  alt = "" src={community} /></NavLink>
                </span>
                
                <h4 className=""><b>Community</b></h4>
                    <p className="lead">Join the conversation in one of our global communities online and get instant help from customers.</p>
                 </div>
              </div>
        </div>
       </div>
      
          </section>
    </AnimationOnScroll>
          
               
            
            </>            
  )
}

export default Home;