import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Pied de page">
      <div className="footer__border" aria-hidden="true" />

      <div className="container">
        <div className="footer__content">
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer__logo" aria-label="mytems.dev">
              <img src="/mytems.png" alt="mytems logo" className="footer__logo-img" onError={(e) => e.target.style.display = 'none'} />
              <span className="footer__logo-text">mytems</span>
              <span className="footer__logo-dot">.dev</span>
            </div>
            <p className="footer__tagline">
              Explorer les algorithmes de l&apos;IA,
              une prompt à la fois.
            </p>
          </motion.div>

          <motion.div
            className="footer__links-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer__links-title">Navigation</h4>
            <nav className="footer__links" aria-label="Liens de navigation du pied de page">
              <Link to="/" className="footer__link">Accueil</Link>
              <Link to="/about" className="footer__link">À propos</Link>
              <Link to="/projects" className="footer__link">Projets</Link>
              <Link to="/code" className="footer__link">Code</Link>
            </nav>
          </motion.div>

          <motion.div
            className="footer__links-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer__links-title">Légal</h4>
            <nav className="footer__links" aria-label="Liens légaux">
              <Link to="/cgu" className="footer__link">CGU</Link>
              <Link to="/mentions-legales" className="footer__link">Mentions Légales</Link>
              <Link to="/confidentialite" className="footer__link">Confidentialité</Link>
            </nav>
          </motion.div>

          <motion.div
            className="footer__links-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer__links-title">Réseaux</h4>
            <nav className="footer__links" aria-label="Liens externes">
              <a
                href="https://mytems.blog"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
                Blog
                <span className="sr-only">(ouvre dans un nouvel onglet)</span>
              </a>
              <a
                href="https://github.com/kirobotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
                <span className="sr-only">(ouvre dans un nouvel onglet)</span>
              </a>
            </nav>
          </motion.div>
        </div>

        <motion.div
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="footer__copyright">
            © {currentYear} mytems.dev — Tous droits réservés.
          </p>
          <p className="footer__made-with">
            Fait par <span className="footer__heart" aria-label="passion">xql.dev</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
