import React from "react";
import "./StudiesExperience.css";
import PropTypes from "prop-types";

export const StudiesExperience = ({ allInformation, setAllInformation }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        studies:{
          ...allInformation.experiences.studies,
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
        studies:{
          ...allInformation.experiences.studies,
          [e.target.name]: "",
        }
      },
    });
  };

  return (
    <div className="studiesExperience-box">
      <hr />
      <p className="studiesExperience-p">Study</p>
      <input
        type="text"
        className="studiesExperience-input"
        name="study"
        value={allInformation?.experiences?.studies?.study}
        onChange={handleChange}
      />
      {allInformation.experiences.studies.study !== "" && (
              <button
                className="workExperience-button-delete-input"
                type="button"
                name="study"
                onClick={deleteThisInput}
              >
                x
              </button>
            )}
      <div className="studiesExperience-box1">
        <div className="studiesExperience-double1">
          <p className="studiesExperience-p">Start period</p>
          <input
            type="date"
            className="studiesExperience-input"
            name="startPeriod"
            value={allInformation?.experiences?.studies?.startPeriod}
            onChange={handleChange}
          />
        </div>
        <div className="studiesExperience-double2">
          <p className="studiesExperience-p">¿Finished?</p>
          <select
            type="text"
            className="studiesExperience-select"
            name="processPeriod"
            value={allInformation?.experiences?.studies?.processPeriod}
            onChange={handleChange}
          >
            <option>---</option>
            <option>Finished</option>
            <option>Process</option>
          </select>
        </div>
      </div>
      <p className="studiesExperience-p">Description</p>
      <textarea
        type="text"
        className="studiesExperience-textarea"
        name="descriptionStudy"
        value={allInformation?.experiences?.studies?.descriptionStudy}
        onChange={handleChange}
      />
      {allInformation.experiences.studies.descriptionStudy !== "" && (
              <button
                className="workExperience-button-delete-input"
                type="button"
                name="descriptionStudy"
                onClick={deleteThisInput}
              >
                x
              </button>
            )}
      <button className="workExperience-button">Save</button>
    </div>
  );
};

StudiesExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
