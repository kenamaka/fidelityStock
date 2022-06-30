import axios, { Axios } from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'
import Moderator from './Moderator'
import Login from '../Login'
import { useNavigate } from 'react-router-dom'




const Dashboard = () => {
    const [role, setRole] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  
    

   useEffect(() => {
        const res = axios.get('https://server.fidelitystock.us/api/login').then((response) => {
          if (response.data.loggedIn === true) {
            setRole(response.data.user[0].role)
            setUsername(response.data.user[0].first_name)
          }
          else if (response.data.loggedIn === false) {
            navigate('/login')

          }
        })
      },[]
      )
     
  return (
    <>
      
      {role === "User" && <User username={username} />}
      {role === "Moderator" && <Moderator username={ username }/>}
      {role === "" && <Login />}
    </>
  )
}

export default Dashboard