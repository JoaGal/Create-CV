import React from "react";
import "./ProfileExperience.css";
import PropTypes from "prop-types";

export const ProfileExperience = ({ allInformation, setAllInformation }) => {

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

  return (
    <div className="profileExperience-box">
      <hr />
      <p className="profileExperience-p">Description of you</p>
      <textarea
        className="profileExperience-textarea"
        name="descriptionProfile"
        value={allInformation?.experiences?.profile?.descriptionProfile}
        onChange={handleChange}
      ></textarea>
      <button className="profileExperience-button">Save</button>
    </div>
  );
};

ProfileExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
