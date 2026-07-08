import './nosotros.css';
import { Target, Scale, Wrench } from 'lucide-react';

const pilares = [
  {
    icon: Target,
    titulo: 'Capacitaciones',
    texto:
      'Formamos a tus equipos con herramientas prácticas para enfrentar los desafíos laborales del día a día.',
  },
  {
    icon: Scale,
    titulo: 'Asesoramiento Legal',
    texto:
      'Reducimos riesgos legales asesorando en legislación laboral vigente, contratos y obligaciones previsionales.',
  },
  {
    icon: Wrench,
    titulo: 'Implementación de Sistemas',
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
            <span className="text-azul">RRHH eficiente y digital</span>
          </h2>
          <p className="nosotros__desc">
            Somos un servicio integral en recursos humanos donde abordamos tres dimensiones
            críticas: <strong>capacitaciones</strong>, <strong>asesoría laboral</strong> e{' '}
            <strong>integración de sistemas en recursos humanos</strong>.
          </p>
          <p className="nosotros__desc">
            Fortalecemos la gestión de Recursos Humanos mediante asesoría laboral, control de    remuneraciones y contratos, e implementación de herramientas digitales.
          </p>
          <p className="nosotros__desc">
            <strong>Potenciamos</strong> plataformas como Buk, Talana o SAP SuccessFactors. Ordenamos datos, configuramos procesos y capacitamos equipos para que tu inversión en tecnología genere impacto real.
          </p>
        </div>

        <div className="nosotros__pilares">
          {pilares.map((p) => (
            <div key={p.titulo} className="pilar-card">
              <div className="pilar-card__icon">
                <p.icon size={40} color="#5A66BB" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="pilar-card__titulo">{p.titulo}</h3>
                <p className="pilar-card__texto">{p.texto}</p>
              </div>
            </div>
          ))}

          <div className="nosotros__cta-box">
            <p>¿Listo para <strong>potenciar</strong> tu área de RRHH?</p>
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
