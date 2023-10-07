import axios from 'axios'
import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { FaPlus, FaSortAlphaDownAlt, FaTimes } from 'react-icons/fa'
import {  Circles } from 'react-loader-spinner'

const Mining = ({ setPopup, details }) => {
    const [balance, setBalance] = useState(0)
    const [amount, setAmount] = useState(0)
    const [click, setClick] = useState(0)
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [plan, setPlan] = useState("")
    const [coin, setCoin] = useState("")
  const [date, setDate] = useState("")
  const [referalcount, setReferalCount] = useState(0)

  console.log(referalcount)

  

    let tradAmount = amount;
    let income = 0;
let percentage = ""   
    console.log(plan)

    if (plan === 'Classic') {
    
        tradAmount = tradAmount / 100 * 10
      income = parseFloat(tradAmount).toFixed(10)
       percentage = "The Classic plan users earns 10% of Deposited Amount Weekly"
    }
    else if (plan === 'Platinum') {
        tradAmount = tradAmount / 100 * 14
      income = parseFloat(tradAmount).toFixed(10)
      percentage ="The Platinum plan earns benefits 14% of Deposited Amount Weekly"
      
    }
    else if (plan === 'Gold') {
        tradAmount = tradAmount / 100 * 16
      income = parseFloat(tradAmount).toFixed(10)
      percentage ="The Gold plan earns benefits 16% of Deposited Amount Weekly"
      
    }
    else  if (plan === "Diamond"){
        tradAmount = tradAmount / 100 * 18
      income = parseFloat(tradAmount).toFixed(10)
      percentage = "The Diamond plan users earns 18% of Deposited Amount Weekly."
      
    }
 

    
    const handleMine = (e) => {
      e.preventDefault()
      Axios.put('https://server.fidelitystock.us/api/mine', {
        balance,
        amount,
        email
        
      })
        .then((response) => {
          setMessage(response.data.message)
        })
    
      }
  const handleIncrease = (e) => {
    e.preventDefault()
    setBalance(balance + parseFloat(income))
    setClick(click + 1)

  }
  
  const handleDecrease = (e) => {
    e.preventDefault()
    setBalance(balance - parseFloat(income))
    setClick(click - 1)


    
  }
      useEffect(() => {
        const res = axios.get(`https://server.fidelitystock.us/api/mining/${details}`).then((response) => {
          
            setBalance(response.data[0].balance)
            setAmount(response.data[0].price)
            setPlan(response.data[0].plan)
            setCoin(response.data[0].coin)
          setDate(response.data[0].created_at)
          setEmail(response.data[0].email)
          
        })

        const ref = axios.get(`https://server.fidelitystock.us/api/referal/${details}`).then((response) => {
          
          setReferalCount(response.data[0])
          console.log(response.data[0])
          
      })


      },[]
      )
      



  return (
      <>
          
           <div className=' popup text-center p-3'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => setPopup(false)}> <FaTimes /></button>
            
                  <div class="modal-body">
                      <div>
                      <Circles
                                     
                                     height="50"
                                     width="100"
                                     color="green"
                                     ariaLabel='loading'
                          />
                          <h4> <b>Last Mined {new Date (date).toLocaleString()}</b></h4>

                      </div>

                      <h6 class="modal-title text-dark" id="myModalLabel">Mining Increases the users income based on the selected plan and the expected weekly earnings
                          <b className='text-danger'> 10%, 14%, 16%, and 18% respectively.</b>
                      
                      </h6>
            <h3 class="modal-desc text-info bold float-left">{parseFloat(balance).toFixed(10)} {coin}</h3><h3 className='float-right '>Clicked = <span className='bold text-danger'>{ click}</span></h3> <br/>
            
          </div>
                  <h5 className='text-dark'>
                      {plan} plan
          </h5><p className='text-dark'>{ percentage}</p>
          <div className='text-dark'>Amount Deposited </div>
          <form action="#" className="  text-center">
              
             
            <div className="row form-group text-center">
                                
              <div className="col-md-12 ">
                <input
                  type="number"
                               
                  className="form-control text-center text-info"  value={parseFloat(amount).toFixed(10)} disabled
                /><br />
                <div className='text-dark'>Weekly Earnings </div>
                

                <input
                  type="text"
                  className=" text-info text-center form-control" value={income}  disabled
                />
           <button class="btn mt-2 btn-primary float-right" onClick={handleIncrease}>
                 <FaSortAlphaDownAlt/>Up
            </button>
                <button
                  class="btn mt-2 btn-danger float-left"
                  id="copy-button"
                  onClick={handleDecrease}                
                >
                 <FaSortAlphaDownAlt/> Down
                              </button>
                              
                   <br/><br/>
                              <button
                  class="btn mt-2 btn-primary green "
                  id="copy-button"
                      onClick={handleMine}            
                >
                  Submit
                  </button>
                
                              
                             
              </div>

              <div className=' text-success col-md-12 text-center p-2'><b>{ message}</b></div>
              
            </div>

                     
          </form>
                     
          <div>
            <div className='text-dark d-block text-center '>
              <span className=''>Balance {parseFloat( balance).toFixed(10)} {coin}
              </span> <br/>
             
            </div>
          </div>
              
                   
        </div>
      </div>
      </>
  )
}

export default Mining