import React from "react";
import "./StudiesExperience.css";
import PropTypes from "prop-types";
import { LabelInputButton } from "../../Reusable/LabelInputButton";
import { LabelSelect } from "../../Reusable/LabelSelect";
import { LabelTextareaButton } from "../../Reusable/LabelTextareaButton";

export const StudiesExperience = ({ allInformation, setAllInformation }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        studies1: {
          ...allInformation.experiences.studies1,
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
        studies1: {
          ...allInformation.experiences.studies1,
          [e.target.name]: "",
        },
      },
    });
  };

  return (
    <div className="studiesExperience-box">
      <hr />
      <LabelInputButton
        id="study"
        extraClass="w-100"
        pathInObject={allInformation.experiences.studies1.study}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
      <div className="studiesExperience-box1">
        <LabelInputButton
          id="startPeriod"
          type="date"
          pathInObject={allInformation.experiences.studies1.startPeriod}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelSelect
          id="processPeriod"
          options={["finished", "process"]}
          pathInObject={allInformation.experiences.studies1.processPeriod}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
      </div>
      <LabelTextareaButton
        id="descriptionStudy"
        extraClass="w-100"
        pathInObject={allInformation.experiences.studies1.descriptionStudy}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
    </div>
  );
};

StudiesExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
