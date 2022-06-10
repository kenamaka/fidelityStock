import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate,  } from 'react-router-dom'
import Axios from 'axios'
import axios from 'axios'
import { FaArrowLeft, FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa'



const Edit = () => {
  const location = useLocation()
  const userid = location.pathname.split("/")[2];
  const [user, setUser] = useState({
    
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    role:"",
     
  })

  const [message, setMessage] = useState("")
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate();


  const handleChange = ({ currentTarget: input }) => {
    setUser ({...user, [input.name]:input.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
      Axios.put('http://localhost:8000/api/update', {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      username: user.username,
      role: user.role,
      password
      
    })
  
      .then((response) => {
      
          console.log(response)
          setMessage(response.data.message)
          
          
        
      
      }) 
  };
  useEffect(() => {
    const res = axios.get(`http://localhost:8000/api/userid/${userid}`).then((response) => {
      setUser({
        firstname: response.data[0].first_name,
        lastname: response.data[0].last_name,
        email: response.data[0].email,
        username: response.data[0].username,
        role:response.data[0].role
      })
      setPassword(response.data[0].password)
      console.log(response.data)
    })
  },[]
  )
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
              
                              
                  
              <div className="row form-group  ">
                  <div className=' text-info  text-center col-md-12'>{ message }</div>
              </div>
                  
              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-dark" htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name='firstname' value={user.firstname} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="col-md-6">
                  <label className="text-dark" htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" name='lastname' className="form-control" value={user.lastname} onChange={handleChange} required />
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-dark" htmlFor="email">Email</label> 
                  <input type="email" id="email" name='email' className="form-control" value={ user.email } onChange={handleChange} required />
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-dark" htmlFor="subject">Username</label> 
                  <input type="text" id="username" name='username' className="form-control" value={user.username} onChange={handleChange}  required/>
                </div>
                  </div>
              
                  
                 <div className="form-group">
    <label htmlFor="exampleFormControlSelect1" >Select User Role</label>
    <select className="form-control" name='role' value={user.role} onChange={handleChange}>
      <option>User</option>
      <option>Moderator</option>
      
                        </select>
                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                        <input type="submit" value="Update User Account" className="btn btn-info btn-md text-white"  />

                </div>
  </div>
     
                        
                
  
                    </form>
                    
                  </div>
                  <div className="card-footer text-center">
                                        <div ><NavLink to="/administrator" className="small text-info"><FaArrowLeft/> Back to Home </NavLink></div>
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

export default Edit