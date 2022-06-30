const ActiveUsers = () => {

   

  return (
      <>
           
           
      <div className="card" id='body'>
                    <div className="card-header">
                    Active Users
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
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                         <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>2011/04/25</td>
                                                  <td>
                                                      
                                                      
                                                </td>
                                            </tr>
                                                                          
                                          </tbody>
                                          </table>
                        </div>
                    </div>
                    </div>
                
      </>
  )
}

export default ActiveUsers