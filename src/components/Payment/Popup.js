import React, { useCallback, useEffect, useState } from 'react'
import {  FaTimes } from 'react-icons/fa';
import Cyptos from './Cyptos';
import './Popup.css'
import Input from './Input';
import Payment from './Payment';



const Popup = ({ investment,popup,setPopup,userData }) => {
    const {  text, title } = investment;
    const [plan,setPlan] = useState(userData)
    
    const [selected, setSelected] = useState(plan[0]);
    const [page, setPage] = useState(false);

    const { name, rate, icon,wallet,tag,code } = selected;
    const [details, setDetails] = useState([])

    
   const handleSelected = (data) => {
    setSelected(data)
    }
    const [figure, setFigure] = useState({
        money: 0,
        converted: 0
    })
    
    useEffect(() => {
         setFigure({
            ...figure,
            converted: Number(figure.money/rate).toFixed(8)
        })
  
    },
        [name]
    )
  

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

        setDetails([...details, transaction])
        setPage(true)
    }, [figure, details]);
        


    
    return (popup) ? (
    <>
         
            <div className=' popup text-center p-3'>
            <Payment
                paymentDetails={details}
                    popup={page}
                    setPopup={setPage}
                    coinDetails={selected}
                    planInfo={investment}
                    paymentInfo={figure}
            />
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => setPopup(false)}> <FaTimes /></button>
                <h2 className='lead text-bold'>Select  your prefered Coin, Enter Amount. Then proceed to payment</h2>
                <br/>
             
                <div className='text-center d-flex'>
                    {plan.map((coin) => (
                        <Cyptos
                            key={coin.id}
                            data={coin}
                            onClick={handleSelected}
                            selected={coin.id === selected.id}
                        />
                    ))}
                   
                </div>
                
          <div class="modal-body">
                    <h4 class="modal-title" id="myModalLabel">{ title}</h4>
                    <p class="modal-desc text-dark">{ text}</p>
            
              </div>
             
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
                   
                   
            </div>
            </div>
            </>
        
    ) : "";
}

export default Popup