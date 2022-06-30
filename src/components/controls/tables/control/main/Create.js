import React, { useState } from 'react'
import { NavLink, useNavigate,  } from 'react-router-dom'
import Axios from 'axios'
import { FaArrowLeft,  FaEye, FaEyeSlash } from 'react-icons/fa'



const Create = () => {
  const [data, setData] = useState({
    
    firstName: "",
    lastName: "",
    userEmail: "",
    passWord: "",
     
  })

  const [visible,setVisible] = useState(false)
  const [message, setMessage] = useState("")
  
  const navigate = useNavigate();
  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleChange = ({ currentTarget: input }) => {
    setData ({...data, [input.name]:input.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.passWord.length < 8 ) {
      setMessage("Password must be 8 characters or more")
      return false;
    } else {
      setMessage('')
      
    }
      Axios.post('https://server.fidelitystock.us/api/admin', {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.userEmail,
      password: data.passWord,
      
    })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
          setMessage(response.data.message)
          return false;
          
        } else  {
          navigate.push('/register/success')
    
          
        }
      
      }) 
  };
  
  return (
    <>
    
      <>
        <section className='site-section'>
      <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Admin Account</h3></div>
                                    <div class="card-body">
            

            <form action="#" className="p-2 bg-white" onSubmit={handleSubmit}>
              
                              
                  
              <div className="row form-group  ">
                  <div className=' text-red  text-center col-md-12'>{ message }</div>
              </div>
                  
              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-dark" htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name='firstName' value={data.firstName} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="col-md-6">
                  <label className="text-dark" htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" name='lastName' className="form-control" value={data.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-dark" htmlFor="email">Email</label> 
                  <input type="email" id="email" name='userEmail' className="form-control" value={ data.userEmail } onChange={handleChange} required />
                </div>
              </div>

              {/* <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-dark" htmlFor="subject">Username</label> 
                  <input type="text" id="username" name='userName' className="form-control" value={data.userName} onChange={handleChange}  required/>
                </div>
                  </div> */}
              
                  <div className="row form-group">
                
                <div className="col-md-12">
                      <label className="text-dark" htmlFor="password">Password</label> 
                      <div className='input-group'>
                        <input type={visible ? "text" : "password"} id="password" name='passWord' className="form-control" value={data.passWord} onChange={handleChange} required />

                        <span onClick={handleVisible}>
                          {visible ? (<FaEyeSlash size='20' className='form-control hover' />) : (<FaEye size='20' className='form-control' />)}

                        
                        </span>
                        
                      </div>
                      </div>
                
              </div>
     
                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                  <input type="submit" value="Sign Up" className="btn btn-info btn-md text-white"  />
                   
                    
                </div><br/>
                
                
  
                    </form>
                    
                  </div>
                  <div class="card-footer text-center">
                                        <div ><NavLink to="/administrator" class="small text-info"><FaArrowLeft/> Back to Home </NavLink></div>
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

export default Create