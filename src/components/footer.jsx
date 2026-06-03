import './footer.css';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

const servicios = [
  'RRHH y Documentos',
  'Remuneraciones',
  'Prevención de Riesgos',
  'Implementación Sistemas',
  'Certificaciones',
];

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h3 className="footer__logo-text">Integra Solutions</h3>
          <p className="footer__tagline">
            Solución integral en Recursos Humanos para profesionalizar y modernizar
            la gestión de personas en tu organización.
          </p>
        </div>

        <div className="footer__col">
          <h4>Navegación</h4>
          <ul>
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Servicios</h4>
          <ul>
            {servicios.map((s) => (
              <li key={s}>
                <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollTo('#servicios'); }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul className="footer__contact-list">
            <li>📧 contacto@integrasolutions.cl</li>
            <li>📱 +56 9 1234 5678</li>
            <li>📍 Chile — Presencial y Remoto</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Integra Solutions. Todos los derechos reservados.</p>
        <p className="footer__credit">Desarrollado por LaHechicera</p>
      </div>
    </footer>
  );
}
