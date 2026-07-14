import { useState } from 'react';
import { MailCheck, Smartphone, Pin, CheckCheck } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsappUrl } from '../constants';
import './contacto.css';

export default function Contacto() {
  const ACCESS_KEY = '23be5656-dfa8-4b55-9ddc-bc5766b64552';

  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: '',
    tipo_servicio: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Nueva Consulta — ${form.nombre}, ${form.empresa}`,
          from_name: 'Integra Solutions Web',
          ...form,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setEnviado(true);
      } else {
        setError('No pudimos enviar tu mensaje. Inténtalo nuevamente.');
      }
    } catch {
      setError('Hubo un problema de conexión. Revisa tu internet e inténtalo otra vez.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__container">
        <div className="contacto__info">
          <span className="section-badge contacto__badge">Contacto</span>
          <h2 className="section-title contacto__title">
            Hablemos!<br />
            <span className="text-azul">Nos encantaría saber de ti.</span>
          </h2>
          <p className="contacto__desc">
            Cuéntanos tu desafío y te ayudamos a dar con la solución
            más adecuada para tu empresa.
          </p>

          <div className="contacto__datos">
            <div className="dato">
              <span className="dato__icon">
                <MailCheck size={24} color="#3145DD" strokeWidth={1.5} />
              </span>
              <div>
                <strong>Email</strong>
                <p>Disponible próximamente</p>
              </div>
            </div>
            <a
              className="dato dato--link"
              href={whatsappUrl('¡Hola Integra Solutions! me interesaria más información respecto a sus servicios en Recursos Humanos 😁.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dato__icon">
                <Smartphone size={24} color="#18D12E" strokeWidth={1.5} />
              </span>
              <div>
                <strong>WhatsApp</strong>
                <p>{WHATSAPP_DISPLAY}</p>
              </div>
            </a>
            <div className="dato">
              <span className="dato__icon">
                <Pin size={24} color="#FE2929" strokeWidth={1.5} />
              </span>
              <div>
                <strong>Zona de cobertura</strong>
                <p>Servicios presenciales y remotos</p>
                <p>(zona sur: Osorno a Puerto Montt)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contacto__form-wrap">
          {enviado ? (
            <div className="contacto__success">
              <span className="dato__icon">
                <CheckCheck size={60} color="#2CB03C" strokeWidth={1.5} />
              </span>
              <h3>¡Mensaje enviado!</h3>
              <p>Te contactaremos a la brevedad. Gracias por tu interés.</p>
            </div>
          ) : (
            <form className="contacto__form" onSubmit={handleSubmit}>
              {/* Campo honeypot anti-spam: oculto para usuarios reales */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
              />

              <div className="form-row">
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nombre de tu empresa"
                    value={form.empresa}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@empresa.cl"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Servicio de interés</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option>RRHH — Gestión de Documentos</option>
                  <option>Remuneraciones y Previsión</option>
                  <option>Documentación Laboral y Cumplimiento</option>
                  <option>Prevención de Riesgos</option>
                  <option>Implementación de Sistemas</option>
                  <option>Certificación y Plataformas</option>
                  <option>Logística y Operaciones</option>
                  <option>Solución Integral</option>
                </select>

                <label>Modalidad de Servicio</label>
                <select
                  name="tipo_servicio"
                  value={form.tipo_servicio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione de Modalidad</option>
                  <option>Presencial</option>
                  <option>Remoto</option>
                </select>

              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos tu desafío o necesidad..."
                  rows={5}
                  maxLength={1000}
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                />
                <span className="contacto__contador">
                  {form.mensaje.length}/1000
                </span>
              </div>

              {error && <p className="contacto__error">{error}</p>}

              <button type="submit" className="btn btn--submit" disabled={enviando}>
                {enviando ? 'Enviando…' : 'Enviar mensaje →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
