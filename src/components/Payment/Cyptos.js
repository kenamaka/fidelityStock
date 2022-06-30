import React, { useState } from 'react'
import { FaHandHoldingMedical } from 'react-icons/fa'
import './Popup.css'

const Cyptos = ({ data,selected,onClick }) => {
  const [click, setClick] = useState(false)
  
 
  const { id, name, rate, icon } = data;
  const handleClick = () => onClick(data);
  
  return (
    <div className='col-lg-3 text-center pointer'>
    <div className={`coin coin ${selected && 'selected'}`} onClick={handleClick}>
      
          <div className='coin-inner'>
              <img src={icon} alt='icon' className='coin-image' />
        <div className='text-dark'>{ name}</div>
        <div className='text-dark'>{rate  }</div>
          </div>
          </div>

</div>
  )
}

export default Cyptos