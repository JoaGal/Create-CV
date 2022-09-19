import React, { useEffect, useState } from "react";
import { Template1 } from "./Template1/Template1";
import { Template2 } from "./Template2/Template2";
import { Template3 } from "./Template3/Template3";
import PropTypes from "prop-types";
import "./TemplatesInf.css";

export const TemplatesInf = () => {
  const [templateOpen, setTemplateOpen] = useState("/noTemplate");
  const [scale, setScale] = useState(0.7);

  useEffect(() => {
    let scale = 0.7;
    if (window.innerWidth < 500) {
      scale = "0.35";
    } else if (window.innerWidth < 800) {
      scale = "0.5";
    } else if (window.innerWidth < 1000) {
      scale = " 0.6";
    } else if (window.innerWidth < 1200) {
      scale = "0.7";
    } else {
      scale = "0.8";
    }
    setScale(scale);
  }, [templateOpen]);

  const closeTemplate = ({ target: { className } }) => {
    if (className.includes("templatesInf")) {
      setTemplateOpen("/noTemplate");
    }
  };

  return (
    <div className={`templatesInf-container ${templateOpen !== "/noTemplate" && "o-hidden"}`}>
      {templateOpen !== "/noTemplate" && (
        <div className="templatesInf-template-open" onClick={closeTemplate}>
          <button className="templatesInf-button-close-template">x</button>
          {templateOpen === "/template1" && <Template1 styleScale={scale} />}
          {templateOpen === "/template2" && <Template2 styleScale={scale} />}
          {templateOpen === "/template3" && <Template3 styleScale={scale} />}
          <a className="templatesInf-button-select-resume" href={templateOpen} target="_blank" rel="noreferrer">
            Select this resume
          </a>
        </div>
      )}
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

TemplatesInf.propTypes = {
  allInformation: PropTypes.object.isRequired,
};
