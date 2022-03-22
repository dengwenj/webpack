import React, { useState } from "react"
import './react.css'


export default function App() {
  const [message, setMessage] = useState('hello reaaact1111aaaggga')

  return (
    <h2 className="react">{message}</h2>
  )
}
