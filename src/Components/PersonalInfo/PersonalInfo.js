import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { LabelInputButton } from "./LabelInputButton";
import { LabelSelect } from "./LabelSelect";
import PropTypes from "prop-types";
import "./PersonalInfo.css";

export const PersonalInfo = ({ allInformation, setAllInformation }) => {
  const [moreInfo, setMoreInfo] = useState(false);

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
        lenguages: {
          lenguage: "",
          lenguageLevel: "",
        },
        lenguages2: {
          lenguage: "",
          lenguageLevel: "",
        },
        lenguages3: {
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
  };

  const saveImageInLocalStorageFileBase64 = (e) => {
    if (e.target.files[0].type.includes("image/")) {
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
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    if (
      value.trim().length === 1 &&
      value.match(/^[A-Za-z]+$/) &&
      name !== "email" &&
      name !== "linkedin" &&
      name !== "briefcase"
    ) {
      value = value.toUpperCase();
    }
    setAllInformation({
      ...allInformation,
      personal: {
        ...allInformation.personal,
        [name]: value,
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
          {!allInformation.personal.image ? (
            <>
              <AiFillCamera size="48" />
              Add photo
            </>
          ) : (
            <img className="personalInf-img" alt="Profile picture" src={allInformation.personal.image} />
          )}
          <input
            className="personalInf-input-file"
            type="file"
            name="file"
            id="file"
            onChange={saveImageInLocalStorageFileBase64}
          />
        </label>
        <div className="w-68">
          <LabelInputButton
            id="name"
            extraClass="w-100 mb-1"
            allInformation={allInformation}
            handleChange={handleChange}
            deleteThisInput={deleteThisInput}
          />
          <LabelInputButton
            id="lastname"
            extraClass="w-100"
            allInformation={allInformation}
            handleChange={handleChange}
            deleteThisInput={deleteThisInput}
          />
        </div>
        <LabelInputButton
          id="email"
          allInformation={allInformation}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="phone"
          allInformation={allInformation}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="address"
          extraClass="w-100"
          allInformation={allInformation}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="country"
          allInformation={allInformation}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="city"
          allInformation={allInformation}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
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
            <LabelSelect
              id="maritalStatus"
              options={["single", "married", "separated", "widowed", "divorced"]}
              allInformation={allInformation}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelInputButton
              id="postalCode"
              allInformation={allInformation}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelSelect
              id="gender"
              options={["Man", "Woman", "transgender", "non-binary/non-conforming"]}
              allInformation={allInformation}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelInputButton
              id="linkedin"
              allInformation={allInformation}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelInputButton
              id="briefcase"
              allInformation={allInformation}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
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
