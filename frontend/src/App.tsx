import { useEffect, useState } from "react"

 

 export default function App(){
  const [responseTest, setResponseText] = useState('')
  useEffect(() =>{
   fetch('http://localhost:5000/ok')
   .then(res => res.text())
   .then(data => setResponseText(data))
   .catch(err => setResponseText(err.message))
  },[])
  return (
    <div>
    <p>{responseTest}</p>
    </div>
  )
 }