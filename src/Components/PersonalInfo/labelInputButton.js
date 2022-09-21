import React from "react";

export const labelInputButton = ({ extraClass, allInformation, handleChange, deleteThisInput }) => {
  return (
    <div className={`personalInf-item ${extraClass}`}>
      <label className="personalInf-label" htmlFor="email">
        Email
      </label>
      <input
        className="personalInf-input"
        type="text"
        name="email"
        id="email"
        value={allInformation.personal.email}
        onChange={handleChange}
      />
      {allInformation.personal.email !== "" && (
        <button
          className="personalInf-button-delete-input"
          type="button"
          tabIndex="-1"
          name="email"
          onClick={deleteThisInput}
        >
          x
        </button>
      )}
    </div>
  );
};
