import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import Header from './components/Header'
import PokemonDetails from './components/PokemonDetails'
import TypeDetails from './components/TypeDetails'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/type/:name" element={<TypeDetails />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
