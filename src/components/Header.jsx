import { Link } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from '../assets/logo.jpeg';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={reactLogo} alt="Logo" />
      </div>

      <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Accueil</Link>
        <Link to="#">A propos de nous</Link>
        <Link to="#">Nous aider</Link>
        <Link to="/nos-actions">Nos actions</Link>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
