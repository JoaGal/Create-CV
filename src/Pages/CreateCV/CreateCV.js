import React, { useEffect, useState } from 'react';
import "./CreateCV.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";
import {PersonalInf} from "../../Components/PersonalInf/PersonalInf"
import { ExperiencesInf } from '../../Components/ExperiencesInf/ExperiencesInf';
import { TemplatesInf } from '../../Components/Templates/TemplatesInf';

export const CreateCV = () => {

    const [title, setTitle] = useState("Personal information");
    const [component, setComponent] = useState(<PersonalInf/>);
    const [reference, setReference] = useState(0);

    const changePage = ()=>{
        if (reference === 1) {
            setComponent(<ExperiencesInf/>);
            setTitle("My experiences")
        }
        else if (reference === 2) {
            setComponent(<TemplatesInf/>);
            setTitle("Choose template")
        }
        else{
            setComponent(<PersonalInf/>);
            setTitle("Personal information")
        }
    }

    const onClick = ()=>{
        setReference(reference + 1)
        if (reference >= 2) {
            setReference(0)
        }
    }

    useEffect(() => {
        changePage()
    }, [reference]);
    

  return (
    <div className="createCV-screen">
        <h2 className="createCV-title">{title}</h2>
        <div className="createCV-level">
            <div className="createCV-level-box">
                <BsFillPersonFill className="createCV-icon" onClick={()=> setReference(0)}/>
                <p className="createCV-p">Personal</p>
            </div>
            <div className="createCV-level-box" id="createCV-level-box-mid">
                <FiFileText className='createCV-icon' onClick={()=> setReference(1)}/>
                <p className="createCV-p">Experiences</p>
            </div>
            <div className="createCV-level-box">
                <RiPencilFill className="createCV-icon" onClick={()=> setReference(2)}/>
                <p className="createCV-p">Template</p>
            </div>
        </div>
        {component}
        <button className="createCV-button" onClick={onClick}>Next step</button>
    </div>
  )
}
