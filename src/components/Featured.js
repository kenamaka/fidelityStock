import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiArrowUpRight,FiArrowDown } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Featured = () => {

    const [data, setData] = useState(null)
    
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])

    if (!data) {
    return null
}

  return (
      <>
           
            <section className='site-section'>
                <div className='container'>
                <div className="row">
				<div className="section-heading text-center col-md-12">
                    <h2><strong><span className='text-success'>Trending</span>. </strong></h2>
                          <h5 >Most Popular Cryptocurrencies. </h5>
                      </div>
                    </div>
                ,</div>    
       <div className="container">
            <div className="row">

            <div className='col-md-5'>
                      <div className="section-heading">
                    <h2><strong><span className='text-success'>Join the community of endless possibilities</span>. </strong></h2>
                              <p className="lead">
                                  We Can Help You Become A Consistently Profitable
                                  Trader. Or if you are just starting out on your journey? We can help you become an expert. You are just a step away. 
                                  Signup and start earning.  </p><br/><br/>
                <NavLink to="/register" className="btn btn-success">Get Started</NavLink>
                              
                      </div>
                          
                      </div>
                      <div className='col-md-7 right'>
                          {data.map((list,key) => {
                              return (
                                  <div className='api' key={list.id}>
                                      <div className='top'>
                                          <img src={list.image} />
                                      </div>
                                      <div>
                                          <h5>{list.name}</h5>
                                          <p>${ list.current_price.toLocaleString()}</p>
                                      </div>
                                      {list.price_change_percentage_24h < 0 ? (
                                          <span className='text-danger'>
                                              <FiArrowDown />
                                              {list.price_change_percentage_24h.toFixed(2)}%
                                          </span>
                                      ) :
                                          (
                            
                                                <span className='text-success'>
                                                    <FiArrowUpRight />
                                                    {list.price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                    )
                                    }

                                      </div>
                              )
                          })}
                          
                
                      </div>
                    
            



              </div>
            </div>          
        </section>
      </>
  )
}

export default Featured