import React from 'react';
import "./CreateCV.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";
import {PersonalInf} from "../../Components/PersonalInf/PersonalInf"

export const CreateCV = () => {
  return (
    <div className="createCV-screen">
        <h2 className="createCV-title">Personal information</h2>
        <div className="createCV-level">
            <div className="createCV-level-box">
                <BsFillPersonFill className="createCV-icon"/>
                <p className="createCV-p">Personal</p>
            </div>
            <div className="createCV-level-box" id="createCV-level-box-mid">
                <FiFileText className='createCV-icon'/>
                <p className="createCV-p">Experiences</p>
            </div>
            <div className="createCV-level-box">
                <RiPencilFill className="createCV-icon"/>
                <p className="createCV-p">Template</p>
            </div>
        </div>
        <PersonalInf/>
        <button className="createCV-button">Next step</button>
    </div>
  )
}
