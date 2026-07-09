// Datos de contacto centralizados.
// El número va solo con dígitos (código de país incluido), sin +, espacios ni guiones.
export const WHATSAPP_NUMERO = '56949784541';

// Versión legible para mostrar en pantalla.
export const WHATSAPP_DISPLAY = '+56 9 4978 4541';

// Genera un enlace "Click to Chat" de WhatsApp con un mensaje opcional pre-cargado.
export const whatsappUrl = (mensaje = '') =>
  `https://wa.me/${WHATSAPP_NUMERO}${mensaje ? `?text=${encodeURIComponent(mensaje)}` : ''}`;
