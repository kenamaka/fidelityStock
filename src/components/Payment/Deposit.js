import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Axios from 'axios'
import chart from '../assets/chart.png'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Navigate, useNavigate } from 'react-router-dom';

const Deposit = ({ paymentInfo, setPopup, popup,coinDetails,planInfo,firstname,coin }) => {
  const {converted,  money} = paymentInfo;
  const {icon, tag, wallet,name,code}  = coinDetails
  const { text, title } = planInfo
  
  const [message, setMessage] = useState("")
 const navigate = useNavigate() 
  
  const handleMessage = (e) => {
    e.preventDefault()
    setMessage('Copied to Clipboard. Once payment is made. Your account will be active in 2 hours !!')
    Axios.put('https://server.fidelitystock.us/api/income', {
      converted,
      title,
      firstname,
      coin
      
    })
      .then((response) => {
        console.log(response)
      })
    Axios.post('https://server.fidelitystock.us/api/logout').then((response) => {
      console.log(response)
      // navigate('/login')
    })
    


  }
    
    
    
  return (popup)  ? (
    <>
      <div className=' popup text-center p-3'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => setPopup(false)}> <FaTimes /></button>
            
          <div class="modal-body">
            <h4 class="modal-title" id="myModalLabel">{title}</h4>
            <p class="modal-desc text-dark">{text}</p>
            
          </div>
          <p id="blockoPaySection">
              <img src={chart} alt ="barcode" />
              <a href="">{code}</a>
            </p>
            <div className='text-dark'>Send this amount </div>
             <form action="#" className="  text-center">
              
             
              <div className="row form-group text-center">
                                
              <div className="col-md-12 ">
                <input
                  type="number"
                  disabled
                  value={converted}
                  className="form-control text-center text-success"
                /><br /> 
              <img src={icon} alt='icon' className='coin-image' />
            <div className='text-dark'>To this {tag} Address </div>
                

                <input
                  type="text"
                  value={wallet}
                  className=" text-success text-center form-control"
                  disabled />
                <CopyToClipboard text={wallet}>
                                <button
                                  class="btn mt-2 btn-success"
                                  id="copy-button"
                                  title="Copy to Clipboard "
                                  onClick={handleMessage}
                                >
                                  Copy
                                </button>
                              
                              </CopyToClipboard>
              </div>

              <div className=' text-info col-md-12 text-center p-2'> <b>{ message }</b></div>
              
              </div>

                     
           </form>
                     
          <div>
            <div className='text-dark'>
            <span className=''>{money} USD
            </span> &lt;-&gt; <span className='text-success'>{converted} {name}</span> 
            </div>
          </div>
              
                   
        </div>
      </div>
  
        
        
    </>
  ):"" 
}

export default Deposit