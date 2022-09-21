import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import "./PersonalInfo.css";

export const PersonalInfo = ({ allInformation, setAllInformation }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const saveImageInLocalStorageFileBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setAllInformation({
        ...allInformation,
        personal: {
          ...allInformation.personal,
          image: reader.result,
        },
      });
    };
  };

  const deleteFormInfo = () => {
    setAllInformation({
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

  const deleteThisInput = (e) => {
    e.preventDefault();
    setAllInformation({
      ...allInformation,
      personal: {
        ...allInformation.personal,
        [e.target.name]: "",
      },
    });
  };

  const handleAdditionalInfo = () => {
    setMoreInfo(!moreInfo);
  };

  return (
    <form className="personalInf-box">
      <div className="personalInf-box-flex">
        <h3 className="personalInf-title">Personal Information</h3>
        <button className="personalInf-button-delete-form" type="button" onClick={deleteFormInfo}>
          Delete Form
        </button>

        <label className="personalInf-button-img" htmlFor="file">
          {!allInformation.personal.image && (
            <>
              <AiFillCamera size="48" />
              Add photo
            </>
          )}
          <input
            className="personalInf-input-file"
            type="file"
            name="file"
            id="file"
            onChange={saveImageInLocalStorageFileBase64}
          />
          <img className="personalInf-img" alt="Profile picture" src={allInformation.personal.image} />
        </label>

        <div className="w-68">
          <div className="personalInf-item w-100 mb-1">
            <label className="personalInf-label" htmlFor="name">
              Name
            </label>
            <input
              className="personalInf-input"
              type="text"
              name="name"
              id="name"
              value={allInformation.personal.name}
              onChange={handleChange}
            />
            {allInformation.personal.name !== "" && (
              <button
                className="personalInf-button-delete-input"
                type="button"
                tabIndex="-1"
                name="name"
                onClick={deleteThisInput}
              >
                x
              </button>
            )}
          </div>
          <div className="personalInf-item w-100" style={{ display: "flex" }}>
            <label className="personalInf-label" htmlFor="lastname">
              Lastname
            </label>
            <input
              className="personalInf-input"
              type="text"
              name="lastname"
              id="lastname"
              value={allInformation.personal.lastname}
              onChange={handleChange}
            />
            {allInformation.personal.lastname !== "" && (
              <button
                className="personalInf-button-delete-input"
                type="button"
                tabIndex="-1"
                name="lastname"
                onClick={deleteThisInput}
              >
                x
              </button>
            )}
          </div>
        </div>

        <div className="personalInf-item">
          <label className="personalInf-label" htmlFor="email">
            Email
          </label>
          <input
            className="personalInf-input"
            type="text"
            name="email"
            id="email"
            value={allInformation.personal.email}
            onChange={handleChange}
          />
          {allInformation.personal.email !== "" && (
            <button
              className="personalInf-button-delete-input"
              type="button"
              tabIndex="-1"
              name="email"
              onClick={deleteThisInput}
            >
              x
            </button>
          )}
        </div>
        <div className="personalInf-item">
          <label className="personalInf-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="personalInf-input"
            type="text"
            name="phone"
            id="phone"
            value={allInformation.personal.phone}
            onChange={handleChange}
          />
          {allInformation.personal.phone !== "" && (
            <button
              className="personalInf-button-delete-input"
              type="button"
              tabIndex="-1"
              name="phone"
              onClick={deleteThisInput}
            >
              x
            </button>
          )}
        </div>
        <div className="personalInf-item w-100">
          <label className="personalInf-label" htmlFor="address">
            Address
          </label>
          <input
            className="personalInf-input"
            type="text"
            name="address"
            id="address"
            value={allInformation.personal.address}
            onChange={handleChange}
          />
          {allInformation.personal.address !== "" && (
            <button
              className="personalInf-button-delete-input"
              type="button"
              tabIndex="-1"
              name="address"
              onClick={deleteThisInput}
            >
              x
            </button>
          )}
        </div>
        <div className="personalInf-item">
          <label className="personalInf-label" htmlFor="country">
            Country
          </label>
          <input
            className="personalInf-input"
            type="text"
            name="country"
            id="country"
            value={allInformation.personal.country}
            onChange={handleChange}
          />
          {allInformation.personal.country !== "" && (
            <button
              className="personalInf-button-delete-input"
              type="button"
              tabIndex="-1"
              name="country"
              onClick={deleteThisInput}
            >
              x
            </button>
          )}
        </div>
        <div className="personalInf-item">
          <label className="personalInf-label" htmlFor="city">
            City
          </label>
          <input
            className="personalInf-input"
            type="text"
            name="city"
            id="city"
            value={allInformation.personal.city}
            onChange={handleChange}
          />
          {allInformation.personal.city !== "" && (
            <button
              className="personalInf-button-delete-input"
              type="button"
              tabIndex="-1"
              name="city"
              onClick={deleteThisInput}
            >
              x
            </button>
          )}
        </div>

        {moreInfo && (
          <>
            <div className="personalInf-item">
              <label className="personalInf-label" htmlFor="date">
                Date
              </label>
              <input
                className="personalInf-input"
                type="date"
                name="date"
                id="date"
                value={allInformation.personal.date}
                onChange={handleChange}
              />
              {allInformation.personal.date !== "" && (
                <button
                  className="personalInf-button-delete-input"
                  type="button"
                  tabIndex="-1"
                  name="date"
                  onClick={deleteThisInput}
                >
                  x
                </button>
              )}
            </div>
            <div className="personalInf-item">
              <label className="personalInf-label" htmlFor="maritalStatus">
                MaritalStatus
              </label>
              <input
                className="personalInf-input"
                type="text"
                name="maritalStatus"
                id="maritalStatus"
                value={allInformation.personal.maritalStatus}
                onChange={handleChange}
              />
              {allInformation.personal.maritalStatus !== "" && (
                <button
                  className="personalInf-button-delete-input"
                  type="button"
                  tabIndex="-1"
                  name="maritalStatus"
                  onClick={deleteThisInput}
                >
                  x
                </button>
              )}
            </div>
            <div className="personalInf-item">
              <label className="personalInf-label" htmlFor="postalCode">
                PostalCode
              </label>
              <input
                className="personalInf-input"
                type="text"
                name="postalCode"
                id="postalCode"
                value={allInformation.personal.postalCode}
                onChange={handleChange}
              />
              {allInformation.personal.postalCode !== "" && (
                <button
                  className="personalInf-button-delete-input"
                  type="button"
                  tabIndex="-1"
                  name="postalCode"
                  onClick={deleteThisInput}
                >
                  x
                </button>
              )}
            </div>
            <div className="personalInf-item">
              <label className="personalInf-label" htmlFor="gender">
                Gender
              </label>
              <input
                className="personalInf-input"
                type="text"
                name="gender"
                id="gender"
                value={allInformation.personal.gender}
                onChange={handleChange}
              />
              {allInformation.personal.gender !== "" && (
                <button
                  className="personalInf-button-delete-input"
                  type="button"
                  tabIndex="-1"
                  name="gender"
                  onClick={deleteThisInput}
                >
                  x
                </button>
              )}
            </div>
            <div className="personalInf-item">
              <label className="personalInf-label" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                className="personalInf-input"
                type="text"
                name="linkedin"
                id="linkedin"
                value={allInformation.personal.linkedin}
                onChange={handleChange}
              />
              {allInformation.personal.linkedin !== "" && (
                <button
                  className="personalInf-button-delete-input"
                  type="button"
                  tabIndex="-1"
                  name="linkedin"
                  onClick={deleteThisInput}
                >
                  x
                </button>
              )}
            </div>
            <div className="personalInf-item">
              <label className="personalInf-label" htmlFor="briefcase">
                Briefcase
              </label>
              <input
                className="personalInf-input"
                type="text"
                name="briefcase"
                id="briefcase"
                value={allInformation.personal.briefcase}
                onChange={handleChange}
              />
              {allInformation.personal.briefcase !== "" && (
                <button
                  className="personalInf-button-delete-input"
                  type="button"
                  tabIndex="-1"
                  name="briefcase"
                  onClick={deleteThisInput}
                >
                  x
                </button>
              )}
            </div>
          </>
        )}

        <button className="personalInf-button-more" type="button" onClick={handleAdditionalInfo}>
          {moreInfo ? (
            <AiOutlineMinusCircle className="personalInf-ico-button" />
          ) : (
            <MdAddCircleOutline className="personalInf-ico-button" />
          )}
          Additional Information
        </button>
      </div>
    </form>
  );
};

PersonalInfo.propTypes = {
  allInformation: PropTypes.object,
  setAllInformation: PropTypes.func,
};
