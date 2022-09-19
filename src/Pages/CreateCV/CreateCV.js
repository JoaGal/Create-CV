import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";
import { PersonalInf } from "../../Components/PersonalInf/PersonalInf";
import { ExperiencesInf } from "../../Components/ExperiencesInf/ExperiencesInf";
import { TemplatesInf } from "../../Components/Templates/TemplatesInf";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./CreateCV.css";

export const CreateCV = () => {
  const [reference, setReference] = useState(0);
  const [allInformation, setAllInformation] = useLocalStorage("allInformation", {
    personal: {
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
    },
    experiences: {
        title0: "Work experience",
        title1: "Profile",
        title2: "Skill",
        title3: "Languages",
        title4: "Studies and certifications",
      workExperience: {
        workstation: "",
        city: "",
        employer: "",
        startWork: "",
        finishWork: "",
        descriptionWork: "",
      },
      profile: {
        descriptionProfile: "",
      },
      skill: {
        skill: "",
        skillLevel: "",
      },
      lenguages: {
        lenguage: "",
        lenguageLevel: "",
      },
      studies: {
        study: "",
        startPeriod: "",
        processPeriod: "",
        descriptionStudy: "",
      },
    },
  });

  const checkInputs = () => {
    if (allInformation.personal.name.length <= 50) {
      if (allInformation.personal.lastname.length <= 51) {
        if (allInformation.personal.email.length <= 52) {
          if (allInformation.personal.phone.length <= 53) {
            if (allInformation.personal.address.length <= 54) {
              if (allInformation.personal.country.length <= 55) {
                if (allInformation.personal.city.length <= 56) {
                  if (allInformation.personal.maritalStatus.length <= 57) {
                    if (allInformation.personal.postalCode.length <= 58) {
                      if (allInformation.personal.gender.length <= 59) {
                        if (allInformation.personal.linkedin.length <= 60) {
                          if (allInformation.personal.briefcase.length <= 61) {
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
    } else {
      console.log("checkInputs false");
    }
  };

  const navegateIcon = (number) => {
    if (checkInputs() && reference !== number) {
      setReference(number);
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
            onClick={() => {
              navegateIcon(0);
            }}
          />
          <p className="createCV-p">Personal</p>
        </div>
        <div className="createCV-level-box" id="createCV-level-box-mid">
          <FiFileText
            className={`createCV-icon ${reference === 1 && "createCV-icon-active"}`}
            onClick={() => {
              navegateIcon(1);
            }}
          />
          <p className="createCV-p">Experiences</p>
        </div>
        <div className="createCV-level-box">
          <RiPencilFill
            className={`createCV-icon ${reference === 2 && "createCV-icon-active"}`}
            onClick={() => {
              navegateIcon(2);
            }}
          />
          <p className="createCV-p">Template</p>
        </div>
      </div>
      {reference === 0 && (
        <PersonalInf allInformation={allInformation} setAllInformation={setAllInformation} nextStep={nextStep} />
      )}
      {reference === 1 && (
        <ExperiencesInf allInformation={allInformation} setAllInformation={setAllInformation} nextStep={nextStep} />
      )}
      {reference === 2 && <TemplatesInf />}
      <button className="createCV-button" onClick={nextStep}>
        Next step
      </button>
    </div>
  );
};
