import React from "react";
import "./Main.css";
import "../../App.css";
import Helmet from 'react-helmet';


import { Container } from "reactstrap";
import "../../App.css";

const Main = () => {
  return (
    <div id="home">
      <Helmet>
        <title>Home - fullteam-zattaizia.web.app</title>
        <meta name="description" content="Make sport at zattazia" />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="cover-page" id="hero">
        <section className="wrapped-page">
          <div className="item-center">
            <h1>FULLTEAM</h1>
            <h2>Sportive tourism at Zattaizia</h2>
            <div className="subComponent" id="tourBody">
        <Container >
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
            </header>
            <section className="tour-cover item-center" style={{backgroundColor: 'rgba(100,100,100,0.8)'}}>
                <div style={{fontSize: 23}}>
                    Welcome to THE sports travel company, where we offer exciting sports-focused trips for adventure seekers of all levels!
                    <br/><br/>
                    Our trips feature a variety of beach sports such as volleyball, kayaking, and cycling, as well as exciting activities like rock climbing, skiing, and many other.
                    <br/><br/>
                    Our team of experienced guides and instructors are passionate about sports and are dedicated to helping you get the most out of your trip.
                    <br/><br/>
                    Whether you're an experienced athlete or just starting out, we offer trips that fit to all skill levels and interests.
                    <br/><br/>
                    So come join us for a fun and challenging sports adventure at Zattaizia, and experience the thrill of exploring new places while staying active and healthy!
                </div>
            </section>
            </Container>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
