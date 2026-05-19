import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './pages/header/Header'
import Footer from './pages/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ErrorPage from './pages/error-page/ErrorPage'
import Property from './pages/property/Property'

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
