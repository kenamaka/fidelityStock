import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Superuser from '../Superuser'
import Signin from './Signin'





const Manager = () => {
    
    const [username,setUsername] = useState("")
  const [role, setRole] = useState("")
  const navigate = useNavigate()
  
    

   useEffect(() => {
        const res = axios.get('https://server.fidelitystock.us/api/adlogin').then((response) => {
          if (response.data.loggedIn === true ) {
            setUsername(response.data.user[0].first_name)
            setRole(response.data.user[0].registered)
            
            
          }
         else if (response.data.loggedIn === false) {
            navigate('/signin')
          }
          console.log(response.data)
        })
        
      },[]
      )
     
  return (
    <>
      
      {username  && <Superuser username={username} />}
      {role === "Registered" && <Signin />}
    </>
  )
}

export default Manager