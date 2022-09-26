import React from "react";
import PropTypes from "prop-types";
import { LabelTextareaButton } from "../../Reusable/LabelTextareaButton";
import { LabelInputButton } from "../../Reusable/LabelInputButton";

export const WorkExperience2 = ({ allInformation, setAllInformation }) => {
  const handleChange = ({ target: { value, name } }) => {
    if (value.trim().length === 1 && value.match(/^[A-Za-z]+$/)) {
      value = value.toUpperCase();
    }
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        workExperience2: {
          ...allInformation.experiences.workExperience2,
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
        workExperience2: {
          ...allInformation.experiences.workExperience2,
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
          pathInObject={allInformation.experiences.workExperience2.workstation}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="city"
          pathInObject={allInformation.experiences.workExperience2.city}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
      <LabelInputButton
        id="employer"
        extraClass="w-100"
        pathInObject={allInformation.experiences.workExperience2.employer}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
      <div className="workExperience-box1">
        <LabelInputButton
          id="startWork"
          type="date"
          pathInObject={allInformation.experiences.workExperience2.startWork}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="finishWork"
          type="date"
          pathInObject={allInformation.experiences.workExperience2.finishWork}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
      <LabelTextareaButton
        id="descriptionWork"
        extraClass="w-100"
        pathInObject={allInformation.experiences.workExperience2.descriptionWork}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
    </form>
  );
};

WorkExperience2.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
