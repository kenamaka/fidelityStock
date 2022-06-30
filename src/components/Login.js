import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaEye,FaEyeSlash } from 'react-icons/fa'
import SecFooter from './controls/SecFooter'
import axios from 'axios'


const Login = () => {

  const [data, setData] = useState({
    userEmail: '',
    passWord:'',
  })

  Axios.defaults.withCredentials = true

  const [message,setMessage] = useState("")
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  
  const handleVisible = () => {
    setVisible(!visible);
  }

  const handleData = ({ currentTarget: input }) => {
    setData ({...data, [input.name]:input.value})
  }
  const handleLogin = (e) => {
    e.preventDefault()
    Axios.post('https://server.fidelitystock.us/api/login', {
      email: data.userEmail,
      password: data.passWord
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message)
        setMessage(response.data.message)
        return false;
      }else {
        navigate("/dashboard")
      }
    }
      
  
    )
  }


  
  return (
    <>
      
      
      <section className='site-section'>
      <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 col-md-12">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
             <form action="#" className="pb-5 pt-5 bg-white" onSubmit={handleLogin}>
              
                  
             <div className="row form-group  ">
                  <div className=' text-red  text-center col-md-12'>{ message }</div>
              </div>
              <div className="row form-group">
                                
              <div className="col-md-12">
                  <label className="text-dark" htmlFor="email">Email</label> 
                  <input type="email" id="email" name='userEmail' className="form-control" value={ data.userEmail} onChange={handleData}  required autoFocus/>
                </div>
              </div>

                    
            <div className="row form-group">
                
                <div className="col-md-12">
                    <label className="text-dark" htmlFor="password">Password</label> 
                    <div className='input-group'>
                    <input type={visible ? "text" : "password"} id="password" name='passWord' className="form-control" value={data.passWord} onChange={handleData} required />
                    <span onClick={handleVisible}>
                      {visible ? (<FaEyeSlash size = "20" className='form-control hover'/>) : (<FaEye size="20" className='form-control hover' />)}
                    </span>
                    </div>
                    </div>
                  
              </div>
              
            
                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                    <NavLink class="small text-info" to="/login/forgot">Forgot Password?</NavLink>
                    <input type="submit" value="Login" className="btn btn-info btn-md text-white" />
                </div><br/>
                
                <div className="card-footer bg-white text-center">
                  <div className="small">
                  <NavLink class=" text-info" to='/register'>Need an account? Sign up!</NavLink>
                  </div>
                  </div>
                
  
            </form>
                </div>
                <div class="card-footer text-center">
                                        <div class="small"><NavLink class=" text-info" to="/"><FaArrowLeft/> Back to Home </NavLink></div>
                                    </div>
          
              </div>
              
            </div>
          </div>
          </div>
               </section>
    <SecFooter/>
    </>
  )
}

export default Login