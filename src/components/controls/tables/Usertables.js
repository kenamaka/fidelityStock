import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {   FaMoneyCheck, FaPencilAlt, FaSortAlphaDownAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Payment from './Payment'


const Usertables = ({handlePayment,handleMine}) => {
  const [user, setUser] = useState([])
  const [withdraw, setWithdraw] = useState([])
  const [active, setActive] = useState([])

  useEffect(() => {
    const res = axios.get('https://server.fidelitystock.us/api/get').then((response) => {
      setUser(response.data) 
      
    })
    const req = axios.get('https://server.fidelitystock.us/api/pay').then((response) => {
      setWithdraw(response.data)
      console.log(response)

    })

    const active = axios.get('https://server.fidelitystock.us/api/active').then((response) => {
      setActive(response.data)
      console.log(response)

    })
  },[]
  
  )


  const tableData = user.map((data) => {
    return (
      <tr className='text-light'>
      <td>{ data.plan}</td>

        <td className='text-primary'>{data.first_name} { data.last_name}</td>
        <td>
          {data.username}
          <small class="d-block text-info">{ data.email}</small>

        </td>
        
        <td>{ data.status}</td>
        <td>{data.price}</td>
        <td>{ data.coin}</td>
       
      <td>{new Date (data.created_at).toDateString() }</td>
        <td>{data.role}</td>
        <td>
        <NavLink className="btn btn-success" to={`/change/${data.user_id}`}>  <FaPencilAlt   />Edit</NavLink> &nbsp;&nbsp;&nbsp;
        </td>
        </tr>
      )
  })
  const withdrawalRequest = withdraw.map((data) => {
    return (
      <tr>
        <td>{data.email}</td>
        <td>{data.wallet_address }</td>
        <td>{(data.withdrawal_request).toFixed(8) }</td>
        <td>{data.balance}</td>
        <td>
   
          <button className="btn btn-info" onClick={handlePayment(`${data.email}`)}>  <FaMoneyCheck   /> Pay</button> 

          
        </td>
      </tr>
    )
  
  })

  const activeUsers = active.map((data) => {
    return (
      <tr>
        <td>{data.username }</td>
        <td>{data.plan }</td>
        <td>{data.price }</td>
        <td>{data.balance}</td>
        <td>
        <button className="btn btn-info" onClick={handleMine(`${data.username}`)}>  <FaSortAlphaDownAlt   /> Mine</button> 

        </td>
      </tr>
    )
  })





  return (
    <>
  
  <div className="card-header text-light">
                           <h4 className='text-light' style={{ fontWeight:500 }}>Registered Users</h4>
                      </div>
                      <div className="card-body">
      <div class="table-responsive">

        <table class="table custom-table">
          <thead>
            <tr>  

            <th scope="col">Plan</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Coin</th>
              <th scope="col">Date</th>
              <th scope="col">Role</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
           {tableData}
          </tbody>
        </table>
        </div>
      </div>
      
      <div className="card-header text-light">
                           <h4 className='text-light' style={{ fontWeight:500 }}>Withdrawal Request</h4>
                      </div>
      <div className="card-body ">
        <div class="table-responsive custom-table-responsive">

        <table class="table custom-table">
          <thead>
            <tr>  
            <th scope="col">Email</th>
            <th scope="col">Wallet Address</th>
              <th scope="col">Request Amount</th>
              <th scope="col">Balance</th>
              <th scope="col">Make Payment</th>
            </tr>
          </thead>
          <tbody>
           {withdrawalRequest}
          </tbody>
          </table>
          
        </div>
      </div>
      


      
      <div className="card-header text-light">
                           <h4 className='text-light' style={{ fontWeight:500 }}>Active Users</h4>
                      </div>
      <div className="card-body ">
        <div class="table-responsive custom-table-responsive">

        <table class="table custom-table">
          <thead>
            <tr>  
            <th scope="col">Username</th>
            <th scope="col">Plan</th>
              <th scope="col">Amount</th>
              <th scope="col">Balance</th>
              <th scope="col">Mine</th>
            </tr>
          </thead>
          <tbody>
           {activeUsers}
          </tbody>
          </table>
          
        </div>
        </div>



  
    
                
    </>
  )
}

export default Usertables