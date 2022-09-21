import React from "react";
import PropTypes from "prop-types";

export const LabelInputButton = ({ id, extraClass, allInformation, handleChange, deleteThisInput }) => {
  return (
    <div className={`personalInf-item ${extraClass}`}>
      <label className="personalInf-label" htmlFor={id}>
        {id[0].toUpperCase() + id.slice(1)}
      </label>
      <input
        className="personalInf-input"
        type="text"
        name={id}
        id={id}
        value={allInformation.personal[id]}
        onChange={handleChange}
      />
      {allInformation.personal[id] !== "" && (
        <button
          className="personalInf-button-delete-input"
          type="button"
          tabIndex="-1"
          name={id}
          onClick={deleteThisInput}
        >
          x
        </button>
      )}
    </div>
  );
};

LabelInputButton.propTypes = {
  id: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  allInformation: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteThisInput: PropTypes.func.isRequired,
};
