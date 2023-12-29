import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm, ValidationError } from '@formspree/react';
import "./contact.css";

const Contact = () => {

  const [state, handleSubmit] = useForm("xleyowvw");
  if (state.succeeded) {
      return <h1 id="minipara">Thanks for Contacting!</h1>;
  }

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to get in touch with me!</p>
      <div className="contact-form">

        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Name</label>
          <input id="name" type="text" name="name" />
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="text">Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" className="submit-button" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
