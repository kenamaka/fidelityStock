import React from 'react'
import TableUser from './Tables/TableUser'

function User({ user }) {

    const tableData = user.map((data,key) => {
        return (
            <TableUser key={data.id} data={data }/>
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
      </>
  )
}

export default User