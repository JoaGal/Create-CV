import React from "react";
import "./ProfileExperience.css";
import PropTypes from "prop-types";
import { LabelTextareaButton } from "../../Reusable/LabelTextareaButton";

export const ProfileExperience = ({ allInformation, setAllInformation }) => {
  const handleChange = ({ target: { value, name } }) => {
    if (value.trim().length === 1 && value.match(/^[A-Za-z]+$/)) {
      value = value.toUpperCase();
    }
    setAllInformation({
      ...allInformation,
      experiences: {
        ...allInformation.experiences,
        profile: {
          ...allInformation.experiences.profile,
          [name]: value,
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
