import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Template3.css";
import { FaTelegramPlane } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { BsLinkedin, BsBriefcaseFill } from "react-icons/bs";

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
      style={{
        transform: `scale(${styleScale})`,
        transformOrigin: `${styleScale === "0.24" ? "0 0" : "center"}`,
      }}
    >
      <div
        className={`template3-sidebar-bg  ${window.localStorage.getItem(
          "Color"
        )}`}
      ></div>
      <div className="title-head">
        <h1 className="template3-h1" id={window.localStorage.getItem("Color")}>
          {allInformation?.personal?.name} {allInformation?.personal?.lastName}
        </h1>
      </div>
      <div className="section-head">
        <div
          className="template3-photo"
          style={{
            backgroundImage: `url(${allInformation?.personal?.image})`,
          }}
        ></div>
        <div className="head-personalinf">
          <a
            className="body-personalinf"
            href={`mailto:${allInformation?.personal?.email}`}
          >
            <FaTelegramPlane
              className="body-ico"
            />{" "}
            {allInformation?.personal?.email}
          </a>
          <p className="body-personalinf">
            <ImLocation
              className="body-ico"
            />{" "}
            {allInformation?.personal?.city},{" "}
            {allInformation?.personal?.country} (
            {allInformation?.personal?.postalCode})
          </p>
          <p className="body-personalinf">
            <FaPhoneAlt
              className="body-ico"
            />
            {allInformation?.personal?.phone}
          </p>
          <a
            className="body-personalinf"
            href={allInformation?.personal?.linkedin}
          >
            <BsLinkedin
              className="body-ico"
            />
            {allInformation?.personal?.linkedin}
          </a>
          <a
            className="body-personalinf"
            href={allInformation?.personal?.briefcase}
          >
            <BsBriefcaseFill
              className="body-ico"
            />
            {allInformation?.personal?.briefcase}
          </a>
        </div>
      </div>

      {/* Empieza Experiences */}

      <div className="section-body">
        <div className="section-body-left center">
          <div className="body-title ">
            <h2 className="body-h2">
              {allInformation?.experiences?.titles?.title0}
            </h2>
          </div>
          <div className="section-heading-group">
            <p className="section-p-date">
              {allInformation?.experiences?.workExperience1?.startWork} -{" "}
              {allInformation?.experiences?.workExperience1?.finishWork}
            </p>
            <h3 className="section-h3">
              {allInformation?.experiences?.workExperience1?.workstation}
            </h3>
            <div className="section-sub-heading">
              {allInformation?.experiences?.workExperience1?.employer} (
              {allInformation?.experiences?.workExperience1?.city})
            </div>
          </div>
          <div className="section-content">
            <p className="section-p center">
              {allInformation?.experiences?.workExperience1?.descriptionWork}
            </p>
          </div>
          {allInformation?.experiences?.workExperience2?.workstation && (
            <div className="body-box">
              <div className="section-heading-group paddingTop">
                <p className="section-p-date">
                  {allInformation?.experiences?.workExperience2?.startWork} -{" "}
                  {allInformation?.experiences?.workExperience2?.finishWork}
                </p>
                <div className="section-heading">
                  <h3 className="section-h3">
                    {allInformation?.experiences?.workExperience2?.workstation}
                  </h3>
                </div>
                <div className="section-sub-heading">
                  {allInformation?.experiences?.workExperience2?.employer} (
                  {allInformation?.experiences?.workExperience2?.city})
                </div>
              </div>
              <div className="section-content">
                <p className="section-p center">
                  {
                    allInformation?.experiences?.workExperience2
                      ?.descriptionWork
                  }
                </p>
              </div>
            </div>
          )}
          {allInformation?.experiences?.workExperience3?.workstation && (
            <div className="body-box">
              <div className="section-heading-group paddingTop">
                <p className="section-p-date">
                  {allInformation?.experiences?.workExperience3?.startWork} -{" "}
                  {allInformation?.experiences?.workExperience3?.finishWork}
                </p>
                <div className="section-heading">
                  <h3 className="section-h3">
                    {allInformation?.experiences?.workExperience3?.workstation}
                  </h3>
                </div>
                <div className="section-sub-heading">
                  {allInformation?.experiences?.workExperience3?.employer} (
                  {allInformation?.experiences?.workExperience3?.city})
                </div>
              </div>
              <div className="section-content">
                <p className="section-p center">
                  {
                    allInformation?.experiences?.workExperience3
                      ?.descriptionWork
                  }
                </p>
              </div>
            </div>
          )}
          <div className="body-title">
            <h2 className="body-h2">
              {allInformation?.experiences?.titles?.title2}
            </h2>
          </div>
          <div className="section-heading">
            <h3 className="section-h3">
              {allInformation?.experiences?.skill?.skill}
            </h3>
          </div>
          <div className="section-content">
            <p className="section-p center">
              {allInformation?.experiences?.skill?.descriptionSkill}
            </p>
          </div>
        </div>

        {/* Rigth */}

        <div className="section-body-rigth center">
          <div className="body-title">
            <h2 className="body-h2">
              {allInformation?.experiences?.titles?.title4}
            </h2>
          </div>
          <div className="section-heading-group">
            <p className="section-p-date">
              {allInformation?.experiences?.studies1?.startPeriod} {""}(
              {allInformation?.experiences?.studies1?.processPeriod})
            </p>
            <h3 className="section-h3">
              {allInformation?.experiences?.studies1?.study}
            </h3>
            <div className="section-sub-heading">
              {allInformation?.experiences?.studies1?.descriptionStudy}
            </div>
          </div>
          {allInformation?.experiences?.studies2?.study && (
            <div className="section-heading-group body-box">
              <p className="section-p-date">
                {allInformation?.experiences?.studies2?.startPeriod} {""}(
                {allInformation?.experiences?.studies2?.processPeriod})
              </p>
              <h3 className="section-h3">
                {allInformation?.experiences?.studies2?.study}
              </h3>
              <div className="section-sub-heading">
                {allInformation?.experiences?.studies2?.descriptionStudy}
              </div>
            </div>
          )}
          {allInformation?.experiences?.studies3?.study && (
            <div className="section-heading-group body-box">
              <p className="section-p-date">
                {allInformation?.experiences?.studies3?.startPeriod} {""}(
                {allInformation?.experiences?.studies3?.processPeriod})
              </p>
              <h3 className="section-h3">
                {allInformation?.experiences?.studies3?.study}
              </h3>
              <div className="section-sub-heading">
                {allInformation?.experiences?.studies3?.descriptionStudy}
              </div>
            </div>
          )}
          <div className="body-title">
            <h2 className="body-h2">
              {allInformation?.experiences?.titles?.title1}
            </h2>
          </div>
          <div className="section-content">
            <p className="center">
              {allInformation?.experiences?.profile?.descriptionProfile}
            </p>
          </div>
          <div className="body-title">
            <h2 className="body-h2">
              {allInformation?.experiences?.titles?.title3}
            </h2>
          </div>
          <div className="body-language">
            <p className="body-language-p">
              {allInformation?.experiences?.languages1?.language}
            </p>
            <p className="body-language-p">
              {allInformation?.experiences?.languages1?.languageLevel}
            </p>
          </div>
          {allInformation?.experiences?.languages2?.language && (
            <div className="body-language">
              <p className="body-language-p">
                {allInformation?.experiences?.languages2?.language}
              </p>
              <p className="body-language-p">
                {allInformation?.experiences?.languages2?.languageLevel}
              </p>
            </div>
          )}
          {allInformation?.experiences?.languages3?.language && (
            <div className="body-language">
              <p className="body-language-p">
                {allInformation?.experiences?.languages3?.language}
              </p>
              <p className="body-language-p">
                {allInformation?.experiences?.languages3?.languageLevel}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Template3.propTypes = {
  styleScale: PropTypes.string,
  allInformation: PropTypes.object,
};
