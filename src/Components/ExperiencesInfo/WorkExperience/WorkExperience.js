import React from "react";
import "./WorkExperience.css";
import PropTypes from "prop-types";

export const WorkExperience = ({ allInformation, setAllInformation, editSectionName }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        workExperience1: {
          ...allInformation.experiences.workExperience1,
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
        <div className="workExperience-double1">
          <p className="workExperience-p">Workstation</p>
          <input
            type="text"
            className="workExperience-input"
            name="workstation"
            value={allInformation?.experiences?.workExperience1?.workstation}
            onChange={handleChange}
          />
          {allInformation.experiences.workExperience1.workstation !== "" && !editSectionName && (
            <button
              className="workExperience-button-delete-input"
              type="button"
              name="workstation"
              onClick={deleteThisInput}
            >
              x
            </button>
          )}
        </div>
        <div className="workExperience-double2">
          <p className="workExperience-p">City/Town</p>
          <input
            type="text"
            className="workExperience-input"
            name="city"
            value={allInformation?.experiences?.workExperience1?.city}
            onChange={handleChange}
          />
          {allInformation.experiences.workExperience1.city !== "" && !editSectionName && (
            <button className="workExperience-button-delete-input" type="button" name="city" onClick={deleteThisInput}>
              x
            </button>
          )}
        </div>
      </div>
      <p className="workExperience-p">Employer</p>
      <input
        type="text"
        className="workExperience-input"
        name="employer"
        value={allInformation?.experiences?.workExperience1?.employer}
        onChange={handleChange}
      />
      {allInformation.experiences.workExperience1.employer !== "" && !editSectionName && (
        <button className="workExperience-button-delete-input" type="button" name="employer" onClick={deleteThisInput}>
          x
        </button>
      )}
      <div className="workExperience-box1">
        <div className="workExperience-double1">
          <p className="workExperience-p">Start date</p>
          <input
            type="date"
            className="workExperience-input"
            name="startWork"
            value={allInformation?.experiences?.workExperience1?.startWork}
            onChange={handleChange}
          />
        </div>
        <div className="workExperience-double2">
          <p className="workExperience-p">Finish date</p>
          <input
            type="date"
            className="workExperience-input"
            name="finishWork"
            value={allInformation?.experiences?.workExperience1?.finishWork}
            onChange={handleChange}
          />
        </div>
      </div>
      <p className="workExperience-p">Description</p>
      <textarea
        type="text"
        className="workExperience-textarea"
        name="descriptionWork"
        value={allInformation?.experiences?.workExperience1?.descriptionWork}
        onChange={handleChange}
      />
      {allInformation.experiences.workExperience1.descriptionWork !== "" && !editSectionName && (
        <button
          className="workExperience-button-delete-input"
          type="button"
          name="descriptionWork"
          onClick={deleteThisInput}
        >
          x
        </button>
      )}
    </form>
  );
};

WorkExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
  editSectionName: PropTypes.bool.isRequired,
};
