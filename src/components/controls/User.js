import React, { useEffect } from 'react'
import { useState } from 'react'
import Usermain from './Usermain'
import SecFooter from './SecFooter'
import Header from './Header'
import Fund from './Fund'
import axios from 'axios'
import Active from './Active'
import { NavLink } from 'react-router-dom'
import "animate.css/animate.min.css"





const User = () => {
    
  const [fund, setFund] = useState(false)
   const [id, setId] = useState(null)
  const [plan, setPlan] = useState("")
  const [coin, setCoin] = useState("")
  const [username, setUsername] = useState("")
  
    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(0)
    const [status, setStatus] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lead,setLead] = useState("Your balance is 0. Click on fund account, select your prefered plan, and make payment. We accept BTC, ETH and USDT. Once payment is made, your account will be activated within 2 hours.")
 
    const handleSetFund = () => {
        setFund(true)
     
  }
  



  

  
    useEffect(() => {
        const res = axios.get('https://server.fidelitystock.us/api/login').then((response) => {
          if (response.data.loggedIn === true ) {
            setFirstname(response.data.user[0].first_name)
            setStatus(response.data.user[0].status)
            setPlan(response.data.user[0].plan)
            setId(response.data.user[0].user_id)
            setAmount(response.data.user[0].price)
            setCoin(response.data.user[0].coin)
            setBalance(response.data.user[0].balance)
            setUsername(response.data.user[0].username)


          }
          if (response.data.user[0].status === "active") {
            setLead(`Your account is now active. Your fund will be due for withdrawal in the next 21 days.`)
            
          
          }  
             
        })
        
      },[]
      )

 
    

    if (fund) {
      return <Fund setFund={setFund} firstname={ firstname } />
  }
   
  return (
      <>
      <div className='sb-nav-fixed bg-gray' >
      <Header firstname={firstname}/>
              
        <div id="layoutSidenav_content">
        <main>
             <div className="container">
                       
                <h1 className="mt-4 text-blue"> <b>Dashboard</b></h1>
                <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item text-dark active">{ lead }</li>
                </ol>
                
               
              {status === "inactive" && <Usermain fund={handleSetFund} username={username}  />}
              {status === "active" && <Active plan={plan} amount={amount} balance = {balance} username = {username} id={id} firstname={firstname} coin={coin} />}
                        
         </div>
        </main>
        <footer className="py-4 bg-dark mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                                <NavLink to="/">Fidelity Stock</NavLink>
          
                    <div className="text-muted"> Copyright &copy;{new Date().getUTCFullYear()} All rights reserved </div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        &middot;
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        </div>
    </>
  )
}

export default User