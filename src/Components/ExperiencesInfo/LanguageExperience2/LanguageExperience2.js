import React from "react";
import { LabelInputButton } from "../../Reusable/LabelInputButton";
import { LabelSelect } from "../../Reusable/LabelSelect";
import PropTypes from "prop-types";

export const LanguageExperience2 = ({ allInformation, setAllInformation }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        languages2: {
          ...allInformation.experiences.languages2,
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
        languages2: {
          ...allInformation.experiences.languages2,
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
          pathInObject={allInformation.experiences.languages2.language}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelSelect
          id="languageLevel"
          options={["A1", "A2", "B1", "B2", "C1", "C2"]}
          pathInObject={allInformation.experiences.languages2.languageLevel}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
    </div>
  );
};

LanguageExperience2.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
