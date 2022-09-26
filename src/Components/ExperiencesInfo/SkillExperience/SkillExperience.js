import React from "react";
import "./SkillExperience.css";
import PropTypes from "prop-types";
import { LabelInputButton } from "../../Reusable/LabelInputButton";
import { LabelTextareaButton } from "../../Reusable/LabelTextareaButton";

export const SkillExperience = ({ allInformation, setAllInformation }) => {
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
      <LabelInputButton
        id="skill"
        extraClass="w-100"
        pathInObject={allInformation.experiences.skill.skill}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
      <LabelTextareaButton
        id="descriptionSkill"
        extraClass="w-100"
        pathInObject={allInformation.experiences.skill.descriptionSkill}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
    </div>
  );
};

SkillExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
