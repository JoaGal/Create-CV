import React from "react";
import "./PersonalInf.css";
import { AiFillCamera } from "react-icons/ai";

export const PersonalInf = () => {
  return (
    <div className="personalInf-box">
      <h3 className="personalInf-title">Personal information</h3>
      <hr />
      <div className="personalInf-box1">
        <button className="personalInf-button-photo">
          <AiFillCamera className="personalInf-ico-photo" />
          <p className="personalInf-p-photo">Add photo</p>
        </button>
        <div className="personalInf-box1-complete-name">
          <div className="personalInf-box1-name">
            <p className="personalInf-p">Name*</p>
            <input type="text" className="personalInf-input-complete-name" />
          </div>
          <div className="personalInf-box1-lastname">
            <p className="personalInf-p">Last Name*</p>
            <input type="text" className="personalInf-input-complete-name" />
          </div>
        </div>
      </div>
    </div>
  );
};
