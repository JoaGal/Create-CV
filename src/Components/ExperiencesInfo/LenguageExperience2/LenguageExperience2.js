import React from "react";
import { LabelInputButton } from "../../Reusable/LabelInputButton";
import { LabelSelect } from "../../Reusable/LabelSelect";
import PropTypes from "prop-types";

export const LenguageExperience2 = ({ allInformation, setAllInformation }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        lenguages2: {
          ...allInformation.experiences.lenguages2,
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
        lenguages2: {
          ...allInformation.experiences.lenguages2,
          [e.target.name]: "",
        },
      },
    });
  };

  return (
    <div className="lenguageExperience-box">
      <hr />
      <div className="lenguageExperience-box1">
        <LabelInputButton
          id="lenguage"
          pathInObject={allInformation.experiences.lenguages2.lenguage}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelSelect
          id="lenguageLevel"
          options={["A1", "A2", "B1", "B2", "C1", "C2"]}
          pathInObject={allInformation.experiences.lenguages2.lenguageLevel}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
    </div>
  );
};

LenguageExperience2.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
