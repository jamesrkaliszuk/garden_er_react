import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './pages/services/services'
import Contact from './pages/contact/contact'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
    </Routes>
</BrowserRouter>
)