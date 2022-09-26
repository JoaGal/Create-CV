import React from "react";
import PropTypes from "prop-types";
import "./Reusable.css";

export const LabelInputButton = ({ id, extraClass, type, pathInObject, handleChange, deleteThisInput }) => {
  return (
    <div className={`reusable-item ${extraClass}`}>
      <label className="reusable-label" htmlFor={id}>
        {id[0].toUpperCase() +
          id
            .slice(1)
            .replace(/([A-Z])/g, " $1")
            .trim()}
        {(id === "briefcase" || id === "linkedin") && " (URL)"}
      </label>
      <input
        className="reusable-input"
        type={type || "text"}
        maxLength="50"
        name={id}
        id={id}
        value={pathInObject}
        onChange={handleChange}
      />
      {pathInObject !== "" && (
        <button
          className="reusable-button-delete-input"
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
  type: PropTypes.string,
  pathInObject: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteThisInput: PropTypes.func.isRequired,
};
