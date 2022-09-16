import React, { useState } from "react";
import { Template1 } from "./Template1/Template1";
import { Template2 } from "./Template2/Template2";
import { Template3 } from "./Template3/Template3";
import "./TemplatesInf.css";

export const TemplatesInf = () => {
  const allInformation = {
    title: "Templates",
    description: "This is the description of the Templates section",
    icon: "https://img.icons8.com/ios/50/000000/stack-of-photos.png",
  };

  const [templateOpen, setTemplateOpen] = useState(0);

  const closeTemplate = ({ target: { className } }) => {
    if (className.includes("templatesInf")) {
      setTemplateOpen(0);
    }
  };

  return (
    <div className={`templatesInf-container ${templateOpen !== 0 && "o-hidden"}`}>
      {templateOpen !== 0 && (
        <div className="templatesInf-template-open" onClick={closeTemplate}>
          <button className="templatesInf-button-close-template">X</button>
          {templateOpen === 1 && <Template1 styleZoom="0.7" />}
          {templateOpen === 2 && <Template2 />}
          {templateOpen === 3 && <Template3 />}
        </div>
      )}
      <div className="templatesInf-grid">
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 1</h1>
          <div className="templatesInf-grid-item-iframe" onClick={() => setTemplateOpen(1)}>
            <Template1 styleZoom="0.24" />
          </div>
        </div>
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 2</h1>
          <div className="templatesInf-grid-item-iframe" onClick={() => setTemplateOpen(2)}>
            <Template2 styleZoom="0.24" />
          </div>
        </div>
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 3</h1>
          <div className="templatesInf-grid-item-iframe" onClick={() => setTemplateOpen(3)}>
            <Template3 styleZoom="0.24" />
          </div>
        </div>
      </div>
    </div>
  );
};
