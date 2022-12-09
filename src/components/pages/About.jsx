import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as Award } from "../../svg/award.svg";
import { ReactComponent as Shield } from "../../svg/shield.svg";
import { ReactComponent as Compass } from "../../svg/compass.svg";
import { ReactComponent as Heart } from "../../svg/heart.svg";

const About = () => {
  return (
    <div id='about'>
        <div className="subComponent" id="aboutBody">
          <Container>
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
              <h1>About Travel</h1>
              <p>Tour Guide & Private Guided Tours</p>
            </header>
            <section className="oui svg-group text-center subComponent">
              <Row className="row">
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>Best Price Guarantee</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>Trust and Safety</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>Best Travel Agent</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>Travel Insurance</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
  );
};

export default About;
