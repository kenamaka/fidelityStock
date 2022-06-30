import React, { useEffect } from 'react'
import { FaTimes, FaBars, FaArrowDown, } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Users from './main/Users'
import Reg from './main/Reg'
import Create from './main/Create'




const Superuser = ({username}) => {
    const [click, setClick] = useState(false)
    const [drop, setDrop] = useState(false)
    
  
  const handleClick = () => {
    return setClick(!click)
    }

    const handleDp = () => {
    return setDrop(!drop)
}

// SPA navigation states
    const [user, setUser] = useState( true)
    const [reg, setReg] = useState( false)
    const [create, setCreat] = useState( false)
    
    
// handle SPA routing
    
    const handleUsers = () => {
        setReg(false)
        setCreat(false)
        setUser(true)
        setDrop(false)
        setClick(!click)



    }
    const handleCreate = () => {
        setCreat(true)
        setUser(false)
        setReg(false)
        setDrop(false)
        setClick(!click)



    }
    const handleReg = () => {
        setUser(false)
        setReg(true)
        setCreat(false)
        setDrop(false)
        setClick(!click)
    }
    
    useEffect(() => {
        const res = axios.get('https://server.fidelitystock.us/api/adlogin').then((response) => {
          if (response.data.loggedIn === true) {
            console.log(response.data.user[0].first_name)
          }
          
        })
      },[]
      )
    
  return (
      <>
          
      <div className='sb-nav-fixed' >
      <nav className="header bg-dark">
      

      <div className="container">
       
      
          <h1 className="site-logo"><NavLink  className="text-black h2 mb-0" style={{ fontWeight: 700 }} to ="#" onClick={handleUsers} ><span className="text-info">Admin</span>istrator </NavLink></h1>
                      <ul className={click ? 'navbar active' : 'navbar'}>
                  <li className="nav-item"><NavLink className="nav-link" to="#" onClick={handleUsers}>Home</NavLink></li>
                  
                    <li className="nav-item">
                              <div className={drop ? 'dropclick' : "addropdown"}>
                              <button className=" btn btn-info  btn-lg px-4 py-2 smoothscroll" onClick={handleDp}>
                              Create <FaArrowDown />
                          </button>
                          <div className={drop ? "onclick droplink bg-info" : "addropdown-content"}>
                                        <NavLink className="nav-link" to="#" onClick={handleReg}>User</NavLink>
                                        <NavLink className="nav-link" to="#" onClick={handleCreate}>Admin</NavLink>
                                        
                                            
                                  </div>
                        </div>
                          </li>
                  
                 <li className="nav-item"> <span className='nav-link text-info'>Welcome { username } </span></li>
                  
                
                </ul>
                
                         
          <div className="dropdown" onClick={handleClick}>
                  {click ? (<FaTimes size={30} style={{ color: '#333'  }} />) : (< FaBars size={30} style={{ color: '#333'  }} />)} 
                </div>
                
        
      </div>
      </nav>
              <Outlet />
              <br/><br/>
        <div id="layoutSidenav_content">
        <main>
            <div className="container-fluid">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
             
               
                          {/* pages come here */}
                          
                          {user && <Users/>}
                              {reg && <Reg/>}
                              {create && <Create/>}
                             
                
            </div>
        </main>
        <footer className="py-4 bg-dark mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Your Website 2022</div>
                    <div>
                        
                        <NavLink to="/dashboard" className="text-info">Control Panel</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        </div>
    </>
  )
}

export default Superuser