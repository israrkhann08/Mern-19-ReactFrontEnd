import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import userAuthContext from './contexts/UserAuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <userAuthContext.Provider value={{abc:"hello"}}>
  <BrowserRouter>
    <App />
 </BrowserRouter>,
 </userAuthContext.Provider>
)
