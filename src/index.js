import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='Services' element={<Services />} />
        <Route path='Contact' element={<Contact />} />
    </Routes>
</BrowserRouter>
)