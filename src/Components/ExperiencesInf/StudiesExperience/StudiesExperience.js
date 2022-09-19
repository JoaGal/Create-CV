import React from "react";
import "./StudiesExperience.css";
import PropTypes from "prop-types";

export const StudiesExperience = ({ allInformation, setAllInformation }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      studies: {
        ...allInformation.experiences.studies,
        [e.target.name]: e.target.value,
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
      <button className="workExperience-button">Save</button>
    </div>
  );
};

StudiesExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
