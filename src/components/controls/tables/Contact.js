import axios from "axios"
import { useEffect, useState } from "react"
import Users from "./control/main/Users"

const Contact = () => {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    const res = axios.get('https://server.fidelitystock.us/api/contact')
      .then((response) => {
        setMessages(response.data)
        console.log(response.data)
        
    })
  },[])
  return (
    <>
      {messages.map((data) => {
        return (
          
              <div class="card mt-4">
          <div class="card-body">
                <h3 class="card-title">{data.first_name}&nbsp;{ data.last_name}</h3>
                <h4>{ data.subject}</h4>
                <p class="card-text">{ data.message}</p>
              <span class="text-info">{ data.email}</span>&nbsp; &nbsp; {new Date(data.created_at).toDateString()}
            
          </div>
        </div>

        )
      })}
    
      </>
  )
}

export default Contact