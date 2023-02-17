import React from "react";
import { Container } from "reactstrap";
import "../../../App.css";
import Helmet from 'react-helmet';
import Nav from 'react-bootstrap/Nav';



const Cycling = () => (
  <div id="tour" className="subComponent">
    <Helmet>
        <title>Cycling - fullteam-zattaizia.web.app</title>
        <meta name="description" content="What is there to see in Zattaizia ?" />
    </Helmet>
    <div className="subComponent" id="tourBody">
        <Container>
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
              <h1 style={{fontSize: 40}}>New Sport avalaible</h1>
              <p style={{fontSize: 30}}>Come Make Sport At Zattaizia</p>
            </header>
            <section className="tour-cover item-center">
                <h2 style={{fontSize: 28}}>New Cycling Section</h2>
                <div style={{fontSize: 20}}>
                We're excited to announce the addition of a new cycling section to our sports activities!<br/>
                Now you can enjoy a beautiful bike ride along the seaside while admiring the stunning views and taking in the fresh sea air. <br/>
                Our cycling trips are suitable for all levels and we offer a range of distances and terrains to suit your preferences. <br/>
                Whether you're a seasoned cyclist or a beginner, you'll enjoy the ride and the opportunity to explore the beautiful surroundings in a unique way. <br/>
                Join us for a memorable cycling experience and discover the stunning coastal landscapes from a new perspective!
               </div>
            </section>
            <section className="tour-cover item-center">
                <h2 style={{fontSize: 28}}>As a Reminder</h2>
                <div style={{fontSize: 20}}>
                  Our company offers a wide range of sports activities for all levels and interests. Whether you're a fan of winter sports, beach sports, water sports or climbing, we have the activity that suits you.<br/><br/>
                  If you're a winter sports enthusiast, we offer ski trips to the most beautiful resorts in the best mountain of Zattaizia. You can glide down snowy slopes and enjoy breathtaking scenery while improving your technique.<br/><br/>
                  If you prefer beach sports, we have volleyball trips to dream locations by the sea. You can let off steam on the warm sand and enjoy the sun while exercising.<br/><br/>
                  For water sports enthusiasts, we offer kayaking trips to quiet bays and idyllic lakes. You can explore the surroundings and admire the natural beauty of the area while working on your fitness.<br/><br/>
                  Finally, for the more daring, we offer climbing trips to incredible places where you can test your limits and take on new challenges. You'll be accompanied by experienced guides for a safe experience.<br/><br/>
                  No matter which activity you choose, we guarantee you a unique and unforgettable sports experience in beautiful locations and exceptional conditions. Come and live the adventure with us!<br/><br/>
               </div>
            </section>
            <section className="tour-cover item-center">
                <h2 style={{fontSize: 28}}>Any question ?</h2>

                <Nav.Link className="navLink" href="/contact">Contact us!</Nav.Link>
            </section>
        </Container>
    </div>
  </div>
);

export default Cycling;