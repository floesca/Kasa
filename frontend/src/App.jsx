import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'

function Home() {
  return <h1>Page d'accueil</h1>;
}
function About() {
  return <h1>Page À propos</h1>;
}
function Property() {
  return <h1>Détail logement</h1>;
}
function ErrorPage() {
  return <h1>Page non trouvée</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/about">A propos</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
