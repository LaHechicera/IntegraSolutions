import { useState, useEffect } from 'react';
import Logo from '../assets/IntegraSolutionLogo.png';
import './navbar.css';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        <img src={Logo} alt="Integra Solutions" />
      </div>

      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={(e) => handleLink(e, href)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contacto"
            className="navbar__cta"
            onClick={(e) => handleLink(e, '#contacto')}
          >
            Cotiza ahora
          </a>
        </li>
      </ul>
    </nav>
  );
}
