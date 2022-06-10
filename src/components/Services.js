
import background from './assets/advantage-bg.jpg'
import choose from './assets/choose-bg.jpg'

import daily from './assets/svg/daily-income.svg'
import withdraw from './assets/svg/withdraw1.svg'
import customer from './assets/svg/customer-service.svg'
import invest from './assets/svg/invest-fild.svg'
import security from './assets/svg/security.svg'

import { FaTeam, FaCpanel, FaProfit  } from 'react-icons/fa'



const Services = () => {

    
  return (
    <>
   
      <section className='choose-section' style={{ background:`url(${choose})` }} >

      <div class="overlay">
        <div class="container-fruit text-center">

      <div class="row mr-0 ml-0 d-flex justify-content-center">
                <div class="col-xl-8 col-lg-12">
                    <div class="choose-text">
                        <h5 class="choose-title">Boost Your Ivestment</h5>
                        <h2 class="choose-subtitle">With Fidelity Stock...</h2>
                        <p class="choose-title-describe">Our service gives you better result of bitcoin mining and hashing, as per your requirement and you can mine your bitcoin from anywhere either from homes, work place or coffee shop at any time.</p>
                    </div>
                </div>
        </div>
        
        <div class="choose-section-carousel">

<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={daily} alt="#" />
        </div>
        <div class="text-box">
            <h2 class="single-item-title">Daily Income</h2>
          
        </div>
    </div>
</div>
<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={withdraw} alt="#" />
        </div>
        <div class="text-box">
            <h2 class="single-item-title">FASTEST PAYMENTS</h2>
           
        </div>
    </div>
</div>
<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={invest} alt="#" />
        </div>
        <div class="text-box">
            <h2 class="single-item-title">Easy to Use</h2>
        
        </div>
    </div>
</div>
<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={security} alt="#" /> 
        </div>
        <div class="text-box">
            <h2 class="single-item-title">HIGH SECURITY</h2>
           
        </div>
    </div>
</div>
<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={customer} alt="#" />
        </div>
        <div class="text-box">
            <h2 class="single-item-title">24/7 Support</h2>
          
        </div>
    </div>
</div>

<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={daily} alt="#" />
        </div>
        <div class="text-box">
            <h2 class="single-item-title">Daily Income</h2>
         
        </div>
    </div>
</div>
<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={withdraw} alt="#" />
        </div>
        <div class="text-box">
            <h2 class="single-item-title">FASTEST PAYMENTS</h2>
        
        </div>
    </div>
</div>
<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={invest} alt="#" />
        </div>
        <div class="text-box">
            <h2 class="single-item-title">Easy to Use</h2>
      
        </div>
    </div>
</div>
<div class="col">
    <div class="single-item">
        <div class="icon-box">
            <img src={security} alt="#"/>
        </div>
        <div class="text-box">
            <h2 class="single-item-title">HIGH SECURITY</h2>
         
        </div>
    </div>
          </div>
            </div>
          </div>
          </div>
       </section>


       <section class="advantage-section" style={{ background:`url(${background})` }}>
    <div class="overlay">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="advantage-text">
                        <h5 class="advantage-title">Our Biggest</h5>
                        <h2 class="advantage-subtitle">Advantage</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 text-center">
                    <div class="single-box">
                        <div class="icon-box">
                            <i class="ren-team"></i>
                        </div>
                        <div class="text-box">
                            <h2>PROFESSIONAL TEAM</h2>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 text-center">
                    <div class="single-box">
                        <div class="icon-box">
                            <i class="ren-profitable-plan"></i>
                        </div>
                        <div class="text-box">
                            <h2>PROFITABLE PLANS</h2>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 text-center">
                    <div class="single-box">
                        <div class="icon-box">
                            <i class="ren-control-panel"></i>
                        </div>
                        <div class="text-box">
                            <h2>Secured Control Panel</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
          </section>


          <section class="investment-section" id="investment-section">
    <div class="overlay">
        <div class="container text-center">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-4 text-center">
                    <div class="investment-text">
                        <h5 class="investment-title">INVESTMENT OFFER</h5>
                        <h2 class="investment-subtitle">Our Bitcoin Plans</h2>
                        <p class="investment-title-describe">DIAMONDBTCMINER provides a straightforward and transparent mechanism to attract investments and make more profits on a daily basis.</p> <p class="investment-title-describe"> Check out our Mining Plans below and choose the best option for yourself. Once your payment is confirmed, you’ll start mining immediately. You can start with Basic plan if you want and upgrade later.
                        </p>
                    </div>
                </div>
                      </div>
                  </div>
              </div>
        </section>

 
    </>
  )
}

export default Services