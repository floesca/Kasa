import { Link } from 'react-router-dom'
import logo from "../assets/LOGO.png"
import '../styles/header.css'

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <nav>
                <Link to="/" className='link-nav-header'>Accueil</Link> {" "}
                <Link to="/about" className='link-nav-header'>A propos</Link> {" "}
            </nav>
        </header>
    )
}

export default Header