import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Product from './Components/Product'
// import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/products' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
