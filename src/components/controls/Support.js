import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'


const Support = ({setSupport}) => {

const [message,setMessage] = useState('')


    
  return (
      <>
                <div className=' popup text-center'>
                    <div className=' popup text-center p-3 '>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => { setSupport(false) }}> <FaTimes /></button>
            
          <div class="modal-body" >
            <h5 class="modal-title" id="myModalLabel">Our Technical Support Team (TST) is always available 24/7 to guide and respond to your questions.</h5>
          </div>
          <p id="blockoPaySection">
          </p>
          <div className='text-dark text-left'>Email </div>
                      <form action="#" className="  text-left" onSubmit={() => { setSupport(false) }}>
              
             
            <div className="row form-group text-left">
                                
              <div className="col-md-12 ">
                <input
                  type="email"
                className="form-control  text-left text-info"
                required                            
                /><br />
                <div className='text-dark'>Subject </div>
                

                <input
                  type="text"
                  className=" text-info text-left form-control"
                  required
                                  />
                <div className='text-dark'>Message </div>
                
                <textarea name="message" id="message" cols="30" rows="10" className="form-control " placeholder="Message"  required/>
    
        
                                  
                <input
                  className="btn mt-2 btn-success"
                   type="submit"                         
              value='Submit'                    
                />
                
                  {/* {message}             */}
                             
              </div>

            <div className=' text-primary col-md-12 text-center p-2'>{message }</div>
              
            </div>

                     
          </form>
                     
          <div>
            <div className='text-dark'>
            </div>
          </div>
              
                   
        </div>
      </div>
                </div>
                
      
      </>
  )
}

export default Support