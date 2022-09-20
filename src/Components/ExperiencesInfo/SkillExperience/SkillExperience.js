import React from "react";
import "./SkillExperience.css";
import PropTypes from "prop-types";

export const SkillExperience = ({ allInformation, setAllInformation }) => {
  
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        skill:{
          ...allInformation.experiences.skill,
          [e.target.name]: e.target.value,
        }
      },
    });
  };

  const deleteThisInput = (e) => {
    e.preventDefault();
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        skill:{
          ...allInformation.experiences.skill,
          [e.target.name]: "",
        }
      },
    });
  };

  return (
    <div className="skillExperience-box">
      <hr />
      <div className="skillExperience-box1">
        <div className="skillExperience-double1">
          <p className="skillExperience-p">Skill</p>
          <input
            type="text"
            className="skillExperience-input"
            name="skill"
            value={allInformation?.experiences?.skill?.skill}
            onChange={handleChange}
          />
          {allInformation.experiences.skill.skill !== "" && (
              <button
                className="workExperience-button-delete-input"
                type="button"
                name="skill"
                onClick={deleteThisInput}
              >
                x
              </button>
            )}
        </div>
        <div className="skillExperience-double2">
          <p className="skillExperience-p">Level</p>
          <select
            type="text"
            className="skillExperience-select"
            name="skillLevel"
            value={allInformation?.experiences?.skill?.skillLevel}
            onChange={handleChange}
          >
            <option>---</option>
            <option>Expert</option>
            <option>Advanced</option>
            <option>Medium</option>
            <option>Basic</option>
            <option>Beginner</option>
          </select>
        </div>
      </div>
      <button className="skillExperience-button">Save</button>
    </div>
  );
};

SkillExperience.propTypes = {
  allInformation: PropTypes.object,
  setAllInformation: PropTypes.func.isRequired,
};
