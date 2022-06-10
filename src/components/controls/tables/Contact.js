import axios from "axios"
import { useEffect, useState } from "react"
import Users from "./control/main/Users"

const Contact = () => {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    const res = axios.get('http://localhost:8000/api/contact')
      .then((response) => {
        setMessages(response.data)
        console.log(response.data)
        
    })
  },[])
  return (
    <>
      {messages.map((data) => {
        return (
          <div class="col-lg-9 col-md-6 mb-4">
              <div class="card mt-4">
          <img class="card-img-top img-fluid" src="http://placehold.it/900x400" alt=""/>
          <div class="card-body">
                <h3 class="card-title">{data.first_name}&nbsp;{ data.last_name}</h3>
                <h4>{ data.subject}</h4>
                <p class="card-text">{ data.message}</p>
            <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            4.0 stars
          </div>
        </div></div>

        )
      })}
    
      </>
  )
}

export default Contact