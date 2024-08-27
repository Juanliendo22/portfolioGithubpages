import React, { useState } from "react";
import "./Contacto.css"; // Importa los estilos para el formulario de contacto

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const whatsappMessage = `Hola! Mi nombre es ${name}, mi correo electrónico es ${email}. Quisiera decirte: ${message}`;

    // Codifica el mensaje para que sea seguro para usar en una URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Reemplaza con tu número de WhatsApp (incluye el código de país, pero sin el signo '+')
    const phoneNumber = "543512124907"; // Este es tu número en formato internacional (Argentina: +54)

    // Abre WhatsApp con el mensaje precompuesto y el número específico
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="contacto">
      <h2>Contacta Conmigo</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu Mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
};

export default Contacto;
