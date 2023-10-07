import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FaTimes } from 'react-icons/fa'

const Invite = ({setInvite,username}) => {
  const [message, setMessage] = useState("")
  let refLink = `https://fidelitystock.us/web.app.link/${username} ` 
    
  
  const handleShare = (e) => {
    e.preventDefault()
    setMessage("Link Copied!! Share and start earning more.")
  }

  return (
      <>
      <div className=' popup text-center p-3'>
                    <div className=' popup text-center p-3'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => { setInvite(false) }}> <FaTimes /></button>
            
          <div class="modal-body">
            <h4 class="modal-title" id="myModalLabel"> The affiliate program consists of 5 levels which means you'll be able to get higher affiliate
              commission for referring more.</h4>
          </div>
          <p id="blockoPaySection">
          </p>
          <div className='text-dark text-center'>Referal Link </div>
                      <form className="  text-left">
              
             
            <div className="row form-group text-left">
                                
              <div className="col-md-12 input-group ">
                <input
                  type="text"
                    className="form-control  text-left text-info"
                    value={refLink}
                    disabled
                  /><br />
                  <CopyToClipboard text={refLink}>
                  <input type="submit" value="Copy" className="btn btn-info" onClick={handleShare}  />
               
                    </CopyToClipboard>
                
                             
              </div>

            <div className=' text-success  col-md-12 text-center p-2'>{message }</div>
              
            </div>

                     
          </form>
                     
          <div>
            <div className='text-dark'>
            </div>
          </div>
              
                   
        </div>
      </div>
                </div>
                
      </>
  )
}

export default Invite