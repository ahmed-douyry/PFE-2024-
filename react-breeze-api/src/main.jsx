import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Authprovider } from './context/Authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Authprovider>
    <App />
    </Authprovider>
  </React.StrictMode>,
  </BrowserRouter>
)
