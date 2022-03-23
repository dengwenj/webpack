import React, { useState, useEffect } from "react"
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from "axios"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

import './react.css'



export default function App() {
  const [message, setMessage] = useState('hello re11aaa11ct1111aaaggga')

  useEffect(() => {
    axios.get('/api/comment?sayId=1&offset=0&limit=3').then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <BrowserRouter>
      <div>
        <Link to={'/home'}>首页</Link>
        <Link to={'/about'}>关于</Link>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        
        <h2 className="react">{message}</h2>
      </div>
    </BrowserRouter>
    
    
  )
}
