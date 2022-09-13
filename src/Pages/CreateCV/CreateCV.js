import React from 'react';
import "./CreateCV.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";

export const CreateCV = () => {
  return (
    <div className="createCV-screen">
        <h2 className="createCV-title">Personal information</h2>
        <div className="createCV-level">
            <div className="createCV-level-box" id="createCV-level-box-left">
                <BsFillPersonFill className="createCV-icon"/>
            </div>
            <div className="createCV-level-box" id="createCV-level-box-mid">
                <FiFileText className='createCV-icon'/>
            </div>
            <div className="createCV-level-box" id="createCV-level-box-rigth">
                <RiPencilFill className="createCV-icon"/>
            </div>
        </div>
    </div>
  )
}
