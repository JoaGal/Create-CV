import React from "react";
import "./ProfileExperience.css";
import PropTypes from "prop-types";
import { LabelTextareaButton } from "../../Reusable/LabelTextareaButton";

export const ProfileExperience = ({ allInformation, setAllInformation }) => {
  const handleChange = (e) => {
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        profile: {
          ...allInformation.experiences.profile,
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
        profile: {
          ...allInformation.experiences.profile,
          [e.target.name]: "",
        },
      },
    });
  };

  return (
    <div className="profileExperience-box">
      <hr />
      <LabelTextareaButton
        id="descriptionProfile"
        extraClass="w-100"
        pathInObject={allInformation.experiences.profile.descriptionProfile}
        handleChange={handleChange}
        deleteThisInput={deleteThisInput}
      />
    </div>
  );
};

ProfileExperience.propTypes = {
  allInformation: PropTypes.object.isRequired,
  setAllInformation: PropTypes.func.isRequired,
};
