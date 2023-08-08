import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Works from './assets/components/Works';
import Navbar from './assets/components/Navbar';
import './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
