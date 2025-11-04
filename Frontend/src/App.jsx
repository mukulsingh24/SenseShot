import { useState } from 'react'
import Nav1 from './components/navbar'
import Hero from './components/hero'
import Login from './components/login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Submit from './components/submit';
function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <Nav1 />
      <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Home" element={<Hero />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Submit" element={<Submit />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
