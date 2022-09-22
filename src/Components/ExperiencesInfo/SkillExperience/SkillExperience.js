import React from "react";
import "./SkillExperience.css";
import PropTypes from "prop-types";

export const SkillExperience = ({ allInformation, setAllInformation, editSectionName }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        skill: {
          ...allInformation.experiences.skill,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const deleteThisInput = (e) => {
    e.preventDefault();
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        skill: {
          ...allInformation.experiences.skill,
          [e.target.name]: "",
        },
      },
    });
  };

  return (
    <div className="skillExperience-box">
      <hr />
      <p className="skillExperience-p">Skills</p>
      <input
        type="text"
        className="skillExperience-input"
        name="skill"
        value={allInformation?.experiences?.skill?.skill}
        onChange={handleChange}
      />
      {allInformation.experiences.skill.skill !== "" && !editSectionName && (
        <button className="workExperience-button-delete-input" type="button" name="skill" onClick={deleteThisInput}>
          x
        </button>
      )}
      <p className="skillExperience-p">Description of you</p>
      <textarea
        className="skillExperience-textarea"
        name="descriptionSkill"
        value={allInformation?.experiences?.skill?.descriptionSkill}
        onChange={handleChange}
      />
      {allInformation.experiences.skill.descriptionSkill !== "" && !editSectionName && (
        <button
          className="workExperience-button-delete-input"
          type="button"
          name="descriptionSkill"
          onClick={deleteThisInput}
        >
          x
        </button>
      )}
    </div>
  );
};

SkillExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
  editSectionName: PropTypes.bool.isRequired,
};
