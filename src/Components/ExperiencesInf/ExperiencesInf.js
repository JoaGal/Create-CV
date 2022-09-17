import React, { useState } from "react";
import "./ExperiencesInf.css";
import {
  BsPersonSquare,
  BsFillBriefcaseFill,
  BsFillMouse2Fill,
} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { ProfileExperience } from "./ProfileExperience/ProfileExperience";
import { WorkExperience } from "./WorkExperience/WorkExperience";
import { SkillExperience } from "./SkillExperience/SkillExperience";
import { LenguageExperience } from "./LenguageExperience/LenguageExperience";
import { FaRegWindowClose } from "react-icons/fa";

const title = [
  "Work experience",
  "Profile",
  "Skill",
  "Languages",
  "Studies and certifications",
];

export const ExperiencesInf = () => {
  const [editSectionName, setEditSectionName] = useState(false);
  const [reference, setReference] = useState(0);
  const [reference2, setReference2] = useState();

  const closeEditSectionName = (e) => {
    console.log(e);
    if (!e.target.className.includes("changeSectionName")) {
      setEditSectionName(false);
    }
  };

  const openInfo = (e) => {
    if (e.target.id.includes("0")) {
      if (reference2 !== 0) {
        setReference2(0);
      } else {
        setReference2(null);
      }
    } else if (e.target.id.includes("1")) {
      if (reference2 !== 1) {
        setReference2(1);
      } else {
        setReference2(null);
      }
    } else if (e.target.id.includes("2")) {
      if (reference2 !== 2) {
        setReference2(2);
      } else {
        setReference2(null);
      }
    } else if (e.target.id.includes("3")) {
      if (reference2 !== 3) {
        setReference2(3);
      } else {
        setReference2(null);
      }
    } else if (e.target.id.includes("4")) {
      if (reference2 !== 4) {
        setReference2(4);
      } else {
        setReference2(null);
      }
    }
  };

  const changeSectionName = (number) => {
    setReference(number);
    setEditSectionName(true);
  };

  return (
    <>
      {editSectionName && (
        <div
          className="experiencesInf-container"
          onClick={closeEditSectionName}
        >
          <div className="experiencesInf-box-open changeSectionName">
            <input
              type="text"
              className="experiencesInf-input-change changeSectionName"
              name="change"
              placeholder={title[reference]}
            />
          </div>
          <button
            className="experiencesInf-button-fixed"
            onClick={closeEditSectionName}
          >
            X
          </button>
        </div>
      )}
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="0" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="0">
            <BsFillBriefcaseFill className="experiencesInf-ico" />
            {title[0]}
          </h3>
          <button
            onClick={() => {
              changeSectionName(0);
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config" />
          </button>
        </div>
        {reference2 === 0 && <WorkExperience />}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="1" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="1">
            <BsPersonSquare className="experiencesInf-ico" />
            {title[1]}
          </h3>
          <button
            onClick={() => {
              changeSectionName(1);
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config " />
          </button>
        </div>
        {reference2 === 1 && <ProfileExperience />}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="2" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="2">
            <BsFillMouse2Fill className="experiencesInf-ico" />
            {title[2]}
          </h3>
          <button
            onClick={() => {
              changeSectionName(2);
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config " />
          </button>
        </div>
        {reference2 === 2 && <SkillExperience />}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="3" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="3">
            <BiWorld className="experiencesInf-ico" />
            {title[3]}
          </h3>
          <button
            onClick={() => {
              changeSectionName(3);
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config 3" />
          </button>
        </div>
        {reference2 === 3 && <LenguageExperience/>}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="4" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="4">
            <GiGraduateCap className="experiencesInf-ico" />
            {title[4]}
          </h3>
          <button
            onClick={() => {
              changeSectionName(4);
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config" />
          </button>
        </div>
        {reference2 === 4 && <h1>?</h1>}
      </div>
    </>
  );
};
