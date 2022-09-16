import React from "react";
import "./ProfileExperience.css";

export const ProfileExperience = () => {
  return (
    <div className="profileExperience-box">
      <hr />
      <p className="profileExperience-p">Description of you</p>
      <textarea className="profileExperience-textarea" name="text"></textarea>
      <button className="profileExperience-button">Save</button>
    </div>
  );
};
