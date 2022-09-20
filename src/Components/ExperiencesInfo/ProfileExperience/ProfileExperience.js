import React from "react";
import "./ProfileExperience.css";
import PropTypes from "prop-types";

export const ProfileExperience = ({ allInformation, setAllInformation, editSectionName }) => {

  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        profile:{
          ...allInformation.experiences.profile,
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
        profile:{
          ...allInformation.experiences.profile,
          [e.target.name]: "",
        }
      },
    });
  };

  return (
    <div className="profileExperience-box">
      <hr />
      <p className="profileExperience-p">Description of you</p>
      <textarea
        className="profileExperience-textarea"
        name="descriptionProfile"
        value={allInformation?.experiences?.profile?.descriptionProfile}
        onChange={handleChange}
      />
      {allInformation.experiences.profile.descriptionProfile !== "" && !editSectionName && (
              <button
                className="workExperience-button-delete-input"
                type="button"
                name="descriptionProfile"
                onClick={deleteThisInput}
              >
                x
              </button>
            )}
      <button className="profileExperience-button">Save</button>
    </div>
  );
};

ProfileExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
  editSectionName: PropTypes.object.isRequired,
};
