import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Input from './Input';
import chart from '../assets/chart.png'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Payment = ({ paymentInfo, setPopup, popup,coinDetails,planInfo }) => {
  const {converted,  money} = paymentInfo;
  const {icon, tag, wallet,name,code}  = coinDetails
  const { text, title } = planInfo
  
  const [message, setMessage] = useState("")
  
  const handleMessage = (e) => {
    e.preventDefault()
    setMessage('Copied to Clipboard !!')
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
                                  title="Copy to Clipboard"
                                  onClick={handleMessage}
                                >
                                  Copy
                                </button>
                              
                              </CopyToClipboard>
              </div>
              <div className=' text-warning col-md-3 p-2'>{ message }</div>
              
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

export default Payment