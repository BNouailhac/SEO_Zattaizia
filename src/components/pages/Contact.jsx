import React from "react";
import "./Pages.css";
import Helmet from 'react-helmet';

const Contact = () => {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact - fullteam.com</title>
        <meta name="description" content="Let's talk together" />
      </Helmet>
      <div className="max-width">
        <div className="contact-container">
          <div className="cols">
            <div className="contact-header">
              <h2>How can I help you today?</h2>
            </div>
            <div className="first-col">
              <div className="fc">
                <h3>Name</h3>
                <input type="text" className="firstcl" />
              </div>
              <div className="sc">
                <h3>Email</h3>
                <input type="text" className="scndcl" />
              </div>
            </div>
            <div className="second-col">
              <h3>Message</h3>
              <input type="text" className="lstcl" />
            </div>
            <div className="btn-cont">
              <a className="btn-c" href="#/">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
