import React, { useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const form = useRef();

  const handleSubmit = (e) => {
    if (
      name.current.value.length >= 5 &&
      email.current.value.length >= 10 &&
      message.current.value.length >= 10
    ) {
      emailjs.sendForm(
          "service_c20g5o8",
          "template_fj3uvs6",
          form.current,
          "Txxmygclbsvhn59mu"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message Send");
          },
          (error) => {
            console.log(error.text);
            alert("Message Not Send");
          }
        );
      e.preventDefault();
    } else {
      e.preventDefault();
      alert("Message Not Send");
    }
  };

  return (
    <div className="contact-screen">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtitle">
        Our users are very satisfied about our excellent support.
      </p>
      <form className="contact-form" onSubmit={handleSubmit} ref={form}>
        <input className="contact-form-input" type="text" placeholder="Name" name="to_name" ref={name}/>
        <input
          className="contact-form-input"
          type="email"
          placeholder="Email"
          name="from_name"
          ref={email}
        />
        <textarea className="contact-form-textarea" placeholder="Message" name="message" ref={message}/>
        <button type="submit" className="contact-form-button">Send</button>
      </form>
    </div>
  );
};
