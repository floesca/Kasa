import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'


function Property() {
  return <h1>Détail logement</h1>;
}


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
    
  )
}

export default App
