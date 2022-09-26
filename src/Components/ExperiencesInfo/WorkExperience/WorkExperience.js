import React from "react";
import { LabelInputButton } from "../../Reusable/LabelInputButton";
import { LabelTextareaButton } from "../../Reusable/LabelTextareaButton";
import PropTypes from "prop-types";
import "./WorkExperience.css";

export const WorkExperience = ({ allInformation, setAllInformation }) => {
  const handleChange = ({ target: { value, name } }) => {
    if (value.trim().length === 1 && value.match(/^[A-Za-z]+$/)) {
      value = value.toUpperCase();
    }
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        workExperience1: {
          ...allInformation.experiences.workExperience1,
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
        workExperience1: {
          ...allInformation.experiences.workExperience1,
          [e.target.name]: "",
        },
      },
    });
  };

  return (
    <form className="workExperience-box">
      <hr />
      <div className="workExperience-box1">
        <LabelInputButton
          id="workstation"
          pathInObject={allInformation.experiences.workExperience1.workstation}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="city"
          pathInObject={allInformation.experiences.workExperience1.city}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
      <LabelInputButton
        id="employer"
        extraClass="w-100"
        pathInObject={allInformation.experiences.workExperience1.employer}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
      <div className="workExperience-box1">
        <LabelInputButton
          id="startWork"
          type="date"
          pathInObject={allInformation.experiences.workExperience1.startWork}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="finishWork"
          type="date"
          pathInObject={allInformation.experiences.workExperience1.finishWork}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
      <LabelTextareaButton
        id="descriptionWork"
        extraClass="w-100"
        pathInObject={allInformation.experiences.workExperience1.descriptionWork}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
    </form>
  );
};

WorkExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
