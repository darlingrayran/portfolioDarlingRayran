//fichero principal en el que se arranca el proyecto de React
// Fichero src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
