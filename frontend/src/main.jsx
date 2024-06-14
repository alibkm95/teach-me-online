import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MenuProvider } from './context/MenuAndCartConext'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
