import '../styles/error-page.css'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='error-message'>
        <h1>404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className='link-nav-header'>Retourner sur la page d'accueil</Link> {" "}
    </div>
  )
  
}

export default ErrorPage