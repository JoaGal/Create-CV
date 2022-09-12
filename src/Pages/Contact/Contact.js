import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-screen">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtitle">Our users are very satisfied about our excellent support.</p>
      <form className="contact-form">
        <input className="contact-form-input" type="text" placeholder="Name" />
        <input className="contact-form-input" type="email" placeholder="Email" />
        <textarea className="contact-form-textarea" placeholder="Message" />
      </form>
    </div>
  );
};
