import React, { useState } from "react";
import "./Templates.css";

export const Templates = () => {
   
    const [template1, setTemplate1] = useState("https://www.cvmaker.com.ar/assets/images/cvs/2/cv-ejemplo-harvard-434a54.jpg");
    const [template2, setTemplate2] = useState("https://www.cvmaker.com.ar/assets/images/cvs/3/cv-ejemplo-standford-424954.jpg");
    const [template3, setTemplate3] = useState("https://www.cvmaker.com.ar/assets/images/cvs/9/cv-ejemplo-edinburgh-505577.jpg");

  const allTemplates = [
    {
      id: 1,
      name: "Harvard",
      templates: template1
    },
    {
      id: 2,
      name: "Edingburgh",
      templates: template2
    },
    {
      id: 3,
      name: "Standford",
      templates: template3
    },
  ];


  return (
    <div className="templates-screen">
      <h1 className="templates-title">Examples of professional CV</h1>
      <p className="templates-subtitle">Increase your chances of finding a job and build your resume with one of our professionally designed resume templates.</p>
      <button className="templates-button">Create CV</button>
      <ul className="templates-ul">
      {allTemplates.map((item) => (
          <li className="templates-li" key={item.id}>
              <h2 className="templates-li-h2">{item.name}</h2>
              <img className="templates-li-img" src={item.templates}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};
