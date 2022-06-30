import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'

const Header = ({firstname}) => {

    const [click, setClick] = useState(false)




    const handleClick = () => {
        return setClick(!click)
        }
  return (
      <> 
             <nav className="header bg-dark ">
      

      <div className="container">
       
      
                      <h2 className="text-light dash-info" style={{ fontWeight: 700 }}> <span className="text-info">Welcome</span> <span><b>{ firstname }</b></span></h2>
                      <ul className={click ? 'navb active' : 'navb'}>
                  <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="#" >Support</NavLink></li>
         
                
                </ul>
                
                         
          <div className="dropdown" onClick={handleClick}>
                  {click ? (<FaTimes size={30} style={{ color: '#f8f9fa'  }} />) : (< FaBars size={30} style={{ color: '#f8f9fa'  }} />)} 
                </div>
                
                
        
      </div>
          </nav>
            
          <Outlet />
              <br /><br />
      </>
  )
}
export default Header