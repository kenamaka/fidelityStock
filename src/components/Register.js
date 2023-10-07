import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate,  } from 'react-router-dom'
import Axios from 'axios'
import axios from 'axios'
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'



const Register = ({ referal_link,login,home,success}) => {

  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userName: "",
    passWord: "",
  })

  const [visible,setVisible] = useState(false)
  const [refer,setRefer] = useState("none")
  const [message, setMessage] = useState("")
  const [guide, setGuide] = useState("")
  
  const navigate = useNavigate();
  const handleVisible = () => {
    setVisible(!visible)
  }

  if (referal_link) {
    setRefer(referal_link)
  }

  const handleChange = ({ currentTarget: input }) => {
    setData ({...data, [input.name]:input.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.passWord.length < 8) {
      setMessage("Password must be 8 characters or more")
      return false;
    } else {
      setMessage('')
    }


      Axios.post('https://server.fidelitystock.us/api/register', {
            firstname: data.firstName,
            lastname: data.lastName,
            email: data.userEmail,
            username: data.userName,
            password: data.passWord,
            refer
            
          })
            .then((response) => {
              if (response.data.message) {
                setMessage(response.data.message)
                return false;
              } else {

                success()
                
              }
       
          
            })
  };

  useEffect(() => {
      const res = axios.get('https://server.fidelitystock.us/api/login').then((response) => {
        if (response.data.loggedIn === true) {
          navigate("/dashboard")
       }
      })
     
     
     
   },[]
  )
  
  return (
    <>
    
      <>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOut' duration={2}>
        <section className='site-section'>
      <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Create An Account</h3></div>
              <div className="card-body">
                <form action="#" className=" p-2 bg-white " onSubmit={handleSubmit}>
              
                              
                  
              <div className="row form-group  ">
                  <div className=' text-red  text-center col-md-12'>{ message }</div>
              </div>
                  
              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-dark" htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name='firstName' value={data.firstName} onChange={handleChange} className="form-control" required autoFocus/>
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

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-dark" htmlFor="subject">Username</label> 
                  <input type="text" id="username" name='userName' className="form-control" value={data.userName} onChange={handleChange}  required/>
                </div>
                  </div>
              
                  <div className="row form-group">
                
                <div className="col-md-12">
                      <label className="text-dark" htmlFor="password">Password</label> 
                      <div className='input-group'>
                        <input type={visible ? "text" : "password"} id="password" name='passWord' className="form-control" value={data.passWord} onChange={handleChange} required />

                        <span onClick={handleVisible}>
                          {visible ? (<FaEyeSlash size='20' className='form-control hover' />) : (<FaEye size='20' className='form-control hover' />)}

                        
                        </span>
                        
                      </div>
                      </div>
                
                      </div>
                      
              <div className="row form-group">
                
                <div className="col-md-12">
                          <label className="text-dark" htmlFor="subject">Referal</label>  
                          {/* {
                            referal_link
                            ?
                            <input type="text" id="referal" name='referal' className="form-control" value={refer} onChange={handleChange} disabled />
                            :
                            <input type="text" id="referal" name='referal' className="form-control" value="none" onChange={(e) =>{setRefer(e.target.value)}} disabled/>} */}
                            <input type="text" id="referal" name='referal' className="form-control" value={refer} onChange={(e) =>{setRefer(e.target.value)}} disabled/>}
                </div>
                      </div>
                      <div className="row form-group  ">
                  <div className=' text-red  text-center col-md-12'>{ guide }</div>
              </div>
     
                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                  <input type="submit" value="Sign Up" className="btn btn-info btn-md text-white"  />
                    &nbsp; &nbsp;<NavLink class="small text-info " to='#' onClick={login}>Have an account? Go to login</NavLink>
                    
                    
                </div><br/>
                
                
  
                    </form>
                    
                  </div>
                  <div class="card-footer text-center">
                                        <div ><NavLink to="#" onClick={home} class="small text-info "><FaArrowLeft/> Back to Home </NavLink></div>
                                    </div>
          
        </div>
      </div>
          </div>
          </div>
          </section>
          </AnimationOnScroll>
      </>
    </>
  )
}

export default Register