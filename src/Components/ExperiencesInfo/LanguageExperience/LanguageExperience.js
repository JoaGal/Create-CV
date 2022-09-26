import React from "react";
import { LabelInputButton } from "../../Reusable/LabelInputButton";
import { LabelSelect } from "../../Reusable/LabelSelect";
import PropTypes from "prop-types";
import "./LanguageExperience.css";

export const LanguageExperience = ({ allInformation, setAllInformation }) => {
  const handleChange = ({ target: { value, name } }) => {
    if (value.trim().length === 1 && value.match(/^[A-Za-z]+$/)) {
      value = value.toUpperCase();
    }
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        languages1: {
          ...allInformation.experiences.languages1,
          [name]: value,
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
        languages1: {
          ...allInformation.experiences.languages1,
          [e.target.name]: "",
        },
      },
    });
  };

  return (
    <div className="languageExperience-box">
      <hr />
      <div className="languageExperience-box1">
        <LabelInputButton
          id="language"
          pathInObject={allInformation.experiences.languages1.language}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelSelect
          id="languageLevel"
          options={["A1", "A2", "B1", "B2", "C1", "C2"]}
          pathInObject={allInformation.experiences.languages1.languageLevel}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
    </div>
  );
};

LanguageExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
