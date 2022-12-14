import React from "react";
import { Link } from "react-router-dom";
import "./Templates.css";

export const Templates = () => {
  const allTemplates = [
    {
      id: 1,
      name: "Harvard",
      templates: "https://www.cvmaker.com.ar/assets/images/cvs/2/cv-ejemplo-harvard-434a54.jpg",
    },
    {
      id: 2,
      name: "Standford",
      templates: "https://www.cvmaker.com.ar/assets/images/cvs/9/cv-ejemplo-edinburgh-ffc209.jpg",
    },
    {
      id: 3,
      name: "Edingburgh",
      templates: "https://www.cvmaker.com.ar/assets/images/cvs/3/cv-ejemplo-standford-424954.jpg",
    },
  ];

  return (
    <div className="templates-screen">
      <h1 className="templates-title">Examples of professional CV</h1>
      <p className="templates-subtitle">
        Increase your chances of finding a job and build your resume with one of our professionally designed resume
        templates.
      </p>
      <Link to="/createcv">
        <button className="templates-button">Create CV</button>
      </Link>
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
