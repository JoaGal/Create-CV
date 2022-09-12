import React from "react";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer-span">
        © {currentYear}{" "}
        <a className="footer-span-a" href="https://github.com/JoaGal/Create-CV">
          MyCVsfg.
        </a>{" "}
      </span>
    </footer>
  );
};
