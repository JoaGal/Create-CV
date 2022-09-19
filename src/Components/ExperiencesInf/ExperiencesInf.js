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
import { StudiesExperience } from "./StudiesExperience/StudiesExperience";
import PropTypes from "prop-types";

export const ExperiencesInf = ({ allInformation, setAllInformation }) => {
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

  console.log(allInformation.experiences.titles)

  const changeSectionName = (name) => {
    setReference(name);
    setEditSectionName(true);
  };

  const changeTitle = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences.titles[reference],
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      {editSectionName && (
        <div
          className="experiencesInf-container"
          onClick={closeEditSectionName}
        >
          <div className="experiencesInf-box-open changeSectionName">
            <input
              type="text"
              className="experiencesInf-input-change changeSectionName"
              name={reference}
              placeholder={"tumama"}
              onChange={changeTitle}
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
            {allInformation?.experiences?.titles?.title0}
          </h3>
          <button
            onClick={() => {
              changeSectionName("title0");
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config" />
          </button>
        </div>
        {reference2 === 0 && (
          <WorkExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
          />
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="1" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="1">
            <BsPersonSquare className="experiencesInf-ico" />
            {allInformation?.experiences?.titles?.title1}
          </h3>
          <button
            onClick={() => {
              changeSectionName("title1");
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config " />
          </button>
        </div>
        {reference2 === 1 && (
          <ProfileExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
          />
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="2" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="2">
            <BsFillMouse2Fill className="experiencesInf-ico" />
            {allInformation?.experiences?.titles?.title2}
          </h3>
          <button
            onClick={() => {
              changeSectionName("title2");
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config " />
          </button>
        </div>
        {reference2 === 2 && (
          <SkillExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
          />
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="3" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="3">
            <BiWorld className="experiencesInf-ico" />
            {allInformation?.experiences?.titles?.title3}
          </h3>
          <button
            onClick={() => {
              changeSectionName("title3");
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config 3" />
          </button>
        </div>
        {reference2 === 3 && (
          <LenguageExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
          />
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" id="4" onClick={openInfo}>
          <h3 className="experiencesInf-h3" id="4">
            <GiGraduateCap className="experiencesInf-ico" />
            {allInformation?.experiences?.titles?.title4}
          </h3>
          <button
            onClick={() => {
              changeSectionName("title4");
            }}
            className="experiencesInf-button-change"
          >
            <FaWrench className="experiencesInf-ico-config" />
          </button>
        </div>
        {reference2 === 4 && (
          <StudiesExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
          />
        )}
      </div>
    </div>
  );
};

ExperiencesInf.propTypes = {
  allInformation: PropTypes.object,
  setAllInformation: PropTypes.func,
};
