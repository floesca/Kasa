import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
