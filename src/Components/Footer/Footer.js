import React from "react";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer-span">
        © {currentYear} LinkedIn:{" "}
        <a className="footer-span-a" href="https://www.linkedin.com/in/giulianoconti/">
          Giuliano
        </a>{" - "}
        <a className="footer-span-a" href="https://www.linkedin.com/in/joaquin-galdeano-174281209/">
          Joaquin
        </a>{" "}
      </span>
    </footer>
  );
};
