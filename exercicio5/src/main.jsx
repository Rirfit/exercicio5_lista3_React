import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Condicao from './components/Condicao'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Condicao/>
  </StrictMode>,
)
