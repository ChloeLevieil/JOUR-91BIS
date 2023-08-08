import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Works from './assets/components/Works';
import Navbar from './assets/components/Navbar';
import CardsWorks from './assets/components/CardsWorks'
import './index.css'
import Platon from './assets/components/Platon';
import Sedal from './assets/components/Sedal'
import Solane from './assets/components/Solane'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/cardsworks" element={<CardsWorks />} />
        <Route path="/platon" element={<Platon />} />
        <Route path="/solane" element={<Solane />} />
        <Route path="/sedal" element={<Sedal />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
