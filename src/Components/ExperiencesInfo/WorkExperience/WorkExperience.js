import React from "react";
import "./WorkExperience.css";
import PropTypes from "prop-types";

export const WorkExperience = ({ allInformation, setAllInformation}) => {

  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        workExperience:{
          ...allInformation.experiences.workExperience,
          [e.target.name]: e.target.value,
        }
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
            value={allInformation?.experiences?.workExperience?.workstation}
            onChange={handleChange}
          />
        </div>
        <div className="workExperience-double2">
          <p className="workExperience-p">City/Town</p>
          <input
            type="text"
            className="workExperience-input"
            name="city"
            value={allInformation?.experiences?.workExperience?.city}
            onChange={handleChange}
          />
        </div>
      </div>
      <p className="workExperience-p">Employer</p>
      <input
        type="text"
        className="workExperience-input"
        name="employer"
        value={allInformation?.experiences?.workExperience?.employer}
        onChange={handleChange}
      />
      <div className="workExperience-box1">
        <div className="workExperience-double1">
          <p className="workExperience-p">Start date</p>
          <input
            type="date"
            className="workExperience-input"
            name="startWork"
            value={allInformation?.experiences?.workExperience?.startWork}
            onChange={handleChange}
          />
        </div>
        <div className="workExperience-double2">
          <p className="workExperience-p">Finish date</p>
          <input
            type="date"
            className="workExperience-input"
            name="finishWork"
            value={allInformation?.experiences?.workExperience?.finishWork}
            onChange={handleChange}
          />
        </div>
      </div>
      <p className="workExperience-p">Description</p>
      <textarea
        type="text"
        className="workExperience-textarea"
        name="descriptionWork"
        value={allInformation?.experiences?.workExperience?.descriptionWork}
        onChange={handleChange}
      />
      <button className="workExperience-button">Save</button>
    </form>
  );
};

WorkExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
