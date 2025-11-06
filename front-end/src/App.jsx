import './App.css'
import Portfolio from './components/Portfolio'
import { Routes, Route } from "react-router";
import Edit from './components/Edit'
import { useState } from 'react'

function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>

    </>
  )
}

export default App
