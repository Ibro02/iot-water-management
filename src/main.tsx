import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='com.example.iot_project'>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
)
