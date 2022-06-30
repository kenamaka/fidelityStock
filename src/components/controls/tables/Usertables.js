import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Usertables = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const res = axios.get('https://server.fidelitystock.us/api/get').then((response) => {
      setUser(response.data) 
      console.log(response)
      
    })
  },[]
  )

  const tableData = user.map((data) => {
    return (
      <tr>
      <td>{data.first_name }</td>
      <td>{ data.email}</td>
      <td>{ data.username}</td>
      <td>{new Date (data.created_at).toDateString() }</td>
        <td>{data.role}</td>
        </tr>
      )
  })

  return (
    <>
      <div className="card" id='body'>
          
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
                                            </tr>
                                        </thead>
                                   <tbody>
                        
                                   { tableData}
                                                                                           
                                          </tbody>
                                          </table>
                        </div>
        </div>
      </div>
                
    </>
  )
}

export default Usertables