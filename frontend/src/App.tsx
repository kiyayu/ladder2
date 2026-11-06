import { useEffect, useState } from "react"
const api =`${import.meta.env.VITE_API_URL}/`
 

 export default function App(){
  const [responseTest, setResponseText] = useState('')
  const [uptime, setUptime] = useState()
 
  useEffect(() =>{
   fetch('http://localhost:5000/ok')
   .then(res => res.text())
   .then(data => setResponseText(data))
   .catch(err => setResponseText(err.message))
    fetch(`${api}/api/health`)
  .then(res => res.json())
  .then(data => setUptime(data))
  .catch(err => setUptime(err))
  },[])
  return (
    <div className="min-h-screen bg-cyan-50 ">
      <div className="w-full max-w-xl mx-auto px-8 py-12">
        <p className="text-center text-green-600">{responseTest}</p>
        <p className="">uptime: {uptime?.uptime}</p>
      </div>
   
    </div>
  )
 }