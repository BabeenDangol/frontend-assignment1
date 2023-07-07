import { useState } from 'react'

import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Home from './components/Home'
import Products from './components/Products'
import Search from './components/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
