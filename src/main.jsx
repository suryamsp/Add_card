import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Top_bar } from "./Top_bar";
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
       <App />
     </BrowserRouter>  
  </React.StrictMode>,
)
