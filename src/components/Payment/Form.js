import React, { useCallback, useEffect, useState } from 'react'
import Input from './Input';

const Form = ({ data, plan,onPayment }) => {
    const { amount, text, title } = plan;
    const { name, rate, icon,wallet,tag,code } = data;
    const [details, setDetails] = useState([])

    
    const [figure, setFigure] = useState({
        money: 0,
        converted: 0
    })
    
    useEffect(() => {
        setFigure({
            ...figure,
            converted: Number(figure.money/rate).toFixed(8)
     })
    }, [name])
    
    useEffect(() => {
        onPayment(details)
        
    },[details])
    const handleChange = ({target   :{value,name}}) => {
        const val = Number(value.trim());
        const converted = (val / rate).toFixed(8);

        setFigure({
            [name]: val,
            converted
        })
        
    }

    const makePayment = useCallback((e) => {
        e.preventDefault()

        const transaction = {
            ...figure,
            name,icon,wallet,tag,text,title,code
            
        }

        setDetails([ ...details, transaction ])
    }, [figure, details]);  
    console.log('this trans',details)
  
  return (
      <>
           
              <form action="" onSubmit={makePayment}  style={{display: 'block'} }>
              <div class="form-group mb-3">
                    <Input placeholder="$USD"  onChange={handleChange}  name="money" required/>
                        <p className='small mt-2 text-success input-group-text '><img width ='20px'  src={ icon} />{name} {figure.converted} </p>
                        
                    </div>
<br/>
                      <div class="form-group centered">
                  <button type="submit" class="btn btn-warning">Pay <span>{figure.converted} { name}</span></button>
                      </div>
              </form>
                   
            
     
     </>
  )
}

export default Form