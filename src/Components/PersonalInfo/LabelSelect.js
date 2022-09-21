import React from "react";
import PropTypes from "prop-types";

export const LabelSelect = ({ id, options, allInformation, handleChange }) => {
  return (
    <div className="personalInf-item">
      <label className="personalInf-label" htmlFor={id}>
        {id[0].toUpperCase() + id.slice(1)}
      </label>
      <select
        className="personalInf-input"
        name={id}
        id={id}
        value={allInformation.personal[id]}
        onChange={handleChange}
      >
        {allInformation.personal[id] === "" && <option value=""></option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option[0].toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

LabelSelect.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  allInformation: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
