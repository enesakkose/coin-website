import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import  { routes }  from './routes'


function App() {


  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <main className="main">
        <div className="routes">
          <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element/>}/>
          ))}
        </Routes>
        </div>
        <Footer/>
      </main>
      
    </div>
  )
}

export default App
