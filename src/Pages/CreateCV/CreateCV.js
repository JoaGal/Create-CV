import React, { useEffect, useState } from "react";
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
      lastName: "",
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
      workExperience1: {
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
      workExperience3: {
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
        descriptionSkill: "",
      },
      languages1: {
        language: "",
        languageLevel: "",
      },
      languages2: {
        language: "",
        languageLevel: "",
      },
      languages3: {
        language: "",
        languageLevel: "",
      },
      studies1: {
        study: "",
        startPeriod: "",
        processPeriod: "",
        descriptionStudy: "",
      },
      studies2: {
        study: "",
        startPeriod: "",
        processPeriod: "",
        descriptionStudy: "",
      },
      studies3: {
        study: "",
        startPeriod: "",
        processPeriod: "",
        descriptionStudy: "",
      },
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextStep = () => {
    window.scrollTo(0, 0);
    setOpenComponent(openComponent + 1);
  };

  const navegateIcon = (number) => {
    if (openComponent !== number) {
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
          <p className={`createCV-p ${openComponent === 2 && "createCV-p-active"}`}>Template</p>
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
