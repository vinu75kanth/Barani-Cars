import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'

function AppRouter() {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default AppRouter