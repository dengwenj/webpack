import React, { useState, useEffect } from "react"
import axios from "axios"
import './react.css'



export default function App() {
  const [message, setMessage] = useState('hello re11aaa11ct1111aaaggga')

  useEffect(() => {
    axios.get('/api/comment?sayId=1&offset=0&limit=3').then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <h2 className="react">{message}</h2>
  )
}
