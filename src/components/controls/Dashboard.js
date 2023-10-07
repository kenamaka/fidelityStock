import axios, { Axios } from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'
import Moderator from './Moderator'
import Login from '../Login'
import { useNavigate } from 'react-router-dom'
import "animate.css/animate.min.css"
import Pagination from '../Pagination'





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
            navigate('/')

          }
        })
      },[]
      )
     
  return (
    <>
      
      {role === "User" && <User username={username} />}
      {role === "Moderator" && <Moderator username={ username }/>}
      {role === "" && <Pagination />}
    </>
  )
}

export default Dashboard