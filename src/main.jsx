import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './components/GifExpertApp.jsx'
import './styles.css'
import { GifGrid } from './components/GifGrid.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
