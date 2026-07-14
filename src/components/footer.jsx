import './footer.css';
import { MailCheck, Smartphone, Pin } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsappUrl } from '../constants';

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
            Solución integral en Recursos Humanos para potenciar y modernizar
            la gestión de personas en tu negocio.
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
            <li>
              <MailCheck size={16} color="#a0cbf6" strokeWidth={1.5} />
              Disponible próximamente
            </li>
            <li>
              <Smartphone size={16} color="#a0cbf6" strokeWidth={1.5} />
              <a
                className="footer__whatsapp"
                href={whatsappUrl('¡Hola Integra Solutions! me interesaria más información respecto a sus servicios en Recursos Humanos 😁.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <Pin size={35} color="#a0cbf6" strokeWidth={1.5} />
              Chile — Presencial y Remoto (zona sur: Osorno a Puerto Montt)
            </li>
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
