import React from "react";
import { Container } from "reactstrap";
import "../../App.css";
import imgCard1 from "../../img/img-card (1).jpg";
import imgCard2 from "../../img/img-card (2).jpg";
import imgCard3 from "../../img/img-card (3).jpg";
import imgCard4 from "../../img/img-card (4).jpg";
import Helmet from 'react-helmet';

const Tour = () => (
  <div id="tour" className="subComponent">
    <Helmet>
        <title>Tour - fullteam-zattaizia.web.app</title>
        <meta name="description" content="What is there to see in Zattaizia ?" />
    </Helmet>
    <div className="subComponent" id="tourBody">
        <Container>
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
              <h1>Tour</h1>
              <p>What is there to see in Zattaizia ?</p>
            </header>
            <section className="tour-cover item-center">
                <img src={imgCard1} alt="house" />
                <h1>Zattaizia house</h1>
            </section>
            <section className="tour-cover item-center">
                <img src={imgCard2} alt="beach" />
                <h1>Zattaizia beach</h1>
            </section>
            <section className="tour-cover item-center">
                <img src={imgCard3} alt="swimming pool" />
                <h1>Zattaizia swimming pool</h1>
            </section>
            <section className="tour-cover item-center">
                <img src={imgCard4} alt="climbing" />
                <h1>Zattaizia climbing</h1>
            </section>
        </Container>
    </div>
  </div>
);

export default Tour;