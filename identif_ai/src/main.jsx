import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Temp from './temp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Temp />
  </StrictMode>,
)
