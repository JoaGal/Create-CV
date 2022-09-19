import React from "react";
import "./LenguageExperience.css";
import PropTypes from "prop-types";

export const LenguageExperience = ({ allInformation, setAllInformation }) => {

  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      lenguages: {
        ...allInformation.experiences.lenguages,
        [e.target.name]: e.target.value,
      },
    });
  };

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
            value={allInformation?.experiences?.LenguageExperience?.lenguage}
            onChange={handleChange}
          />
        </div>
        <div className="lenguageExperience-double2">
          <p className="lenguageExperience-p">Level</p>
          <select
            type="text"
            className="lenguageExperience-select"
            name="lenguageLevel"
            value={allInformation?.experiences?.LenguageExperience?.lenguageLevel}
            onChange={handleChange}
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

LenguageExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
