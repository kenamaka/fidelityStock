import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaMoneyCheck, FaTimes } from 'react-icons/fa';

const Payment = ({ setPopup, details }) => {
  const [balance, setBalance] = useState(0)
  const [wallet, setWallet] = useState("")
  const [message, setMessage] = useState("")
  const [withdraw, setWithdraw] = useState(0)
  const [totalpaid, setTotalpaid] = useState(0)
  const [latestbalance, setLatestbalance] = useState(0)
  const [latestpaid,setLatestpaid] = useState(0)
  
  console.log(details)


  const handlePayment = (e) => {
    e.preventDefault()
    setMessage('Wallet Address Copied to Clipboard. You can proceed to Payment !!')

  }


  useEffect(() => {
    const res = axios.get(`https://server.fidelitystock.us/api/payment/${details}`).then((response) => {
      
        setBalance(response.data[0].balance)
        setWallet(response.data[0].wallet_address)
        setWithdraw(response.data[0].withdrawal_request)
      setTotalpaid(response.data[0].total_paid)
      console.log(response)
    })
  },[]
  )
  

  
  
  return (
    <>
      
      <div className=' popup text-center p-3'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => setPopup(false)}> <FaTimes /></button>
            
          <div class="modal-body">
            <h4 class="modal-title" id="myModalLabel">Pay the Requested Amount using this details</h4>
            <p class="modal-desc text-dark"></p>
            
          </div>
          <p id="blockoPaySection">
          </p>
          <div className='text-dark'>Send this amount </div>
          <form action="#" className="  text-center" onSubmit={handlePayment}>
              
             
            <div className="row form-group text-center">
                                
              <div className="col-md-12 ">
                <input
                  type="number"
                               
                  className="form-control text-center text-info" value={(withdraw).toFixed(8)} disabled
                /><br />
                <div className='text-dark'>To this Address </div>
                

                <input
                  type="text"
                  className=" text-info text-center form-control" value={wallet} disabled
                />
                <CopyToClipboard text={wallet}>
                <button
                  class="btn mt-2 btn-success"
                  id="copy-button"
                    title="Copy to Clipboard "
                                  
                >
                 <FaMoneyCheck/> Make Payment
                  </button>
                  </CopyToClipboard>
                              
                             
              </div>

              <div className=' text-success col-md-12 text-center p-2'>{message }</div>
              
            </div>

                     
          </form>
                     
          <div>
            <div className='text-dark d-block text-center '>
              <span className=''>Balance
              </span> &lt;-&gt; <span className='text-info'>{balance}</span> <br/>
              <span className=''>Total Fund Paid
              </span> &lt;-&gt; <span className='text-info '>{(totalpaid).toFixed(8)}</span>
            </div>
          </div>
              
                   
        </div>
      </div>
  
        
        
    </>
  )

  }

export default Payment