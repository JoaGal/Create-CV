import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Template2.css";

export const Template2 = ({ styleScale = "1" }) => {
  const allInformation = JSON.parse(localStorage.getItem("allInformation"));

  useEffect(() => {
    if (window.location.href.includes("template2")) {
      document.title = "Resume";
      setTimeout(() => {
        window.print();
        window.close();
      }, 1000);
    }
  }, []);

  console.log(allInformation);

  return (
    <div
      id="template2"
      style={{
        transform: `scale(${styleScale})`,
        transformOrigin: `${styleScale === "0.24" ? "0 0" : "center"}`,
      }}
    >
      <div className="template2-sidebar-bg"></div>
      <div className="template2-sidebar">
        <div
          className="template2-photo"
          style={{
            backgroundImage: `url(${allInformation?.personal?.image}) no-repeat`,
            border: "1px solid white",
          }}
        ></div>
        <div className="sidebar-data">
          <h2 className="sidebar-title">Personal</h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <span className="sidebar-label">Nombre</span>
              <br />
              Joaquin Galdeano
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Dirección</span>
              <br />
              Corrientes 1070 <br />
              3500 Resistencia
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Número de teléfono</span>
              <br />
              <span dir="ltr">3624712344</span>
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Correo electrónico</span>
              <br />
              joagalde@gmail.com
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Fecha de nacimiento</span>
              <br />
              05-04-2001
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Lugar de nacimiento</span>
              <br />
              Argentina
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Género</span>
              <br />
              Hombre
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Nacionalidad</span>
              <br />
              Argentina
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Estado civil</span>
              <br />
              Soltero
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">Página web</span>
              <br />
              www.tuhermana.com
            </li>

            <li className="sidebar-item">
              <span className="sidebar-label">LinkedIn</span>
              <br />
              www.tumama.com
            </li>
          </ul>
        </div>
        <div className="sidebar-data">
          <h2 className="sidebar-title">Idiomas</h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <span className="sidebar-label">Ingles</span>
              <span className="sidebar-item-align-right">A2</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="template2-sections">
        <div className="section-name">
          <h1 className="section-h1">Joaquin Galdeano</h1>
        </div>
        <div className="section">
          <div className="section-title">
            <h2 className="section-h2">Experiencia laboral</h2>
          </div>
          <div className="section-time-line-overlay"></div>
          <ol className="section-list">
            <li className="section-item">
              <div className="section-heading-group">
                <div className="section-date">ene 2028 - ene 2021</div>
                <div className="section-heading">
                  <h3 className="section-h3">React Dev</h3>
                </div>
                <div className="section-sub-heading">Homero, Uruguay </div>
              </div>
              <div className="section-content">
                <p className="section-p">
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="section">
          <div className="section-title">
            <h2 className="section-h2">Profile</h2>
          </div>
          <div className="section-content section-content-single-textarea">
            <p className="section-p">
              sapiourheghpofdgshosdhhopdshudshsdhpoiudsfhpohpsdapadspapapiopjosfdPJOPajAPAJOJSDFPODJSVOIMFDJGSVIOFJSDVOIJipjfdgposjghbjg´dfosákgodakgoka´df
            </p>
          </div>
        </div>
        <div className="section">
          <div className="section-title">
            <h2 className="section-h2">Destrezas</h2>
          </div>
          <div className="section-time-line-overlay"></div>
          <div className="section-heading">
            <h3 className="section-h3">React - java</h3>
          </div>
          <div className="section-content">
            <p className="section-p">
              sapiourheghpofdgshosdhhopdshudshsdhpoiudsfhpohpsdapadspapapiopjosfdPJOPajAPAJOJSDFPODJSVOIMFDJGSVIOFJSDVOIJipjfdgposjghbjg´dfosákgodakgoka´df
            </p>
          </div>
        </div>
        <div className="section">
          <div className="section-title">
            <h2>Certificados</h2>
          </div>
          <div className="section-time-line-overlay"></div>
          <ol className="section-list">
            <li className="section-item">
              <div className="section-heading-group">
                <div className="section-date">2016</div>
                <div className="section-heading">
                  <h3 className="section-h3">Programador</h3>
                </div>
                <div className="section-content">
                  <p className="section-p">
                    hgrepáhoerjpoguivdhspopofwejiofejiojfsojoisfjoisfjiosfjoisgfgsgsgsfd
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

Template2.propTypes = {
  styleScale: PropTypes.string,
  allInformation: PropTypes.object,
};
