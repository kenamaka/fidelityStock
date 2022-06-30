import React from 'react'
import about from './assets/about2.jpg'
import aboutus from './assets/aboutus.jpg'
import bginvest from './assets/invest-bg.jpg'
import signup from './assets/svg/sign-up.svg'
import withdraw from './assets/svg/withdraw-1.svg'
import deposit from './assets/svg/deposit.svg'
import contact from './assets/contactpics.jpg'
import { useState } from 'react'
import Axios from 'axios'
import { FaHandHoldingUsd, FaLandmark, FaLock, FaUmbrella, FaUserLock } from 'react-icons/fa'



const About = () => {


    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message:"",
    })
  

    const handleData = ({ currentTarget: input }) => {
        setData ({...data, [input.name]:input.value})
    }
    
    const handleSubmit = (e) => {
       
        e.preventDefault()
        
        Axios.post('https://server.fidelitystock.us/api/contact', {
            firstname: data.firstName,
            lastname: data.lastName,
            email: data.email,
            subject: data.subject,
            message: data.message
        }).then((response) => { 
            console.log(response)
            setData({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message:"",
            })
           
                
        })
    
    }

    
  return (
    <>
      
      <div className="brand_area  " style={{ backgroundImage:`url(${about})` }}>
        <div className="container">
            <div class="row">
                <div className="col-xl-12">
                    <div className="bradcam_text text-center">
                        <h3>About Us</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
          <div className="counter_area bg-success">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3 > <span className="counter text-white" >100</span> <span className='text-white'>+</span> </h3>
                        <span className='text-white'>Tradable assets</span>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3> <span className="counter text-white" >24/7</span>  </h3>
                        <span className='text-white'>Trading</span>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3> <span className="counter text-white" >95</span> <span className='text-white'>%</span> </h3>
                        <span className='text-white'>Job Success</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className='site-section'>
                <div className='container'>
                <div className="row">
				<div className="section-heading text-center col-md-12">
                            <h2><strong><span className='text-success'>About</span> Fidelity Stock Trade</strong></h2>
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
        
<div className="about_area">
    <div className="container-fluid p-0">
        <div className="row no-gutters align-items-center">
            <div className="col-xl-6 col-lg-6">
                <div className="about_image">
                    <img src={aboutus} alt="" />
                </div>
            </div>
            <div className="col-xl-6 col-lg-6">
                <div className="about_info">
                    <h3>The Largest Trading Platform</h3>
                              <p>Fidelity Stock Trade is an award winning company fully functional with investment services ranging from cryptocurrency investments,
                                  stock investment and real estate investment.
                                  We provide acquisiion, development and finance expertise for both commercial and individual investors.
                                  Our experience in structuring complicated financial transactions while accommodating diverse partnership interest,
                                has allowed it to achieve a sustainable acquisitions in finance.</p>
               
                  
             </div>
                      
            </div>
        
        </div>
    </div>
</div>


        <div className="container">
            <div className="row">
            <div className='col-md-12'>
                <div className='section-heading text-center'>
                  <h2><strong><span className='text-primary'> What</span> We Provide</strong></h2>
                </div>
              </div>
                <div className="col-md-12">
                    <div className="maintext">
                     <p>Fidelity Stock offers various services tools to facilitate individuals and institutional customers to invest in
                                  cryptocurrency or any of the the listed services we offer. All Retail, Affiliates and White Label clients have the opportunity to access
                                  various spreads and liquidity via state of the art automated trading platforms. We provides an unparalleled variety of account options
                                  that clients can select to enjoy a tailored investment experience that perfectly suits their needs. Coupled with superior trading conditions and
                               lightning fast execution, Fidelity Stock provides all the tools and services needed for clients of any level to realise their investment ambitions.
                                  
                        </p>
                    </div>
                </div>
            </div>
          </div>
               
    

          <section class="invest-section" style={{ background:`url(${bginvest})` }}>
    <div className="overlay">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 text-center">
                    <div className="invest-text">
                        <h5 className="invest-title">Road Map...</h5>
                        <h2 className="invest-subtitle">Your Path Way to <span className='text-primary'>Success</span></h2>
                        <p class="invest-title-describe">It’s a simple way to start investing as you don’t have to stress yourself at all. Pick a plan that you can afford and invest at your convinient time.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 text-center reunir-content-center">
                    <div className="single-box location-left">
                        <div className="img-box">
                            <div className="font-side">
                                <img src={signup} alt="#"/>
                            </div>
                            <div className="back-side">
                                <img src={signup} alt="#"/>
                            </div>
                        </div>
                        <div className="text-box">
                            <a href="user/Registration/index.html">FIRST STEP<i className="ren-arrowright"></i></a>
                            <h3>SIGN UP</h3>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-4 col-sm-4 text-center reunir-content-center">
                    <div className="single-box">
                        <div className="img-box">
                            <div className="font-side">
                                <img src={deposit} alt="#"/>
                            </div>
                            <div className="back-side">
                                <img src={deposit} alt="#"/>
                            </div>
                        </div>
                        <div className="text-box">
                            <a href="user/payment/index.html">SECOND STEP<i className="ren-arrowright"></i></a>
                            <h3>Make A Deposit</h3>
                        </div>
                    </div>
                </div>



                <div className="col-lg-4 col-md-4 col-sm-4 text-center reunir-content-center">
                    <div className="single-box location-right">
                        <div className="img-box">
                            <div className="font-side">
                                <img src={withdraw} alt="#"/>
                            </div>
                            <div className="back-side">
                                <img src={withdraw} alt="#"/>
                            </div>
                        </div>
                        <div className="text-box">
                            <a href="user/payment/index.html">THIRD STEP<i className="ren-arrowright"></i></a>
                            <h3>Trade Softly</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          </section>
          
 <section id="contact">
    <div id='contact-us' className='parallax' style={{ backgroundImage: `url(${contact})` }}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 pt-5 text-center">
            <h2 className="text-white h1 site-section-heading">Get in Touch</h2>
          </div>
                      </div>
        <div className='contact-form wow fadein'>
        <div className="row  ">
                          
        <div className="col-sm-6">
           <form action="#" id=" main-constact-form p-5  text-left"  onSubmit={handleSubmit}>
                  <h2 className="h4 text-light mb-5">Send us a Message</h2>
                                      
          <div class="row  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                 <div className="col-sm-6">
                        <div class="form-group">
                            <input type="text" id="lname" name='firstName' className="form-control form-trans" placeholder="Your firstname" value={data.firstName } onChange={handleData } required/>
                        </div>
                    </div>
                        <div className="col-md-6 mb-3 mb-md-0">
                    <div class="form-group">
                      <input type="text" id="lname" name='lastName' className="form-control form-trans" placeholder="Your lastname" value={data.lastName } onChange={ handleData } required/>
                    </div>
                    </div>
            </div>
             <div className=' form-group'>
                
                <input type="email" id="email" name='email' className="form-control form-trans" placeholder="Your email address" value={data.email } onChange={ handleData} required/>
            
            </div>                  
              <div className=" form-group">
            
                <input type="text" id="subject" name='subject' className="form-control form-trans" placeholder="Your subject of this message" value={data.subject } onChange={ handleData } required/>
                </div>
            <div className=" form-group">
            

                  <textarea name="message" id="message" cols="30" rows="10" className="form-control form-trans" placeholder="Say something about us" value={data.message } onChange={handleData } required/>
                </div>
              
              
            <div className=" form-group">
                
                  <input type="submit" value="Submit" className="btn btn-success  btn-md text-white" />
                </div>
              
        </form>
              </div>
             <div className="col-sm-6">
          <div className="contact-info" data-wow-duration="1000ms" data-wow-delay="300ms">
                                      <p className='text-light' style={{ fontSize:18 }}>As a top investment organisation, experienced in combining development and trade.
                                          We are committed to pushing the boundaries of what constitutes the highest standards in Forex and Binary options trade.
                                          We put people before profit and are 100% committed to improving the lives of those we work with.</p>
            <ul class="address">
              <li><i class="fa fa-map-marker"></i> <span> Address:</span> 2400 South Avenue A </li>
              <li><i class="fa fa-phone"></i> <span> Phone:</span> +928 336 2000  </li>
              <li><i class="fa fa-envelope"></i> <span> Email:</span><a href="mailto:someone@yoursite.com"> support@fidelitystock.com</a></li>
              <li><i class="fa fa-globe"></i> <span> Website:</span> <a href="#">www.fidelity.us</a></li>
            </ul>
          </div>                            
        </div>
          
                          </div>
                          
                          </div>
                      </div>
      </div>
        </section>
    
    </>
  )
}

export default About