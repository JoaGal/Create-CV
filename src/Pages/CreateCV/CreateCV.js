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
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    date: "",
    maritalStatus: "",
    postalCode: "",
    gender: "",
    linkedin: "",
    briefcase: "",
  });

  const checkInputs = () => {
    if (personalInfo.name.length <= 10) {
      if (personalInfo.lastname.length <= 11) {
        if (personalInfo.email.length <= 12) {
          if (personalInfo.phone.length <= 13) {
            if (personalInfo.address.length <= 14) {
              if (personalInfo.country.length <= 15) {
                if (personalInfo.city.length <= 16) {
                  if (personalInfo.maritalStatus.length <= 15) {
                    if (personalInfo.postalCode.length <= 15) {
                      if (personalInfo.gender.length <= 15) {
                        if (personalInfo.linkedin.length <= 35) {
                          if (personalInfo.briefcase.length <= 35) {
                            return true;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return false;
  };


  const nextStep = () => {
    if (checkInputs()) {
      if (reference < 2) {
        setReference(reference + 1);
      } else {
        setReference(0);
      }
    }
  }

  const navegateIcon0 = ()=>{
    if (checkInputs() && reference !== 0) {
      setReference(0)
    }
  }
  const navegateIcon1 = ()=>{
    if (checkInputs() && reference !== 1) {
      setReference(1)
    }
  }
  const navegateIcon2 = ()=>{
    if (checkInputs() && reference !== 2) {
      setReference(2)
    }
  }

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
            className={`createCV-icon ${
              reference === 0 && "createCV-icon-active"
            }`}
            onClick={navegateIcon0}
          />
          <p className="createCV-p">Personal</p>
        </div>
        <div className="createCV-level-box" id="createCV-level-box-mid">
          <FiFileText
            className={`createCV-icon ${
              reference === 1 && "createCV-icon-active"
            }`}
            onClick={navegateIcon1}
          />
          <p className="createCV-p">Experiences</p>
        </div>
        <div className="createCV-level-box">
          <RiPencilFill
            className={`createCV-icon ${
              reference === 2 && "createCV-icon-active"
            }`}
            onClick={navegateIcon2}
          />
          <p className="createCV-p">Template</p>
        </div>
      </div>
      {reference === 0 && (
        <PersonalInf
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          nextStep={nextStep}
        />
      )}
      {reference === 1 && <ExperiencesInf />}
      {reference === 2 && <TemplatesInf />}
      <button className="createCV-button" onClick={nextStep}>
        Next step
      </button>
    </div>
  );
};
