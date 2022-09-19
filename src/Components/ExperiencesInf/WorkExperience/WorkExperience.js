import React from "react";
import "./WorkExperience.css";

export const WorkExperience = () => {

  return (
    <div className="workExperience-box">
      <hr />
      <div className="workExperience-box1">
        <div className="workExperience-double1">
          <p className="workExperience-p">Workstation</p>
          <input
            type="text"
            className="workExperience-input"
            name="workstation"
          />
        </div>
        <div className="workExperience-double2">
          <p className="workExperience-p">City/Town</p>
          <input type="text" className="workExperience-input" name="city" />
        </div>
      </div>
      <p className="workExperience-p">Employer</p>
      <input type="text" className="workExperience-input" name="employer" />
      <div className="workExperience-box1">
        <div className="workExperience-double1">
          <p className="workExperience-p">Start date</p>
          <input
            type="date"
            className="workExperience-input"
            name="startWork"
          />
        </div>
        <div className="workExperience-double2">
          <p className="workExperience-p">Finish date</p>
          <input type="date" className="workExperience-input" name="finishWork" />
        </div>
      </div>
      <p className="workExperience-p">Description</p>
      <textarea type="text" className="workExperience-textarea" name="descriptionWork" />
      <button className="workExperience-button">Save</button>
    </div>
  );
};
