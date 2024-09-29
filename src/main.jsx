import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import './index.css'
import StoreContextProvider from './context/StoreContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    <Toaster
      style={{
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      }}
    />
  </StrictMode>,
)
