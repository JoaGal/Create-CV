import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";
import { PersonalInfo } from "../../Components/PersonalInfo/PersonalInfo";
import { ExperiencesInfo } from "../../Components/ExperiencesInfo/ExperiencesInfo";
import { TemplatesInfo } from "../../Components/Templates/TemplatesInfo";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./CreateCV.css";

export const CreateCV = () => {
  const [openComponent, setOpenComponent] = useState(0);
  const [allInformation, setAllInformation] = useLocalStorage("allInformation", {
    personal: {
      image: "",
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
      titles: {
        title0: "Work experience",
        title1: "Profile",
        title2: "Skill",
        title3: "Languages",
        title4: "Studies and certifications",
      },
      workExperience: {
        workstation: "",
        city: "",
        employer: "",
        startWork: "",
        finishWork: "",
        descriptionWork: "",
      },
      workExperience2: {
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
      window.scrollTo(0, 0);
      if (openComponent < 2) {
        setOpenComponent(openComponent + 1);
      } else {
        setOpenComponent(0);
      }
    } else {
      alert("Please fill all the inputs");
    }
  };

  const navegateIcon = (number) => {
    if (checkInputs() && openComponent !== number) {
      window.scrollTo(0, 0);
      setOpenComponent(number);
    }
  };

  return (
    <div className="createCV-screen">
      <h2 className="createCV-title">
        {openComponent === 0 && "Personal information"}
        {openComponent === 1 && "My experiences"}
        {openComponent === 2 && "Choose template"}
      </h2>
      <div className="createCV-level">
        <div className="createCV-level-box">
          <BsFillPersonFill
            className={`createCV-icon ${openComponent === 0 && "createCV-icon-active"}`}
            onClick={() => {
              navegateIcon(0);
            }}
          />
          <p className={`createCV-p ${openComponent === 0 && "createCV-p-active"}`}>Personal</p>
        </div>
        <div className="createCV-level-box" id="createCV-level-box-mid">
          <FiFileText
            className={`createCV-icon ${openComponent === 1 && "createCV-icon-active"}`}
            onClick={() => {
              navegateIcon(1);
            }}
          />
          <p className={`createCV-p ${openComponent === 1 && "createCV-p-active"}`}>Experiences</p>
        </div>
        <div className="createCV-level-box">
          <RiPencilFill
            className={`createCV-icon ${openComponent === 2 && "createCV-icon-active"}`}
            onClick={() => {
              navegateIcon(2);
            }}
          />
          <p className={`createCV-p ${openComponent === 3 && "createCV-p-active"}`}>Template</p>
        </div>
      </div>
      {openComponent === 0 && (
        <PersonalInfo allInformation={allInformation} setAllInformation={setAllInformation} nextStep={nextStep} />
      )}
      {openComponent === 1 && (
        <ExperiencesInfo allInformation={allInformation} setAllInformation={setAllInformation} nextStep={nextStep} />
      )}
      {openComponent === 2 && <TemplatesInfo />}
      {openComponent !== 2 && (
        <button className="createCV-button" onClick={nextStep}>
          Next step
        </button>
      )}
    </div>
  );
};
