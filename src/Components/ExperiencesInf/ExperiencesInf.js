import React from "react";
import "./ExperiencesInf.css";
import { BsPersonSquare, BsFillBriefcaseFill, BsFillMouse2Fill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";

const title = ["Work experience", "Profile", "Skill", "Languages", "Studies and certifications"];

export const ExperiencesInf = () => {
  return (
    <>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BsFillBriefcaseFill className="experiencesInf-ico" />
          {title[0]}
        </h3>
        <FaWrench className="experiencesInf-ico-config" />
      </div>

      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BsFillBriefcaseFill className="experiencesInf-ico" />
          {title[0]}
        </h3>
        <FaWrench className="experiencesInf-ico-config" />
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
