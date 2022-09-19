import React, { useEffect } from "react";
import "./Template1.css";

export const Template1 = ({ styleScale = "1", allInformation = {} }) => {
  useEffect(() => {
    if (window.location.href.includes("template1")) {
      document.title = "Resume";
      setTimeout(() => {
        window.print();
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
        src="https://avatars.githubusercontent.com/u/88043910?v=4"
        alt="Foto de perfil"
        id="pic"
      />

      <div id="contact-info" className="vcard">
        <h1 className="h1">
          {allInformation.personal.name} {allInformation.personal.lastname}
        </h1>

        <p className="p">
          CUIL: 20-43343429-4
          <br />
          Phone: {allInformation.personal.phone}
          <br />
          Address: {allInformation.personal.address}
          <br />
          Email:
          <a className="email a" href={`mailto:${allInformation.personal.email}`}>
            {allInformation.personal.email}
          </a>
          <br />
          Github:
          <a className="linkedin a" href="https://github.com/GiuliannT">
            https://github.com/GiuliannT
          </a>
          <br />
          Linkedin:
          <a className="linkedin a" href="https://www.linkedin.com/in/giulianoconti/">
            https://www.linkedin.com/in/giulianoconti
          </a>
        </p>
      </div>

      <div id="objective">
        <p className="p">
          Soy una persona autodidacta. Me gustan los desafíos. Tengo muchas ganas de unirme a un grupo de trabajo para
          aportar, seguir aprendiendo y crecer con la programación.
        </p>
      </div>

      <div className="clear"></div>

      <dl>
        <dd className="clear dd"></dd>

        <dt className="dt">Educación</dt>
        <dd className="dd">
          <p className="p">
            <strong>Primaria:</strong> Instituto Educativo Privado N° 2 (Arbo y Blanco 470, Resistencia, Chaco)
            <br />
            <strong>Secundaria:</strong> Título de Bachiller - EES N° 76 Colegio Nacional Jose Maria Paz (Av. 9 de Julio
            640, Resistencia, Chaco)
            <br />
            <strong>Universidad:</strong> Primer año aprobado en Ingeniería civil - Facultad de Ingeniería - UNNE (Av.
            Las Heras 727, Resistencia, Chaco)
          </p>
        </dd>

        <dd className="clear dd"></dd>

        <dt className="dt">Habilidades</dt>
        <dd className="dd">
          <h2 className="h2">Habilidades de programación</h2>
          <p className="p">React, HTML5, CSS3, JavaScript y Git</p>

          <h2 className="h2">Habilidades extras</h2>
          <p className="p">
            SketchUp, Software de productividad de Microsoft Office (Word, Excel, etc), Creación de mapas para juegos
            FPS de Valve (Valve Hammer Editor), Linux (Ubuntu), Windows, Bueno googleando y encontrando soluciones a
            diferentes problemas
          </p>
        </dd>

        <dd className="clear dd"></dd>

        <dt className="dt">Certificados</dt>
        <dd className="dd">
          <p className="p">
            Curso de Desarrollo Web - Informatorio (Subsecretaría de Empleo del Chaco - SEC)
            <br />
            Curso de Introducción a la programación - Informatorio (SEC)
            <br />
            Curso Introducción al lenguaje de Programación - EducaciónIT (Alumni Education)
            <br />
            JavaScript for Beginners - The Complete introduction to JS - Udemy
          </p>
        </dd>

        <dd className="clear dd"></dd>

        <dt className="dt">Pasatiempos</dt>
        <dd className="dd">
          <p className="p">
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

        <dd className="clear dd"></dd>
      </dl>

      <div className="clear"></div>
    </div>
  );
};
