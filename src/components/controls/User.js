import React from 'react'
import { useState } from 'react'
import Usermain from './Usermain'
import SecFooter from './SecFooter'
import Header from './Header'
import Fund from './Fund'




const User = () => {
    
    const [fund, setFund] = useState(false)
    const [withdraw, setWithdraw] = useState(false)
    const [support, setSupport] = useState(false)

    const handleSetFund = () => {
        setFund(true)
        setWithdraw(false)
        setSupport(false)
     
    }
    
    const handleSetWithdraw = () => {
        setFund(false)
        setWithdraw(true)
        setSupport(false)
     
    }
    
    const handleSetSupport = () => {
        setFund(false)
        setWithdraw(false)
        setSupport(true)
     
    }
    


 
    

    if (fund) {
    return <Fund setFund={setFund}/>
}

    
  return (
      <>
      <div className='sb-nav-fixed bg-gray' >
      <Header/>
              
        <div id="layoutSidenav_content">
        <main>
             <div className="container">
                       
                <h1 className="mt-4 text-blue"> <b>Dashboard</b></h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item text-dark active">Your balance is 0 click here to add balance, then click and select your prefered plan.</li>
                </ol>
                
               
                          <Usermain fund={handleSetFund} withdraw={handleSetWithdraw} support={ handleSetSupport} />
                        
         </div>
        </main>
                       <SecFooter/>
    </div>
        </div>
    </>
  )
}

export default User