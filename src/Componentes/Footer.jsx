// src/components/Footer.jsx

import React from "react";
import "./Footer.css"; // Importa los estilos para el footer
import Github from "../assets/Github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            © {new Date().getFullYear()} Hecho con 🧡 por Juan Liendo. Todos los
            derechos reservados.
          </p>
        </div>

        <div className="footer-right">
          <a
            href="https://github.com/Juanliendo22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="Github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
