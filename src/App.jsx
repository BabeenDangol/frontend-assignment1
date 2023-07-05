import { useState } from 'react'

import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Product from './components/product'
import Home from './components/Home'
function App() {
  return (
    <div>
      <Navbar/>
      
      <Product/>
    </div>
  )
}

export default App
