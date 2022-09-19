import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import "./PersonalInf.css";

export const PersonalInf = ({ allInformation, setAllInformation }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const deleteFormInfo = () => {
    setAllInformation({
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
        workExperience: {
          workstation: "",
          city: "",
          employer: "",
          startWork: "",
          finishWork: "",
          descriptionWork: "",
        },
        profile: {
          title: "",
          descriptionProfile: "",
        },
        skill: {
          title: "",
          skill: "",
          skillLevel: "",
        },
        lenguages: {
          title: "",
          lenguage: "",
          lenguageLevel: "",
        },
        studies: {
          title: "",
          study: "",
          startPeriod: "",
          processPeriod: "",
          descriptionStudy: "",
        },
      },
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setAllInformation({
      ...allInformation,
      personal: {
        ...allInformation.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <form className="personalInf-box">
      <h3 className="personalInf-title">Personal information</h3>
      <button className="personalInf-button-delete-form" type="button" onClick={deleteFormInfo}>
        Delete form
      </button>
      <hr />
      <div className="personalInf-box1">
        <button className="personalInf-button-photo">
          <AiFillCamera className="personalInf-ico-photo" />
          <p className="personalInf-p-photo">Add photo</p>
        </button>
        <div className="personalInf-box1-complete-name">
          <div className="personalInf-name">
            <p className="personalInf-p">Name</p>
            <input
              type="text"
              className="personalInf-input"
              name="name"
              value={allInformation?.personal.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="personalInf-lastname">
            <p className="personalInf-p">Last Name</p>
            <input
              type="text"
              className="personalInf-input"
              name="lastname"
              value={allInformation?.personal.lastname || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="personalInf-box2">
        <div className="personalInf-email">
          <p className="personalInf-p">Email</p>
          <input
            type="text"
            className="personalInf-input"
            name="email"
            value={allInformation?.personal.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="personalInf-number-phone">
          <p className="personalInf-p">Number Phone</p>
          <input
            type="text"
            className="personalInf-input"
            name="phone"
            value={allInformation?.personal.phone || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="personalInf-adress">
        <p className="personalInf-p">Adress</p>
        <input
          type="text"
          className="personalInf-input"
          name="address"
          value={allInformation?.personal.address || ""}
          onChange={handleChange}
        />
      </div>
      <div className="personalInf-box3">
        <div className="personalInf-email">
          <p className="personalInf-p">Country</p>
          <input
            type="text"
            className="personalInf-input"
            name="country"
            value={allInformation?.personal.country || ""}
            onChange={handleChange}
          />
        </div>
        <div className="personalInf-number-phone">
          <p className="personalInf-p">Town/City</p>
          <input
            type="text"
            className="personalInf-input"
            name="city"
            value={allInformation?.personal.city || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      {moreInfo ? (
        <>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">Date of Birth</p>
              <input
                type="date"
                className="personalInf-input"
                name="date"
                value={allInformation?.personal.date || ""}
                onChange={handleChange}
              />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Marital status</p>
              <input
                type="text"
                className="personalInf-input"
                name="maritalStatus"
                value={allInformation?.personal.maritalStatus || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">Postal Code</p>
              <input
                type="text"
                className="personalInf-input"
                name="postalCode"
                value={allInformation?.personal.postalCode || ""}
                onChange={handleChange}
              />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Gender</p>
              <input
                type="text"
                className="personalInf-input"
                name="gender"
                value={allInformation?.personal.gender || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">LinkedIn</p>
              <input
                type="text"
                className="personalInf-input"
                name="linkedin"
                value={allInformation?.personal.linkedin || ""}
                onChange={handleChange}
              />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Briefcase</p>
              <input
                type="text"
                className="personalInf-input"
                name="briefcase"
                value={allInformation?.personal.briefcase || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </>
      ) : null}
      <button className="personalInf-button-more" type="button" onClick={() => setMoreInfo(!moreInfo)}>
        {moreInfo ? (
          <AiOutlineMinusCircle className="personalInf-ico-button" />
        ) : (
          <MdAddCircleOutline className="personalInf-ico-button" />
        )}
        Additional Information
      </button>
    </form>
  );
};

PersonalInf.propTypes = {
  allInformation: PropTypes.object,
  setAllInformation: PropTypes.func,
};
