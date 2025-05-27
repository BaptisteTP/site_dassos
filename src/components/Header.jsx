import { Link } from 'react-router-dom';
import reactLogo from '../assets/logo.jpeg'
import './Header.css'

function Header() {
  return (
    <header className="header">
  <div className="logo">
    <img src={reactLogo} alt="Logo" />
  </div>
  <nav className="nav">
    <Link to="/Home">Accueil</Link>
    <a href="#">A propos de nous</a>
    <a href="#">Nous aider</a>
    <Link to="/nos-actions">Nos actions</Link>
  </nav>
  <div className="spacer" /> {/* vide pour équilibrer */}
</header>

  )
}

export default Header
