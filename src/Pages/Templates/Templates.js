import React from "react";
import "./Templates.css";
import {Template1} from "../../Components/Templates/Template1/Template1"
import {Template2} from "../../Components/Templates/Template2/Template2"
import {Template3} from "../../Components/Templates/Template3/Template3"

export const Templates = () => {
  
  const allTemplates = [
    {
      id: 1,
      name: "Harvard",
      templates: <Template1 />
    },
    {
      id: 2,
      name: "Edingburgh",
      templates: <Template2 />
    },
    {
      id: 3,
      name: "Standford",
      templates: <Template3 />
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
              {item.templates}
          </li>
        ))}
      </ul>
    </div>
  );
};
