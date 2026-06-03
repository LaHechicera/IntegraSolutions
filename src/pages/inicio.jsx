import { useEffect, useState } from 'react';
import './inicio.css';
import portada from '../images/portada1.jpg';
import sistema from '../images/sistema1.jpg';
import sistema2 from '../images/sistema2.jpg';

const IMAGENES = [portada, sistema, sistema2];
const INTERVALO_MS = 5000;

export default function Hero() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActual((p) => (p + 1) % IMAGENES.length),
      INTERVALO_MS
    );
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="hero">
      {/* Fondo con slideshow */}
      <div className="hero__bg" aria-hidden="true">
        {IMAGENES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`hero__bg-slide${i === actual ? ' hero__bg-slide--active' : ''}`}
          />
        ))}
      </div>

      {/* Overlay azul que hace la imagen tenue */}
      <div className="hero__overlay" />

      {/* Contenido principal */}
      <div className="hero__content">
        <span className="hero__badge">Recursos Humanos Integrales</span>

        <h1 className="hero__title">
          Potencia tu área de<br />
          <span className="hero__title--accent">Recursos Humanos</span>
        </h1>

        <p className="hero__subtitle">
          Capacitación, asesoría laboral e implementación de sistemas para
          empresas que buscan eficiencia, cumplimiento y crecimiento sostenible.
        </p>

        <div className="hero__actions">
          <button
            className="btn btn--primary"
            onClick={() => scrollTo('#servicios')}
          >
            Ver servicios
          </button>

          <button
            className="btn btn--outline"
            onClick={() => scrollTo('#contacto')}
          >
            Contáctanos
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>+7</strong>
            <span>Áreas de servicio</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>100%</strong>
            <span>Solución integral</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>RRHH</strong>
            <span>Especialistas</span>
          </div>
        </div>
      </div>
    </section>
  );
}