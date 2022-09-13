import React, { useState } from "react";
import "./PersonalInf.css";
import { AiFillCamera } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const PersonalInf = () => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className="personalInf-box">
      <h3 className="personalInf-title">Personal information</h3>
      <hr />
      <div className="personalInf-box1">
        <button className="personalInf-button-photo">
          <AiFillCamera className="personalInf-ico-photo" />
          <p className="personalInf-p-photo">Add photo</p>
        </button>
        <div className="personalInf-box1-complete-name">
          <div className="personalInf-name">
            <p className="personalInf-p">Name*</p>
            <input type="text" className="personalInf-input" />
          </div>
          <div className="personalInf-lastname">
            <p className="personalInf-p">Last Name*</p>
            <input type="text" className="personalInf-input" />
          </div>
        </div>
      </div>
      <div className="personalInf-box2">
        <div className="personalInf-email">
          <p className="personalInf-p">Email*</p>
          <input type="text" className="personalInf-input" />
        </div>
        <div className="personalInf-number-phone">
          <p className="personalInf-p">Number Phone</p>
          <input type="text" className="personalInf-input" />
        </div>
      </div>
      <div className="personalInf-adress">
        <p className="personalInf-p">Adress</p>
        <input type="text" className="personalInf-input" />
      </div>
      <div className="personalInf-box3">
        <div className="personalInf-email">
          <p className="personalInf-p">Country</p>
          <input type="text" className="personalInf-input" />
        </div>
        <div className="personalInf-number-phone">
          <p className="personalInf-p">Village/City</p>
          <input type="text" className="personalInf-input" />
        </div>
      </div>

      {moreInfo ? (
        <>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">Date of Birth</p>
              <input type="date" className="personalInf-input" />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Marital status</p>
              <input type="text" className="personalInf-input" />
            </div>
          </div>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">Postal Code</p>
              <input type="text" className="personalInf-input" />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Gender</p>
              <input type="text" className="personalInf-input" />
            </div>
          </div>
          <div className="personalInf-box3">
            <div className="personalInf-email">
              <p className="personalInf-p">LinkedIN</p>
              <input type="text" className="personalInf-input" />
            </div>
            <div className="personalInf-number-phone">
              <p className="personalInf-p">Briefcase</p>
              <input type="text" className="personalInf-input" />
            </div>
          </div>
        </>
      ) : null}
      <button
        className="personalInf-button-more"
        onClick={() => setMoreInfo(!moreInfo)}
      >
        {moreInfo ? (
          <AiOutlineMinusCircle className="personalInf-ico-button" />
        ) : (
          <MdAddCircleOutline className="personalInf-ico-button" />
        )}
        Additional Information
      </button>
    </div>
  );
};
