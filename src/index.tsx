import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <header>
      <h1>Pokédex</h1>
    </header>
    <App />
  </React.StrictMode>
)