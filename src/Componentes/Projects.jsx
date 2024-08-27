// src/components/Footer.jsx

import React from "react";
import "./Projects.css"; // Importa los estilos para el footer
import tuwebi from "../assets/tuwebi.png";
import Ae from "../assets/Ae.png";
import okto from "../assets/okto.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: tuwebi,
      alt: "Tuwebi Project",
      description:
        "This is a website for a business that creates websites, of which I am one of the team members.",
      url: "https://www.tuwebi.com.ar", // Añade la URL aquí
    },
    {
      id: 2,
      img: okto,
      alt: "Okto Project",
      description:
        "This was a website for a real client from TuWebi, which I had to build from scratch.",
      url: "https://www.oktomedia.com.ar", // Añade la URL aquí
    },
    {
      id: 3,
      img: Ae,
      alt: "Ae Project",
      description: "This is a tool developed for American Express.",
      url: "#", // Añade la URL aquí
    },
  ];

  return (
    <div id="projects" className="ProjectsMain">
      <h3>My projects</h3>
      <div className="ContenedorCajas">
        {projects.map((project) => (
          <div key={project.id} className="Caja">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.alt} />
            </a>
            <div className="Description">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
