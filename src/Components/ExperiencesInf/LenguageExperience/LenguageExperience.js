import React from "react";
import "./LenguageExperience.css";

export const LenguageExperience = () => {
  return (
    <div className="lenguageExperience-box">
      <hr />
      <div className="lenguageExperience-box1">
        <div className="lenguageExperience-double1">
          <p className="lenguageExperience-p">Lenguage</p>
          <input
            type="text"
            className="lenguageExperience-input"
            name="lenguage"
          />
        </div>
        <div className="lenguageExperience-double2">
          <p className="lenguageExperience-p">Level</p>
          <select
            type="text"
            className="lenguageExperience-select"
            name="lenguage-level"
          >
            <option>---</option>
            <option>C1-C2</option>
            <option>B2</option>
            <option>B1</option>
            <option>A2-B1</option>
            <option>A1-A2</option>
            <option>A0</option>
          </select>
        </div>
      </div>
      <button className="lenguageExperience-button">Save</button>
    </div>
  );
};
