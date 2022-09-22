import React, { useEffect, useState } from "react";
import { BsPersonSquare, BsFillBriefcaseFill, BsFillMouse2Fill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { ProfileExperience } from "./ProfileExperience/ProfileExperience";
import { WorkExperience } from "./WorkExperience/WorkExperience";
import { SkillExperience } from "./SkillExperience/SkillExperience";
import { LenguageExperience } from "./LenguageExperience/LenguageExperience";
import { LenguageExperience2 } from "./LenguageExperience2/LenguageExperience2";
import { LenguageExperience3 } from "./LenguageExperience3/LenguageExperience3";
import { StudiesExperience } from "./StudiesExperience/StudiesExperience";
import { WorkExperience2 } from "./WorkExperience2/WorkExperience2";
import { WorkExperience3 } from "./WorkExperience3/WorkExperience3";
import PropTypes from "prop-types";
import "./ExperiencesInfo.css";

export const ExperiencesInfo = ({ allInformation, setAllInformation }) => {
  const [editSectionName, setEditSectionName] = useState(false);
  const [title, setTitle] = useState(0);
  const [openBox, setOpenBox] = useState();
  const [moreInf, setMoreInf] = useState(1);
  const [moreInf2, setMoreInf2] = useState(1);

  useEffect(() => {
    allInformation.experiences.workExperience2.workstation && setMoreInf(2);
    allInformation.experiences.workExperience3.workstation && setMoreInf(3);
    allInformation.experiences.lenguages2.lenguage && setMoreInf2(2);
    allInformation.experiences.lenguages3.lenguage && setMoreInf2(3);
  }, []);

  const closeEditSectionName = (e) => {
    if (!e.target.className.includes("changeSectionName")) {
      setEditSectionName(false);
    }
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

  const openInfo = (number) => {
    if (openBox !== number) {
      setOpenBox(number);
    } else {
      setOpenBox(null);
    }
  };

  const changeSectionName = (name) => {
    setTitle(name);
    setEditSectionName(true);
  };

  const openMoreInf = () => {
    if (moreInf < 3 && openBox === 0) {
      setMoreInf(moreInf + 1);
    } else if (moreInf2 < 3 && openBox === 3) {
      setMoreInf2(moreInf2 + 1);
    }
  };

  const deleteLastAdded = (experience, whatItemIsOpen) => {
    if (whatItemIsOpen === "moreInf") {
      experience = experience + moreInf;
      setMoreInf(moreInf - 1);
    } else if (whatItemIsOpen === "moreInf2") {
      experience = experience + moreInf2;
      setMoreInf2(moreInf2 - 1);
    }
    let allInfo = allInformation.experiences[experience];
    Object.keys(allInfo).forEach((key) => {
      allInfo[key] = "";
    });
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        [experience]: allInfo,
      },
    });
  };

  return (
    <>
      {editSectionName && (
        <div className="experiencesInf-container" onClick={closeEditSectionName}>
          <div className="experiencesInf-box-open changeSectionName">
            <input
              type="text"
              className="experiencesInf-input-change changeSectionName"
              name={title}
              placeholder={allInformation?.experiences?.titles[title]}
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
        {openBox === 0 && (
          <WorkExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
        {moreInf > 1 && openBox === 0 && (
          <WorkExperience2
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
        {moreInf > 2 && openBox === 0 && (
          <WorkExperience3
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
        {openBox === 0 && moreInf < 3 && (
          <button className="ExperienceInf-more-button" onClick={openMoreInf}>
            Other Work
          </button>
        )}
        {moreInf > 1 && openBox === 0 && (
          <button
            className="ExperienceInf-closemore-button"
            onClick={() => deleteLastAdded("workExperience", "moreInf")}
          >
            Delete Work
          </button>
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(1)}>
          <h3 className="experiencesInf-h3">
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
        {openBox === 1 && (
          <ProfileExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(2)}>
          <h3 className="experiencesInf-h3">
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
        {openBox === 2 && (
          <SkillExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(3)}>
          <h3 className="experiencesInf-h3">
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
        {openBox === 3 && (
          <LenguageExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
        {moreInf2 > 1 && openBox === 3 && (
          <LenguageExperience2
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
        {moreInf2 > 2 && openBox === 3 && (
          <LenguageExperience3
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
        {openBox === 3 && moreInf2 < 3 && (
          <button className="ExperienceInf-more-button" onClick={openMoreInf}>
            Other Language
          </button>
        )}
        {moreInf2 > 1 && openBox === 3 && (
          <button className="ExperienceInf-closemore-button" onClick={() => deleteLastAdded("lenguages", "moreInf2")}>
            Delete Language
          </button>
        )}
      </div>
      <div className="experiencesInf-box">
        <div className="experiencesInf-box-box" onClick={() => openInfo(4)}>
          <h3 className="experiencesInf-h3">
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
        {openBox === 4 && (
          <StudiesExperience
            allInformation={allInformation}
            setAllInformation={setAllInformation}
            editSectionName={editSectionName}
          />
        )}
      </div>
    </>
  );
};

ExperiencesInfo.propTypes = {
  allInformation: PropTypes.object,
  setAllInformation: PropTypes.func,
};
