import { useState } from 'react';
import './contacto.css';

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__container">
        <div className="contacto__info">
          <span className="section-badge contacto__badge">Contacto</span>
          <h2 className="section-title contacto__title">
            Hablemos de tu<br />
            <span className="text-azul">gestión de personas</span>
          </h2>
          <p className="contacto__desc">
            Cuéntanos tu desafío y te ayudamos a encontrar la solución
            más adecuada para tu empresa.
          </p>

          <div className="contacto__datos">
            <div className="dato">
              <span className="dato__icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>contacto@integrasolutions.cl</p>
              </div>
            </div>
            <div className="dato">
              <span className="dato__icon">📱</span>
              <div>
                <strong>WhatsApp</strong>
                <p>+56 9 1234 5678</p>
              </div>
            </div>
            <div className="dato">
              <span className="dato__icon">📍</span>
              <div>
                <strong>Zona de cobertura</strong>
                <p>Chile — Servicios presenciales y remotos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contacto__form-wrap">
          {enviado ? (
            <div className="contacto__success">
              <span>✅</span>
              <h3>¡Mensaje enviado!</h3>
              <p>Te contactaremos a la brevedad. Gracias por tu interés.</p>
            </div>
          ) : (
            <form className="contacto__form" onSubmit={handleSubmit}>
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
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos tu desafío o necesidad..."
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn--submit">
                Enviar mensaje →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
