import  Axios  from 'axios'
import React, { useEffect } from 'react'
import {Oval} from 'react-loader-spinner'
import { useLocation, useNavigate } from 'react-router-dom'
import background from '../assets/referal_bg.jpg'


const Referal = () => {
    const location = useLocation()
    const user_id = location.pathname.split("/")[2]
    const navigate = useNavigate()

    console.log(user_id)

    useEffect(() => {
        Axios.post(`https://server.fidelitystock.us/api/refer/donewith/${user_id}`).then((response) => {
            
            console.log(response)
          navigate('/')
        })
      },[]
    )
  return (
      <>
           
          
          
          
          <section className="referal" style={{ backgroundImage: `url(${background})` }} >
          <div className='container'>

                        
              
    
        <div className="row align-items-center justify-content-center">
            <div className="">
                          <Oval
                                     
                                     height="80"
                                     width="100"
                                     color="#fd8f35"
                              ariaLabel='loading'
                              secondaryColor='#fdab68'
                              strokeWidth={2}
                              strokeWidthSecondary={2}
                          />
                          

                  </div>
                  </div>
                  </div>
                  </section>
      </>
  )
}

export default Referal