import axios from 'axios'
import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Unknown from '../../Unknown'

const Recovery = () => {
    const [password, setPassword] = useState("")
  
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
    const [message, setMessage] = useState("")
    const [visible, setVisible] = useState(false)
    const location = useLocation()
  const userid = location.pathname.split('/')[2];
  const navigate = useNavigate()
    
    const handleVisible = () => {
        setVisible(!visible);
    }
    
  const handleSubmit = (e) => {
    e.preventDefault()

    if (password.length < 8) {
      setMessage("Password must be 8 characters or more")
      return false;
    }
    
      e.preventDefault()
        Axios.put('https://server.fidelitystock.us/api/recovery', {
        firstname,
        lastname,
        email,
        username,
        role,
        password
        
      })
    
        .then((response) => {
          if (response.data.message) {
    navigate("recovery/recovered")        
            
        }
         
              
        }) 
    };

  
  useEffect(() => {
    const res = axios.get(`http://localhost:8000/api/recovery/${userid}`)
      .then((response) => {
        console.log(response.data)
        setFirstname(response.data[0].first_name)
        setLastname(response.data[0].last_name)
        setEmail(response.data[0].email)
        setUsername(response.data[0].username)
        setRole(response.data[0].role)
         
      console.log(response.data)
    })
  },[]
  )
  if (!email) {
    return <Unknown/>
    }
  return (
      <>
          <section className='site-section'>
                 <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Recover Your Accounts</h3></div>
                                    <div className="card-body">
            

            <form action="#" className="p-2 bg-white" onSubmit={handleSubmit}>
            <div className="row form-group  ">
                  <div className=' text-danger  text-center col-md-12'>{ message }</div>
              </div>
                  
              <div className="row form-group">
                
                <div className="col-md-12">
                    <label className="text-dark" htmlFor="password">Password</label> 
                    <div className='input-group'>
                    <input type={visible ? "text" : "password"} id="password" name='password' className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}} required />
                    <span onClick={handleVisible}>
                      {visible ? (<FaEyeSlash size = "20" className='form-control hover'/>) : (<FaEye size="20" className='form-control hover' />)}
                    </span>
                        </div> 
                    </div> 
                  
              </div>
                            
             
                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                    
              <input type="submit" value="Submit" className="btn btn-info btn-md text-white"  />
                    &nbsp; &nbsp;<NavLink class="small text-info" to='/login'>Have an account? Go to login</NavLink>
              
                  </div>
                        
                
  
                    </form>
                    
                  </div>
                  <div className="card-footer text-center">
                                        <div ><NavLink to="/" className="small text-info"><FaArrowLeft/> Back to Home </NavLink></div>
                                    </div>
          
        </div>
      </div>
          </div>
          </div>
          </section>
    </>
  )
}

export default Recovery