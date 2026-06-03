import './inicio.css';

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__badge">Recursos Humanos Integrales</span>
        <h1 className="hero__title">
          Profesionaliza tu área de<br />
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
