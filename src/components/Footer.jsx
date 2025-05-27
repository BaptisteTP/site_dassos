import './Footer.css';

function Footer({ isVisible }) {
  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-top">
        <h3>Nos réseaux</h3>
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <p><a href="/mentions-legales">Mentions légales</a></p>
        </div>
        <div className="footer-center">
          <a href="https://www.facebook.com/associationdassos/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/association_dassos_/?hl=fr" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
        </div>
        <div className="footer-right">
          <p><a href="mailto:contact@dassos.com">Nous contacter</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
