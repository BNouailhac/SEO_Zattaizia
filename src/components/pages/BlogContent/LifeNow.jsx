import React from "react";
import { Container } from "reactstrap";
import "../../../App.css";
import Helmet from 'react-helmet';
import Nav from 'react-bootstrap/Nav';



const LifeNow = () => (
  <div id="tour" className="subComponent">
    <Helmet>
        <title>LifeNow - fullteam-zattaizia.web.app</title>
        <meta name="description" content="What is there to see in Zattaizia ?" />
    </Helmet>
    <div className="subComponent" id="tourBody">
        <Container>
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
              <h1 style={{fontSize: 40}}>LifeNow</h1>
              <p style={{fontSize: 30}}>The best way to offer to your friends a good sport journey at Zattaizia</p>
            </header>
            <section className="tour-cover item-center">
                <h2 style={{fontSize: 28}}>What is LifeNow</h2>
                <div style={{fontSize: 20}}>If your Friend is between 18 and 30 years old, this new label created by FullTeam is made for you.<br/>You can offer to your friends a discount card for 25$ for a discount around 20%.<br/><br/><br/> Join us and come live your Life Now!</div>
            </section>
            <section className="tour-cover item-center">
                <h2 style={{fontSize: 28}}>Right Now</h2>
                <div style={{fontSize: 20}}>
                Stay up to date on vacation deals!<br/>
                Summer stays at 10% off until February 9th, 2023!<br/>
                Ski or snow weeks starting at 300$ (220$ with LifeNow Pass) All Inclusive for 16-26 year olds<br/>
                <br/>
                Do you prefer walks along the beach and enjoying the sun, or making traditional sport, like bicycle?<br/>
                Discover The Sunny Sunny Weeks: your week in the sun at Zattaizia starting at 320$!<br/>
                <br/>
                Stay tuned...</div>
            </section>
            <section className="tour-cover item-center">
                <h2 style={{fontSize: 28}}>Any question ?</h2>

                <Nav.Link className="navLink" href="/contact">Contact us!</Nav.Link>
            </section>
        </Container>
    </div>
  </div>
);

export default LifeNow;