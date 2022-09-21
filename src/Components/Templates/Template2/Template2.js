import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Template2.css";

export const Template2 = ({ styleScale = "1" }) => {
  const allInformation = JSON.parse(localStorage.getItem("allInformation"));

  useEffect(() => {
    if (window.location.href.includes("template2")) {
      document.title = "Resume";
      setTimeout(() => {
        window.print();
        window.close();
      }, 1000);
    }
  }, []);

  return (
    <div
      id="template2"
      style={{
        transform: `scale(${styleScale})`,
        transformOrigin: `${styleScale === "0.24" ? "0 0" : "center"}`,
      }}
    >
      <h1 className="template-1-h1">
        {allInformation?.personal?.name} {allInformation?.personal?.lastname}
      </h1>
    </div>
  );
};

Template2.propTypes = {
  styleScale: PropTypes.string,
  allInformation: PropTypes.object,
};
