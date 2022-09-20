import React, { useState } from "react";
import { BsPersonSquare, BsFillBriefcaseFill, BsFillMouse2Fill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { ProfileExperience } from "./ProfileExperience/ProfileExperience";
import { WorkExperience } from "./WorkExperience/WorkExperience";
import { SkillExperience } from "./SkillExperience/SkillExperience";
import { LenguageExperience } from "./LenguageExperience/LenguageExperience";
import { StudiesExperience } from "./StudiesExperience/StudiesExperience";
import PropTypes from "prop-types";
import "./ExperiencesInfo.css";

export const ExperiencesInfo = ({ allInformation, setAllInformation }) => {
  const [editSectionName, setEditSectionName] = useState(false);
  const [reference, setReference] = useState(0);
  const [reference2, setReference2] = useState();

  const closeEditSectionName = (e) => {
    console.log(e);
    if (!e.target.className.includes("changeSectionName")) {
      setEditSectionName(false);
    }
  };

  const openInfo = (number) => {
    if (reference2 !== number) {
      setReference2(number);
    } else {
      setReference2(null);
    }
  };

  console.log(allInformation);

  const changeSectionName = (name) => {
    setReference(name);
    setEditSectionName(true);
  };

  const changeTitle = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        titles: {
          ...allInformation.experiences.titles,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  return (
    <div>
      {editSectionName && (
        <div className="experiencesInf-container" onClick={closeEditSectionName}>
          <div className="experiencesInf-box-open changeSectionName">
            <input
              type="text"
              className="experiencesInf-input-change changeSectionName"
              name={reference}
              placeholder={allInformation?.experiences.titles[reference]}
              onChange={changeTitle}
            />
          </div>
          <button className="experiencesInf-button-fixed" onClick={closeEditSectionName}>
            X
          </button>
        </div>
      )}
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(0)}>
          <h3 className="experiencesInf-h3">
            <BsFillBriefcaseFill className="experiencesInf-ico" />
            {allInformation?.experiences?.titles.title0}
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
        {reference2 === 0 && <WorkExperience allInformation={allInformation} setAllInformation={setAllInformation} />}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(1)}>
          <h3 className="experiencesInf-h3">
            <BsPersonSquare className="experiencesInf-ico" />
            {allInformation?.experiences?.titles.title1}
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
          <ProfileExperience allInformation={allInformation} setAllInformation={setAllInformation} />
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(2)}>
          <h3 className="experiencesInf-h3">
            <BsFillMouse2Fill className="experiencesInf-ico" />
            {allInformation?.experiences?.titles.title2}
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
        {reference2 === 2 && <SkillExperience allInformation={allInformation} setAllInformation={setAllInformation} />}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(3)}>
          <h3 className="experiencesInf-h3">
            <BiWorld className="experiencesInf-ico" />
            {allInformation?.experiences?.titles.title3}
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
          <LenguageExperience allInformation={allInformation} setAllInformation={setAllInformation} />
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(4)}>
          <h3 className="experiencesInf-h3">
            <GiGraduateCap className="experiencesInf-ico" />
            {allInformation?.experiences?.titles.title4}
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
          <StudiesExperience allInformation={allInformation} setAllInformation={setAllInformation} />
        )}
      </div>
    </div>
  );
};

ExperiencesInfo.propTypes = {
  allInformation: PropTypes.object,
  setAllInformation: PropTypes.func,
};
