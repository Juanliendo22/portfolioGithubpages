// src/components/Main.jsx

import React, { useEffect, useState } from "react";
import "./Main.css";
import Yo from "../assets/yo.png";

const Main = () => {
  // Estado para el texto de la máquina de escribir
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en"); // "en" para inglés, "es" para español

  // Texto de la máquina de escribir en diferentes idiomas
  const texts = {
    en: "Hii,\nI’m Juan Liendo\nFrontEnd Developer.",
    es: "Hola,\nSoy Juan Liendo\nDesarrollador FrontEnd.",
  };

  const fullText = texts[language];

  useEffect(() => {
    let index = 0; // Índice de posición del texto
    const typingSpeed = 70; // Velocidad de escritura en ms

    const intervalId = setInterval(() => {
      setText((prevText) => prevText + fullText.charAt(index)); // Añadir un carácter al texto
      index++;
      if (index >= fullText.length) {
        clearInterval(intervalId); // Detener el intervalo cuando se completa el texto
      }
    }, typingSpeed);

    // Limpieza del intervalo en caso de que el componente se desmonte
    return () => clearInterval(intervalId);
  }, [language]);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };

  return (
    <main id="home" className="main-container">
      <div className="containerPrincipal">
        <div className="Text-container">
          <p>
            {text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="Image-container">
          <img src={Yo} alt="Yo" />
        </div>
      </div>

      <a href="/JuanLiendoCurriculum.pdf" download>
        <button>Download my CV</button> {/* Cambiar el enlace a tu CV */}
      </a>
    </main>
  );
};

export default Main;
