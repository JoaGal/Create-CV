import React from "react";
import "./StudiesExperience.css";

export const StudiesExperience = () => {
  return (
    <div className="studiesExperience-box">
      <hr />
      <p className="studiesExperience-p">Study</p>
      <input type="text" className="studiesExperience-input" name="study" />
      <div className="studiesExperience-box1">
        <div className="studiesExperience-double1">
          <p className="studiesExperience-p">Start period</p>
          <input
            type="date"
            className="studiesExperience-input"
            name="start-period"
          />
        </div>
        <div className="studiesExperience-double2">
          <p className="studiesExperience-p">¿Finished?</p>
          <select type="text" className="studiesExperience-select" name="finish-period" >
            <option>---</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <p className="studiesExperience-p">Description</p>
      <textarea type="text" className="studiesExperience-textarea" name="description-study" />
      <button className="workExperience-button">Save</button>
    </div>
  );
};
