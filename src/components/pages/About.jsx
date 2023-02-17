import React, {useState } from "react";
import "../../App.css";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as Award } from "../../svg/award.svg";
import { ReactComponent as Shield } from "../../svg/shield.svg";
import { ReactComponent as Compass } from "../../svg/compass.svg";
import { ReactComponent as Heart } from "../../svg/heart.svg";
import Helmet from 'react-helmet';


const About = () => {
  const [BestPrice, setBestPrice] = useState(false);
  const [Trust, setTrust] = useState(false);
  const [Travel, setTravel] = useState(false);
  const [Insurance, setInsurance] = useState(false);
  return (
    <div id='about'>
        <Helmet>
          <title>About - fullteam-zattaizia.web.app</title>
          <meta name="description" content="Learn about us" />
        </Helmet>
        <div className="subComponent" id="aboutBody">
          <Container>
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
              <h1>About Travel</h1>
              <p>Tour Guide & Private Guided Tours</p>
            </header>
            <section className="oui svg-group text-center subComponent">
              <Row className="row">
                <Col onClick={() => {BestPrice === false ? setBestPrice(true) : setBestPrice(false)}} lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>{BestPrice === false ? "Best Price Guarantee" : "Starting at 200$"}</p>
                  </div>
                </Col>
                <Col onClick={() => {Trust === false ? setTrust(true) : setTrust(false)}} lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>{Trust === false ? "Trust and Safety" : "You are supervise by our Instructor"}</p>
                  </div>
                </Col>
                <Col onClick={() => {Travel === false ? setTravel(true) : setTravel(false)}} lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>{Travel === false ? "Best Travel Agent" : "Our agent are Local Habitant"}</p>
                  </div>
                </Col>
                <Col onClick={() => {Insurance === false ? setInsurance(true) : setInsurance(false)}} lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>{Insurance === false ? "Travel Insurance" : "All-Risks-Insured, thief,injury,... "}</p>
                  </div>
                </Col>
              </Row>
            </section>
            <section className="tour-cover item-center">
                <h2 style={{fontSize: 28}}>Our Activites</h2>
                <div style={{fontSize: 20}}>
                  Our company offers a wide range of sports activities for all levels and interests. Whether you're a fan of winter sports, beach sports, water sports or climbing, we have the activity that suits you.<br/><br/>
                  If you're a winter sports enthusiast, we offer ski trips to the most beautiful resorts in the best mountain of Zattaizia. You can glide down snowy slopes and enjoy breathtaking scenery while improving your technique.<br/><br/>
                  If you prefer beach sports, we have volleyball trips to dream locations by the sea. You can let off steam on the warm sand and enjoy the sun while exercising.<br/><br/>
                  For water sports enthusiasts, we offer kayaking trips to quiet bays and idyllic lakes. You can explore the surroundings and admire the natural beauty of the area while working on your fitness.<br/><br/>
                  Finally, for the more daring, we offer climbing trips to incredible places where you can test your limits and take on new challenges. You'll be accompanied by experienced guides for a safe experience.<br/><br/>
                  No matter which activity you choose, we guarantee you a unique and unforgettable sports experience in beautiful locations and exceptional conditions. Come and live the adventure with us!<br/><br/>
                  Dont Wait and come Make Sport at Zattaizia!
               </div>
            </section>
          </Container>
        </div>
      </div>
  );
};

export default About;
