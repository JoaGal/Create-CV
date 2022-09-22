import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { LabelInputButton } from "../Reusable/LabelInputButton";
import { LabelSelect } from "../Reusable/LabelSelect";
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
        lenguages1: {
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
            pathInObject={allInformation.personal.name}
            handleChange={handleChange}
            deleteThisInput={deleteThisInput}
          />
          <LabelInputButton
            id="lastname"
            extraClass="w-100"
            pathInObject={allInformation.personal.lastname}
            handleChange={handleChange}
            deleteThisInput={deleteThisInput}
          />
        </div>
        <LabelInputButton
          id="email"
          pathInObject={allInformation.personal.email}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="phone"
          pathInObject={allInformation.personal.phone}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="address"
          extraClass="w-100"
          pathInObject={allInformation.personal.address}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="country"
          pathInObject={allInformation.personal.country}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        <LabelInputButton
          id="city"
          pathInObject={allInformation.personal.city}
          handleChange={handleChange}
          deleteThisInput={deleteThisInput}
        />
        {moreInfo && (
          <>
            <LabelInputButton
              id="date"
              type="date"
              pathInObject={allInformation.personal.date}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelSelect
              id="maritalStatus"
              options={["single", "married", "separated", "widowed", "divorced"]}
              pathInObject={allInformation.personal.maritalStatus}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelInputButton
              id="postalCode"
              pathInObject={allInformation.personal.postalCode}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelSelect
              id="gender"
              options={["Man", "Woman", "transgender", "non-binary/non-conforming"]}
              pathInObject={allInformation.personal.gender}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelInputButton
              id="linkedin"
              pathInObject={allInformation.personal.linkedin}
              handleChange={handleChange}
              deleteThisInput={deleteThisInput}
            />
            <LabelInputButton
              id="briefcase"
              pathInObject={allInformation.personal.briefcase}
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
