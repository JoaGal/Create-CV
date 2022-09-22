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
        {allInformation?.personal?.name} {allInformation?.personal.lastname}
        {allInformation?.personal?.email} {allInformation?.personal?.phone}
        {allInformation?.personal?.address} {allInformation?.personal?.country}
        {allInformation?.personal?.city} {allInformation?.personal?.date}
        {allInformation?.personal?.maritalStatus} {allInformation?.personal?.postalCode}
        {allInformation?.personal?.gender} {allInformation?.personal?.linkedin}
        {allInformation?.personal?.briefcase}
      </p>

      <p>
        {allInformation?.experiences?.workExperience1?.descriptionWork}
        {allInformation?.experiences?.workExperience?.city}
        {allInformation?.experiences?.workExperience?.employer}
        {allInformation?.experiences?.workExperience?.startWork}
        {allInformation?.experiences?.workExperience?.finishWork}
        {allInformation?.experiences?.workExperience?.descriptionWork}
      </p>

      <p>{allInformation?.experiences?.profile?.descriptionProfile}</p>

      <p>
        {allInformation?.experiences?.skill?.skill}
        {allInformation?.experiences?.skill?.skillLevel}
      </p>

      <p>
        {allInformation?.experiences?.lenguages?.lenguage}
        {allInformation?.experiences?.lenguages?.lenguageLevel}
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
