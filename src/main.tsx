import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to="/home" replace/>}></Route>
        <Route path="/home" element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
