import React from 'react'
import TableSuper from './Tables/TableSuper'

function Others({ superuser }) {
    const superUser = superuser.map((element,key) => {
        return (
            <TableSuper key={element.id} element={element }/>
        )
    })
  return (
      <>
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

export default Others