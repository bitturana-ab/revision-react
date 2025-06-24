import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      {/* all page within this header and footer i.e outlet */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
