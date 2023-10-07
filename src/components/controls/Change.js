import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate,  } from 'react-router-dom'
import Axios from 'axios'
import axios from 'axios'
import { FaArrowLeft } from 'react-icons/fa'
import Unknown from '../Unknown'



const Change = () => {
  const location = useLocation()
  const userid = location.pathname.split("/")[2];
  const [message, setMessage] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [plan, setPlan] = useState("")
  const [status, setStatus] = useState("")
  const [amount, setPrice] = useState()
 const navigate = useNavigate() 
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status === "active") {
      
      Axios.put('https://server.fidelitystock.us/api/date', {
        email,
        status,
        plan,
        amount
      })
        .then((response) => {
          console.log(response)
          setMessage(response.data.message)
        })
    }
    Axios.put('https://server.fidelitystock.us/api/change', {
      firstname,
      lastname,
      email,
      username,
      role,
      password,
      status,
      plan,
      amount
    })
      .then((response) => {
        console.log(response)
        setMessage(response.data.message)
      })
  };

  useEffect(() => {
    const res = axios.get(`https://server.fidelitystock.us/api/userid/${userid}`).then((response) => {
      
        setFirstname(response.data[0].first_name)
        setLastname(response.data[0].last_name)
        setEmail(response.data[0].email)
        setUsername(response.data[0].username)
        setRole(response.data[0].role)
        setPassword(response.data[0].password)
        setPrice(response.data[0].price)
        setPlan(response.data[0].plan)
        setStatus(response.data[0].status)
        
      console.log(response.data[0].status)
    })
  },[]
    )
  if (!email) {
  return <Unknown/>
  }
  return (
    <>
    
      <>
        <section className='site-section'>
      <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create User Accounts</h3></div>
                                    <div className="card-body">
            

            <form action="#" className="p-2 bg-white" onSubmit={handleSubmit}>
              
                              
                  

                  
              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-dark" htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name='firstname' disabled value={firstname}  className="form-control" /></div>
                <div className="col-md-6">
                  <label className="text-dark" htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" disabled name='lastname' className="form-control" value={lastname}  />
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-dark" htmlFor="email">Email</label> 
                  <input type="email" id="email" disabled name='email' className="form-control" value={ email }/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-dark" htmlFor="subject">Username</label> 
                  <input type="text" id="username" disabled name='username' className="form-control" value={username} />
                </div>
                                          </div>
                                            <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-dark" htmlFor="subject">Plan</label> 
                  <input type="text" id="username" disabled name='username' className="form-control" value={plan} />
                </div>
                                          </div>
                                          
                <div className="row form-group">
                  <div className="col-md-12">
                  <label className="text-dark" htmlFor="subject">Amount</label> 
                  <input type="text" id="username" disabled name='username' className="form-control" value={amount} />
                </div>
                  </div>
              
                  
        <div className="form-group">
    <label  className='text-dark' >Select User Role</label>
    <select className="form-control" name='role' value={role} onChange={(e) => {setRole(e.target.value)}}>
      <option>User</option>
      <option>Moderator</option>
      
    </select>
</div>
                                          

    <div className="form-group">
    <label className='text-dark'>Activate User Account</label>
    <select className="form-control" name='status' value={status} onChange={(e) => {setStatus(e.target.value)}}>
      <option>inactive</option>
      <option>active</option>
      
     </select>
    <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
    <input type="submit" value="Update User Account" className="btn btn-info btn-md text-white"   />

    </div>
  </div>
                                          

            
                
  
                    </form>
                    <div className="row form-group  ">
                  <div className='   text-center col-md-12'><h5 className='text-info' style={{ fontWeight:400 }}>{ message }</h5></div>
              </div>
                    
                  </div>
                  <div className="card-footer text-center">
                                        <div ><NavLink to="/dashboard" className="small text-info"><FaArrowLeft/> Back to Home </NavLink></div>
                                    </div>
          
        </div>
      </div>
          </div>
          </div>
          </section>
        
      </>
    </>
  )
}

export default Change;