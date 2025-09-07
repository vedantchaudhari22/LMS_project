import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/auth-context/index.jsx'
import InstructorProvider from './context/instructor-context/index.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AuthProvider>
      <InstructorProvider>
        <App />
      </InstructorProvider>
    </AuthProvider>
  </BrowserRouter>

)
