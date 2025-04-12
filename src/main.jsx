import { createRoot } from 'react-dom/client'
import React from "react"; // ← ОБЯЗАТЕЛЬНО!
import { BrowserRouter } from 'react-router'
import './index.css'
import Routes from './routes/routes'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
)
