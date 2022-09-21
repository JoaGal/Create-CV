import React from "react";
import PropTypes from "prop-types";

export const WorkExperience3 = ({ allInformation, setAllInformation, editSectionName }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        workExperience3: {
          ...allInformation.experiences.workExperience3,
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
        <div className="workExperience-double1">
          <p className="workExperience-p">Workstation</p>
          <input
            type="text"
            className="workExperience-input"
            name="workstation"
            value={allInformation?.experiences?.workExperience3?.workstation}
            onChange={handleChange}
          />
          {allInformation.experiences.workExperience3.workstation !== "" &&
            !editSectionName && (
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
            value={allInformation?.experiences?.workExperience3?.city}
            onChange={handleChange}
          />
          {allInformation.experiences.workExperience3.city !== "" &&
            !editSectionName && (
              <button
                className="workExperience-button-delete-input"
                type="button"
                name="city"
                onClick={deleteThisInput}
              >
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
        value={allInformation?.experiences?.workExperience3?.employer}
        onChange={handleChange}
      />
      {allInformation.experiences.workExperience3.employer !== "" &&
        !editSectionName && (
          <button
            className="workExperience-button-delete-input"
            type="button"
            name="employer"
            onClick={deleteThisInput}
          >
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
            value={allInformation?.experiences?.workExperience3?.startWork}
            onChange={handleChange}
          />
        </div>
        <div className="workExperience-double2">
          <p className="workExperience-p">Finish date</p>
          <input
            type="date"
            className="workExperience-input"
            name="finishWork"
            value={allInformation?.experiences?.workExperience3?.finishWork}
            onChange={handleChange}
          />
        </div>
      </div>
      <p className="workExperience-p">Description</p>
      <textarea
        type="text"
        className="workExperience-textarea"
        name="descriptionWork"
        value={allInformation?.experiences?.workExperience3?.descriptionWork}
        onChange={handleChange}
      />
      {allInformation.experiences.workExperience3.descriptionWork !== "" &&
        !editSectionName && (
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

WorkExperience3.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
  editSectionName: PropTypes.object.isRequired,
};