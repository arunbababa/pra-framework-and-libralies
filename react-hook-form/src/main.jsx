import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from  'react-router'
import RegisterFIeld from './RegisterFIeld.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="register" element={<RegisterFIeld />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
