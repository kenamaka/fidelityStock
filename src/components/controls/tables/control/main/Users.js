import axios from "axios"
import { useEffect, useState } from "react"
import {FaPencilAlt,   FaUser } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Users = () => {
    const [user, setUser] = useState([])

    const [superuser, setSuperuser] = useState([])

    useEffect(() => {
      const res = axios.get('http://localhost:8000/api/get').then((response) => {
        setUser(response.data) 
        console.log(response)
        
      })
      const users = axios.get('http://localhost:8000/api/admin').then((response) => {
        setSuperuser(response.data) 
        console.log(response)
        
      })
        
    },[]
  )
  

  
    const tableData = user.map((data,key) => {
      return (
        <tr key={data.user_id}>
              <td>{data.first_name}  { data.last_name}</td>
        <td>{ data.email}</td>
        <td>{ data.username}</td>
        <td>{new Date (data.created_at).toDateString() }</td>
              <td>{data.role}</td>
              <td>
                  
                <NavLink className="text-dark" to={`/edit/${data.user_id}`}>  <FaPencilAlt   />Edit</NavLink> &nbsp;&nbsp;&nbsp;
              </td>
          </tr>
        )
    })
    const superUser = superuser.map((element,key) => {
        return (
            <tr key={element.id}>
                        <td>{element.first_name }</td>
                        <td>{element.last_name }</td>
                        <td>{element.email }</td>
                        <td>{new Date (element.created_at).toDateString() }</td>

            </tr>
        )
    })
  
    return (
        <>
            
              <div className="card-header">
                           Registered Users
                      </div>
                      <div className="card-body">
                          <div className="table-responsive">
                          <table class="table  bg-white" id="dataTable" width="100%" cellspacing="0">
                                          <thead>
                                              <tr>
                                                  <th>Name</th>
                                                  <th>Email</th>
                                                  <th>Username</th>
                                                  <th>Start date</th>
                                                  <th>Status</th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                     <tbody>
                          
                                     { tableData}
                                                                                             
                                            </tbody>
                                            </table>
                          </div>
            </div>
            
            <div className="card-header">
                           Super User
                      </div>
                      <div className="card-body">
                          <div className="table-responsive">
                          <table class="table  bg-white" id="dataTable" width="100%" cellspacing="0">
                                          <thead>
                                              <tr>
                                                  <th>Name</th>
                                                  <th>Last Name</th>
                                                  <th>Email</th>
                                                  <th>Start date</th>
                                              </tr>
                                          </thead>
                                     <tbody>
                          
                                     { superUser}
                                                                                             
                                            </tbody>
                                            </table>
                          </div>
                      </div>
                  
      </>
    )
  }
  
  export default Users