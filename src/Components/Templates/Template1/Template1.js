import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Template1.css";

export const Template1 = ({ styleScale = "1" }) => {
  const allInformation = JSON.parse(localStorage.getItem("allInformation"));
  useEffect(() => {
    if (window.location.href.includes("template1")) {
      document.title = "Resume";
      setTimeout(() => {
        window.print();
        window.close();
      }, 1000);
    }
  }, []);

  return (
    <div
      id="template1"
      style={{ transform: `scale(${styleScale})`, transformOrigin: `${styleScale === "0.24" ? "0 0" : "center"}` }}
    >
      <img
        className="template-1-img"
        src={allInformation?.personal?.image}
        alt="Profile picture"
        id="pic"
      />

      <div>
        <h1 className="template-1-h1">
          {allInformation?.personal?.name} {allInformation?.personal?.lastName}
        </h1>

        <p className="template-1-p">
          CUIL: 20-43343429-4
          <br />
          Phone: {allInformation?.personal?.phone}
          <br />
          Address: {allInformation?.personal?.address}
          <br />
          Email:
          <a className="template-1-a" href={`mailto:${allInformation?.personal?.email}`}>
            {allInformation?.personal?.email}
          </a>
          <br />
          Github:
          <a className="template-1-a" href="https://github.com/GiuliannT">
            https://github.com/GiuliannT
          </a>
          <br />
          Linkedin:
          <a className="template-1-a" href="https://www.linkedin.com/in/giulianoconti/">
            https://www.linkedin.com/in/giulianoconti
          </a>
        </p>
      </div>

      <div id="template-1-objective">
        <p className="template-1-objective-p">
          Soy una persona autodidacta. Me gustan los desafíos. Tengo muchas ganas de unirme a un grupo de trabajo para
          aportar, seguir aprendiendo y crecer con la programación.
        </p>
      </div>

      <div className="template-1-clear"></div>

      <dl>
        <dd className="template-1-clear template-1-dd"></dd>

        <dt className="template-1-dt">Educación</dt>
        <dd className="template-1-dd">
          <p className="template-1-p">
            <strong>Primaria:</strong> Instituto Educativo Privado N° 2 (Arbo y Blanco 470, Resistencia, Chaco)
            <br />
            <strong>Secundaria:</strong> Título de Bachiller - EES N° 76 Colegio Nacional Jose Maria Paz (Av. 9 de Julio
            640, Resistencia, Chaco)
            <br />
            <strong>Universidad:</strong> Primer año aprobado en Ingeniería civil - Facultad de Ingeniería - UNNE (Av.
            Las Heras 727, Resistencia, Chaco)
          </p>
        </dd>

        <dd className="template-1-clear template-1-dd"></dd>

        <dt className="template-1-dt">Habilidades</dt>
        <dd className="template-1-dd">
          <h2 className="template-1-h2">Habilidades de programación</h2>
          <p className="template-1-p">React, HTML5, CSS3, JavaScript y Git</p>

          <h2 className="template-1-h2">Habilidades extras</h2>
          <p className="template-1-p">
            SketchUp, Software de productividad de Microsoft Office (Word, Excel, etc), Creación de mapas para juegos
            FPS de Valve (Valve Hammer Editor), Linux (Ubuntu), Windows, Bueno googleando y encontrando soluciones a
            diferentes problemas
          </p>
        </dd>

        <dd className="template-1-clear template-1-dd"></dd>

        <dt className="template-1-dt">Certificados</dt>
        <dd className="template-1-dd">
          <p className="template-1-p">
            Curso de Desarrollo Web - Informatorio (Subsecretaría de Empleo del Chaco - SEC)
            <br />
            Curso de Introducción a la programación - Informatorio (SEC)
            <br />
            Curso Introducción al lenguaje de Programación - EducaciónIT (Alumni Education)
            <br />
            JavaScript for Beginners - The Complete introduction to JS - Udemy
          </p>
          <br />
        </dd>

        <dd className="template-1-clear template-1-dd"></dd>

        <dt className="template-1-dt">Pasatiempos</dt>
        <dd className="template-1-dd">
          <p className="template-1-p">
            Diseñar planos 3D en SketchUp
            <br />
            Juntarme con amigos
            <br />
            Jugar videojuegos
            <br />
            Andar en bicicleta
            <br />
          </p>
        </dd>

        <dd className="template-1-clear template-1-dd"></dd>
      </dl>

      <div className="template-1-clear"></div>
    </div>
  );
};

Template1.propTypes = {
  styleScale: PropTypes.string,
  allInformation: PropTypes.object,
};
