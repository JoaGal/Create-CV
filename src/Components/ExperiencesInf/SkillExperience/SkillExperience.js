import React from "react";
import "./SkillExperience.css";

export const SkillExperience = () => {
  return (
    <div className="skillExperience-box">
      <hr />
      <div className="skillExperience-box1">
        <div className="skillExperience-double1">
          <p className="skillExperience-p">Skill</p>
          <input type="text" className="skillExperience-input" name="skill" />
        </div>
        <div className="skillExperience-double2">
          <p className="skillExperience-p">Level</p>
          <select
            type="text"
            className="skillExperience-select"
            name="skillLevel"
          >
            <option>---</option>
            <option>Expert</option>
            <option>Advanced</option>
            <option>Medium</option>
            <option>Basic</option>
            <option>Beginner</option>
          </select>
        </div>
      </div>
      <button className="skillExperience-button">Save</button>
    </div>
  );
};
