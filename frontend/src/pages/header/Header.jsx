import { Link } from 'react-router-dom'
import logo from "../../assets/LOGO.png"
import './header.css'

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <nav>
                <Link to="/" className='link-nav-header'>Accueil</Link> {" "}
                <Link to="/about" className='link-nav-header'>A propos</Link> {" "}
            </nav>
        </header>
    )
}

export default Header