import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Template3.css";

export const Template3 = ({ styleScale = "1" }) => {
  const allInformation = JSON.parse(localStorage.getItem("allInformation"));
  useEffect(() => {
    if (window.location.href.includes("template3")) {
      document.title = "Resume";
      setTimeout(() => {
        window.print();
        window.close();
      }, 1000);
    }
  }, []);

  return (
    <div
      id="template3"
      style={{ transform: `scale(${styleScale})`, transformOrigin: `${styleScale === "0.24" ? "0 0" : "center"}` }}
    >
      <img
        className="template-3-img"
        src={allInformation?.personal?.image}
        alt="Profile picture"
        id="pic"
      />
      <p>
        {allInformation?.personal?.name} {allInformation?.personal?.lastName}
        {allInformation?.personal?.email} {allInformation?.personal?.phone}
        {allInformation?.personal?.address} {allInformation?.personal?.country}
        {allInformation?.personal?.city} {allInformation?.personal?.date}
        {allInformation?.personal?.maritalStatus} {allInformation?.personal?.postalCode}
        {allInformation?.personal?.gender} {allInformation?.personal?.linkedin}
        {allInformation?.personal?.briefcase}
      </p>

      <p>
        {allInformation?.experiences?.workExperience1?.workstation}
        {allInformation?.experiences?.workExperience1?.city}
        {allInformation?.experiences?.workExperience1?.employer}
        {allInformation?.experiences?.workExperience1?.startWork}
        {allInformation?.experiences?.workExperience1?.finishWork}
        {allInformation?.experiences?.workExperience1?.descriptionWork}
      </p>
      <p>
        {allInformation?.experiences?.workExperience2?.workstation}
        {allInformation?.experiences?.workExperience2?.city}
        {allInformation?.experiences?.workExperience2?.employer}
        {allInformation?.experiences?.workExperience2?.startWork}
        {allInformation?.experiences?.workExperience2?.finishWork}
        {allInformation?.experiences?.workExperience2?.descriptionWork}
      </p>
      <p>
        {allInformation?.experiences?.workExperience3?.workstation}
        {allInformation?.experiences?.workExperience3?.city}
        {allInformation?.experiences?.workExperience3?.employer}
        {allInformation?.experiences?.workExperience3?.startWork}
        {allInformation?.experiences?.workExperience3?.finishWork}
        {allInformation?.experiences?.workExperience3?.descriptionWork}
      </p>

      <p>{allInformation?.experiences?.profile?.descriptionProfile}</p>

      <p>
        {allInformation?.experiences?.skill?.skill}
        {allInformation?.experiences?.skill?.descriptionSkill}
      </p>

      <p>
        {allInformation?.experiences?.languages1?.language}
        {allInformation?.experiences?.languages1?.languageLevel}
      </p>
      <p>
        {allInformation?.experiences?.languages2?.language}
        {allInformation?.experiences?.languages2?.languageLevel}
      </p>
      <p>
        {allInformation?.experiences?.languages3?.language}
        {allInformation?.experiences?.languages3?.languageLevel}
      </p>

      <p>
        {allInformation?.experiences?.studies?.study}
        {allInformation?.experiences?.studies?.startPeriod}
        {allInformation?.experiences?.studies?.processPeriod}
        {allInformation?.experiences?.studies?.descriptionStudy}
      </p>
    </div>
  );
};

Template3.propTypes = {
  styleScale: PropTypes.string,
  allInformation: PropTypes.object,
};
