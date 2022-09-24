import React, { useEffect, useState } from "react";
import { Template1 } from "./Template1/Template1";
import { Template2 } from "./Template2/Template2";
import { Template3 } from "./Template3/Template3";
import "./TemplatesInfo.css";

export const TemplatesInfo = () => {
  const [templateOpen, setTemplateOpen] = useState("/noTemplate");
  const [scale, setScale] = useState(0.7);
  const [color, setColor] =useState("gray");

  useEffect(() => {
    let scale = 0.7;
    if (window.innerWidth < 500) {
      scale = "0.35";
    } else if (window.innerWidth < 800) {
      scale = "0.5";
    } else if (window.innerWidth < 1450) {
      scale = "0.6";
    } else {
      scale = "0.7";
    }
    setScale(scale);
  }, [templateOpen]);

  const closeTemplate = ({ target: { className } }) => {
    if (className.includes("templatesInf")) {
      setTemplateOpen("/noTemplate");
    }
  };

  console.log(color)

  return (
    <div className={`templatesInf-container ${templateOpen !== "/noTemplate" && "o-hidden"}`}>
      <div
        className={`templatesInf-template-open ${templateOpen === "/noTemplate" && "templatesInf-template-hidden"}`}
        onClick={closeTemplate}
      >
        <button className="templatesInf-button-close-template">x</button>
        {templateOpen === "/template1" && <Template1 styleScale={scale} />}
        {templateOpen === "/template2" && <Template2 styleScale={scale} color={color}/>}
        {templateOpen === "/template3" && <Template3 styleScale={scale} />}
        <a className="template-button-select-resume" href={templateOpen} target="_blank" rel="noreferrer">
          Select this resume
        </a>
        <button className="button-gray" onClick={()=> setColor("gray")}></button>
        <button className="button-red" onClick={()=> setColor("red")}></button>
        <button className="button-blue" onClick={()=> setColor("blue")}></button>
        <button className="button-orange" onClick={()=> setColor("orange")}></button>
        <button className="button-beggie" onClick={()=> setColor("beggie")}></button>
      </div>

      <div className="templatesInf-grid">
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 1</h1>
          <div className="templatesInf-grid-item-iframe" onClick={() => setTemplateOpen("/template1")}>
            <Template1 styleScale="0.24" />
          </div>
        </div>
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 2</h1>
          <div className="templatesInf-grid-item-iframe" onClick={() => setTemplateOpen("/template2")}>
            <Template2 styleScale="0.24" />
          </div>
        </div>
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 3</h1>
          <div className="templatesInf-grid-item-iframe" onClick={() => setTemplateOpen("/template3")}>
            <Template3 styleScale="0.24" />
          </div>
        </div>
      </div>
    </div>
  );
};
