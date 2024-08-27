import React from "react";
import "./Contenido.css";
import Github from "../assets/Github.png";
import Atom from "../assets/Atom.png";
import Branch from "../assets/Branch.png";
import Css from "../assets/Css.png";
import Figma from "../assets/Figma.png";
import Html5 from "../assets/Html5.png";
import Js from "../assets/Js.png";
import vs from "../assets/vs.png";
import Bootstrap from "../assets/Bootstrap.png";

const skillsData = [
  { name: "Github", level: "70%", img: Github },
  { name: "Branch", level: "50%", img: Branch },
  { name: "VS Code", level: "90%", img: vs },
  { name: "HTML5", level: "90%", img: Html5 },
  { name: "CSS", level: "80%", img: Css },
  { name: "JavaScript", level: "60%", img: Js },
  { name: "Figma", level: "60%", img: Figma },
  { name: "Atom", level: "60%", img: Atom },
  { name: "Bootstrap", level: "70%", img: Bootstrap },
];

const Contenido = () => {
  return (
    <div id="about-me" className="Content">
      <p>
        <strong>About Me</strong>
        <br /> I am a budding web developer passionate about <br />
        creating dynamic web applications. I have experience in JavaScript,
        <br />
        React, HTML, and CSS, and I am continuously learning to improve my
        <br />
        skills. I have also explored Python and Bootstrap to better understand
        <br />
        the tools and frameworks in web development.
        <br />
      </p>
      <div className="skills">
        <h2>My Skills</h2>
        <div className="insignias">
          {skillsData.map((skill) => (
            <div className="skill-container" key={skill.name}>
              <img src={skill.img} alt={skill.name} />
              <div className="skill-bar">
                <div
                  className="skill-bar-inner"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <div className="tooltip">
                <span className="tooltiptext">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contenido;
