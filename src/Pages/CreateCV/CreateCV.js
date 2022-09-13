import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";
import { PersonalInf } from "../../Components/PersonalInf/PersonalInf";
import { ExperiencesInf } from "../../Components/ExperiencesInf/ExperiencesInf";
import { TemplatesInf } from "../../Components/Templates/TemplatesInf";
import "./CreateCV.css";

export const CreateCV = () => {
  const [reference, setReference] = useState(0);

  const nextStep = () => {
    if (reference < 2) {
      setReference(reference + 1);
    } else {
      setReference(0);
    }
  };

  return (
    <div className="createCV-screen">
      <h2 className="createCV-title">
        {reference === 0 && "Personal information"}
        {reference === 1 && "My experiences"}
        {reference === 2 && "Choose template"}
      </h2>
      <div className="createCV-level">
        <div className="createCV-level-box">
          <BsFillPersonFill
            className={`createCV-icon ${reference === 0 && "createCV-icon-active"}`}
            onClick={() => setReference(0)}
          />
          <p className="createCV-p">Personal</p>
        </div>
        <div className="createCV-level-box" id="createCV-level-box-mid">
          <FiFileText
            className={`createCV-icon ${reference === 1 && "createCV-icon-active"}`}
            onClick={() => setReference(1)}
          />
          <p className="createCV-p">Experiences</p>
        </div>
        <div className="createCV-level-box">
          <RiPencilFill
            className={`createCV-icon ${reference === 2 && "createCV-icon-active"}`}
            onClick={() => setReference(2)}
          />
          <p className="createCV-p">Template</p>
        </div>
      </div>
      {reference === 0 && <PersonalInf />}
      {reference === 1 && <ExperiencesInf />}
      {reference === 2 && <TemplatesInf />}
      <button className="createCV-button" onClick={nextStep}>
        Next step
      </button>
    </div>
  );
};
