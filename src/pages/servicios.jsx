import { useState } from 'react';
import './servicios.css';

const servicios = [
  {
    id: 'rrhh',
    icon: '📋',
    titulo: 'RRHH',
    subtitulo: 'Gestión de Documentos',
    descripcion:
      'Manejo completo de documentación laboral: contratos, finiquitos, anexos, amonestaciones, certificados, constancias DT y políticas internas.',
    items: [
      'Charlas de inducción',
      'Finiquitos y contratos',
      'Anexos y amonestaciones',
      'Certificados varios RRHH',
      'Constancias laborales DT',
      'Políticas y procedimientos internos',
      'Firmas electrónicas (Rubrika, Control Doc)',
    ],
  },
  {
    id: 'remuneraciones',
    icon: '💰',
    titulo: 'Remuneraciones y Previsión',
    subtitulo: 'Proceso Integral',
    descripcion:
      'Gestión completa del proceso de remuneraciones, libros de sueldo, Previred y trámites previsionales con AFP, AFC y APV.',
    items: [
      'Liquidaciones de sueldo',
      'Libro de remuneraciones electrónico',
      'Centralización contable',
      'Previred: F30, F30-1, DNP',
      'Trámites AFP / AFC / APV',
      'Incorporación CCAF',
      'Informes estadísticos mensuales',
    ],
  },
  {
    id: 'documentos',
    icon: '📁',
    titulo: 'Doc. Laboral y Cumplimiento',
    subtitulo: 'Asesoría Legal',
    descripcion:
      'Asesoría en cumplimiento de la legislación laboral vigente, documentación correcta y gestión de licencias médicas.',
    items: [
      'Asesoría legislación laboral',
      'Licencias médicas (Medipass, Imed)',
      'Emisión facturas y notas de crédito',
      'Roles tributarios y carpetas tributarias',
      'Control documental digital',
      'Reducción de riesgos legales',
    ],
  },
  {
    id: 'prevencion',
    icon: '🦺',
    titulo: 'Prevención de Riesgos',
    subtitulo: 'Seguridad Ocupacional',
    descripcion:
      'Confección e implementación de reglamentos, planes de emergencia y protocolos de seguridad para cumplir con normativa vigente.',
    items: [
      'Reglamento interno RIOHS y RIHS',
      'Constitución Comité Paritario',
      'Plan de Emergencias',
      'Matriz ambiental y de seguridad',
      'Inspecciones y diagnóstico de brechas',
      'Obligación de informar (ODI)',
      'Protocolos COVID y Minsal',
    ],
  },
  {
    id: 'sistemas',
    icon: '💻',
    titulo: 'Implementación de Sistemas',
    subtitulo: 'Software de RRHH',
    descripcion:
      'Ordenamos datos, configuramos procesos y capacitamos equipos para que tu plataforma de RRHH funcione al 100% desde el primer día.',
    items: [
      'Implementación Softland',
      'Implementación Buk',
      'Implementación Transtecnia',
      'Migración y carga de datos',
      'Capacitación a equipos internos',
      'Integración entre plataformas',
    ],
  },
  {
    id: 'certificacion',
    icon: '🏅',
    titulo: 'Certificación y Plataformas',
    subtitulo: 'Bolsa de Trabajo',
    descripcion:
      'Gestión de plataformas de certificación laboral y postulaciones para conectar empresas con el talento correcto.',
    items: [
      'Certificaciones Certilap',
      'Certificaciones Pronexo',
      'Certificaciones Blumar',
      'Certificaciones Zerty',
      'Postulaciones en WhereX',
      'Bolsa de trabajo administrada',
    ],
  },
  {
    id: 'logistica',
    icon: '🚚',
    titulo: 'Logística y Operaciones',
    subtitulo: 'Gestión Operativa',
    descripcion:
      'Apoyo en cotizaciones con proveedores y gestión logística general para optimizar los recursos y operaciones de tu empresa.',
    items: [
      'Cotizaciones con proveedores',
      'Gestión logística general',
      'Coordinación de insumos',
      'Optimización de procesos operativos',
    ],
  },
];

export default function Servicios() {
  const [activo, setActivo] = useState(null);

  return (
    <section id="servicios" className="servicios">
      <div className="servicios__container">
        <div className="servicios__header">
          <span className="section-badge">Nuestros Servicios</span>
          <h2 className="section-title">
            Una solución completa para tu área de{' '}
            <span className="text-azul">Recursos Humanos</span>
          </h2>
          <p className="section-subtitle">
            No vendemos servicios aislados. Entregamos una solución integral que
            profesionaliza y moderniza la gestión de personas en tu organización.
          </p>
        </div>

        <div className="servicios__grid">
          {servicios.map((s) => (
            <div
              key={s.id}
              className={`servicio-card ${activo === s.id ? 'servicio-card--activo' : ''}`}
              onClick={() => setActivo(activo === s.id ? null : s.id)}
            >
              <div className="servicio-card__icon">{s.icon}</div>
              <h3 className="servicio-card__titulo">{s.titulo}</h3>
              <p className="servicio-card__subtitulo">{s.subtitulo}</p>
              <p className="servicio-card__desc">{s.descripcion}</p>

              <div className={`servicio-card__items ${activo === s.id ? 'visible' : ''}`}>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>
                      <span className="check">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="servicio-card__toggle">
                {activo === s.id ? 'Ver menos ↑' : 'Ver detalle ↓'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
