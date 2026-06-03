import './nosotros.css';

const pilares = [
  {
    icon: '🎯',
    titulo: 'Capacitación',
    texto:
      'Formamos a tus equipos con herramientas prácticas para enfrentar los desafíos laborales del día a día.',
  },
  {
    icon: '⚖️',
    titulo: 'Asesoría Legal',
    texto:
      'Reducimos riesgos legales asesorando en legislación laboral vigente, contratos y obligaciones previsionales.',
  },
  {
    icon: '🔧',
    titulo: 'Implementación',
    texto:
      'Configuramos y potenciamos plataformas como Buk, Softland y Talana para que funcionen a su máximo rendimiento.',
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros__container">
        <div className="nosotros__text">
          <span className="section-badge nosotros__badge">Quiénes Somos</span>
          <h2 className="section-title">
            Integra Solutions:<br />
            <span className="text-azul">RRHH sin fronteras</span>
          </h2>
          <p className="nosotros__desc">
            Somos un servicio integral en recursos humanos que aborda tres dimensiones
            críticas: <strong>capacitación</strong>, <strong>asesoría laboral</strong> e{' '}
            <strong>implementación de sistemas</strong>.
          </p>
          <p className="nosotros__desc">
            Nuestro valor reside en resolver problemas reales de las empresas: el
            desconocimiento de la legislación laboral, la mala gestión de remuneraciones y
            contratos, y la baja adopción de herramientas digitales.
          </p>
          <p className="nosotros__desc">
            No competimos con plataformas como Buk, Talana o SAP SuccessFactors.
            Las <strong>potenciamos</strong>. Ordenamos datos, configuramos procesos y
            capacitamos equipos para que tu inversión en tecnología genere impacto real.
          </p>
        </div>

        <div className="nosotros__pilares">
          {pilares.map((p) => (
            <div key={p.titulo} className="pilar-card">
              <div className="pilar-card__icon">{p.icon}</div>
              <div>
                <h3 className="pilar-card__titulo">{p.titulo}</h3>
                <p className="pilar-card__texto">{p.texto}</p>
              </div>
            </div>
          ))}

          <div className="nosotros__cta-box">
            <p>¿Listo para profesionalizar tu área de RRHH?</p>
            <button
              className="btn btn--primary-dark"
              onClick={() =>
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Conversemos →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
