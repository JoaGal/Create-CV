import React, { useState } from "react";
import "./ExperiencesInf.css";
import { BsPersonSquare, BsFillBriefcaseFill, BsFillMouse2Fill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";


const title = ["Work experience", "Profile", "Skill", "Languages", "Studies and certifications"];

export const ExperiencesInf = () => {
  const [editSectionName, setEditSectionName] = useState(false);
  const [reference, setReference] = useState(0)

  const closeEditSectionName = (e) => {
    console.log(e);
    if (!e.target.className.includes("changeSectionName")) {
      setEditSectionName(false);
    }
  };

  const changeSectionName = (e)=>{
    if (e.target.id.includes("0")) {
      setReference(0)
    }
    else if (e.target.id.includes("1")) {
      setReference(1)
    }
    else if (e.target.id.includes("2")) {
      setReference(2)
    }
    else if (e.target.id.includes("3")) {
      setReference(3)
    }
    else if (e.target.id.includes("4")) {
      setReference(4)
    }
    setEditSectionName(true);
  }


  return (
    <>
      {editSectionName && (
        <div className="experiencesInf-container" onClick={closeEditSectionName}>
          <div className="experiencesInf-box-open changeSectionName">
            <input type="text" className="experiencesInf-input-change changeSectionName" name="change" placeholder={title[reference]} />
          </div>
          <button className="experiencesInf-button-fixed" onClick={closeEditSectionName}>
            X
          </button>
        </div>
      )}
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BsFillBriefcaseFill className="experiencesInf-ico" />
          {title[0]}
        </h3>
        <button onClick={changeSectionName} id="0" className="experiencesInf-button-change">
          <FaWrench className="experiencesInf-ico-config" id="0" onClick={()=> setReference(0)}/>
        </button>
      </div>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BsPersonSquare className="experiencesInf-ico" />
          {title[1]}
        </h3>
        <button onClick={changeSectionName} id="1" className="experiencesInf-button-change">
          <FaWrench className="experiencesInf-ico-config " id="1" onClick={()=> setReference(1)}/>
        </button>
      </div>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BsFillMouse2Fill className="experiencesInf-ico" />
          {title[2]}
        </h3>
        <button onClick={changeSectionName} id="2" className="experiencesInf-button-change">
          <FaWrench className="experiencesInf-ico-config " id="2" onClick={()=> setReference(2)}/>
        </button>
      </div>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <BiWorld className="experiencesInf-ico" />
          {title[3]}
        </h3>
        <button onClick={changeSectionName} id="3" className="experiencesInf-button-change">
          <FaWrench className="experiencesInf-ico-config 3" id="3" onClick={()=> setReference(3)}/>
        </button>
      </div>
      <div className="experiencesInf-box">
        <h3 className="experiencesInf-h3">
          <GiGraduateCap className="experiencesInf-ico" />
          {title[4]}
        </h3>
        <button onClick={changeSectionName}  id="4" className="experiencesInf-button-change">
          <FaWrench className="experiencesInf-ico-config" id="4" onClick={()=> setReference(4)}/>
        </button>
      </div>
    </>
  );
};
