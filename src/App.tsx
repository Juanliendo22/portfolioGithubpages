// src/App.tsx
import React, { useEffect, useRef } from "react";
import Nav from "./Componentes/Nav.jsx";
import Main from "./Componentes/Main.jsx";
import Contenido from "./Componentes/Contenido.jsx";
import Projects from "./Componentes/Projects.jsx";
import Contacto from "./Componentes/Contacto.jsx";
import Footer from "./Componentes/Footer.jsx";
import "./App.css"; // Asegúrate de importar tus estilos
import Argentina from "./assets/argentina.png"; // Asegúrate de que la ruta es correcta

const App = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      }
    };
  }, []);

  return (
    <div>
      <img src={Argentina} alt="Argentina" className="center-image" />
      <Nav />
      <div className="fade-in" ref={(el) => sectionsRef.current.push(el)}>
        <Main />
      </div>
      <div className="fade-in" ref={(el) => sectionsRef.current.push(el)}>
        <Contenido />
      </div>
      <div className="fade-in" ref={(el) => sectionsRef.current.push(el)}>
        <Projects />
      </div>
      <div className="fade-in" ref={(el) => sectionsRef.current.push(el)}>
        <Contacto />
      </div>
      <div className="fade-in" ref={(el) => sectionsRef.current.push(el)}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
