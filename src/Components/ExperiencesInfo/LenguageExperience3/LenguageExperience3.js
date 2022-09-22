import React from "react";
import PropTypes from "prop-types";

export const LenguageExperience3 = ({ allInformation, setAllInformation, editSectionName }) => {

  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        lenguages3:{
          ...allInformation.experiences.lenguages3,
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
        lenguages3:{
          ...allInformation.experiences.lenguages3,
          [e.target.name]: "",
        }
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
            value={allInformation?.experiences?.lenguages3?.lenguage}
            onChange={handleChange}
          />
          {allInformation.experiences.lenguages3?.lenguage !== "" && !editSectionName && (
              <button
                className="workExperience-button-delete-input"
                type="button"
                name="lenguage"
                onClick={deleteThisInput}
              >
                x
              </button>
            )}
        </div>
        <div className="lenguageExperience-double2">
          <p className="lenguageExperience-p">Level</p>
          <select
            type="text"
            className="lenguageExperience-select"
            name="lenguageLevel"
            value={allInformation?.experiences?.lenguages3?.lenguageLevel}
            onChange={handleChange}
          >
            {allInformation.experiences.lenguages3?.lenguageLevel !== "" && !editSectionName && (
              <button
                className="workExperience-button-delete-input"
                type="button"
                name="lenguageLevel"
                onClick={deleteThisInput}
              >
                x
              </button>
            )}
            <option></option>
            <option>A1</option>
            <option>A2</option>
            <option>B1</option>
            <option>B1</option>
            <option>B2</option>
            <option>C1</option>
            <option>C2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

LenguageExperience3.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
  editSectionName: PropTypes.object.isRequired,
};