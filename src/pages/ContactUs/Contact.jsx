// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="form-contact">
      <p className="contact-heading">Contact Us</p>
      <form>
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="input-contact"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input-contact"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="textErea-contact"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <button className="btn-contact" type="submit">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
