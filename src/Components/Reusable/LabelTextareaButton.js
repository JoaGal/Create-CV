import React from "react";
import PropTypes from "prop-types";
import "./Reusable.css";

export const LabelTextareaButton = ({ id, extraClass, pathInObject, handleChange, deleteThisInput }) => {
  return (
    <div className={`reusable-item ${extraClass}`}>
      <label className="reusable-label" htmlFor={id}>
        {id[0].toUpperCase() +
          id
            .slice(1)
            .replace(/([A-Z])/g, " $1")
            .trim()}
      </label>
      <textarea className="reusable-textarea" name={id} id={id} value={pathInObject} onChange={handleChange} />
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

LabelTextareaButton.propTypes = {
  id: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  pathInObject: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteThisInput: PropTypes.func.isRequired,
};
