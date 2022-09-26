import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Template2.css";
import { FaTelegramPlane } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { BsLinkedin, BsBriefcaseFill } from "react-icons/bs";

export const Template2 = ({ styleScale = "1" }) => {
  const allInformation = JSON.parse(localStorage.getItem("allInformation"));

  useEffect(() => {
    if (window.location.href.includes("template2")) {
      document.title = "Resume";
      setTimeout(() => {
        window.print();
        window.close();
      }, 1000);
    }
  }, []);

  return (
    <div
      id="template2"
      style={{
        transform: `scale(${styleScale})`,
        transformOrigin: `${styleScale === "0.24" ? "0 0" : "center"}`,
      }}
    >
      <div
        className={`template2-sidebar-bg  ${window.localStorage.getItem(
          "Color"
        )}`}
      ></div>
      <div className="template2-sidebar">
        <div
          className="template2-photo"
          style={{
            backgroundImage: `url(${allInformation?.personal?.image})`,
          }}
        ></div>
        <div className="sidebar-data">
          <h2 className="sidebar-title">
            {allInformation?.experiences?.titles?.title1}
          </h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <span className="sidebar-label">
                {allInformation?.experiences?.profile?.descriptionProfile}
              </span>
            </li>
          </ul>
        </div>
        <div className="sidebar-data">
          <h2 className="sidebar-title">
            {allInformation?.experiences?.titles?.title2}
          </h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <span className="sidebar-label">
                {allInformation?.experiences?.skill?.skill}
              </span>
            </li>
            <li className="sidebar-item">
              <span className="sidebar-label">
                {allInformation?.experiences?.skill?.descriptionSkill}
              </span>
            </li>
          </ul>
        </div>
        <div className="sidebar-data">
          <h2 className="sidebar-title">
            {allInformation?.experiences?.titles?.title3}
          </h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <span className="sidebar-label">
                {allInformation?.experiences?.languages1?.language}
              </span>
              <span className="sidebar-item-align-right">
                {allInformation?.experiences?.languages1?.languageLevel}
              </span>
            </li>
            <li className="sidebar-item">
              <span className="sidebar-label">
                {allInformation?.experiences?.languages2?.language}
              </span>
              <span className="sidebar-item-align-right">
                {allInformation?.experiences?.languages2?.languageLevel}
              </span>
            </li>
            <li className="sidebar-item">
              <span className="sidebar-label">
                {allInformation?.experiences?.languages3?.language}
              </span>
              <span className="sidebar-item-align-right">
                {allInformation?.experiences?.languages3?.languageLevel}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Empieza lo blanco */}

      <div className="template2-sections">
        <div className="section-name">
          <h1 className="section-h1">
            {allInformation?.personal?.name}{" "}
            {allInformation?.personal?.lastName}
          </h1>
        </div>
        <div className="section">
          <a
            className="template2-personal-inf"
            href={`mailto:${allInformation?.personal?.email}`}
          >
            <FaTelegramPlane
              className="section-ico"
              id={window.localStorage.getItem("Color")}
            />{" "}
            {allInformation?.personal?.email}
          </a>
          <p className="section-personal-p">
            <ImLocation
              className="section-ico"
              id={window.localStorage.getItem("Color")}
            />{" "}
            {allInformation?.personal?.city},{" "}
            {allInformation?.personal?.country} (
            {allInformation?.personal?.postalCode})
          </p>
          <p className="section-personal-p">
            <FaPhoneAlt
              className="section-ico"
              id={window.localStorage.getItem("Color")}
            />
            {allInformation?.personal?.phone}
          </p>
          <p className="section-personal-p">
            <BsLinkedin
              className="section-ico"
              id={window.localStorage.getItem("Color")}
            />
            {allInformation?.personal?.linkedin}
          </p>
          <p className="section-personal-p">
            <BsBriefcaseFill
              className="section-ico"
              id={window.localStorage.getItem("Color")}
            />
            {allInformation?.personal?.briefcase}
          </p>
          <div className="section-title">
            <h2 className="section-h2">
              {allInformation?.experiences?.titles?.title0}
            </h2>
          </div>
          <div className="section-time-line-overlay"></div>
          <ol className="section-list">
            <li className="section-item">
              <div className="section-heading-group">
                <p className="section-p-date">
                  {allInformation?.experiences?.workExperience1?.startWork} - {" "}
                  {allInformation?.experiences?.workExperience1?.finishWork}
                </p>
                <div className="section-heading">
                  <h3 className="section-h3">
                    {allInformation?.experiences?.workExperience1?.workstation}
                  </h3>
                </div>
                <div className="section-sub-heading">
                  {allInformation?.experiences?.workExperience1?.employer} (
                  {allInformation?.experiences?.workExperience1?.city})
                </div>
              </div>
              <div className="section-content">
                <p className="section-p">
                  {
                    allInformation?.experiences?.workExperience1
                      ?.descriptionWork
                  }
                </p>
              </div>
            </li>
          </ol>
          {allInformation?.experiences?.workExperience2?.workstation && (
            <ol className="section-list paddingTop">
              <li className="section-item">
                <div className="section-heading-group">
                <p className="section-p-date">
                  {allInformation?.experiences?.workExperience2?.startWork} - {" "}
                  {allInformation?.experiences?.workExperience2?.finishWork}
                </p>
                  <div className="section-heading">
                    <h3 className="section-h3">
                      {
                        allInformation?.experiences?.workExperience2
                          ?.workstation
                      }
                    </h3>
                  </div>
                  <div className="section-sub-heading">
                    {allInformation?.experiences?.workExperience2?.employer} (
                    {allInformation?.experiences?.workExperience2?.city})
                  </div>
                </div>
                <div className="section-content">
                  <p className="section-p">
                    {
                      allInformation?.experiences?.workExperience2
                        ?.descriptionWork
                    }
                  </p>
                </div>
              </li>
            </ol>
          )}
          {allInformation?.experiences?.workExperience3?.workstation && (
            <ol className="section-list paddingTop">
              <li className="section-item">
                <div className="section-heading-group">
                <p className="section-p-date">
                  {allInformation?.experiences?.workExperience3?.startWork} - {" "}
                  {allInformation?.experiences?.workExperience3?.finishWork}
                </p>
                  <div className="section-heading">
                    <h3 className="section-h3">
                      {
                        allInformation?.experiences?.workExperience3
                          ?.workstation
                      }
                    </h3>
                  </div>
                  <div className="section-sub-heading">
                    {allInformation?.experiences?.workExperience3?.employer} (
                    {allInformation?.experiences?.workExperience3?.city})
                  </div>
                </div>
                <div className="section-content">
                  <p className="section-p">
                    {
                      allInformation?.experiences?.workExperience3
                        ?.descriptionWork
                    }
                  </p>
                </div>
              </li>
            </ol>
          )}
        </div>
        <div className="section">
          <div className="section-title">
            <h2 className="section-h2">
              {allInformation?.experiences?.titles?.title4}
            </h2>
          </div>
          <div className="section-time-line-overlay"></div>
          <ol className="section-list">
            <li className="section-item">
              <div className="section-heading-group">
                <p className="section-p-date">
                  {allInformation?.experiences?.studies1?.startPeriod} -{" "}
                  {allInformation?.experiences?.studies1?.processPeriod}
                </p>
                <div className="section-heading">
                  <h3 className="section-h3">
                    {allInformation?.experiences?.studies1?.study}
                  </h3>
                </div>
                <div className="section-content">
                  <p className="section-p">
                    {allInformation?.experiences?.studies1?.descriptionStudy}
                  </p>
                </div>
              </div>
            </li>
          </ol>
          {allInformation?.experiences?.studies2?.study && (
            <ol className="section-list">
              <li className="section-item">
                <div className="section-heading-group">
                  <p className="section-p-date">
                    {allInformation?.experiences?.studies2?.startPeriod} -{" "}
                    {allInformation?.experiences?.studies2?.processPeriod}
                  </p>
                  <div className="section-heading">
                    <h3 className="section-h3">
                      {allInformation?.experiences?.studies2?.study}
                    </h3>
                  </div>
                  <div className="section-content">
                    <p className="section-p">
                      {allInformation?.experiences?.studies2?.descriptionStudy}
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          )}
          {allInformation?.experiences?.studies3?.study && (
            <ol className="section-list">
              <li className="section-item">
                <div className="section-heading-group">
                  <p className="section-p-date">
                    {allInformation?.experiences?.studies3?.startPeriod} -{" "}
                    {allInformation?.experiences?.studies3?.processPeriod}
                  </p>
                  <div className="section-heading">
                    <h3 className="section-h3">
                      {allInformation?.experiences?.studies3?.study}
                    </h3>
                  </div>
                  <div className="section-content">
                    <p className="section-p">
                      {allInformation?.experiences?.studies3?.descriptionStudy}
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

Template2.propTypes = {
  styleScale: PropTypes.string,
  allInformation: PropTypes.object,
};
