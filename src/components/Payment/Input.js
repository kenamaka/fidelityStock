import React from 'react'

const Input = ({...props}) => {
  return (
      <>
           
     <input type="number" class="form-control input-sm" min="1" {...props} />
    
          

          
      </>
  )
}

export default Input