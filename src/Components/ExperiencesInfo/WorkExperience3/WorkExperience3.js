import React from "react";
import PropTypes from "prop-types";
import { LabelInputButton } from "../../Reusable/LabelInputButton";
import { LabelTextareaButton } from "../../Reusable/LabelTextareaButton";

export const WorkExperience3 = ({ allInformation, setAllInformation }) => {
  const handleChange = ({ target: { value, name } }) => {
    if (value.trim().length === 1 && value.match(/^[A-Za-z]+$/)) {
      value = value.toUpperCase();
    }
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        workExperience3: {
          ...allInformation.experiences.workExperience3,
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
        workExperience3: {
          ...allInformation.experiences.workExperience3,
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
          pathInObject={allInformation.experiences.workExperience3.workstation}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="city"
          pathInObject={allInformation.experiences.workExperience3.city}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
      <LabelInputButton
        id="employer"
        extraClass="w-100"
        pathInObject={allInformation.experiences.workExperience3.employer}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
      <div className="workExperience-box1">
        <LabelInputButton
          id="startWork"
          type="date"
          pathInObject={allInformation.experiences.workExperience3.startWork}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="finishWork"
          type="date"
          pathInObject={allInformation.experiences.workExperience3.finishWork}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
      <LabelTextareaButton
        id="descriptionWork"
        extraClass="w-100"
        pathInObject={allInformation.experiences.workExperience3.descriptionWork}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
    </form>
  );
};

WorkExperience3.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
