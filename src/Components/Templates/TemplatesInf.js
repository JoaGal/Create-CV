import React from "react";
import "./TemplatesInf.css";

export const TemplatesInf = () => {
  const allInformation = {
    title: "Templates",
    description: "This is the description of the Templates section",
    icon: "https://img.icons8.com/ios/50/000000/stack-of-photos.png",
  };

  return (
    <div className="templatesInf-container">
      <div className="templatesInf-grid">
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 1</h1>
          <iframe
            className="templatesInf-grid-item-iframe"
            src="/template1"
            title="Template 1"
            height="300"
            width="280"
          ></iframe>
        </div>
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 2</h1>
          <iframe
            className="templatesInf-grid-item-iframe"
            src="/template2"
            title="Template 2"
            height="300"
            width="280"
          ></iframe>
        </div>
        <div className="templatesInf-grid-item">
          <h1 className="templatesInf-grid-item-title">Template 3</h1>
          <iframe
            className="templatesInf-grid-item-iframe"
            src="/template3"
            title="Template 3"
            height="300"
            width="280"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
