import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../App.css";

import { ReactComponent as Trending } from "../../svg/trending-up.svg";
import { ReactComponent as Flag } from "../../svg/flag.svg";
import { ReactComponent as Monitor } from "../../svg/monitor.svg";
import { ReactComponent as MapPin } from "../../svg/map-pin.svg";
import Helmet from 'react-helmet';

class Services extends Component {
  render() {
    return (
      <div className="margin_top wrapped-services">
        <Helmet>
          <title>Services - fullteam-zattaizia.web.app</title>
          <meta name="description" content="What we offer you" />
        </Helmet>
        <div className="subComponent" id="servicesBody">
          <Container>
            <section className="svg-group text-center">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Trending width="30" height="30" strokeWidth="1" />
                    <p style={{'font-size': '15px'}}>Promote Best Tours</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Monitor width="30" height="30" strokeWidth="1" />
                    <p style={{'font-size': '15px'}}>Showcase Tourist Spot</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Flag width="30" height="30" strokeWidth="1" />
                    <p style={{'font-size': '15px'}}>Best Travel Routes</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <MapPin width="30" height="30" strokeWidth="1" />
                    <p style={{'font-size': '15px'}}>Tour Guides</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default Services;
