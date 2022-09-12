import React from "react";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer-span">
        © {currentYear}{" "}
        <a className="footer-span-a" href="https://github.com/JoaGal/Create-CV">
          Grupo 2.
        </a>{" "}
        MyCVsfg.
      </span>
    </footer>
  );
};
