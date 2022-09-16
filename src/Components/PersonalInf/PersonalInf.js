import React, { useState } from "react";
import "./PersonalInf.css";
import { AiFillCamera } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const PersonalInf = ({ personalInfo, setPersonalInfo, nextStep }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="personalInf-box" onSubmit={nextStep}>
      <h3 className="personalInf-title">Personal information</h3>
      <hr />
      <div className="personalInf-box1">
        <button className="personalInf-button-photo">
          <AiFillCamera className="personalInf-ico-photo" />
          <p className="personalInf-p-photo">Add photo</p>
        </button>
        <div className="personalInf-box1-complete-name">
          <div className="personalInf-name">
            <p className="personalInf-p" >Name</p>
            <input type="text" className="personalInf-input" name="name" onChange={handleChange} />
          </div>
          <div className="personalInf-lastname">
            <p className="personalInf-p">Last Name</p>
            <input type="text" className="personalInf-input" name="lastname" onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="personalInf-box2">
        <div className="personalInf-email">
          <p className="personalInf-p">Email</p>
          <input type="text" className="personalInf-input" name="email" onChange={handleChange} />
        </div>
        <div className="personalInf-number-phone">
          <p className="personalInf-p">Number Phone</p>
          <input type="text" className="personalInf-input" name="phone" onChange={handleChange} />
        </div>
      </div>
      <div className="personalInf-adress">
        <p className="personalInf-p">Adress</p>
        <input type="text" className="personalInf-input" name="address" onChange={handleChange} />
      </div>
      <div className="personalInf-box3">
        <div className="personalInf-email">
          <p className="personalInf-p">Country</p>
          <input type="text" className="personalInf-input" name="country" onChange={handleChange} />
        </div>
        <div className="personalInf-number-phone">
          <p className="personalInf-p">Town/City</p>
          <input type="text" className="personalInf-input" name="city" onChange={handleChange} />
        </div>
      </div>

      {moreInfo ? (
        <>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">Date of Birth</p>
              <input type="date" className="personalInf-input" name="date" onChange={handleChange} />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Marital status</p>
              <input type="text" className="personalInf-input" name="maritalStatus" onChange={handleChange} />
            </div>
          </div>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">Postal Code</p>
              <input type="text" className="personalInf-input" name="postalCode" onChange={handleChange} />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Gender</p>
              <input type="text" className="personalInf-input" name="gender" onChange={handleChange} />
            </div>
          </div>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">LinkedIn</p>
              <input type="text" className="personalInf-input" name="linkedin" onChange={handleChange} />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Briefcase</p>
              <input type="text" className="personalInf-input" name="briefcase" onChange={handleChange} />
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
