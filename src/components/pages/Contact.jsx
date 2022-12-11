import React from "react";
import "./Pages.css";
import Helmet from 'react-helmet';
import { Container } from "reactstrap";

const Contact = () => {
  return (
    <div id='contact' className="contact">
      <Helmet>
        <title>Contact - fullteam-zattaizia.web.app</title>
        <meta name="description" content="Let's talk together" />
      </Helmet>
      <div className="subComponent" id="contactBody">
        <Container>
          <header style={{'align-items': 'center'}} className="headerTitle text-center">
            <h1>Contact</h1>
            <p>Let's talk together</p>
          </header>
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
        </Container>
      </div>
    </div>
  );
};

export default Contact;
