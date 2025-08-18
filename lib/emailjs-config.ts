export const emailjsConfig = {
  // Reemplaza estos valores con los tuyos de EmailJS
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID", 
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

export const emailjsTemplate = {
  // Variables que se envían al template
  variables: {
    from_name: "Nombre del cliente",
    from_email: "Email del cliente", 
    from_phone: "Teléfono del cliente",
    event_type: "Tipo de evento",
    guest_count: "Cantidad de invitados",
    event_date: "Fecha del evento",
    message: "Mensaje del cliente",
  }
};
