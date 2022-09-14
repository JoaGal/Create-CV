import React, { useState } from "react";
import "./ExperiencesInf.css";
import { BsPersonSquare, BsFillBriefcaseFill, BsFillMouse2Fill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";


const title = ["Work experience", "Profile", "Skill", "Languages", "Studies and certifications"];

export const ExperiencesInf = () => {
  const [editSectionName, setEditSectionName] = useState(false);

  const closeEditSectionName = (e) => {
    console.log(e);
    if (!e.target.className.includes("changeSectionName")) {
      setEditSectionName(false);
    }
  };

  return (
    <>
      {editSectionName && (
        <div className="experiencesInf-container" onClick={closeEditSectionName}>
          <div className="experiencesInf-box-open changeSectionName">
            <input type="text" className="experiencesInf-h3 changeSectionName" value="hola" />
          </div>
          <button className="experiencesInf-button-fixed" onClick={closeEditSectionName}>
            X
          </button>
        </div>
      )}
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BsFillBriefcaseFill className="experiencesInf-ico" />
          {title[0]}
        </h3>
        <button onClick={() => setEditSectionName(!editSectionName)}>
          <FaWrench className="experiencesInf-ico-config" />
        </button>
      </div>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BsPersonSquare className="experiencesInf-ico" />
          {title[1]}
        </h3>
        <FaWrench className="experiencesInf-ico-config" />
      </div>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BsFillMouse2Fill className="experiencesInf-ico" />
          {title[2]}
        </h3>
        <FaWrench className="experiencesInf-ico-config" />
      </div>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BiWorld className="experiencesInf-ico" />
          {title[3]}
        </h3>
        <FaWrench className="experiencesInf-ico-config" />
      </div>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <GiGraduateCap className="experiencesInf-ico" />
          {title[4]}
        </h3>
        <FaWrench className="experiencesInf-ico-config" />
      </div>
    </>
  );
};
