import axios from "axios"
import { useEffect, useState } from "react"
import {FaPencilAlt,   FaUser } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Others from "./Others"
import User from "./User"

const Users = () => {
    const [user, setUser] = useState([])

    const [superuser, setSuperuser] = useState([])

    useEffect(() => {
      const res = axios.get('https://server.fidelitystock.us/api/get')
        .then((response) => {
        setUser(response.data) 
        console.log(response)
        
      })
      const users = axios.get('https://server.fidelitystock.us/api/admin').then((response) => {
        setSuperuser(response.data) 
        console.log(response)
        
      })
        
    },[]
  )
  

  
   
  
    return (
        <>
            
             <User user={user}/>
            <Others superuser={superuser}/>
            
                  
      </>
    )
  }
  
  export default Users