import axios from "axios"
import { useEffect } from "react"




const Nav = () => {

    useEffect(() => {
        const res = axios.get('http://localhost:8000/api/login').then((response) => {
          
            console.log(response.data)
          
          
        })
      },[]
      )
    return (
<h1>Navigation</h1>        
    )
    }
        

export default Nav