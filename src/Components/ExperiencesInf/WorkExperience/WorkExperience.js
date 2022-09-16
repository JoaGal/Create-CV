import React from "react";
import "./WorkExperience.css";

export const WorkExperience = () => {
  return (
    <div>
        <hr/>
        <div className="personalInf-box1-complete-name">
          <div className="personalInf-name">
            <p className="personalInf-p" >Workstation</p>
            <input type="text" className="personalInf-input" name="name" onChange={handleChange} />
          </div>
          <div className="personalInf-lastname">
            <p className="personalInf-p">City/Town</p>
            <input type="text" className="personalInf-input" name="lastname" onChange={handleChange} />
          </div>
        </div>
    </div>
  )
}
