import React, { Component } from "react";
import { Container } from "reactstrap";
import "../../App.css";
import Nav from 'react-bootstrap/Nav';
import Helmet from 'react-helmet';

class Blog extends Component {
  render() {
    return (
      <div id='about'>
        <Helmet>
          <title>Blog - fullteam-zattaizia.web.app</title>
          <meta name="description" content="Learn latest Tourism news" />
        </Helmet>
        <div className="subComponent" id="aboutBody">
          <Container>
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
              <h1>Blogs</h1>
              <p>Learn latest Tourism news</p>
            </header>
            <Nav defaultActiveKey="/home" style={{'display': 'inline-grid'}} className="flex-column">
              <Nav.Link className="navLink" href="https://theconversation.com/qatar-why-we-are-critical-of-some-countries-human-rights-records-and-not-others-195267">Qatar: why we are critical of some countries’ human rights records and not others</Nav.Link>
              <Nav.Link className="navLink" href="https://theconversation.com/african-mountains-are-feeling-the-heat-of-climate-change-194642">African mountains are feeling the heat of climate change</Nav.Link>
              <Nav.Link className="navLink" href="https://theconversation.com/weston-super-mares-see-monster-the-good-and-the-bad-of-pop-up-attractions-192196">Weston-super-Mare’s See Monster: the good and the bad of pop-up attractions</Nav.Link>
              <Nav.Link className="navLink" href="https://theconversation.com/in-a-colombian-national-park-pictographs-and-pristine-nature-point-the-way-toward-a-more-hopeful-future-188476">In a Colombian national park, pictographs and pristine nature point the way toward a more hopeful future</Nav.Link>
            </Nav>
          </Container>
        </div>
      </div>
    );
  }
}

export default Blog;
