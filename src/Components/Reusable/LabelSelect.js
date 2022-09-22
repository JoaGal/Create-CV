import React from "react";
import PropTypes from "prop-types";
import "./Reusable.css";

export const LabelSelect = ({ id, options, pathInObject, handleChange, deleteThisInput }) => {
  return (
    <div className="reusable-item">
      <label className="reusable-label" htmlFor={id}>
        {id[0].toUpperCase() +
          id
            .slice(1)
            .replace(/([A-Z])/g, " $1")
            .trim()}
      </label>
      <select className="reusable-select" name={id} id={id} value={pathInObject} onChange={handleChange}>
        {pathInObject === "" && <option value=""></option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option[0].toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
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

LabelSelect.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  pathInObject: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteThisInput: PropTypes.func.isRequired,
};
